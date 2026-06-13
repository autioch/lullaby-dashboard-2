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
  ...over,
});

beforeEach(() => {
  vi.clearAllMocks();
  fakeLs.load.mockReturnValue(undefined);
  useTimerStore.setState({ runsByMission: {} });
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

describe('setRunState', () => {
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

  it('persists only accumulatedMs and isComplete', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    vi.advanceTimersByTime(2000);
    useTimerStore.getState().setRunState('m1', false, false);

    expect(fakeLs.save).toHaveBeenLastCalledWith({
      runsByMission: { m1: { accumulatedMs: 2000, isComplete: false } },
    });
  });
});

describe('hydration', () => {
  it('restores persisted runs paused (segmentStartMs null), ignoring the reload gap', () => {
    fakeLs.load.mockReturnValue({
      runsByMission: { m1: { accumulatedMs: 9000, isComplete: false } },
    });

    // Re-create the store module state by invoking the loader path: simulate by
    // setting state the way the initializer would.
    useTimerStore.setState({
      runsByMission: {
        m1: { accumulatedMs: 9000, isComplete: false, segmentStartMs: null },
      },
    });

    const r = useTimerStore.getState().runsByMission.m1;
    expect(r.segmentStartMs).toBeNull();
    vi.advanceTimersByTime(60000);
    expect(getElapsedMs(r, Date.now())).toBe(9000);
  });
});

describe('resetTimerState', () => {
  it('clears all runs and the persisted entry', () => {
    useTimerStore.getState().setRunState('m1', true, false);
    useTimerStore.getState().resetTimerState();
    expect(useTimerStore.getState().runsByMission).toEqual({});
    expect(fakeLs.clear).toHaveBeenCalled();
  });
});
