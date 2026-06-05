import { create } from 'zustand';
import { useDashboardStore } from './useDashboardStore';

export type StartupStepId = 'loadConfiguration' | 'hydrateState';

export type StartupStatus = 'pending' | 'inProgress' | 'complete' | 'failed';

export type StartupStep = {
  id: StartupStepId;
  labelKey: string;
  status: StartupStatus;
  stepFn: () => Promise<void> | void;
};

export type FailureInfo = {
  step: StartupStepId;
  message: string;
  stack?: string;
};

type StartupState = {
  steps: StartupStep[];
  failureInfo: FailureInfo | null;
  isReady: boolean;
  startupStarted: boolean;
  loadData(): Promise<void>;
  setStepStatus(id: StartupStepId, status: StartupStatus): void;
};

const initialSteps: StartupStep[] = [
  {
    id: 'loadConfiguration',
    labelKey: 'startup.loadingConfiguration',
    status: 'pending',
    stepFn: () => useDashboardStore.getState().loadConfiguration(),
  },
  {
    id: 'hydrateState',
    labelKey: 'startup.restoringState',
    status: 'inProgress',
    stepFn: async () => await useDashboardStore.getState().hydrateState(),
  },
];

export const useStartupStore = create<StartupState>((set, get) => ({
  steps: initialSteps,
  failureInfo: null,
  isReady: false,
  startupStarted: false,

  setStepStatus(id, status) {
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id
          ? {
              ...step,
              status,
            }
          : step
      ),
    }));
  },

  async loadData() {
    const { setStepStatus, startupStarted } = get();

    if (startupStarted) {
      return;
    }

    set({ startupStarted: true });

    let currentStep: StartupStepId = 'loadConfiguration';

    try {
      for (const step of get().steps) {
        currentStep = step.id;
        setStepStatus(currentStep, 'inProgress');
        await step.stepFn();
        setStepStatus(currentStep, 'complete');
      }

      set({ isReady: true });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const stack = error instanceof Error ? error.stack : undefined;

      setStepStatus(currentStep, 'failed');

      set({
        failureInfo: {
          step: currentStep,
          message,
          stack,
        },
      });
    }
  },
}));
