import type { MissionRec } from '@/database/missionRepository';
import type { ObjectiveGroupRec } from '@/database/objectiveGroupRepository';
import type { ObjectiveRec } from '@/database/objectiveRepository';

export type Progress = {
  total: number;
  completed: number;
  percent: number;
  fillWidth: string;
};

// Derive mission progress from the normalized store data. Pure (no React, no
// Firestore) so it can be unit-tested and reused. Hidden groups and hidden
// objectives are not rendered, so they must not count toward total or completed
// — this mirrors ObjectiveList.
export function computeProgress(
  objectiveGroups: Record<string, ObjectiveGroupRec>,
  objectives: Record<string, ObjectiveRec>,
  checkedKeys: Record<string, Record<string, boolean>>,
  mission?: MissionRec | null
): Progress {
  const visibleObjectiveIds =
    mission?.objectiveGroupIds.flatMap((groupId) => {
      const group = objectiveGroups[groupId];
      if (!group || group.isHidden) {
        return [];
      }
      return group.objectiveIds.filter((objectiveId) => {
        const objective = objectives[objectiveId];
        return objective && !objective.isHidden;
      });
    }) ?? [];

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

  return { total, completed, percent, fillWidth };
}
