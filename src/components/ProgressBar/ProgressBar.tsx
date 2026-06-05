import './ProgressBar.css';
import { Typography } from '@/components/Typography/Typography';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { useMemo, type PropsWithChildren } from 'react';

export function ProgressBar(props: PropsWithChildren) {
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const mission = useMission();

  const total = useMemo(
    () =>
      mission?.groups.reduce(
        (sum, group) => sum + (group.items?.length ?? 0),
        0
      ) ?? 0,
    [mission]
  );

  const completed = mission
    ? mission.groups.reduce((sum, group) => {
        return (
          sum +
          group.items.reduce((groupSum, item) => {
            const key = `${mission.id}-${group.id}-${item.id}`;
            return groupSum + (checkedKeys[key] ? 1 : 0);
          }, 0)
        );
      }, 0)
    : 0;

  const safeTotal = Math.max(total, 1);

  const percent = Math.ceil((completed / safeTotal) * 100);

  const fillWidth = `${Math.min(Math.max((completed / safeTotal) * 100, 0), 100)}%`;

  return (
    <div className="c-progress-bar">
      <div className="c-progress-bar__track">
        <div className="c-progress-bar__fill" style={{ width: fillWidth }} />
      </div>

      <div className="c-progress-bar__footer">
        <Typography
          textKey={`progressBar.${getProgressText(percent)}`}
          as="div"
        />
        {props.children}
        <Typography
          textKey="progressBar.count"
          values={{ completed, total, percent }}
          as="div"
        />
      </div>
    </div>
  );
}

function getProgressText(percent: number) {
  if (percent === 0) {
    return 'progressNone';
  }
  if (percent < 25) {
    return 'progressBegin';
  }
  if (percent < 50) {
    return 'progressMiddle';
  }
  if (percent < 90) {
    return 'progressMost';
  }
  if (percent < 100) {
    return 'progressAlmost';
  }
  return 'progressDone';
}
