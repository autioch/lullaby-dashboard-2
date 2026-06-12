import './ProgressBar.css';
import { Typography } from '@/components/Typography/Typography';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { computeProgress } from '@/stores/missionProgress';
import { useMemo, type PropsWithChildren } from 'react';

export function ProgressBar(props: PropsWithChildren) {
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const mission = useMission();
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const { total, completed, percent, fillWidth } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );

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
