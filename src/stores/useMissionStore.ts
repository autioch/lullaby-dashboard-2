import type { SavedList } from '@/types';
import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

type MissionState = {
  lists: SavedList[];
  selectedIndex: number;
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
};

type MissionMethods = {
  setLists(lists: SavedList[]): void;
  setSelectedIndex(selectedIndex: number): void;
  toggleItem(key: string): void;
  loadConfiguration(): Promise<void>;
  hydrateState(): void;
  resetState(): void;
};

const ls = lsWrapper<Omit<MissionState, 'lists'>>('mission');

export const useMissionStore = create<MissionState & MissionMethods>(
  (set, get) => ({
    lists: [],
    selectedIndex: -1,
    checkedKeys: {},
    listExpiryTimestamps: {},

    setLists(lists: SavedList[]) {
      set((state) => ({
        ...state,
        lists,
      }));
    },

    setSelectedIndex(selectedIndex: number) {
      return set((state) => {
        ls.save({
          checkedKeys: state.checkedKeys,
          listExpiryTimestamps: state.listExpiryTimestamps,
          selectedIndex,
        });

        return {
          ...state,
          selectedIndex,
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
          selectedIndex: state.selectedIndex,
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
        selectedIndex: persistedState.selectedIndex,
        checkedKeys,
        listExpiryTimestamps,
      });
    },

    resetState() {
      ls.clear();
      set({
        selectedIndex: 0,
        checkedKeys: {},
        listExpiryTimestamps: {},
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
        savedLists?: SavedList[];
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
