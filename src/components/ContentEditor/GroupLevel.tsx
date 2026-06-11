import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { useMissionStore } from '@/stores/useMissionStore';
import { useEditStore } from '@/stores/useEditStore';
import { AddButton, EmptyNote, Header } from './controls';
import { SaveBar, TextField, Toggle } from './fields';
import { ObjectiveEditor } from './ObjectiveEditor';

const edit = useEditStore.getState();

type ObjectiveDraft = { label: string; color: string; isHidden: boolean };

// Group detail: the group's own fields plus its objectives edited in place
// (no objective drill-down). One Save commits the group and every edited
// objective together; Add / Move / Delete on objectives stay immediate. The
// SaveBar is pinned to the bottom while the objectives list scrolls.
export function GroupLevel() {
  const groupId = useEditStore((state) => state.selectedGroupId);
  const missionId = useEditStore((state) => state.selectedMissionId);
  const group = useMissionStore((state) =>
    groupId ? state.objectiveGroups[groupId] : undefined
  );
  const mission = useMissionStore((state) =>
    missionId ? state.missions[missionId] : undefined
  );
  const objectives = useMissionStore((state) => state.objectives);
  const saveId = `group-save-${groupId}`;
  const pending = useEditStore((state) => Boolean(state.pending[saveId]));

  const [groupDraft, setGroupDraft] = useState({
    label: group?.label ?? '',
    isHidden: group?.isHidden ?? false,
  });
  // Per-objective field drafts keyed by id. An absent entry means "unchanged"
  // and falls back to the live entity, so objectives added/removed while
  // editing need no re-seed.
  const [objDrafts, setObjDrafts] = useState<Record<string, ObjectiveDraft>>(
    {}
  );

  if (!groupId || !group) {
    return <Header trail={[{ textKey: 'contentEditor.groupTitle' }]} />;
  }

  function objValue(id: string): ObjectiveDraft {
    const draft = objDrafts[id];
    if (draft) {
      return draft;
    }
    const objective = objectives[id];
    return {
      label: objective?.label ?? '',
      color: objective?.color ?? '',
      isHidden: objective?.isHidden ?? false,
    };
  }

  function objectiveDirty(id: string): boolean {
    const draft = objDrafts[id];
    const objective = objectives[id];
    if (!draft || !objective) {
      return false;
    }
    return (
      draft.label !== objective.label ||
      draft.color !== objective.color ||
      draft.isHidden !== objective.isHidden
    );
  }

  const groupDirty =
    groupDraft.label !== group.label || groupDraft.isHidden !== group.isHidden;
  const dirtyObjectiveIds = group.objectiveIds.filter(objectiveDirty);
  const dirty = groupDirty || dirtyObjectiveIds.length > 0;

  function save() {
    if (!group) {
      return;
    }
    const groupPatch = groupDirty
      ? { label: groupDraft.label, isHidden: groupDraft.isHidden }
      : null;
    const objectivePatches = dirtyObjectiveIds.map((id) => ({
      id,
      ...objDrafts[id],
    }));
    edit.saveGroup(saveId, group.id, groupPatch, objectivePatches);
  }

  function cancel() {
    if (!group) {
      return;
    }
    setGroupDraft({ label: group.label, isHidden: group.isHidden });
    setObjDrafts({});
  }

  return (
    <>
      <Header
        trail={[
          {
            textKey: 'contentEditor.missionsTitle',
            onClick: () => edit.goMissions(),
          },
          {
            raw: mission?.label ?? '',
            onClick: missionId ? () => edit.openMission(missionId) : undefined,
          },
          { raw: group.label },
        ]}
      />
      <TextField
        labelKey="contentEditor.fieldLabel"
        value={groupDraft.label}
        disabled={pending}
        onChange={(label) =>
          setGroupDraft((current) => ({ ...current, label }))
        }
      />
      <Toggle
        labelKey="contentEditor.fieldHidden"
        checked={groupDraft.isHidden}
        disabled={pending}
        onToggle={(isHidden) =>
          setGroupDraft((current) => ({ ...current, isHidden }))
        }
      />

      <Typography
        as="div"
        size="large"
        className="c-content-editor__heading"
        textKey="contentEditor.objectivesHeading"
      />
      <div className="c-content-editor__list">
        {group.objectiveIds.length === 0 ? (
          <EmptyNote textKey="contentEditor.noObjectives" />
        ) : null}
        {group.objectiveIds.map((objectiveId, index) => {
          const objective = objectives[objectiveId];
          if (!objective) {
            return null;
          }
          return (
            <ObjectiveEditor
              key={objectiveId}
              objectiveId={objectiveId}
              value={objValue(objectiveId)}
              disabled={pending}
              onChange={(patch) =>
                setObjDrafts((current) => ({
                  ...current,
                  [objectiveId]: { ...objValue(objectiveId), ...patch },
                }))
              }
              canMoveUp={index !== 0}
              canMoveDown={index !== group.objectiveIds.length - 1}
              onMoveUp={() =>
                edit.moveObjective(
                  `objective-move-${objectiveId}`,
                  group.id,
                  objectiveId,
                  'up'
                )
              }
              onMoveDown={() =>
                edit.moveObjective(
                  `objective-move-${objectiveId}`,
                  group.id,
                  objectiveId,
                  'down'
                )
              }
              onDelete={() =>
                edit.deleteObjective(
                  `objective-delete-${objectiveId}`,
                  objectiveId
                )
              }
            />
          );
        })}
      </div>

      <AddButton
        textKey="contentEditor.addObjective"
        controlId={`objective-create-${group.id}`}
        onClick={() =>
          edit.createObjective(`objective-create-${group.id}`, group.id)
        }
      />

      <div className="c-content-editor__footer">
        <SaveBar
          controlId={saveId}
          dirty={dirty}
          onSave={save}
          onCancel={cancel}
        />
      </div>
    </>
  );
}
