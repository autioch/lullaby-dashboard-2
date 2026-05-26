import type { ReactNode } from "react";
import AppLoaderError from "./AppLoaderError";
import useAppStartup from "../hooks/useAppStartup";

interface AppLoaderProps {
  children: ReactNode;
}

export default function AppLoader({ children }: AppLoaderProps) {
  const { steps, failureInfo, isReady } = useAppStartup();

  if (failureInfo) {
    return <AppLoaderError failureInfo={failureInfo} />;
  }

  if (!isReady) {
    return (
      <div className="loader">
        <div className="loader__panel">
          <h1 className="loader__heading">Starting dashboard</h1>
          <p className="loader__message">
            Please wait while we load your configuration and restore saved
            progress.
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
                <span>{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
