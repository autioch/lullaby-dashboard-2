export default function TodoList({ list, checkedKeys, onToggle }) {
  const renderList = (items, groupKey) => {
    if (!items?.length) return null;

    return (
      <ul className="list">
        {items.map((item, index) => {
          const key = `${list.listId}-${groupKey}-${index}`;
          const checked = Boolean(checkedKeys[key]);

          return (
            <li
              key={key}
              className={`list-element${checked ? ' checked' : ''}`}
              style={{ color: item.color }}
              onClick={() => onToggle(key)}
            >
              {item.name}
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
