import { create } from 'zustand';
import configuration from '../data/configuration.json';

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
}

interface DashboardState {
  lists: SavedList[];
  selectedIndex: number;
  checkedKeys: Record<string, boolean>;
  setSelectedIndex: (selectedIndex: number) => void;
  toggleItem: (key: string) => void;
}

const lists = ((configuration as { savedLists?: SavedList[] }).savedLists ?? []) as SavedList[];

export const useDashboardStore = create<DashboardState>((set) => ({
  lists,
  selectedIndex: 0,
  checkedKeys: {},
  setSelectedIndex: (selectedIndex: number) => set({ selectedIndex }),
  toggleItem: (key: string) =>
    set((state) => ({
      checkedKeys: {
        ...state.checkedKeys,
        [key]: !state.checkedKeys[key],
      },
    })),
}));
