import type { APIContext } from 'astro';
import { getFirestoreDb, jsonResponse } from '../_utils';
import {
  guardRequest,
  readDirection,
  readHhMm,
  readIdList,
  readNumber,
  readString,
  readTimeMode,
  reorderById,
} from './_shared';

export const prerender = false;

const MISSIONS = 'mission';
const DEFAULT_RETENTION_HOURS = 24;

// Mission mutations. Every request must carry a valid session cookie; writes
// run through the admin SDK so Firestore rules stay `write: false`.
export async function POST(ctx: APIContext) {
  const guard = await guardRequest(ctx);
  if (!guard.ok) {
    return guard.response;
  }

  const { body } = guard;
  const action = readString(body.action);
  const db = await getFirestoreDb();
  const missions = db.collection(MISSIONS);

  switch (action) {
    case 'create': {
      const deadlineTime = readHhMm(body.deadlineTime);
      const ref = await missions.add({
        label: readString(body.label) ?? '',
        youtubeUrl: readString(body.youtubeUrl) ?? '',
        retentionHours:
          readNumber(body.retentionHours) ?? DEFAULT_RETENTION_HOURS,
        objectiveGroupIds: [],
        timeMode: readTimeMode(body.timeMode) ?? 'freestyle',
        ...(deadlineTime ? { deadlineTime } : {}),
      });
      return jsonResponse({ ok: true, id: ref.id });
    }

    case 'update': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing mission id.' }, 400);
      }

      const patch: Record<string, unknown> = {};
      const label = readString(body.label);
      if (label !== undefined) patch.label = label;
      const youtubeUrl = readString(body.youtubeUrl);
      if (youtubeUrl !== undefined) patch.youtubeUrl = youtubeUrl;
      const retentionHours = readNumber(body.retentionHours);
      if (retentionHours !== undefined) patch.retentionHours = retentionHours;
      const timeMode = readTimeMode(body.timeMode);
      if (timeMode !== undefined) patch.timeMode = timeMode;
      const deadlineTime = readHhMm(body.deadlineTime);
      if (deadlineTime !== undefined) patch.deadlineTime = deadlineTime;
      if (Object.keys(patch).length === 0) {
        return jsonResponse({ ok: false, error: 'Nothing to update.' }, 400);
      }

      const ref = missions.doc(id);
      if (!(await ref.get()).exists) {
        return jsonResponse({ ok: false, error: 'Mission not found.' }, 404);
      }
      await ref.update(patch);
      return jsonResponse({ ok: true });
    }

    case 'delete': {
      const id = readString(body.id);
      if (!id) {
        return jsonResponse({ ok: false, error: 'Missing mission id.' }, 400);
      }
      // Mission delete removes only the mission document (spec).
      await missions.doc(id).delete();
      return jsonResponse({ ok: true });
    }

    case 'attachGroup':
    case 'removeGroup': {
      const id = readString(body.id);
      const groupId = readString(body.groupId);
      if (!id || !groupId) {
        return jsonResponse(
          { ok: false, error: 'Missing mission id or group id.' },
          400
        );
      }

      const ref = missions.doc(id);
      const snapshot = await ref.get();
      if (!snapshot.exists) {
        return jsonResponse({ ok: false, error: 'Mission not found.' }, 404);
      }

      const current = readIdList(snapshot.data(), 'objectiveGroupIds');
      const next =
        action === 'attachGroup'
          ? current.includes(groupId)
            ? current
            : [...current, groupId]
          : current.filter((value) => value !== groupId);
      await ref.update({ objectiveGroupIds: next });
      return jsonResponse({ ok: true });
    }

    case 'moveGroup': {
      const id = readString(body.id);
      const groupId = readString(body.groupId);
      const direction = readDirection(body.direction);
      if (!id || !groupId || !direction) {
        return jsonResponse(
          { ok: false, error: 'Missing mission id, group id, or direction.' },
          400
        );
      }

      const ref = missions.doc(id);
      const snapshot = await ref.get();
      if (!snapshot.exists) {
        return jsonResponse({ ok: false, error: 'Mission not found.' }, 404);
      }

      const current = readIdList(snapshot.data(), 'objectiveGroupIds');
      await ref.update({
        objectiveGroupIds: reorderById(current, groupId, direction),
      });
      return jsonResponse({ ok: true });
    }

    default:
      return jsonResponse({ ok: false, error: 'Unknown action.' }, 400);
  }
}
