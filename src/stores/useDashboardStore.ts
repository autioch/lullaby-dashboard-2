import { create } from "zustand";
import type { SavedList } from "../types";
import {
  cleanPersistedState,
  clearPersistedState,
  isBrowser,
  loadPersistedState,
  savePersistedState,
} from "./utils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export interface DashboardState {
  lists: SavedList[];
  selectedIndex: number;
  checkedKeys: Record<string, boolean>;
  listExpiryTimestamps: Record<string, number>;
  setLists(lists: SavedList[]): void;
  setSelectedIndex(selectedIndex: number): void;
  toggleItem(key: string): void;
  loadConfiguration(): Promise<void>;
  hydrateState(): void;
  resetState(): void;
}

export const useDashboardStore = create<DashboardState>((set, get) => ({
  lists: [],
  selectedIndex: 0,
  checkedKeys: {},
  listExpiryTimestamps: {},

  setLists(lists: SavedList[]) {
    set((state) => ({
      ...state,
      lists,
    }));
  },

  setSelectedIndex(selectedIndex: number) {
    return set((state) => {
      savePersistedState({
        checkedKeys: state.checkedKeys,
        listExpiryTimestamps: state.listExpiryTimestamps,
        selectedIndex,
      });

      return {
        ...state,
        selectedIndex,
      };
    });
  },

  toggleItem(key: string) {
    return set((state) => {
      const [listId] = key.split("-", 2);
      const list = state.lists.find((list) => list.id === listId);
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
    });
  },

  hydrateState() {
    if (!isBrowser) return;

    const persistedState = loadPersistedState();
    if (!persistedState) return;

    const nextState = cleanPersistedState(persistedState, get().lists);
    set((state) => ({
      ...state,
      selectedIndex: nextState.selectedIndex,
      checkedKeys: nextState.checkedKeys,
      listExpiryTimestamps: nextState.listExpiryTimestamps,
    }));
  },

  resetState() {
    clearPersistedState();
    set({
      selectedIndex: 0,
      checkedKeys: {},
      listExpiryTimestamps: {},
    });
  },

  async loadConfiguration() {
    const snapshot = await getDoc(doc(db, "dashboard", "configuration"));

    if (!snapshot.exists()) {
      throw new Error("Firebase configuration document not found");
    }

    const data = snapshot.data();
    if (!data || !Array.isArray(data.savedLists)) {
      throw new Error("Firebase configuration is missing savedLists");
    }

    set((state) => ({
      ...state,
      lists: data.savedLists,
    }));
  },
}));
