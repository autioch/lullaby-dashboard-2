import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

// One run per mission. `accumulatedMs` banks time from finished active
// segments; `segmentStartMs` is the wall-clock start of the live segment (null
// when paused) and is runtime-only — never persisted, so a reload restores the
// run *paused* and the reload gap is never counted. `isComplete` freezes the
// final duration at 100% until a Restart.
export type TimerRun = {
  accumulatedMs: number;
  segmentStartMs: number | null;
  isComplete: boolean;
};

type PersistedRun = { accumulatedMs: number; isComplete: boolean };
type PersistedState = { runsByMission: Record<string, PersistedRun> };

type TimerState = {
  runsByMission: Record<string, TimerRun>;
};

type TimerMethods = {
  // Single transition point. `running` = should be accumulating now; `complete`
  // = mission is at 100%. Banks/pauses any *other* mission's open segment too,
  // so switching missions pauses the previous run for free.
  setRunState(missionId: string, running: boolean, complete: boolean): void;
  resetTimerState(): void;
};

// Pure: elapsed time of a run at instant `now`. Exported for unit testing and
// for the display to read each tick.
export function getElapsedMs(run: TimerRun | undefined, now: number): number {
  if (!run) {
    return 0;
  }
  return (
    run.accumulatedMs +
    (run.segmentStartMs !== null ? Math.max(0, now - run.segmentStartMs) : 0)
  );
}

const ls = lsWrapper<PersistedState>('timer', 3);

function loadRuns(): Record<string, TimerRun> {
  const persisted = ls.load();
  if (!persisted?.runsByMission) {
    return {};
  }

  const runs: Record<string, TimerRun> = {};
  for (const [missionId, run] of Object.entries(persisted.runsByMission)) {
    runs[missionId] = {
      accumulatedMs: run.accumulatedMs,
      isComplete: run.isComplete,
      segmentStartMs: null,
    };
  }
  return runs;
}

function persist(runsByMission: Record<string, TimerRun>) {
  const runsToPersist: Record<string, PersistedRun> = {};
  for (const [missionId, run] of Object.entries(runsByMission)) {
    runsToPersist[missionId] = {
      accumulatedMs: run.accumulatedMs,
      isComplete: run.isComplete,
    };
  }
  ls.save({ runsByMission: runsToPersist });
}

export const useTimerStore = create<TimerState & TimerMethods>((set) => ({
  runsByMission: loadRuns(),

  setRunState(missionId, running, complete) {
    set((state) => {
      const now = Date.now();
      const nextRuns: Record<string, TimerRun> = {};

      // Pause every other mission's live segment (covers mission-switch).
      for (const [id, run] of Object.entries(state.runsByMission)) {
        if (id === missionId) {
          continue;
        }
        nextRuns[id] =
          run.segmentStartMs !== null
            ? {
                ...run,
                accumulatedMs:
                  run.accumulatedMs + Math.max(0, now - run.segmentStartMs),
                segmentStartMs: null,
              }
            : run;
      }

      const current: TimerRun = state.runsByMission[missionId] ?? {
        accumulatedMs: 0,
        segmentStartMs: null,
        isComplete: false,
      };

      let { accumulatedMs, segmentStartMs } = current;
      const isComplete = current.isComplete || complete;
      const wantActive = running && !isComplete;

      // Stop a live segment (pause or complete): bank its elapsed.
      if (segmentStartMs !== null && !wantActive) {
        accumulatedMs += Math.max(0, now - segmentStartMs);
        segmentStartMs = null;
      }
      // Start a live segment when it should run and isn't already.
      if (segmentStartMs === null && wantActive) {
        segmentStartMs = now;
      }

      nextRuns[missionId] = { accumulatedMs, segmentStartMs, isComplete };

      persist(nextRuns);
      return { runsByMission: nextRuns };
    });
  },

  resetTimerState() {
    set({ runsByMission: {} });
    ls.clear();
  },
}));
