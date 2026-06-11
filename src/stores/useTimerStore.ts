import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

type TimerState = {
  timerRunsByList: Record<string, TimerRunState>;
  fastestRunsByList: Record<string, number>;
};

type TimerMethods = {
  startTimer(listId: string): void;
  pauseTimer(listId: string): void;
  resumeTimer(listId: string): void;
  completeRun(listId: string): void;
  // checkFinished(list: MissionRec, checkedKeys: Record<string, boolean>): void;
  resetTimerState(): void;
};

type TimerRunState = {
  listId: string;
  startedAtMs: number;
  elapsedMs: number;
  isRunning: boolean;
  lastResumedAtMs: number | null;
};

const ls = lsWrapper<TimerState>('timer');

export const useTimerStore = create<TimerState & TimerMethods>((set) => ({
  timerRunsByList: {},
  fastestRunsByList: {},
  ...ls.load(),

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
          };

      const nextState = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      ls.save({
        timerRunsByList: nextState,
        fastestRunsByList: state.fastestRunsByList,
      });

      return {
        ...state,
        timerRunsByList: nextState,
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

      const nextState = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      ls.save({
        timerRunsByList: nextState,
        fastestRunsByList: state.fastestRunsByList,
      });

      return {
        ...state,
        timerRunsByList: nextState,
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

      ls.save({
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: state.fastestRunsByList,
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
      const previousBest = state.fastestRunsByList[listId];
      const isNewBest = previousBest === undefined || elapsedMs < previousBest;
      const nextFastestRunsByList = { ...state.fastestRunsByList };

      if (isNewBest) {
        nextFastestRunsByList[listId] = elapsedMs;
      }

      const nextRun = {
        ...run,
        listId,
        elapsedMs,
        isRunning: false,
      } as TimerRunState;

      const nextTimerRunsByList = {
        ...state.timerRunsByList,
        [listId]: nextRun,
      };

      ls.save({
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: nextFastestRunsByList,
      });

      return {
        ...state,
        timerRunsByList: nextTimerRunsByList,
        fastestRunsByList: nextFastestRunsByList,
      };
    });
  },

  resetTimerState() {
    set({
      timerRunsByList: {},
      fastestRunsByList: {},
    });
    ls.clear();
  },
}));
