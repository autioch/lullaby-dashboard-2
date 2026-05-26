import type { SavedList } from "../types";
import type { DashboardState } from "./useDashboardStore";

interface PersistedDashboardState {
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  selectedIndex: number;
}

const STORAGE_KEY = "lullaby-dashboard-state";

export const isBrowser = typeof window !== "undefined";

function parsePersistedState(
  raw: unknown,
): PersistedDashboardState | undefined {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return undefined;

  const candidate = raw as {
    checkedKeys?: unknown;
    listExpiryTimestamps?: unknown;
    selectedIndex?: unknown;
  };

  if (typeof candidate.selectedIndex !== "number") return undefined;
  if (
    typeof candidate.checkedKeys !== "object" ||
    candidate.checkedKeys === null ||
    Array.isArray(candidate.checkedKeys)
  )
    return undefined;
  if (
    typeof candidate.listExpiryTimestamps !== "object" ||
    candidate.listExpiryTimestamps === null ||
    Array.isArray(candidate.listExpiryTimestamps)
  )
    return undefined;

  const checkedKeys = Object.fromEntries(
    Object.entries(candidate.checkedKeys as Record<string, unknown>).filter(
      ([, value]) => typeof value === "boolean",
    ),
  ) as Record<string, boolean>;

  const listExpiryTimestamps = Object.fromEntries(
    Object.entries(
      candidate.listExpiryTimestamps as Record<string, unknown>,
    ).filter(([, value]) => typeof value === "number"),
  ) as Record<string, number>;

  return {
    checkedKeys,
    listExpiryTimestamps,
    selectedIndex: candidate.selectedIndex,
  };
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
  lists: SavedList[],
) {
  const now = Date.now();
  const checkedKeys: Record<string, boolean> = {};
  const listExpiryTimestamps: Record<string, number> = {};

  for (const [key, value] of Object.entries(persisted.checkedKeys)) {
    const [listId] = key.split("-", 2);
    const list = lists.find((item) => item.listId === listId);
    const expiry = persisted.listExpiryTimestamps[listId];

    if (!list?.retentionHours || typeof expiry !== "number") continue;
    if (now >= expiry) continue;

    checkedKeys[key] = value;
    listExpiryTimestamps[listId] = expiry;
  }

  return {
    checkedKeys,
    listExpiryTimestamps,
    selectedIndex: persisted.selectedIndex,
  };
}

export function savePersistedState(
  state: Pick<
    DashboardState,
    "checkedKeys" | "listExpiryTimestamps" | "selectedIndex"
  >,
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
