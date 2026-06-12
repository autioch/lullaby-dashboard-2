import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Replace localStorage with a controllable fake (load() is set per test) and
// stub the repositories so importing the store never pulls in db.ts / Firebase.
const { fakeLs } = vi.hoisted(() => ({
  fakeLs: { save: vi.fn(), load: vi.fn(), clear: vi.fn() },
}));

vi.mock('@/utils/ls', () => ({ lsWrapper: () => fakeLs }));
vi.mock('@/database/missionRepository', () => ({
  missionRepository: { fetchOnce: vi.fn(), subscribe: vi.fn() },
}));
vi.mock('@/database/objectiveGroupRepository', () => ({
  objectiveGroupRepository: { subscribe: vi.fn() },
}));
vi.mock('@/database/objectiveRepository', () => ({
  objectiveRepository: { subscribe: vi.fn() },
}));
vi.mock('@/database/colorRepository', () => ({
  colorRepository: { subscribe: vi.fn() },
}));

import { useMissionStore } from './useMissionStore';

const blankState = {
  missions: {},
  missionList: [],
  objectiveGroups: {},
  objectives: {},
  colors: {},
  colorList: [],
  missionId: null,
  checkedKeys: {},
  listExpiryTimestamps: {},
};

beforeEach(() => {
  vi.clearAllMocks();
  fakeLs.load.mockReturnValue(undefined);
  useMissionStore.setState(blankState);
});

afterEach(() => {
  vi.useRealTimers();
});

describe('selectMission', () => {
  it('sets the active mission and persists it', () => {
    useMissionStore.getState().selectMission('m1');
    expect(useMissionStore.getState().missionId).toBe('m1');
    expect(fakeLs.save).toHaveBeenCalledWith(
      expect.objectContaining({ missionId: 'm1' })
    );
  });
});

describe('toggleObjective', () => {
  it('flips checked state and stamps an expiry from retentionHours', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-12T00:00:00Z'));
    const now = Date.now();

    const store = useMissionStore.getState();
    store.setMissions([
      {
        id: 'm1',
        label: 'M',
        youtubeUrl: '',
        retentionHours: 10,
        objectiveGroupIds: [],
      },
    ]);
    store.selectMission('m1');
    store.toggleObjective('o1');

    const state = useMissionStore.getState();
    expect(state.checkedKeys.m1.o1).toBe(true);
    expect(state.listExpiryTimestamps.m1).toBe(now + 10 * 60 * 60 * 1000);

    useMissionStore.getState().toggleObjective('o1');
    expect(useMissionStore.getState().checkedKeys.m1.o1).toBe(false);
  });

  it('is a no-op when no mission is selected', () => {
    useMissionStore.getState().toggleObjective('o1');
    expect(useMissionStore.getState().checkedKeys).toEqual({});
  });
});

describe('resetState', () => {
  it('clears checked keys but keeps the current selection', () => {
    useMissionStore.setState({
      missionId: 'm1',
      checkedKeys: { m1: { o1: true } },
      listExpiryTimestamps: { m1: 123 },
    });
    useMissionStore.getState().resetState();

    const state = useMissionStore.getState();
    expect(state.checkedKeys).toEqual({});
    expect(state.missionId).toBe('m1');
  });
});

describe('setColors', () => {
  it('keys colors by id and orders the list by `order`', () => {
    useMissionStore.getState().setColors([
      { id: 'c1', value: '#fff', label: 'White', order: 2 },
      { id: 'c2', value: '#000', label: 'Black', order: 1 },
    ]);

    const state = useMissionStore.getState();
    expect(state.colorList.map((c) => c.id)).toEqual(['c2', 'c1']);
    expect(state.colors.c1.label).toBe('White');
  });
});

describe('hydrateState', () => {
  it('drops expired checks, unknown missions, and a stale selection', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-06-12T00:00:00Z'));
    const now = Date.now();

    useMissionStore.getState().setMissions([
      {
        id: 'm1',
        label: 'M1',
        youtubeUrl: '',
        retentionHours: 10,
        objectiveGroupIds: [],
      },
      {
        id: 'm2',
        label: 'M2',
        youtubeUrl: '',
        retentionHours: 5,
        objectiveGroupIds: [],
      },
    ]);

    fakeLs.load.mockReturnValue({
      missionId: 'ghost', // mission no longer exists (e.g. after a reseed)
      checkedKeys: { m1: { o1: true }, m2: { o2: true }, mGone: { o3: true } },
      listExpiryTimestamps: {
        m1: now + 1000, // still valid
        m2: now - 1000, // expired
        mGone: now + 1000, // mission unknown
      },
    });

    useMissionStore.getState().hydrateState();

    const state = useMissionStore.getState();
    expect(state.missionId).toBeNull();
    expect(state.listExpiryTimestamps).toEqual({ m1: now + 1000 });
    expect(state.checkedKeys).toEqual({ m1: { o1: true } });
  });

  it('does nothing when there is no persisted state', () => {
    fakeLs.load.mockReturnValue(undefined);
    useMissionStore.setState({ missionId: 'm1' });
    useMissionStore.getState().hydrateState();
    expect(useMissionStore.getState().missionId).toBe('m1');
  });
});
