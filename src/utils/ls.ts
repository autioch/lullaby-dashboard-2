import { isBrowser } from '@/stores/utils';

const NAMESPACE = 'launchpad';
const VERSION = 1;

function k(key: string) {
  return `${NAMESPACE}_${VERSION}_${key}`;
}

export function lsSave<T = string>(key: string, data: T) {
  if (!isBrowser) return;

  try {
    window.localStorage.setItem(k(key), JSON.stringify(data));
  } catch {
    // ignore localStorage errors
  }
}

export function lsLoad<T = string>(key: string): T | undefined {
  if (!isBrowser) {
    return undefined;
  }

  try {
    const raw = window.localStorage.getItem(k(key));

    if (!raw) {
      return undefined;
    }
    return JSON.parse(raw) as T;
  } catch {
    return undefined;
  }
}

export function lsClear(key: string) {
  if (!isBrowser) {
    return undefined;
  }
  window.localStorage.removeItem(k(key));
}
