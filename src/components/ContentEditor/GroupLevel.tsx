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
  RowSwatch,
} from './controls';
import { SaveBar, TextField, Toggle } from './fields';

const edit = useEditStore.getState();

// Group detail: editable fields committed as one form, then the group's
// ordered objectives (Edit / Move / Delete) and Add objective.
export function GroupLevel() {
  const groupId = useEditStore((state) => state.selectedGroupId);
  const group = useMissionStore((state) =>
    groupId ? state.objectiveGroups[groupId] : undefined
  );
  const objectives = useMissionStore((state) => state.objectives);
  const saveId = `group-save-${groupId}`;
  const pending = useEditStore((state) => Boolean(state.pending[saveId]));

  const [draft, setDraft] = useState({
    label: group?.label ?? '',
    isHidden: group?.isHidden ?? false,
  });

  if (!groupId || !group) {
    return <Header titleKey="contentEditor.groupTitle" />;
  }

  const dirty =
    draft.label !== group.label || draft.isHidden !== group.isHidden;

  return (
    <>
      <Header rawTitle={group.label} />
      <TextField
        labelKey="contentEditor.fieldLabel"
        value={draft.label}
        disabled={pending}
        onChange={(label) => setDraft((current) => ({ ...current, label }))}
      />
      <Toggle
        labelKey="contentEditor.fieldHidden"
        checked={draft.isHidden}
        disabled={pending}
        onToggle={(isHidden) =>
          setDraft((current) => ({ ...current, isHidden }))
        }
      />
      <SaveBar
        controlId={saveId}
        dirty={dirty}
        onSave={() => edit.updateGroup(saveId, group.id, draft)}
        onCancel={() =>
          setDraft({ label: group.label, isHidden: group.isHidden })
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
            <div className="c-content-editor__row" key={objectiveId}>
              <RowSwatch color={objective.color} />
              <RowLabel label={objective.label} />
              <div className="c-content-editor__row-actions">
                <ActionButton
                  textKey="contentEditor.edit"
                  onClick={() => edit.openObjective(objectiveId)}
                />
                <ActionButton
                  textKey="contentEditor.moveUp"
                  controlId={`objective-move-${objectiveId}`}
                  disabled={index === 0}
                  onClick={() =>
                    edit.moveObjective(
                      `objective-move-${objectiveId}`,
                      group.id,
                      objectiveId,
                      'up'
                    )
                  }
                />
                <ActionButton
                  textKey="contentEditor.moveDown"
                  controlId={`objective-move-${objectiveId}`}
                  disabled={index === group.objectiveIds.length - 1}
                  onClick={() =>
                    edit.moveObjective(
                      `objective-move-${objectiveId}`,
                      group.id,
                      objectiveId,
                      'down'
                    )
                  }
                />
                <DeleteControl
                  kind="objective"
                  id={objectiveId}
                  controlId={`objective-delete-${objectiveId}`}
                  onDelete={() =>
                    edit.deleteObjective(
                      `objective-delete-${objectiveId}`,
                      objectiveId
                    )
                  }
                />
              </div>
            </div>
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
    </>
  );
}
