import type { ChangeEvent } from "react";
import { useDashboardStore } from "../stores/useDashboardStore";

export default function ListSelector() {
  const lists = useDashboardStore((state) => state.lists);
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const setSelectedIndex = useDashboardStore((state) => state.setSelectedIndex);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndex(Number(event.target.value));
  };

  return (
    <div className="list-selector">
      <select
        className="list-selector__select"
        value={selectedIndex}
        onChange={handleChange}
      >
        {lists.map((list, index) => (
          <option key={list.listId ?? index} value={index}>
            {list.label}
          </option>
        ))}
      </select>
    </div>
  );
}
