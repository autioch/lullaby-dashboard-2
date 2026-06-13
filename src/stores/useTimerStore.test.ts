import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Controllable fake localStorage; load() is set per test.
const { fakeLs } = vi.hoisted(() => ({
  fakeLs: { save: vi.fn(), load: vi.fn(), clear: vi.fn() },
}));

vi.mock('@/utils/ls', () => ({ lsWrapper: () => fakeLs }));

import { useTimerStore, getElapsedMs, type TimerRun } from './useTimerStore';

const run = (over: Partial<TimerRun> = {}): TimerRun => ({
  accumulatedMs: 0,
  segmentStartMs: null,
  isComplete: false,
  completionWasBest: false,
  userPaused: false,
  ...over,
});

beforeEach(() => {
  vi.clearAllMocks();
  fakeLs.load.mockReturnValue(undefined);
  useTimerStore.setState({ runsByMission: {}, bestByMission: {} });
  vi.useFakeTimers();
  vi.setSystemTime(new Date('2026-06-13T00:00:00Z'));
});

afterEach(() => {
  vi.useRealTimers();
});

describe('getElapsedMs', () => {
  it('is 0 for an undefined run', () => {
    expect(getElapsedMs(undefined, Date.now())).toBe(0);
  });

  it('returns banked time when paused', () => {
    expect(getElapsedMs(run({ accumulatedMs: 5000 }), Date.now())).toBe(5000);
  });

  it('adds the live segment when running', () => {
    const now = Date.now();
    expect(getElapsedMs(run({ segmentStartMs: now - 3000 }), now)).toBe(3000);
  });
});

describe('setRunState — run lifecycle', () => {
  it('opens a live segment when a run starts; elapsed grows with the clock', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    expect(useTimerStore.getState().runsByMission.m1.segmentStartMs).toBe(
      Date.now()
    );

    vi.advanceTimersByTime(4000);
    const r = useTimerStore.getState().runsByMission.m1;
    expect(getElapsedMs(r, Date.now())).toBe(4000);
  });

  it('banks elapsed and freezes it on pause', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(4000);
    useTimerStore.getState().setRunState('m1', false, false); // pause

    const r = useTimerStore.getState().runsByMission.m1;
    expect(r.segmentStartMs).toBeNull();
    expect(r.accumulatedMs).toBe(4000);

    vi.advanceTimersByTime(10000); // time passes while paused
    expect(getElapsedMs(r, Date.now())).toBe(4000);
  });

  it('resumes from the banked time', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(4000);
    useTimerStore.getState().setRunState('m1', false, false);
    vi.advanceTimersByTime(10000); // paused gap, not counted
    useTimerStore.getState().setRunState('m1', true, false); // resume
    vi.advanceTimersByTime(1000);

    const r = useTimerStore.getState().runsByMission.m1;
    expect(getElapsedMs(r, Date.now())).toBe(5000);
  });

  it('pauses the previous mission when another becomes active', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(3000);
    useTimerStore.getState().setRunState('m2', true, false); // switch missions

    const m1 = useTimerStore.getState().runsByMission.m1;
    expect(m1.segmentStartMs).toBeNull();
    expect(m1.accumulatedMs).toBe(3000);

    vi.advanceTimersByTime(5000);
    expect(getElapsedMs(m1, Date.now())).toBe(3000); // m1 stays paused
    expect(
      getElapsedMs(useTimerStore.getState().runsByMission.m2, Date.now())
    ).toBe(5000);
  });

  it('freezes the final time on completion and does not resume afterwards', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(7000);
    useTimerStore.getState().setRunState('m1', false, true); // reach 100%

    const done = useTimerStore.getState().runsByMission.m1;
    expect(done.isComplete).toBe(true);
    expect(done.segmentStartMs).toBeNull();
    expect(getElapsedMs(done, Date.now())).toBe(7000);

    // Unchecking below 100% must NOT reopen the run.
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(5000);
    const stillDone = useTimerStore.getState().runsByMission.m1;
    expect(stillDone.segmentStartMs).toBeNull();
    expect(getElapsedMs(stillDone, Date.now())).toBe(7000);
  });
});

describe('setRunState — best records', () => {
  // Helper: run a mission for `ms` then complete it in one motion.
  const completeIn = (missionId: string, ms: number) => {
    useTimerStore.getState().setRunState(missionId, true, false);
    vi.advanceTimersByTime(ms);
    useTimerStore.getState().setRunState(missionId, false, true);
  };

  it('records the first completion silently (no new-best flag)', () => {
    completeIn('m1', 7000);
    expect(useTimerStore.getState().bestByMission.m1).toBe(7000);
    expect(useTimerStore.getState().runsByMission.m1.completionWasBest).toBe(
      false
    );
  });

  it('flags and updates the best when a later run is faster', () => {
    completeIn('m1', 7000);
    useTimerStore.getState().resetTimerState(); // new run, keep the best
    completeIn('m1', 5000);

    expect(useTimerStore.getState().bestByMission.m1).toBe(5000);
    expect(useTimerStore.getState().runsByMission.m1.completionWasBest).toBe(
      true
    );
  });

  it('leaves the best and flag alone when a later run is slower', () => {
    completeIn('m1', 5000);
    useTimerStore.getState().resetTimerState();
    completeIn('m1', 9000);

    expect(useTimerStore.getState().bestByMission.m1).toBe(5000);
    expect(useTimerStore.getState().runsByMission.m1.completionWasBest).toBe(
      false
    );
  });
});

describe('persistence', () => {
  it('persists runs (accumulatedMs + isComplete) and bestByMission', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(2000);
    useTimerStore.getState().setRunState('m1', false, true); // complete → best 2000

    expect(fakeLs.save).toHaveBeenLastCalledWith({
      runsByMission: {
        m1: { accumulatedMs: 2000, isComplete: true, userPaused: false },
      },
      bestByMission: { m1: 2000 },
    });
  });

  it('restores persisted runs paused and bests intact', () => {
    fakeLs.load.mockReturnValue({
      runsByMission: { m1: { accumulatedMs: 9000, isComplete: false } },
      bestByMission: { m1: 4000 },
    });

    // Mirror the loader path (module init already ran with no data).
    useTimerStore.setState({
      runsByMission: {
        m1: {
          accumulatedMs: 9000,
          isComplete: false,
          segmentStartMs: null,
          completionWasBest: false,
          userPaused: false,
        },
      },
      bestByMission: { m1: 4000 },
    });

    const r = useTimerStore.getState().runsByMission.m1;
    expect(r.segmentStartMs).toBeNull();
    vi.advanceTimersByTime(60000);
    expect(getElapsedMs(r, Date.now())).toBe(9000); // reload gap not counted
    expect(useTimerStore.getState().bestByMission.m1).toBe(4000);
  });
});

describe('resetTimerState', () => {
  it('clears runs but keeps the best records', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(2000);
    useTimerStore.getState().setRunState('m1', false, true); // best 2000

    useTimerStore.getState().resetTimerState();

    expect(useTimerStore.getState().runsByMission).toEqual({});
    expect(useTimerStore.getState().bestByMission.m1).toBe(2000);
    expect(fakeLs.save).toHaveBeenLastCalledWith({
      runsByMission: {},
      bestByMission: { m1: 2000 },
    });
  });
});

describe('setUserPaused', () => {
  it('sets the sticky flag and persists it, creating a run if needed', () => {
    useTimerStore.getState().setUserPaused('m1', true);

    expect(useTimerStore.getState().runsByMission.m1.userPaused).toBe(true);
    expect(fakeLs.save).toHaveBeenLastCalledWith({
      runsByMission: {
        m1: { accumulatedMs: 0, isComplete: false, userPaused: true },
      },
      bestByMission: {},
    });
  });

  it('is preserved across a setRunState transition', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(2000);
    useTimerStore.getState().setUserPaused('m1', true);
    // Component re-derives running=false because userPaused; banks the segment.
    useTimerStore.getState().setRunState('m1', false, false);

    const r = useTimerStore.getState().runsByMission.m1;
    expect(r.userPaused).toBe(true);
    expect(r.segmentStartMs).toBeNull();
    expect(r.accumulatedMs).toBe(2000);

    // Manual resume: flag clears, segment reopens.
    useTimerStore.getState().setUserPaused('m1', false);
    useTimerStore.getState().setRunState('m1', true, false);
    expect(useTimerStore.getState().runsByMission.m1.userPaused).toBe(false);
    expect(useTimerStore.getState().runsByMission.m1.segmentStartMs).toBe(
      Date.now()
    );
  });

  it('is cleared by resetTimerState (fresh run is un-paused)', () => {
    useTimerStore.getState().setUserPaused('m1', true);
    useTimerStore.getState().resetTimerState();
    expect(useTimerStore.getState().runsByMission.m1).toBeUndefined();
  });
});

describe('resetBest', () => {
  it('clears one mission’s best, leaving others and runs intact', () => {
    useTimerStore.setState({
      runsByMission: {
        m1: run({ accumulatedMs: 1000, isComplete: true }),
      },
      bestByMission: { m1: 1000, m2: 2000 },
    });

    useTimerStore.getState().resetBest('m1');

    expect(useTimerStore.getState().bestByMission).toEqual({ m2: 2000 });
    expect(useTimerStore.getState().runsByMission.m1).toBeDefined();
  });
});
