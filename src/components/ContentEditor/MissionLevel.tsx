import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { useMissionStore } from '@/stores/useMissionStore';
import { useEditStore } from '@/stores/useEditStore';
import { useTimerStore } from '@/stores/useTimerStore';
import {
  ActionButton,
  AddButton,
  DeleteControl,
  EmptyNote,
  Header,
  RowLabel,
} from './controls';
import { ModeField, SaveBar, Stepper, TextField } from './fields';
import { parseHhMm, formatHhMm } from '@/stores/missionTime';

const pad2 = (n: number) => n.toString().padStart(2, '0');
const DEFAULT_DEADLINE = '07:00';

const edit = useEditStore.getState();
const { resetBest } = useTimerStore.getState();

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
  const hasBest = useTimerStore((state) =>
    missionId ? state.bestByMission[missionId] !== undefined : false
  );

  const [draft, setDraft] = useState({
    label: mission?.label ?? '',
    youtubeUrl: mission?.youtubeUrl ?? '',
    retentionHours: mission?.retentionHours ?? 0,
    timeMode: mission?.timeMode ?? ('freestyle' as const),
    deadlineTime: mission?.deadlineTime ?? DEFAULT_DEADLINE,
  });

  if (!missionId || !mission) {
    return <Header trail={[{ textKey: 'contentEditor.missionTitle' }]} />;
  }

  const savedMode = mission.timeMode ?? 'freestyle';
  const deadline = parseHhMm(draft.deadlineTime) ?? { hour: 7, minute: 0 };
  const dirty =
    draft.label !== mission.label ||
    draft.youtubeUrl !== mission.youtubeUrl ||
    draft.retentionHours !== mission.retentionHours ||
    draft.timeMode !== savedMode ||
    (draft.timeMode === 'deadline' &&
      draft.deadlineTime !== mission.deadlineTime);

  return (
    <>
      <Header
        trail={[
          {
            textKey: 'contentEditor.missionsTitle',
            onClick: () => edit.goMissions(),
          },
          { raw: mission.label },
        ]}
      />
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
      <ModeField
        value={draft.timeMode}
        disabled={pending}
        onChange={(timeMode) =>
          setDraft((current) => ({ ...current, timeMode }))
        }
      />
      {draft.timeMode === 'deadline' ? (
        <div className="c-content-editor__field-row">
          <Stepper
            labelKey="contentEditor.fieldDeadlineHour"
            value={deadline.hour}
            min={0}
            max={23}
            wrap
            format={pad2}
            disabled={pending}
            onChange={(hour) =>
              setDraft((current) => ({
                ...current,
                deadlineTime: formatHhMm(hour, deadline.minute),
              }))
            }
          />
          <Stepper
            labelKey="contentEditor.fieldDeadlineMinute"
            value={deadline.minute}
            min={0}
            max={55}
            step={5}
            wrap
            format={pad2}
            disabled={pending}
            onChange={(minute) =>
              setDraft((current) => ({
                ...current,
                deadlineTime: formatHhMm(deadline.hour, minute),
              }))
            }
          />
        </div>
      ) : null}
      <SaveBar
        controlId={saveId}
        dirty={dirty}
        onSave={() =>
          edit.updateMission(saveId, mission.id, {
            label: draft.label,
            youtubeUrl: draft.youtubeUrl,
            retentionHours: draft.retentionHours,
            timeMode: draft.timeMode,
            ...(draft.timeMode === 'deadline'
              ? { deadlineTime: draft.deadlineTime }
              : {}),
          })
        }
        onCancel={() =>
          setDraft({
            label: mission.label,
            youtubeUrl: mission.youtubeUrl,
            retentionHours: mission.retentionHours,
            timeMode: mission.timeMode ?? 'freestyle',
            deadlineTime: mission.deadlineTime ?? DEFAULT_DEADLINE,
          })
        }
      />

      {hasBest ? (
        <ActionButton
          textKey="contentEditor.resetBest"
          variant="danger"
          onClick={() => {
            if (confirm('Reset best time?')) {
              resetBest(mission.id);
            }
          }}
        />
      ) : null}

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
