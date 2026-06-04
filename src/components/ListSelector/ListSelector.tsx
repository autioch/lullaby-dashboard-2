import './ListSelector.css';
import type { ChangeEvent } from 'react';
import { useDashboardStore } from '@/stores/useDashboardStore';

const { setSelectedIndex } = useDashboardStore.getState();

export default function ListSelector() {
  const lists = useDashboardStore((state) => state.lists);
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);

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
          <option key={list.id ?? index} value={index}>
            {list.label}
          </option>
        ))}
      </select>
    </div>
  );
}
