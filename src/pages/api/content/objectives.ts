import type { APIContext } from 'astro';
import { getFirestoreDb, jsonResponse } from '../_utils';
import { guardRequest, readBoolean, readIdList, readString } from './_shared';

export const prerender = false;

const OBJECTIVES = 'objective';
const GROUPS = 'objectiveGroup';
const COLORS = 'color';

// New objectives default to the lowest-order colour in the library, mirroring
// the editor's first swatch. Empty string if no colours are seeded yet.
async function defaultColorId(
  db: Awaited<ReturnType<typeof getFirestoreDb>>
): Promise<string> {
  const snap = await db.collection(COLORS).orderBy('order').limit(1).get();
  return snap.docs[0]?.id ?? '';
}

// Objective mutations, including referential cleanup on delete.
export async function POST(ctx: APIContext) {
  const guard = await guardRequest(ctx);
  if (!guard.ok) {
    return guard.response;
  }

  const { body } = guard;
  const action = readString(body.action);
  const db = await getFirestoreDb();
  const objectives = db.collection(OBJECTIVES);

  switch (action) {
    case 'create': {
      const groupId = readString(body.groupId);
      if (!groupId) {
        return jsonResponse({ ok: false, error: 'Missing group id.' }, 400);
      }

      const groupRef = db.collection(GROUPS).doc(groupId);
      const groupSnap = await groupRef.get();
      if (!groupSnap.exists) {
        return jsonResponse({ ok: false, error: 'Group not found.' }, 404);
      }

      // New objective document + append its id to the parent group, atomically.
      const objectiveRef = objectives.doc();
      const batch = db.batch();
      batch.set(objectiveRef, {
        label: readString(body.label) ?? '',
        colorId: readString(body.colorId) ?? (await defaultColorId(db)),
        isHidden: false,
      });
      const current = readIdList(groupSnap.data(), 'objectiveIds');
      batch.update(groupRef, { objectiveIds: [...current, objectiveRef.id] });
      await batch.commit();
      return jsonResponse({ ok: true, id: objectiveRef.id });
    }

    case 'update': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing objective id.' }, 400);
      }

      const patch: Record<string, unknown> = {};
      const label = readString(body.label);
      if (label !== undefined) patch.label = label;
      const colorId = readString(body.colorId);
      if (colorId !== undefined) patch.colorId = colorId;
      const isHidden = readBoolean(body.isHidden);
      if (isHidden !== undefined) patch.isHidden = isHidden;
      if (Object.keys(patch).length === 0) {
        return jsonResponse({ ok: false, error: 'Nothing to update.' }, 400);
      }

      const ref = objectives.doc(id);
      if (!(await ref.get()).exists) {
        return jsonResponse({ ok: false, error: 'Objective not found.' }, 404);
      }
      await ref.update(patch);
      return jsonResponse({ ok: true });
    }

    case 'delete': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing objective id.' }, 400);
      }

      // Strip the objective id from every group, then delete the doc. Batched.
      const batch = db.batch();
      const groupsSnap = await db.collection(GROUPS).get();
      groupsSnap.docs.forEach((doc) => {
        const ids = readIdList(doc.data(), 'objectiveIds');
        if (ids.includes(id)) {
          batch.update(doc.ref, {
            objectiveIds: ids.filter((value) => value !== id),
          });
        }
      });
      batch.delete(objectives.doc(id));
      await batch.commit();
      return jsonResponse({ ok: true });
    }

    default:
      return jsonResponse({ ok: false, error: 'Unknown action.' }, 400);
  }
}
