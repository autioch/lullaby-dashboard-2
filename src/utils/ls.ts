const isBrowser = typeof window !== 'undefined';
const NAMESPACE = 'launchpad';
const VERSION = 1;

export function lsWrapper<T = string>(key: string) {
  const hash = `${NAMESPACE}_${VERSION}_${key}`;

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
