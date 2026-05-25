import { useDashboardStore } from "../stores/useDashboardStore";
import type { SavedList, ToDoItem } from "../stores/useDashboardStore";

type TodoListProps = {
  list: SavedList;
};

export default function TodoList({ list }: TodoListProps) {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const toggleItem = useDashboardStore((state) => state.toggleItem);

  const renderList = (items: ToDoItem[] | undefined, groupKey: string) => {
    if (!items?.length) return null;

    return (
      <ul className="flex flex-col justify-center w-[80%] text-[26px] font-bold pl-[4vw] md:w-[50%] md:overflow-auto md:h-[92vh] md:justify-start">
        {items.map((item, index) => {
          const key = `${list.listId}-${groupKey}-${index}`;
          const checked = Boolean(checkedKeys[key]);

          return (
            <li
              key={key}
              className={`flex justify-between pr-[1vw] relative cursor-pointer hover:bg-[#dadada] ${
                checked ? "line-through checked" : ""
              }`}
              style={{ color: item.color }}
              onClick={() => toggleItem(key)}
            >
              <span className="text-[18px] py-[0.75vw] px-[0.5vw] font-normal md:text-[22px]">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {renderList(list.toDos, "main")}
      {renderList(list.toDos2, "extra")}
    </>
  );
}
