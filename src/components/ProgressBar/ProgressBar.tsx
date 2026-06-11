import './ProgressBar.css';
import { Typography } from '@/components/Typography/Typography';
import type { MissionRec } from '@/database/missionRepository';
import type { ObjectiveGroupRec } from '@/database/objectiveGroupRepository';
import type { ObjectiveRec } from '@/database/objectiveRepository';
import {
  useMissionStore,
  useMission,
  type MissionLSState,
} from '@/stores/useMissionStore';
import { useMemo, type PropsWithChildren } from 'react';

export function ProgressBar(props: PropsWithChildren) {
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const mission = useMission();
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const { total, completed, percent, fillWidth } = useGetValues(
    objectiveGroups,
    objectives,
    checkedKeys,
    mission
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

function useGetValues(
  objectiveGroups: Record<string, ObjectiveGroupRec>,
  objectives: Record<string, ObjectiveRec>,
  checkedKeys: MissionLSState['checkedKeys'],
  mission?: MissionRec | null
) {
  // Mirrors ObjectiveList: hidden groups and hidden objectives are not shown,
  // so they must not count toward the progress total or completed tally.
  const visibleObjectiveIds = useMemo(
    () =>
      mission?.objectiveGroupIds.flatMap((groupId) => {
        const group = objectiveGroups[groupId];
        if (!group || group.isHidden) {
          return [];
        }
        return group.objectiveIds.filter((objectiveId) => {
          const objective = objectives[objectiveId];
          return objective && !objective.isHidden;
        });
      }) ?? [],
    [mission, objectiveGroups, objectives]
  );

  const total = visibleObjectiveIds.length;

  const completed = mission
    ? visibleObjectiveIds.reduce(
        (sum, objectiveId) =>
          sum + (checkedKeys[mission.id]?.[objectiveId] ? 1 : 0),
        0
      )
    : 0;

  const safeTotal = Math.max(total, 1);
  const percent = Math.ceil((completed / safeTotal) * 100);
  const fillWidth = `${Math.min(Math.max((completed / safeTotal) * 100, 0), 100)}%`;

  return {
    total,
    completed,
    percent,
    fillWidth,
  };
}
