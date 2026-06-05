import { Typography } from '@/components/Typography/Typography';
import { type StartupStep, type StartupStatus } from '@/stores/useStartupStore';

type StartupStepProps = {
  step: StartupStep;
};

export function StartupItem(props: StartupStepProps) {
  const { step } = props;

  return (
    <div
      key={step.id}
      className={`c-startup-item c-startup-item--${step.status}`}
    >
      <Status status={step.status} />
      <Typography textKey={step.labelKey} />
      <Status status={step.status} />
    </div>
  );
}

function Status(props: { status: StartupStatus }) {
  const { status } = props;

  return (
    <span className="c-startup-item__status">
      {status === 'complete' ? '✓' : status === 'failed' ? '✕' : ''}
    </span>
  );
}
