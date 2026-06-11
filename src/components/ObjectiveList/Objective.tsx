import { useMissionStore, type MissionLSState } from '@/stores/useMissionStore';
import './Objective.css';

const { toggleObjective } = useMissionStore.getState();

type ObjectiveProps = {
  objectiveId: string;
  missionId: string;
  checkedKeys: MissionLSState['checkedKeys'];
};

export function ObjectiveRow(props: ObjectiveProps) {
  const { objectiveId, missionId, checkedKeys } = props;
  const checked = !!checkedKeys[missionId]?.[objectiveId];
  const objective = useMissionStore((state) => state.objectives[objectiveId]);
  const color = useMissionStore((state) =>
    objective ? state.colors[objective.colorId]?.value : undefined
  );

  if (!objective || objective.isHidden) {
    return null;
  }
  return (
    <div
      className={`c-objective ${checked ? 'c-objective--checked' : ''}`}
      style={{ color }}
      onClick={() => {
        toggleObjective(objective.id);
      }}
    >
      <span className="c-objective__state">{checked ? '✓' : ''}</span>
      <span className="c-objective__text">{objective.label}</span>
    </div>
  );
}
