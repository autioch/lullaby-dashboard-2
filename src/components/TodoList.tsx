import { useDashboardStore } from "../stores/useDashboardStore";
import type { SavedList, ToDoItem } from "../types";

type TodoListProps = {
  list: SavedList;
};

export default function TodoList({ list }: TodoListProps) {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const toggleItem = useDashboardStore((state) => state.toggleItem);

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
                  <li
                    key={key}
                    className={`todo-list__item${checked ? " todo-list__item--checked" : ""}`}
                    style={{ color: item.color }}
                    onClick={() => toggleItem(key)}
                  >
                    <span className="todo-list__item-text">{item.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
