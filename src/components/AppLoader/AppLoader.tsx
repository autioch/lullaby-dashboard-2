import type { ReactNode } from "react";
import { useEffect } from "react";
import AppLoaderError from "./AppLoaderError";
import { useStartupStore } from "../../stores/useStartupStore";
import Typography from "../Typography/Typography";
import "./AppLoader.css";

interface AppLoaderProps {
  children: ReactNode;
}

const { loadData } = useStartupStore.getState();

export default function AppLoader({ children }: AppLoaderProps) {
  const steps = useStartupStore((state) => state.steps);
  const failureInfo = useStartupStore((state) => state.failureInfo);
  const isReady = useStartupStore((state) => state.isReady);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (failureInfo) {
    return <AppLoaderError />;
  }

  if (!isReady) {
    return (
      <div className="loader">
        <div className="loader__panel">
          <h1 className="loader__heading">
            <Typography
              textKey="loader.heading"
              variant="heading"
              size="large"
            />
          </h1>
          <p className="loader__message">
            <Typography textKey="loader.message" />
          </p>
          <ol className="loader__list">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`loader__item loader__item--${step.status}`}
              >
                <span
                  className={`loader__item-status loader__item-status--${step.status}`}
                  aria-hidden="true"
                >
                  {step.status === "complete"
                    ? "✓"
                    : step.status === "failed"
                      ? "✕"
                      : ""}
                </span>
                <span>
                  <Typography textKey={step.labelKey} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
