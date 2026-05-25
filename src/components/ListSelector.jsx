export default function ListSelector({ lists, selectedIndex, onChange }) {
  return (
    <select
      className="select-list"
      value={selectedIndex}
      onChange={(event) => onChange(Number(event.target.value))}
    >
      {lists.map((list, index) => (
        <option key={list.listId ?? index} value={index}>
          {list.label}
        </option>
      ))}
    </select>
  );
}
