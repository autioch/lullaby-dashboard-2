import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';
import {
  missionRepository,
  type MissionRec,
} from '@/database/missionRepository';
import {
  objectiveGroupRepository,
  type ObjectiveGroupRec,
} from '@/database/objectiveGroupRepository';
import {
  objectiveRepository,
  type ObjectiveRec,
} from '@/database/objectiveRepository';
import { colorRepository, type ColorRec } from '@/database/colorRepository';
import { filterObject } from '@/utils/object';

export type MissionLSState = {
  missionId: string | null;
  checkedKeys: Record<string, Record<string, boolean>>;
  listExpiryTimestamps: Record<string, number>;
};

type MissionState = MissionLSState & {
  missions: Record<string, MissionRec>;
  missionList: MissionRec[];
  objectiveGroups: Record<string, ObjectiveGroupRec>;
  objectives: Record<string, ObjectiveRec>;
  // Colour library, keyed by id; colorList keeps them in display order for the
  // editor's swatch picker. Objectives reference a colour by id.
  colors: Record<string, ColorRec>;
  colorList: ColorRec[];

  setMissions: (missions: MissionRec[]) => void;
  setObjectiveGroups: (groups: ObjectiveGroupRec[]) => void;
  setObjectives: (objectives: ObjectiveRec[]) => void;
  setColors: (colors: ColorRec[]) => void;
};

type MissionMethods = {
  selectMission(missionId: string): void;
  toggleObjective(key: string): void;
  loadConfiguration(): Promise<void>;
  hydrateState(): void;
  resetState(): void;
};

const ls = lsWrapper<MissionLSState>('mission');

export function useMission() {
  return useMissionStore((state) =>
    state.missionId ? state.missions[state.missionId] : null
  );
}

export const useMissionStore = create<MissionState & MissionMethods>(
  (set, get) => ({
    missions: {},
    missionList: [],
    objectiveGroups: {},
    objectives: {},
    colors: {},
    colorList: [],
    missionId: null,
    checkedKeys: {},
    listExpiryTimestamps: {},

    selectMission(missionId) {
      return set((state) => {
        ls.save({
          checkedKeys: state.checkedKeys,
          listExpiryTimestamps: state.listExpiryTimestamps,
          missionId: missionId,
        });

        return {
          ...state,
          missionId: missionId,
        };
      });
    },

    toggleObjective(key: string) {
      const { missionId, checkedKeys, listExpiryTimestamps, missions } = get();

      if (!missionId) {
        return;
      }

      const nextCheckedKeys = {
        ...checkedKeys,
        [missionId]: {
          ...checkedKeys[missionId],
          [key]: !checkedKeys[missionId]?.[key],
        },
      };

      const nextListExpiryTimestamps = {
        ...listExpiryTimestamps,
        [missionId]:
          Date.now() +
          (missions[missionId]?.retentionHours ?? 0) * 60 * 60 * 1000,
      };

      ls.save({
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
        missionId,
      });

      set({
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
      });
    },

    hydrateState() {
      const persistedState = ls.load();

      if (!persistedState) {
        return;
      }

      const { missions } = get();

      const now = Date.now();

      const listExpiryTimestamps = filterObject(
        persistedState.listExpiryTimestamps,
        ([missionId, expiry]) =>
          !!missions[missionId]?.retentionHours &&
          typeof expiry === 'number' &&
          now < expiry
      );

      const checkedKeys = filterObject(
        persistedState.checkedKeys,
        ([missionId]) => !!listExpiryTimestamps[missionId]
      );

      // Drop a persisted selection that no longer exists (e.g. after a reseed
      // regenerates ids), so the app falls back to the picker instead of
      // showing an empty mission.
      const missionId = missions[persistedState.missionId ?? '']
        ? persistedState.missionId
        : null;

      set({
        missionId,
        checkedKeys,
        listExpiryTimestamps,
      });
    },

    resetState() {
      const { listExpiryTimestamps, missionId } = get();
      ls.save({
        checkedKeys: {},
        listExpiryTimestamps,
        missionId,
      });
      set({
        checkedKeys: {},
      });
    },

    async loadConfiguration() {
      const { setMissions, setObjectiveGroups, setObjectives } = get();

      // This is require for the `hydrateState` to work properly
      await missionRepository.fetchOnce(setMissions);

      missionRepository.subscribe(setMissions);
      objectiveGroupRepository.subscribe(setObjectiveGroups);
      objectiveRepository.subscribe(setObjectives);
      colorRepository.subscribe(get().setColors);
    },

    setMissions: (missions) =>
      set({
        missionList: missions,
        missions: Object.fromEntries(
          missions.map((mission) => [mission.id, mission])
        ),
      }),

    setObjectiveGroups: (groups) =>
      set({
        objectiveGroups: Object.fromEntries(
          groups.map((group) => [group.id, group])
        ),
      }),

    setObjectives: (objectives) =>
      set({
        objectives: Object.fromEntries(
          objectives.map((objective) => [objective.id, objective])
        ),
      }),

    setColors: (colors) =>
      set({
        colorList: [...colors].sort((a, b) => a.order - b.order),
        colors: Object.fromEntries(colors.map((color) => [color.id, color])),
      }),
  })
);
