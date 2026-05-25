import { create } from "zustand";
import configuration from "../data/configuration.json";

export interface ToDoItem {
  name: string;
  color: string;
}

export interface SavedList {
  label: string;
  listId: string;
  backgroundListColor: string;
  fontListColor: string;
  embeddedYoutubeVideo: string;
  toDos: ToDoItem[];
  toDos2: ToDoItem[];
  retentionHours?: number;
}

interface DashboardState {
  lists: SavedList[];
  selectedIndex: number;
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  setSelectedIndex: (selectedIndex: number) => void;
  toggleItem: (key: string) => void;
  hydrateState: () => void;
  resetState: () => void;
}

interface PersistedDashboardState {
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  selectedIndex: number;
}

const lists = ((configuration as { savedLists?: SavedList[] }).savedLists ??
  []) as SavedList[];
const STORAGE_KEY = "lullaby-dashboard-state";
const isBrowser = typeof window !== "undefined";

const parsePersistedState = (
  raw: unknown,
): PersistedDashboardState | undefined => {
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
};

const loadPersistedState = (): PersistedDashboardState | undefined => {
  if (!isBrowser) return undefined;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    return parsePersistedState(parsed);
  } catch {
    return undefined;
  }
};

const cleanPersistedState = (persisted: PersistedDashboardState) => {
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
};

const savePersistedState = (
  state: Pick<
    DashboardState,
    "checkedKeys" | "listExpiryTimestamps" | "selectedIndex"
  >,
) => {
  if (!isBrowser) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore localStorage errors
  }
};

const clearPersistedState = () => {
  if (!isBrowser) return;

  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore localStorage errors
  }
};

export const useDashboardStore = create<DashboardState>((set) => ({
  lists,
  selectedIndex: 0,
  checkedKeys: {},
  listExpiryTimestamps: {},
  setSelectedIndex: (selectedIndex: number) =>
    set((state) => {
      const nextState = {
        ...state,
        selectedIndex,
      };

      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex,
      });

      return nextState;
    }),
  toggleItem: (key: string) =>
    set((state) => {
      const [listId] = key.split("-", 2);
      const list = state.lists.find((item) => item.listId === listId);
      const nextCheckedKeys = {
        ...state.checkedKeys,
        [key]: !state.checkedKeys[key],
      };

      const nextListExpiryTimestamps = list?.retentionHours
        ? {
            ...state.listExpiryTimestamps,
            [listId]: Date.now() + list.retentionHours * 60 * 60 * 1000,
          }
        : state.listExpiryTimestamps;

      savePersistedState({
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
        selectedIndex: state.selectedIndex,
      });

      return {
        checkedKeys: nextCheckedKeys,
        listExpiryTimestamps: nextListExpiryTimestamps,
      };
    }),
  hydrateState: () => {
    if (!isBrowser) return;

    const persistedState = loadPersistedState();
    if (!persistedState) return;

    const nextState = cleanPersistedState(persistedState);
    set((state) => ({
      ...state,
      selectedIndex: nextState.selectedIndex,
      checkedKeys: nextState.checkedKeys,
      listExpiryTimestamps: nextState.listExpiryTimestamps,
    }));
  },
  resetState: () => {
    clearPersistedState();
    set({
      selectedIndex: 0,
      checkedKeys: {},
      listExpiryTimestamps: {},
    });
  },
}));
