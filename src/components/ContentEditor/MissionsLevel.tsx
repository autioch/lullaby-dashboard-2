import { useMissionStore } from '@/stores/useMissionStore';
import { useEditStore } from '@/stores/useEditStore';
import {
  ActionButton,
  AddButton,
  DeleteControl,
  EmptyNote,
  Header,
  RowLabel,
} from './controls';

const edit = useEditStore.getState();

// Root level: every mission as a row (Edit / Delete) plus Add mission.
export function MissionsLevel() {
  const missionList = useMissionStore((state) => state.missionList);

  return (
    <>
      <Header isRoot trail={[{ textKey: 'contentEditor.missionsTitle' }]} />
      <div className="c-content-editor__list">
        {missionList.length === 0 ? (
          <EmptyNote textKey="contentEditor.noMissions" />
        ) : null}
        {missionList.map((mission) => (
          <div className="c-content-editor__row" key={mission.id}>
            <RowLabel label={mission.label} />
            <div className="c-content-editor__row-actions">
              <ActionButton
                textKey="contentEditor.edit"
                onClick={() => edit.openMission(mission.id)}
              />
              <DeleteControl
                kind="mission"
                id={mission.id}
                controlId={`mission-delete-${mission.id}`}
                onDelete={() =>
                  edit.deleteMission(`mission-delete-${mission.id}`, mission.id)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <AddButton
        textKey="contentEditor.addMission"
        controlId="mission-create"
        onClick={() => edit.createMission('mission-create')}
      />
    </>
  );
}
