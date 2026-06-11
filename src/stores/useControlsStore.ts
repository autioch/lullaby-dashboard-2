import { create } from 'zustand';

type ControlsState = {
  isAppOptions: boolean;
  openOptions(): void;
  closeOptions(): void;
  isMissionSelect: boolean;
  openMissionSelect(): void;
  closeMissionSelect(): void;
  isContentEditor: boolean;
  openContentEditor(): void;
  closeContentEditor(): void;
};

export const useControlsStore = create<ControlsState>((set) => ({
  isAppOptions: false,
  isMissionSelect: false,
  isContentEditor: false,

  openOptions() {
    set({ isAppOptions: true });
  },

  closeOptions() {
    set({ isAppOptions: false });
  },

  openMissionSelect() {
    set({ isMissionSelect: true });
  },

  closeMissionSelect() {
    set({ isMissionSelect: false });
  },

  openContentEditor() {
    set({ isContentEditor: true });
  },

  closeContentEditor() {
    set({ isContentEditor: false });
  },
}));
