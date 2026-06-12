// Client transport for the content-edit API routes (src/pages/api/content/*).
// Repositories only encapsulate data access — no Zustand, no React, no
// Firestore SDK here (docs/07). Stays within the Chrome 87 floor: plain fetch.

// Thrown when a write is rejected for a missing/expired session cookie (401),
// so the store can re-gate auth distinctly from a generic failure.
export class SessionExpiredError extends Error {
  constructor() {
    super('Session expired.');
    this.name = 'SessionExpiredError';
  }
}

class ContentEditError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ContentEditError';
  }
}

type Direction = 'up' | 'down';

type EditResult = { id?: string };

async function post(
  route: string,
  payload: Record<string, unknown>
): Promise<EditResult> {
  let response: Response;
  try {
    response = await fetch(`/api/content/${route}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContentEditError('Network error.');
  }

  if (response.status === 401) {
    throw new SessionExpiredError();
  }

  const data = (await response.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
    id?: string;
  };

  if (!response.ok || !data.ok) {
    throw new ContentEditError(data.error ?? 'Edit failed.');
  }

  return { id: data.id };
}

export const contentEditRepository = {
  // --- Missions ---
  createMission(payload: {
    label?: string;
    youtubeUrl?: string;
    retentionHours?: number;
  }): Promise<EditResult> {
    return post('missions', { action: 'create', ...payload });
  },
  updateMission(payload: {
    id: string;
    label?: string;
    youtubeUrl?: string;
    retentionHours?: number;
  }): Promise<EditResult> {
    return post('missions', { action: 'update', ...payload });
  },
  deleteMission(id: string): Promise<EditResult> {
    return post('missions', { action: 'delete', id });
  },
  attachGroup(missionId: string, groupId: string): Promise<EditResult> {
    return post('missions', { action: 'attachGroup', id: missionId, groupId });
  },
  removeGroup(missionId: string, groupId: string): Promise<EditResult> {
    return post('missions', { action: 'removeGroup', id: missionId, groupId });
  },
  moveGroup(
    missionId: string,
    groupId: string,
    direction: Direction
  ): Promise<EditResult> {
    return post('missions', {
      action: 'moveGroup',
      id: missionId,
      groupId,
      direction,
    });
  },

  // --- Objective groups ---
  createGroup(missionId: string, label?: string): Promise<EditResult> {
    return post('groups', { action: 'create', missionId, label });
  },
  updateGroup(payload: {
    id: string;
    label?: string;
    isHidden?: boolean;
  }): Promise<EditResult> {
    return post('groups', { action: 'update', ...payload });
  },
  deleteGroup(id: string): Promise<EditResult> {
    return post('groups', { action: 'delete', id });
  },
  attachObjective(groupId: string, objectiveId: string): Promise<EditResult> {
    return post('groups', {
      action: 'attachObjective',
      id: groupId,
      objectiveId,
    });
  },
  removeObjective(groupId: string, objectiveId: string): Promise<EditResult> {
    return post('groups', {
      action: 'removeObjective',
      id: groupId,
      objectiveId,
    });
  },
  moveObjective(
    groupId: string,
    objectiveId: string,
    direction: Direction
  ): Promise<EditResult> {
    return post('groups', {
      action: 'moveObjective',
      id: groupId,
      objectiveId,
      direction,
    });
  },

  // --- Objectives ---
  createObjective(
    groupId: string,
    payload?: { label?: string; colorId?: string }
  ): Promise<EditResult> {
    return post('objectives', { action: 'create', groupId, ...payload });
  },
  updateObjective(payload: {
    id: string;
    label?: string;
    colorId?: string;
    isHidden?: boolean;
  }): Promise<EditResult> {
    return post('objectives', { action: 'update', ...payload });
  },
  deleteObjective(id: string): Promise<EditResult> {
    return post('objectives', { action: 'delete', id });
  },
};
