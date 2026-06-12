const isBrowser = typeof window !== 'undefined';
const NAMESPACE = 'launchpad';

/**
 * Namespaced, versioned localStorage accessor for a single key.
 *
 * `version` is a per-key storage-schema token, decoupled from the package
 * version (the two change for different reasons and on different cadences). It
 * is folded into the stored key, so bumping it orphans the old entry and the
 * caller falls back to its default — discard-on-change, no migration.
 *
 * Bump a key's `version` ONLY when its persisted shape changes in a way old
 * data can't satisfy (field rename/removal, type or semantics change). Adding
 * an `undefined`-tolerant optional field needs no bump.
 */
export function lsWrapper<T = string>(key: string, version: number) {
  const hash = `${NAMESPACE}_${version}_${key}`;

  function save(data: T) {
    if (!isBrowser) return;

    try {
      window.localStorage.setItem(hash, JSON.stringify(data));
    } catch {
      // ignore localStorage errors
    }
  }

  function load(): T | undefined {
    if (!isBrowser) {
      return undefined;
    }

    try {
      const raw = window.localStorage.getItem(hash);

      if (!raw) {
        return undefined;
      }
      return JSON.parse(raw) as T;
    } catch {
      return undefined;
    }
  }

  function clear() {
    if (!isBrowser) {
      return undefined;
    }
    window.localStorage.removeItem(hash);
  }

  return { save, load, clear };
}
