import { useDashboardStore } from "../../stores/useDashboardStore";
import "./TodoList.css";
import type { SavedList, ToDoItem } from "../../types";
import Typography from "../Typography/Typography";

type TodoListProps = {
  list: SavedList;
};

const { toggleItem } = useDashboardStore.getState();

export default function TodoList() {
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const selectedList = lists[selectedIndex] ?? null;

  return (
    <section className="app__content">
      {selectedList ? (
        <TodoListInner list={selectedList} />
      ) : (
        <div className="app__no-list">
          <Typography textKey="app.noLists" />
        </div>
      )}
    </section>
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
