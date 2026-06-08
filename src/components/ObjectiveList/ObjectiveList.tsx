import './ObjectiveList.css';
import { ObjectiveRow } from './Objective';
import { useMissionStore, useMission } from '@/stores/useMissionStore';

export function ObjectiveList() {
  const mission = useMission();
  const checkedKeys = useMissionStore((state) => state.checkedKeys);

  if (!mission) {
    return null;
  }

  return (
    <div className="c-objective-list">
      {mission.groups.map((group) => {
        if (!group.items?.length) return null;

        return (
          <div className="c-objective-list__group" key={group.id}>
            {group.items.map((item) => {
              const key = `${mission.id}-${group.id}-${item.id}`;

              return (
                <ObjectiveRow
                  key={key}
                  item={item}
                  hash={key}
                  list={mission}
                  checkedKeys={checkedKeys}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
