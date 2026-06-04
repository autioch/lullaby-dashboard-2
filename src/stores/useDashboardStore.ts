import { create } from 'zustand';
import type {
  CelebrationState,
  FastestRunRecord,
  SavedList,
  TimerRunState,
} from '../types';
import { DEFAULT_LANGUAGE, type AppLanguage } from '../i18n/translations';
import {
  cleanPersistedState,
  clearPersistedState,
  isBrowser,
  loadPersistedState,
  savePersistedState,
} from './utils';

export interface DashboardState {
  lists: SavedList[];
  selectedIndex: number;
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  timerRunsByList: Record<string, TimerRunState>;
  fastestRunsByList: Record<string, FastestRunRecord>;
  celebration: CelebrationState;
  language: AppLanguage;
  setLists(lists: SavedList[]): void;
  setSelectedIndex(selectedIndex: number): void;
  setLanguage(language: AppLanguage): void;
  toggleItem(key: string): void;
  startTimer(listId: string): void;
  pauseTimer(listId: string): void;
  resumeTimer(listId: string): void;
  completeRun(listId: string): void;
  clearCelebration(): void;
  loadConfiguration(): Promise<void>;
  hydrateState(): void;
  resetState(): void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  lists: [],
  selectedIndex: 0,
  checkedKeys: {},
  listExpiryTimestamps: {},
  timerRunsByList: {},
  fastestRunsByList: {},
  celebration: { visible: false, listId: null, isNewBest: false, elapsedMs: 0 },
  language: DEFAULT_LANGUAGE,

  setLists(lists: SavedList[]) {
    set((state) => ({
      ...state,
      lists,
    }));
  },

  setSelectedIndex(selectedIndex: number) {
    return set((state) => {
      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex,
        language: state.language,
        timerRunsByList: state.timerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        ...state,
        selectedIndex,
      };
    });
  },

  setLanguage(language: AppLanguage) {
    return set((state) => {
      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language,
        timerRunsByList: state.timerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        ...state,
        language,
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

      const totalItems =
        list?.groups.reduce(
          (sum, group) => sum + (group.items?.length ?? 0),
          0
        ) ?? 0;
      const completedItems =
        list?.groups.reduce((sum, group) => {
          return (
            sum +
            group.items.reduce((groupSum, item) => {
              const itemKey = `${list.id}-${group.id}-${item.id}`;
              return groupSum + (nextCheckedKeys[itemKey] ? 1 : 0);
            }, 0)
          );
        }, 0) ?? 0;

      const nextListExpiryTimestamps = list?.retentionHours
        ? {
            ...state.listExpiryTimestamps,
            [listId]: Date.now() + list.retentionHours * 60 * 60 * 1000,
          }
        : state.listExpiryTimestamps;

      const nextTimerRunsByList = { ...state.timerRunsByList };
      if (isNowChecked && !state.timerRunsByList[listId]) {
        nextTimerRunsByList[listId] = {
          listId,
          startedAtMs: Date.now(),
          elapsedMs: 0,
          isRunning: true,
          lastResumedAtMs: Date.now(),
          completedAtMs: null,
        };
      }

      if (totalItems > 0 && completedItems >= totalItems) {
        const run = nextTimerRunsByList[listId];
        const now = Date.now();
        const elapsedMs = run
          ? Math.max(0, now - (run.lastResumedAtMs ?? run.startedAtMs)) +
            run.elapsedMs
          : 0;
        const previousBest = state.fastestRunsByList[listId]?.elapsedMs;
        const isNewBest =
          previousBest === undefined || elapsedMs < previousBest;
        const nextFastestRunsByList = { ...state.fastestRunsByList };

        nextTimerRunsByList[listId] = {
          ...run,
          elapsedMs,
          isRunning: false,
          completedAtMs: now,
        };

        if (isNewBest) {
          nextFastestRunsByList[listId] = { elapsedMs, completedAtMs: now };
        }

        const nextCelebration = {
          visible: true,
          listId,
          isNewBest,
          elapsedMs,
        };

        savePersistedState({
          checkedKeys: nextCheckedKeys,
          listExpiryTimestamps: nextListExpiryTimestamps,
          selectedIndex: state.selectedIndex,
          language: state.language,
          timerRunsByList: nextTimerRunsByList,
          fastestRunsByList: nextFastestRunsByList,
          celebration: nextCelebration,
        });

        return {
          checkedKeys: nextCheckedKeys,
          listExpiryTimestamps: nextListExpiryTimestamps,
          timerRunsByList: nextTimerRunsByList,
          fastestRunsByList: nextFastestRunsByList,
          celebration: nextCelebration,
        };
      }

      savePersistedState({
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      };
    });
  },

  startTimer(listId: string) {
    return set((state) => {
      const run = state.timerRunsByList[listId];
      const now = Date.now();
      const nextRun = run
        ? { ...run, isRunning: true, lastResumedAtMs: now }
        : {
            listId,
            startedAtMs: now,
            elapsedMs: 0,
            isRunning: true,
            lastResumedAtMs: now,
            completedAtMs: null,
          };

      const nextTimerRunsByList = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        ...state,
        timerRunsByList: nextTimerRunsByList,
      };
    });
  },

  pauseTimer(listId: string) {
    return set((state) => {
      const run = state.timerRunsByList[listId];
      if (!run || !run.isRunning) return state;

      const now = Date.now();
      const elapsedMs =
        run.elapsedMs +
        Math.max(0, now - (run.lastResumedAtMs ?? run.startedAtMs));
      const nextRun = {
        ...run,
        elapsedMs,
        isRunning: false,
        lastResumedAtMs: null,
      };

      const nextTimerRunsByList = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        ...state,
        timerRunsByList: nextTimerRunsByList,
      };
    });
  },

  resumeTimer(listId: string) {
    return set((state) => {
      const run = state.timerRunsByList[listId];
      if (!run || run.isRunning) return state;

      const nextRun = {
        ...run,
        isRunning: true,
        lastResumedAtMs: Date.now(),
      };

      const nextTimerRunsByList = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: state.celebration,
      });

      return {
        ...state,
        timerRunsByList: nextTimerRunsByList,
      };
    });
  },

  completeRun(listId: string) {
    return set((state) => {
      const run = state.timerRunsByList[listId];
      const now = Date.now();
      const elapsedMs = run
        ? run.elapsedMs +
          Math.max(0, now - (run.lastResumedAtMs ?? run.startedAtMs))
        : 0;
      const previousBest = state.fastestRunsByList[listId]?.elapsedMs;
      const isNewBest = previousBest === undefined || elapsedMs < previousBest;
      const nextFastestRunsByList = { ...state.fastestRunsByList };

      if (isNewBest) {
        nextFastestRunsByList[listId] = { elapsedMs, completedAtMs: now };
      }

      const nextRun = {
        ...run,
        listId,
        elapsedMs,
        isRunning: false,
        completedAtMs: now,
      } as TimerRunState;

      const nextCelebration = {
        visible: true,
        listId,
        isNewBest,
        elapsedMs,
      };

      const nextTimerRunsByList = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: nextFastestRunsByList,
        celebration: nextCelebration,
      });

      return {
        ...state,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: nextFastestRunsByList,
        celebration: nextCelebration,
      };
    });
  },

  clearCelebration() {
    return set((state) => {
      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex: state.selectedIndex,
        language: state.language,
        timerRunsByList: state.timerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
        celebration: {
          visible: false,
          listId: null,
          isNewBest: false,
          elapsedMs: 0,
        },
      });

      return {
        ...state,
        celebration: {
          visible: false,
          listId: null,
          isNewBest: false,
          elapsedMs: 0,
        },
      };
    });
  },

  hydrateState() {
    if (!isBrowser) return;

    const persistedState = loadPersistedState();
    if (!persistedState) return;

    const nextState = cleanPersistedState(persistedState, get().lists);
    set((state) => ({
      ...state,
      selectedIndex: nextState.selectedIndex,
      checkedKeys: nextState.checkedKeys,
      listExpiryTimestamps: nextState.listExpiryTimestamps,
      timerRunsByList: nextState.timerRunsByList ?? {},
      fastestRunsByList: nextState.fastestRunsByList ?? {},
      celebration: nextState.celebration ?? {
        visible: false,
        listId: null,
        isNewBest: false,
        elapsedMs: 0,
      },
      language: nextState.language,
    }));
  },

  resetState() {
    const { language } = get();
    clearPersistedState();
    savePersistedState({
      checkedKeys: {},
      listExpiryTimestamps: {},
      selectedIndex: 0,
      language,
      timerRunsByList: {},
      fastestRunsByList: {},
      celebration: {
        visible: false,
        listId: null,
        isNewBest: false,
        elapsedMs: 0,
      },
    });
    set({
      selectedIndex: 0,
      checkedKeys: {},
      listExpiryTimestamps: {},
      timerRunsByList: {},
      fastestRunsByList: {},
      celebration: {
        visible: false,
        listId: null,
        isNewBest: false,
        elapsedMs: 0,
      },
      language,
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
}));
