import { create } from 'zustand';
import configuration from '../data/configuration.json';

const lists = configuration.savedLists ?? [];

export const useDashboardStore = create((set) => ({
    lists,
    selectedIndex: 0,
    checkedKeys: {},
    setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
    toggleItem: (key) =>
        set((state) => ({
            checkedKeys: {
                ...state.checkedKeys,
                [key]: !state.checkedKeys[key],
            },
        })),
}));
