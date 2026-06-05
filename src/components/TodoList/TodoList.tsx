import './TodoList.css';
import type { SavedList } from '@/types';
import { TodoItem } from './Item';
import { Typography } from '@/components/Typography/Typography';
import { useDashboardStore } from '@/stores/useDashboardStore';

type TodoListProps = {
  list: SavedList;
};

export function TodoList() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const selectedList = lists[selectedIndex] ?? null;

  return (
    <div className="app__content">
      {selectedList ? (
        <TodoListInner list={selectedList} />
      ) : (
        <div className="app__no-list">
          <Typography textKey="app.noLists" />
        </div>
      )}
    </div>
  );
}

function TodoListInner({ list }: TodoListProps) {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);

  return (
    <>
      {list.groups.map((group) => {
        if (!group.items?.length) return null;

        return (
          <div className="todo-list" key={group.id}>
            <ul className="todo-list__group">
              {group.items.map((item) => {
                const key = `${list.id}-${group.id}-${item.id}`;
                const checked = Boolean(checkedKeys[key]);

                return (
                  <TodoItem
                    key={key}
                    item={item}
                    checked={checked}
                    hash={key}
                  />
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
