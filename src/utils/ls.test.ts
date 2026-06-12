import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// A minimal localStorage stand-in backed by a Map. The real wrapper decides it
// is "in the browser" from `typeof window`, evaluated at module load — so each
// test stubs `window`, resets the module registry, then imports fresh.
function makeStorage(): Storage {
  const map = new Map<string, string>();
  return {
    getItem: (key) => (map.has(key) ? map.get(key)! : null),
    setItem: (key, value) => void map.set(key, String(value)),
    removeItem: (key) => void map.delete(key),
    clear: () => map.clear(),
    key: (index) => [...map.keys()][index] ?? null,
    get length() {
      return map.size;
    },
  };
}

async function freshWrapper<T>(storage: Storage, version = 2) {
  vi.resetModules();
  vi.stubGlobal('window', { localStorage: storage });
  const { lsWrapper } = await import('./ls');
  return lsWrapper<T>('mission', version);
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('lsWrapper', () => {
  let storage: Storage;

  beforeEach(() => {
    storage = makeStorage();
  });

  it('round-trips a value through save and load', async () => {
    const ls = await freshWrapper<{ count: number }>(storage);
    ls.save({ count: 3 });
    expect(ls.load()).toEqual({ count: 3 });
  });

  it('returns undefined when nothing is stored', async () => {
    const ls = await freshWrapper<{ count: number }>(storage);
    expect(ls.load()).toBeUndefined();
  });

  it('clear removes the stored value', async () => {
    const ls = await freshWrapper<{ count: number }>(storage);
    ls.save({ count: 1 });
    ls.clear();
    expect(ls.load()).toBeUndefined();
  });

  it('namespaces the key so unrelated keys do not collide', async () => {
    const ls = await freshWrapper<{ count: number }>(storage);
    ls.save({ count: 7 });
    // Stored under a namespaced/versioned hash, not the bare "mission" key.
    expect(storage.getItem('mission')).toBeNull();
    expect(storage.length).toBe(1);
  });

  it('folds the version into the key so a bump invalidates old data', async () => {
    const v2 = await freshWrapper<{ count: number }>(storage, 2);
    v2.save({ count: 9 });
    // A bumped version is a different key, so old data is orphaned (reset to
    // default) rather than read in a possibly-stale shape.
    const v3 = await freshWrapper<{ count: number }>(storage, 3);
    expect(v3.load()).toBeUndefined();
    // The v2 entry still exists under its own key; they don't collide.
    expect(storage.length).toBe(1);
  });

  it('returns undefined when the stored JSON is corrupt', async () => {
    storage.setItem('launchpad_2_mission', '{ not json');
    const ls = await freshWrapper<{ count: number }>(storage);
    expect(ls.load()).toBeUndefined();
  });

  it('is a no-op without a browser window', async () => {
    vi.resetModules();
    vi.stubGlobal('window', undefined);
    const { lsWrapper } = await import('./ls');
    const ls = lsWrapper<{ count: number }>('mission', 2);
    expect(() => ls.save({ count: 1 })).not.toThrow();
    expect(ls.load()).toBeUndefined();
  });
});
