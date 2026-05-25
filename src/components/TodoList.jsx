import { useDashboardStore } from '../stores/useDashboardStore.js';

export default function TodoList({ list }) {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);
  const toggleItem = useDashboardStore((state) => state.toggleItem);

  const renderList = (items, groupKey) => {
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
                checked ? 'line-through checked' : ''
              }`}
              style={{ color: item.color }}
              onClick={() => toggleItem(key)}
            >
              <span className="text-[18px] py-[1vw] px-[0.5vw] font-normal md:text-[22px]">{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {renderList(list.toDos, 'main')}
      {renderList(list.toDos2, 'extra')}
    </>
  );
}
