import { type ToDoItem } from '@/types';
import { useDashboardStore } from '@/stores/useDashboardStore';

type TodoItemProps = {
  item: ToDoItem;
  checked: boolean;
  hash: string;
};

const { toggleItem } = useDashboardStore.getState();

export function TodoItem(props: TodoItemProps) {
  const { item, checked, hash } = props;

  return (
    <li
      className={`todo-list__item${checked ? ' todo-list__item--checked' : ''}`}
      style={{ color: item.color }}
      onClick={() => toggleItem(hash)}
    >
      <span className="todo-list__item-text">{item.name}</span>
    </li>
  );
}
