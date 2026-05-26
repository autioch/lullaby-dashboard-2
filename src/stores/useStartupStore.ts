import { create } from "zustand";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDashboardStore } from "./useDashboardStore";
import type { SavedList } from "../types";

export type StartupStepId = "loadConfiguration" | "hydrateState" | "finalize";
export type StartupStatus = "pending" | "inProgress" | "complete" | "failed";

export interface StartupStep {
  id: StartupStepId;
  label: string;
  status: StartupStatus;
}

export interface FailureInfo {
  step: StartupStepId;
  message: string;
  stack?: string;
}

interface StartupState {
  steps: StartupStep[];
  failureInfo: FailureInfo | null;
  isReady: boolean;
  startupStarted: boolean;
  initialize(): Promise<void>;
  updateStepStatus(id: StartupStepId, status: StartupStatus): void;
  setFailureInfo(failureInfo: FailureInfo | null): void;
  setReady(isReady: boolean): void;
  setStartupStarted(started: boolean): void;
}

const initialSteps: StartupStep[] = [
  {
    id: "loadConfiguration",
    label: "Loading configuration",
    status: "pending",
  },
  {
    id: "hydrateState",
    label: "Restoring saved state",
    status: "pending",
  },
  {
    id: "finalize",
    label: "Finalizing startup",
    status: "pending",
  },
];

export const useStartupStore = create<StartupState>((set, get) => ({
  steps: initialSteps,
  failureInfo: null,
  isReady: false,
  startupStarted: false,

  updateStepStatus(id, status) {
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id
          ? {
              ...step,
              status,
            }
          : step,
      ),
    }));
  },

  setFailureInfo(failureInfo) {
    set({ failureInfo });
  },

  setReady(isReady) {
    set({ isReady });
  },

  setStartupStarted(started) {
    set({ startupStarted: started });
  },

  async initialize() {
    if (get().startupStarted) {
      return;
    }

    set({ startupStarted: true });
    const dashboardStore = useDashboardStore.getState();
    let currentStep: StartupStepId = "loadConfiguration";

    try {
      get().updateStepStatus(currentStep, "inProgress");

      const snapshot = await getDoc(doc(db, "dashboard", "configuration"));
      if (!snapshot.exists()) {
        throw new Error("Firebase configuration document not found");
      }

      const data = snapshot.data();
      if (!data || !Array.isArray(data.savedLists)) {
        throw new Error("Firebase configuration is missing savedLists");
      }

      dashboardStore.setLists(data.savedLists as SavedList[]);
      get().updateStepStatus(currentStep, "complete");

      currentStep = "hydrateState";
      get().updateStepStatus(currentStep, "inProgress");
      dashboardStore.hydrateState();
      get().updateStepStatus(currentStep, "complete");

      currentStep = "finalize";
      get().updateStepStatus(currentStep, "inProgress");
      await new Promise((resolve) => setTimeout(resolve, 120));
      get().updateStepStatus(currentStep, "complete");

      get().setReady(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const stack = error instanceof Error ? error.stack : undefined;
      get().updateStepStatus(currentStep, "failed");
      get().setFailureInfo({
        step: currentStep,
        message,
        stack,
      });
    }
  },
}));
