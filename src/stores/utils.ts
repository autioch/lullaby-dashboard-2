import { type AppLanguage, DEFAULT_LANGUAGE } from '../i18n/translations';
import type { DashboardState } from './useDashboardStore';
import type { SavedList } from '../types';

interface PersistedDashboardState {
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  selectedIndex: number;
  language: AppLanguage;
  timerRunsByList: Record<string, import('../types').TimerRunState>;
  fastestRunsByList: Record<string, import('../types').FastestRunRecord>;
  celebration: import('../types').CelebrationState;
}

const STORAGE_KEY = 'lullaby-dashboard-state';

export const isBrowser = typeof window !== 'undefined';

function parsePersistedState(
  raw: unknown
): PersistedDashboardState | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;

  const candidate = raw as {
    checkedKeys?: unknown;
    listExpiryTimestamps?: unknown;
    selectedIndex?: unknown;
    language?: unknown;
    timerRunsByList?: unknown;
    fastestRunsByList?: unknown;
    celebration?: unknown;
  };

  if (typeof candidate.selectedIndex !== 'number') return undefined;
  const language =
    candidate.language === 'en' || candidate.language === 'pl'
      ? (candidate.language as AppLanguage)
      : DEFAULT_LANGUAGE;
  if (
    typeof candidate.checkedKeys !== 'object' ||
    candidate.checkedKeys === null ||
    Array.isArray(candidate.checkedKeys)
  )
    return undefined;
  if (
    typeof candidate.listExpiryTimestamps !== 'object' ||
    candidate.listExpiryTimestamps === null ||
    Array.isArray(candidate.listExpiryTimestamps)
  )
    return undefined;

  const checkedKeys = Object.fromEntries(
    Object.entries(candidate.checkedKeys as Record<string, unknown>).filter(
      ([, value]) => typeof value === 'boolean'
    )
  ) as Record<string, boolean>;

  const listExpiryTimestamps = Object.fromEntries(
    Object.entries(
      candidate.listExpiryTimestamps as Record<string, unknown>
    ).filter(([, value]) => typeof value === 'number')
  ) as Record<string, number>;

  const timerRunsByList =
    typeof candidate.timerRunsByList === 'object' &&
    candidate.timerRunsByList !== null &&
    !Array.isArray(candidate.timerRunsByList)
      ? (candidate.timerRunsByList as Record<string, unknown>)
      : {};

  const fastestRunsByList =
    typeof candidate.fastestRunsByList === 'object' &&
    candidate.fastestRunsByList !== null &&
    !Array.isArray(candidate.fastestRunsByList)
      ? (candidate.fastestRunsByList as Record<string, unknown>)
      : {};

  const celebration =
    typeof candidate.celebration === 'object' &&
    candidate.celebration !== null &&
    !Array.isArray(candidate.celebration)
      ? (candidate.celebration as Record<string, unknown>)
      : { visible: false, listId: null, isNewBest: false, elapsedMs: 0 };

  return {
    checkedKeys,
    listExpiryTimestamps,
    selectedIndex: candidate.selectedIndex,
    language,
    timerRunsByList,
    fastestRunsByList,
    celebration: {
      visible: Boolean(celebration.visible),
      listId:
        typeof celebration.listId === 'string' ? celebration.listId : null,
      isNewBest: Boolean(celebration.isNewBest),
      elapsedMs:
        typeof celebration.elapsedMs === 'number' ? celebration.elapsedMs : 0,
    },
  } as unknown as PersistedDashboardState;
}

export function loadPersistedState(): PersistedDashboardState | undefined {
  if (!isBrowser) return undefined;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    return parsePersistedState(parsed);
  } catch {
    return undefined;
  }
}

export function cleanPersistedState(
  persisted: PersistedDashboardState,
  lists: SavedList[]
) {
  const now = Date.now();
  const checkedKeys: Record<string, boolean> = {};
  const listExpiryTimestamps: Record<string, number> = {};

  for (const [key, value] of Object.entries(persisted.checkedKeys)) {
    const [listId] = key.split('-', 2);
    const list = lists.find((item) => item.id === listId);
    const expiry = persisted.listExpiryTimestamps[listId];

    if (!list?.retentionHours || typeof expiry !== 'number') continue;
    if (now >= expiry) continue;

    checkedKeys[key] = value;
    listExpiryTimestamps[listId] = expiry;
  }

  return {
    checkedKeys,
    listExpiryTimestamps,
    selectedIndex: persisted.selectedIndex,
    language: persisted.language ?? DEFAULT_LANGUAGE,
    timerRunsByList: persisted.timerRunsByList ?? {},
    fastestRunsByList: persisted.fastestRunsByList ?? {},
    celebration: persisted.celebration ?? {
      visible: false,
      listId: null,
      isNewBest: false,
      elapsedMs: 0,
    },
  };
}

export function savePersistedState(
  state: Pick<
    DashboardState,
    | 'checkedKeys'
    | 'listExpiryTimestamps'
    | 'selectedIndex'
    | 'language'
    | 'timerRunsByList'
    | 'fastestRunsByList'
    | 'celebration'
  >
) {
  if (!isBrowser) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore localStorage errors
  }
}

export function clearPersistedState() {
  if (!isBrowser) return;

  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore localStorage errors
  }
}
