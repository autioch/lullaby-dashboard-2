import './ObjectiveList.css';
import { Objective } from './Objective';
import { useMissionStore } from '@/stores/useMissionStore';

export function ObjectiveList() {
  const selectedList = useMissionStore(
    (state) => state.lists[state.selectedIndex]
  );
  const checkedKeys = useMissionStore((state) => state.checkedKeys);

  if (!selectedList) {
    return null;
  }

  return (
    <div className="c-objective-list">
      {selectedList.groups.map((group) => {
        if (!group.items?.length) return null;

        return (
          <div className="c-objective-list__group" key={group.id}>
            {group.items.map((item) => {
              const key = `${selectedList.id}-${group.id}-${item.id}`;

              return (
                <Objective
                  key={key}
                  item={item}
                  hash={key}
                  list={selectedList}
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
