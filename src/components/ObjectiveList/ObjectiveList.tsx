import { ObjectiveRow } from './Objective';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import './ObjectiveList.css';

export function ObjectiveList() {
  const mission = useMission();

  if (!mission) {
    return null;
  }

  return (
    <div className="c-objective-list">
      {mission.objectiveGroupIds.map((groupId) => {
        return (
          <ObjectiveGroup
            groupId={groupId}
            missionId={mission.id}
            key={groupId}
          />
        );
      })}
    </div>
  );
}

function ObjectiveGroup(props: { groupId: string; missionId: string }) {
  const { groupId, missionId } = props;
  const group = useMissionStore((state) => state.objectiveGroups[groupId]);
  const checkedKeys = useMissionStore((state) => state.checkedKeys);

  if (!group || group.isHidden) {
    return null;
  }
  return (
    <div className="c-objective-list__group">
      {group.objectiveIds.map((objectiveId) => (
        <ObjectiveRow
          key={objectiveId}
          objectiveId={objectiveId}
          missionId={missionId}
          checkedKeys={checkedKeys}
        />
      ))}
    </div>
  );
}
