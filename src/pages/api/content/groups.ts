import type { APIContext } from 'astro';
import { getFirestoreDb, jsonResponse } from '../_utils';
import {
  guardRequest,
  readBoolean,
  readDirection,
  readIdList,
  readString,
  reorderById,
} from './_shared';

export const prerender = false;

const GROUPS = 'objectiveGroup';
const MISSIONS = 'mission';

// Objective-group mutations, including referential cleanup on delete.
export async function POST(ctx: APIContext) {
  const guard = await guardRequest(ctx);
  if (!guard.ok) {
    return guard.response;
  }

  const { body } = guard;
  const action = readString(body.action);
  const db = await getFirestoreDb();
  const groups = db.collection(GROUPS);

  switch (action) {
    case 'create': {
      const missionId = readString(body.missionId);
      if (!missionId) {
        return jsonResponse({ ok: false, error: 'Missing mission id.' }, 400);
      }

      const missionRef = db.collection(MISSIONS).doc(missionId);
      const missionSnap = await missionRef.get();
      if (!missionSnap.exists) {
        return jsonResponse({ ok: false, error: 'Mission not found.' }, 404);
      }

      // New group document + append its id to the parent mission, atomically.
      const groupRef = groups.doc();
      const batch = db.batch();
      batch.set(groupRef, {
        label: readString(body.label) ?? '',
        isHidden: false,
        objectiveIds: [],
      });
      const current = readIdList(missionSnap.data(), 'objectiveGroupIds');
      batch.update(missionRef, {
        objectiveGroupIds: [...current, groupRef.id],
      });
      await batch.commit();
      return jsonResponse({ ok: true, id: groupRef.id });
    }

    case 'update': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing group id.' }, 400);
      }

      const patch: Record<string, unknown> = {};
      const label = readString(body.label);
      if (label !== undefined) patch.label = label;
      const isHidden = readBoolean(body.isHidden);
      if (isHidden !== undefined) patch.isHidden = isHidden;
      if (Object.keys(patch).length === 0) {
        return jsonResponse({ ok: false, error: 'Nothing to update.' }, 400);
      }

      const ref = groups.doc(id);
      if (!(await ref.get()).exists) {
        return jsonResponse({ ok: false, error: 'Group not found.' }, 404);
      }
      await ref.update(patch);
      return jsonResponse({ ok: true });
    }

    case 'delete': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing group id.' }, 400);
      }

      // Strip the group id from every mission, then delete the group doc.
      // Member objectives stay in the library (spec). Batched.
      const batch = db.batch();
      const missionsSnap = await db.collection(MISSIONS).get();
      missionsSnap.docs.forEach((doc) => {
        const ids = readIdList(doc.data(), 'objectiveGroupIds');
        if (ids.includes(id)) {
          batch.update(doc.ref, {
            objectiveGroupIds: ids.filter((value) => value !== id),
          });
        }
      });
      batch.delete(groups.doc(id));
      await batch.commit();
      return jsonResponse({ ok: true });
    }

    case 'attachObjective':
    case 'removeObjective': {
      const id = readString(body.id);
      const objectiveId = readString(body.objectiveId);
      if (!id || !objectiveId) {
        return jsonResponse(
          { ok: false, error: 'Missing group id or objective id.' },
          400
        );
      }

      const ref = groups.doc(id);
      const snapshot = await ref.get();
      if (!snapshot.exists) {
        return jsonResponse({ ok: false, error: 'Group not found.' }, 404);
      }

      const current = readIdList(snapshot.data(), 'objectiveIds');
      const next =
        action === 'attachObjective'
          ? current.includes(objectiveId)
            ? current
            : [...current, objectiveId]
          : current.filter((value) => value !== objectiveId);
      await ref.update({ objectiveIds: next });
      return jsonResponse({ ok: true });
    }

    case 'moveObjective': {
      const id = readString(body.id);
      const objectiveId = readString(body.objectiveId);
      const direction = readDirection(body.direction);
      if (!id || !objectiveId || !direction) {
        return jsonResponse(
          { ok: false, error: 'Missing group id, objective id, or direction.' },
          400
        );
      }

      const ref = groups.doc(id);
      const snapshot = await ref.get();
      if (!snapshot.exists) {
        return jsonResponse({ ok: false, error: 'Group not found.' }, 404);
      }

      const current = readIdList(snapshot.data(), 'objectiveIds');
      await ref.update({
        objectiveIds: reorderById(current, objectiveId, direction),
      });
      return jsonResponse({ ok: true });
    }

    default:
      return jsonResponse({ ok: false, error: 'Unknown action.' }, 400);
  }
}
