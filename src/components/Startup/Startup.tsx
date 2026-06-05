import './Startup.css';
import { useEffect } from 'react';
import { StartupError } from './StartupError';
import { Typography } from '@/components/Typography/Typography';
import { useStartupStore } from '@/stores/useStartupStore';

const { loadData } = useStartupStore.getState();

export function Startup() {
  const steps = useStartupStore((state) => state.steps);
  const failureInfo = useStartupStore((state) => state.failureInfo);

  useEffect(() => {
    loadData();
  }, []);

  if (failureInfo) {
    return <StartupError />;
  }

  return (
    <div className="loader">
      <div className="loader__panel">
        <h1 className="loader__heading">
          <Typography textKey="loader.heading" />
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
                {step.status === 'complete'
                  ? '✓'
                  : step.status === 'failed'
                    ? '✕'
                    : ''}
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
