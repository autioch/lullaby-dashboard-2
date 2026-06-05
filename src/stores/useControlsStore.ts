import { create } from 'zustand';

type ControlsState = {
  isAppOptions: boolean;
  openOptions(): void;
  closeOptions(): void;
};

export const useControlsStore = create<ControlsState>((set) => ({
  isAppOptions: false,

  openOptions() {
    set({ isAppOptions: true });
  },

  closeOptions() {
    set({ isAppOptions: false });
  },
}));
