import type { Mission } from '@/types';
import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

type MissionState = {
  lists: Mission[];
  missionId: string | null;
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
};

type MissionMethods = {
  selectMission(missionId: string): void;
  toggleItem(key: string): void;
  loadConfiguration(): Promise<void>;
  hydrateState(): void;
  resetState(): void;
};

const ls = lsWrapper<Omit<MissionState, 'lists'>>('mission');

export function useMission() {
  return useMissionStore((state) =>
    state.lists.find((list) => list.id === state.missionId)
  );
}

export const useMissionStore = create<MissionState & MissionMethods>(
  (set, get) => ({
    lists: [],
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

    toggleItem(key: string) {
      return set((state) => {
        const [listId] = key.split('-', 2);
        const list = state.lists.find((entry) => entry.id === listId);
        const isNowChecked = !state.checkedKeys[key];
        const nextCheckedKeys = {
          ...state.checkedKeys,
          [key]: isNowChecked,
        };

        const nextListExpiryTimestamps = {
          ...state.listExpiryTimestamps,
          [listId]: Date.now() + (list?.retentionHours ?? 0) * 60 * 60 * 1000,
        };

        ls.save({
          checkedKeys: nextCheckedKeys,
          listExpiryTimestamps: nextListExpiryTimestamps,
          missionId: state.missionId,
        });

        return {
          checkedKeys: nextCheckedKeys,
          listExpiryTimestamps: nextListExpiryTimestamps,
        };
      });
    },

    hydrateState() {
      const persistedState = ls.load();
      if (!persistedState) return;
      const { lists } = get();

      const now = Date.now();
      const checkedKeys: Record<string, boolean> = {};
      const listExpiryTimestamps: Record<string, number> = {};

      for (const [key, value] of Object.entries(persistedState.checkedKeys)) {
        const [listId] = key.split('-', 2);
        const list = lists.find((item) => item.id === listId);
        const expiry = persistedState.listExpiryTimestamps[listId];

        if (!list?.retentionHours || typeof expiry !== 'number') continue;
        if (now >= expiry) continue;

        checkedKeys[key] = value;
        listExpiryTimestamps[listId] = expiry;
      }

      set({
        missionId: persistedState.missionId,
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
      const response = await fetch('/api/configuration');

      if (!response.ok) {
        throw new Error(
          `Failed to load configuration from proxy endpoint: ${response.status}`
        );
      }

      const data = (await response.json()) as {
        savedLists?: Mission[];
      };

      if (!data || !Array.isArray(data.savedLists)) {
        throw new Error('Proxy configuration is missing savedLists');
      }

      set((state) => ({
        ...state,
        lists: data.savedLists,
      }));
    },
  })
);
