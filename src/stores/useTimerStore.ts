import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

// One run per mission. `accumulatedMs` banks time from finished active
// segments; `segmentStartMs` is the wall-clock start of the live segment (null
// when paused) and is runtime-only — never persisted, so a reload restores the
// run *paused* and the reload gap is never counted. `isComplete` freezes the
// final duration at 100% until a Restart. `completionWasBest` is a runtime-only
// flag the completion celebration reads to show a "New best!" beat; it is set
// true only when this run beat a *prior* record (not on the first completion).
// `userPaused` is a sticky manual-pause override (persisted): while true the run
// stays paused regardless of the auto-pause inputs, until manually resumed.
export type TimerRun = {
  accumulatedMs: number;
  segmentStartMs: number | null;
  isComplete: boolean;
  completionWasBest: boolean;
  userPaused: boolean;
};

// `userPaused` is optional on load so pre-existing persisted runs (written before
// this field existed) hydrate as un-paused — no lsWrapper version bump needed.
type PersistedRun = {
  accumulatedMs: number;
  isComplete: boolean;
  userPaused?: boolean;
};
type PersistedState = {
  runsByMission: Record<string, PersistedRun>;
  bestByMission: Record<string, number>;
};

type TimerState = {
  runsByMission: Record<string, TimerRun>;
  // Lowest frozen final duration (ms) among completed runs, per mission.
  // Persisted separately from runs so the objectives Restart keeps records.
  bestByMission: Record<string, number>;
};

type TimerMethods = {
  // Single transition point. `running` = should be accumulating now; `complete`
  // = mission is at 100%. Banks/pauses any *other* mission's open segment too,
  // so switching missions pauses the previous run for free. On the completion
  // transition it records the best and flags a record-beating run.
  setRunState(missionId: string, running: boolean, complete: boolean): void;
  // Sets the sticky manual-pause flag for a mission; the component re-derives
  // effective running from it, so the bank/segment math stays in `setRunState`.
  setUserPaused(missionId: string, paused: boolean): void;
  // Clears the best record for one mission (the separate, Settings-housed reset).
  resetBest(missionId: string): void;
  // Resets the current runs; keeps the best records (objectives Restart).
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

const ls = lsWrapper<PersistedState>('timer', 4);

function loadState(): Pick<TimerState, 'runsByMission' | 'bestByMission'> {
  const persisted = ls.load();
  if (!persisted) {
    return { runsByMission: {}, bestByMission: {} };
  }

  const runsByMission: Record<string, TimerRun> = {};
  for (const [missionId, run] of Object.entries(
    persisted.runsByMission ?? {}
  )) {
    runsByMission[missionId] = {
      accumulatedMs: run.accumulatedMs,
      isComplete: run.isComplete,
      segmentStartMs: null,
      completionWasBest: false,
      userPaused: run.userPaused ?? false,
    };
  }

  return { runsByMission, bestByMission: persisted.bestByMission ?? {} };
}

function persist(
  runsByMission: Record<string, TimerRun>,
  bestByMission: Record<string, number>
) {
  const runsToPersist: Record<string, PersistedRun> = {};
  for (const [missionId, run] of Object.entries(runsByMission)) {
    runsToPersist[missionId] = {
      accumulatedMs: run.accumulatedMs,
      isComplete: run.isComplete,
      userPaused: run.userPaused,
    };
  }
  ls.save({ runsByMission: runsToPersist, bestByMission });
}

export const useTimerStore = create<TimerState & TimerMethods>((set) => ({
  ...loadState(),

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
        completionWasBest: false,
        userPaused: false,
      };

      let { accumulatedMs, segmentStartMs } = current;
      const justCompleted = complete && !current.isComplete;
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

      // Record the best on the completion edge. A run that beats a *prior*
      // record flags `completionWasBest` (drives the celebration beat); the
      // first-ever completion sets the record silently.
      const nextBest = { ...state.bestByMission };
      let completionWasBest = current.completionWasBest;
      if (justCompleted) {
        const previous = nextBest[missionId];
        const beatPrevious = previous !== undefined && accumulatedMs < previous;
        if (previous === undefined || accumulatedMs < previous) {
          nextBest[missionId] = accumulatedMs;
        }
        completionWasBest = beatPrevious;
      }

      nextRuns[missionId] = {
        accumulatedMs,
        segmentStartMs,
        isComplete,
        completionWasBest,
        userPaused: current.userPaused,
      };

      persist(nextRuns, nextBest);
      return { runsByMission: nextRuns, bestByMission: nextBest };
    });
  },

  setUserPaused(missionId, paused) {
    set((state) => {
      const current: TimerRun = state.runsByMission[missionId] ?? {
        accumulatedMs: 0,
        segmentStartMs: null,
        isComplete: false,
        completionWasBest: false,
        userPaused: false,
      };

      const nextRuns = {
        ...state.runsByMission,
        [missionId]: { ...current, userPaused: paused },
      };

      persist(nextRuns, state.bestByMission);
      return { runsByMission: nextRuns };
    });
  },

  resetBest(missionId) {
    set((state) => {
      const nextBest = { ...state.bestByMission };
      delete nextBest[missionId];
      persist(state.runsByMission, nextBest);
      return { bestByMission: nextBest };
    });
  },

  resetTimerState() {
    set((state) => {
      persist({}, state.bestByMission);
      return { runsByMission: {} };
    });
  },
}));
