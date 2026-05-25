import type { ChangeEvent } from 'react';
import { useDashboardStore } from '../stores/useDashboardStore';

export default function ListSelector() {
  const lists = useDashboardStore((state) => state.lists);
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const setSelectedIndex = useDashboardStore((state) => state.setSelectedIndex);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(Number(event.target.value));
  };

  return (
    <select
      className="m-[0.5vw] text-[16px] px-[10px] py-[5px] rounded cursor-pointer bg-transparent border border-white/20 hover:bg-[#b2b2b2]"
      value={selectedIndex}
      onChange={handleChange}
    >
      {lists.map((list, index) => (
        <option key={list.listId ?? index} value={index}>
          {list.label}
        </option>
      ))}
    </select>
  );
}
