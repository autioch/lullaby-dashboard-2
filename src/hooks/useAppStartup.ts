import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useDashboardStore } from "../stores/useDashboardStore";

type StartupStepId = "loadConfiguration" | "hydrateState" | "finalize";

type StartupStatus = "pending" | "inProgress" | "complete" | "failed";

interface StartupStep {
  id: StartupStepId;
  label: string;
  status: StartupStatus;
}

export interface FailureInfo {
  step: StartupStepId;
  message: string;
  stack?: string;
}

interface AppStartupState {
  steps: StartupStep[];
  failureInfo: FailureInfo | null;
  isReady: boolean;
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

export default function useAppStartup(): AppStartupState {
  const setLists = useDashboardStore((state) => state.setLists);
  const hydrateState = useDashboardStore((state) => state.hydrateState);

  const [steps, setSteps] = useState<StartupStep[]>(initialSteps);
  const [failureInfo, setFailureInfo] = useState<FailureInfo | null>(null);
  const [isReady, setIsReady] = useState(false);

  const updateStepStatus = (id: StartupStepId, status: StartupStatus) => {
    setSteps((current) =>
      current.map((step) =>
        step.id === id
          ? {
              ...step,
              status,
            }
          : step,
      ),
    );
  };

  useEffect(() => {
    let isCancelled = false;
    let currentStep: StartupStepId = "loadConfiguration";

    async function initialize() {
      try {
        currentStep = "loadConfiguration";
        updateStepStatus(currentStep, "inProgress");

        const snapshot = await getDoc(doc(db, "dashboard", "configuration"));
        if (!snapshot.exists()) {
          throw new Error("Firebase configuration document not found");
        }

        const data = snapshot.data();
        if (!data || !Array.isArray(data.savedLists)) {
          throw new Error("Firebase configuration is missing savedLists");
        }

        setLists(data.savedLists);
        updateStepStatus(currentStep, "complete");

        currentStep = "hydrateState";
        updateStepStatus(currentStep, "inProgress");
        hydrateState();
        updateStepStatus(currentStep, "complete");

        currentStep = "finalize";
        updateStepStatus(currentStep, "inProgress");
        await new Promise((resolve) => setTimeout(resolve, 120));
        updateStepStatus(currentStep, "complete");

        if (!isCancelled) {
          setIsReady(true);
        }
      } catch (error) {
        if (!isCancelled) {
          const message =
            error instanceof Error ? error.message : String(error);
          const stack = error instanceof Error ? error.stack : undefined;
          updateStepStatus(currentStep, "failed");
          setFailureInfo({
            step: currentStep,
            message,
            stack,
          });
        }
      }
    }

    initialize();

    return () => {
      isCancelled = true;
    };
  }, [hydrateState, setLists]);

  return {
    steps,
    failureInfo,
    isReady,
  };
}
