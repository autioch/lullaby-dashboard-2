import './Objective.css';
import { type ToDoItem } from '@/types';
import { useDashboardStore } from '@/stores/useDashboardStore';

type ObjectiveProps = {
  item: ToDoItem;
  checked: boolean;
  hash: string;
};

const { toggleItem } = useDashboardStore.getState();

export function Objective(props: ObjectiveProps) {
  const { item, checked, hash } = props;

  return (
    <div
      className={`c-objective ${checked ? 'c-objective--checked' : ''}`}
      style={{ color: item.color }}
      onClick={() => toggleItem(hash)}
    >
      <span className="c-objective__state">{checked ? '✓' : ''}</span>
      <span className="c-objective__text">{item.name}</span>
    </div>
  );
}
