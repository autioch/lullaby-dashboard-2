import './ObjectiveList.css';
import { Objective } from './Objective';
import { useDashboardStore } from '@/stores/useDashboardStore';

export function ObjectiveList() {
  const selectedList = useDashboardStore(
    (state) => state.lists[state.selectedIndex]
  );
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);

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
              const checked = Boolean(checkedKeys[key]);

              return (
                <Objective key={key} item={item} checked={checked} hash={key} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
