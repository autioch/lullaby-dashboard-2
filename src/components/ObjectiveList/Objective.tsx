import './Objective.css';
import { type Mission, type Objective } from '@/types';
import { useMissionStore } from '@/stores/useMissionStore';
import { useTimerStore } from '@/stores/useTimerStore';

type ObjectiveProps = {
  item: Objective;
  list: Mission;
  hash: string;
  checkedKeys: Record<string, boolean>;
};

const { toggleItem } = useMissionStore.getState();
const { checkFinished } = useTimerStore.getState();

export function ObjectiveRow(props: ObjectiveProps) {
  const { item, checkedKeys, hash, list } = props;
  const checked = Boolean(checkedKeys[hash]);

  return (
    <div
      className={`c-objective ${checked ? 'c-objective--checked' : ''}`}
      style={{ color: item.color }}
      onClick={() => {
        toggleItem(hash);
        checkFinished(list, checkedKeys);
      }}
    >
      <span className="c-objective__state">{checked ? '✓' : ''}</span>
      <span className="c-objective__text">{item.name}</span>
    </div>
  );
}
