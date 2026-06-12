import { create } from 'zustand';
import {
  contentEditRepository,
  SessionExpiredError,
} from '@/database/contentEditRepository';

// Transient state + business logic for the content editor overlay. Mutations
// orchestrate contentEditRepository and never write useMissionStore — the
// realtime onSnapshot subscription flows changes back (docs/07 principle 9).

type EditLevel = 'missions' | 'mission' | 'group';

export type DeleteKind = 'mission' | 'group' | 'objective';

type Direction = 'up' | 'down';

type EditState = {
  level: EditLevel;
  selectedMissionId: string | null;
  selectedGroupId: string | null;
  // Per-control in-flight flags, keyed by a control id the component owns.
  pending: Record<string, boolean>;
  // Translation key for the single inline error area (null = no error).
  errorKey: string | null;
  // The entity awaiting an in-overlay delete confirmation, if any.
  pendingDelete: { kind: DeleteKind; id: string } | null;
  // True after a write returned 401: the editor shows an in-place re-login
  // prompt instead of dropping the whole app to the auth gate, so drafts and
  // the user's position survive an expired session.
  needsReauth: boolean;
};

type MissionPatch = {
  label?: string;
  youtubeUrl?: string;
  retentionHours?: number;
};

type GroupPatch = { label?: string; isHidden?: boolean };

type ObjectivePatch = { label?: string; colorId?: string; isHidden?: boolean };

type EditMethods = {
  reset(): void;
  openMission(id: string): void;
  openGroup(id: string): void;
  goMissions(): void;
  back(): void;
  requestDelete(kind: DeleteKind, id: string): void;
  cancelDelete(): void;
  clearReauth(): void;

  createMission(controlId: string): Promise<void>;
  updateMission(
    controlId: string,
    id: string,
    patch: MissionPatch
  ): Promise<void>;
  deleteMission(controlId: string, id: string): Promise<void>;
  attachGroup(
    controlId: string,
    missionId: string,
    groupId: string
  ): Promise<void>;
  removeGroup(
    controlId: string,
    missionId: string,
    groupId: string
  ): Promise<void>;
  moveGroup(
    controlId: string,
    missionId: string,
    groupId: string,
    direction: Direction
  ): Promise<void>;

  createGroup(controlId: string, missionId: string): Promise<void>;
  updateGroup(controlId: string, id: string, patch: GroupPatch): Promise<void>;
  deleteGroup(controlId: string, id: string): Promise<void>;
  // Save a group's own fields and any edited objectives in one action.
  saveGroup(
    controlId: string,
    groupId: string,
    groupPatch: GroupPatch | null,
    objectivePatches: (ObjectivePatch & { id: string })[]
  ): Promise<void>;
  attachObjective(
    controlId: string,
    groupId: string,
    objectiveId: string
  ): Promise<void>;
  removeObjective(
    controlId: string,
    groupId: string,
    objectiveId: string
  ): Promise<void>;
  moveObjective(
    controlId: string,
    groupId: string,
    objectiveId: string,
    direction: Direction
  ): Promise<void>;

  createObjective(controlId: string, groupId: string): Promise<void>;
  updateObjective(
    controlId: string,
    id: string,
    patch: ObjectivePatch
  ): Promise<void>;
  deleteObjective(controlId: string, id: string): Promise<void>;
};

const initialState: EditState = {
  level: 'missions',
  selectedMissionId: null,
  selectedGroupId: null,
  pending: {},
  errorKey: null,
  pendingDelete: null,
  needsReauth: false,
};

export const useEditStore = create<EditState & EditMethods>((set, get) => {
  // Run a mutation under a control id: mark pending, clear stale errors, run,
  // then clear pending. A 401 re-gates auth; any other failure surfaces a
  // generic inline error. Never touches useMissionStore (snapshot does that).
  async function run(controlId: string, action: () => Promise<unknown>) {
    set((state) => ({
      pending: { ...state.pending, [controlId]: true },
      errorKey: null,
    }));

    try {
      await action();
    } catch (error) {
      if (error instanceof SessionExpiredError) {
        // Keep the editor mounted; prompt for re-login in place (the cookie
        // expired while the client auth flag was still set). No deauthenticate.
        set({
          errorKey: 'contentEditor.errorSessionExpired',
          needsReauth: true,
        });
      } else {
        set({ errorKey: 'contentEditor.errorGeneric' });
      }
    } finally {
      set((state) => {
        const pending = { ...state.pending };
        delete pending[controlId];
        return { pending };
      });
    }
  }

  return {
    ...initialState,

    reset() {
      set({ ...initialState, pending: {} });
    },

    openMission(id) {
      set({
        level: 'mission',
        selectedMissionId: id,
        selectedGroupId: null,
        pendingDelete: null,
        errorKey: null,
      });
    },

    openGroup(id) {
      set({
        level: 'group',
        selectedGroupId: id,
        pendingDelete: null,
        errorKey: null,
      });
    },

    goMissions() {
      set({
        level: 'missions',
        selectedMissionId: null,
        selectedGroupId: null,
        pendingDelete: null,
        errorKey: null,
      });
    },

    back() {
      const { level } = get();
      set({ pendingDelete: null, errorKey: null });

      if (level === 'group') {
        set({ level: 'mission', selectedGroupId: null });
      } else if (level === 'mission') {
        set({ level: 'missions', selectedMissionId: null });
      }
    },

    requestDelete(kind, id) {
      set({ pendingDelete: { kind, id }, errorKey: null });
    },

    cancelDelete() {
      set({ pendingDelete: null });
    },

    clearReauth() {
      set({ needsReauth: false, errorKey: null });
    },

    // --- Mission mutations ---
    createMission(controlId) {
      return run(controlId, () => contentEditRepository.createMission({}));
    },
    updateMission(controlId, id, patch) {
      return run(controlId, () =>
        contentEditRepository.updateMission({ id, ...patch })
      );
    },
    deleteMission(controlId, id) {
      return run(controlId, async () => {
        await contentEditRepository.deleteMission(id);
        set({ pendingDelete: null });
      });
    },
    attachGroup(controlId, missionId, groupId) {
      return run(controlId, () =>
        contentEditRepository.attachGroup(missionId, groupId)
      );
    },
    removeGroup(controlId, missionId, groupId) {
      return run(controlId, () =>
        contentEditRepository.removeGroup(missionId, groupId)
      );
    },
    moveGroup(controlId, missionId, groupId, direction) {
      return run(controlId, () =>
        contentEditRepository.moveGroup(missionId, groupId, direction)
      );
    },

    // --- Group mutations ---
    createGroup(controlId, missionId) {
      return run(controlId, () => contentEditRepository.createGroup(missionId));
    },
    updateGroup(controlId, id, patch) {
      return run(controlId, () =>
        contentEditRepository.updateGroup({ id, ...patch })
      );
    },
    deleteGroup(controlId, id) {
      return run(controlId, async () => {
        await contentEditRepository.deleteGroup(id);
        // The group detail screen is gone — step back to the mission level.
        set({ pendingDelete: null, level: 'mission', selectedGroupId: null });
      });
    },
    saveGroup(controlId, groupId, groupPatch, objectivePatches) {
      // One Save commits the group's own fields plus every edited objective.
      // Snapshot flows the changes back; no manual store mutation.
      return run(controlId, async () => {
        if (groupPatch) {
          await contentEditRepository.updateGroup({
            id: groupId,
            ...groupPatch,
          });
        }
        await Promise.all(
          objectivePatches.map((patch) =>
            contentEditRepository.updateObjective(patch)
          )
        );
      });
    },
    attachObjective(controlId, groupId, objectiveId) {
      return run(controlId, () =>
        contentEditRepository.attachObjective(groupId, objectiveId)
      );
    },
    removeObjective(controlId, groupId, objectiveId) {
      return run(controlId, () =>
        contentEditRepository.removeObjective(groupId, objectiveId)
      );
    },
    moveObjective(controlId, groupId, objectiveId, direction) {
      return run(controlId, () =>
        contentEditRepository.moveObjective(groupId, objectiveId, direction)
      );
    },

    // --- Objective mutations ---
    createObjective(controlId, groupId) {
      return run(controlId, () =>
        contentEditRepository.createObjective(groupId)
      );
    },
    updateObjective(controlId, id, patch) {
      return run(controlId, () =>
        contentEditRepository.updateObjective({ id, ...patch })
      );
    },
    deleteObjective(controlId, id) {
      return run(controlId, async () => {
        await contentEditRepository.deleteObjective(id);
        // Deleted in place from the group's inline list — stay on the group.
        set({ pendingDelete: null });
      });
    },
  };
});
