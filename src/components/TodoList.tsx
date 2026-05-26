import { useDashboardStore } from "../stores/useDashboardStore";
import type { SavedList, ToDoItem } from "../types";

type TodoListProps = {
  list: SavedList;
};

export default function TodoList({ list }: TodoListProps) {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const toggleItem = useDashboardStore((state) => state.toggleItem);

  const renderList = (items: ToDoItem[] | undefined, groupKey: string) => {
    if (!items?.length) return null;

    return (
      <div className="todo-list">
        <ul className="todo-list__group">
          {items.map((item, index) => {
            const key = `${list.id}-${groupKey}-${index}`;
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
  };

  return (
    <>
      {renderList(list.toDos, "main")}
      {renderList(list.toDos2, "extra")}
    </>
  );
}
