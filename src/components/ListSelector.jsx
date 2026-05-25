export default function ListSelector({ lists, selectedIndex, onChange }) {
  return (
    <select
      className="m-[0.5vw] text-[16px] px-[10px] py-[5px] rounded cursor-pointer bg-transparent border border-white/20 hover:bg-[#b2b2b2]"
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
