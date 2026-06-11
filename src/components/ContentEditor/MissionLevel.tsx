import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
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
import { SaveBar, Stepper, TextField } from './fields';

const edit = useEditStore.getState();

// Mission detail: editable fields committed as one form, then the mission's
// ordered groups (Edit / Move / Delete) and Add group. Mounted with a key on
// the mission id, so the draft re-seeds when a different mission is opened.
export function MissionLevel() {
  const missionId = useEditStore((state) => state.selectedMissionId);
  const mission = useMissionStore((state) =>
    missionId ? state.missions[missionId] : undefined
  );
  const groups = useMissionStore((state) => state.objectiveGroups);
  const saveId = `mission-save-${missionId}`;
  const pending = useEditStore((state) => Boolean(state.pending[saveId]));

  const [draft, setDraft] = useState({
    label: mission?.label ?? '',
    youtubeUrl: mission?.youtubeUrl ?? '',
    retentionHours: mission?.retentionHours ?? 0,
  });

  if (!missionId || !mission) {
    return <Header titleKey="contentEditor.missionTitle" />;
  }

  const dirty =
    draft.label !== mission.label ||
    draft.youtubeUrl !== mission.youtubeUrl ||
    draft.retentionHours !== mission.retentionHours;

  return (
    <>
      <Header rawTitle={mission.label} />
      <TextField
        labelKey="contentEditor.fieldLabel"
        value={draft.label}
        disabled={pending}
        onChange={(label) => setDraft((current) => ({ ...current, label }))}
      />
      <TextField
        labelKey="contentEditor.fieldYoutubeUrl"
        value={draft.youtubeUrl}
        disabled={pending}
        onChange={(youtubeUrl) =>
          setDraft((current) => ({ ...current, youtubeUrl }))
        }
      />
      <Stepper
        labelKey="contentEditor.fieldRetentionHours"
        value={draft.retentionHours}
        disabled={pending}
        onChange={(retentionHours) =>
          setDraft((current) => ({ ...current, retentionHours }))
        }
      />
      <SaveBar
        controlId={saveId}
        dirty={dirty}
        onSave={() => edit.updateMission(saveId, mission.id, draft)}
        onCancel={() =>
          setDraft({
            label: mission.label,
            youtubeUrl: mission.youtubeUrl,
            retentionHours: mission.retentionHours,
          })
        }
      />

      <Typography
        as="div"
        size="large"
        className="c-content-editor__heading"
        textKey="contentEditor.groupsHeading"
      />
      <div className="c-content-editor__list">
        {mission.objectiveGroupIds.length === 0 ? (
          <EmptyNote textKey="contentEditor.noGroups" />
        ) : null}
        {mission.objectiveGroupIds.map((groupId, index) => {
          const group = groups[groupId];
          if (!group) {
            return null;
          }
          return (
            <div className="c-content-editor__row" key={groupId}>
              <RowLabel label={group.label} />
              <div className="c-content-editor__row-actions">
                <ActionButton
                  textKey="contentEditor.edit"
                  onClick={() => edit.openGroup(groupId)}
                />
                <ActionButton
                  textKey="contentEditor.moveUp"
                  controlId={`group-move-${groupId}`}
                  disabled={index === 0}
                  onClick={() =>
                    edit.moveGroup(
                      `group-move-${groupId}`,
                      mission.id,
                      groupId,
                      'up'
                    )
                  }
                />
                <ActionButton
                  textKey="contentEditor.moveDown"
                  controlId={`group-move-${groupId}`}
                  disabled={index === mission.objectiveGroupIds.length - 1}
                  onClick={() =>
                    edit.moveGroup(
                      `group-move-${groupId}`,
                      mission.id,
                      groupId,
                      'down'
                    )
                  }
                />
                <DeleteControl
                  kind="group"
                  id={groupId}
                  controlId={`group-delete-${groupId}`}
                  onDelete={() =>
                    edit.deleteGroup(`group-delete-${groupId}`, groupId)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <AddButton
        textKey="contentEditor.addGroup"
        controlId={`group-create-${mission.id}`}
        onClick={() =>
          edit.createGroup(`group-create-${mission.id}`, mission.id)
        }
      />
    </>
  );
}
