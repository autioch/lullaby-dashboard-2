import { useState } from 'react';
import { useMissionStore } from '@/stores/useMissionStore';
import { useEditStore } from '@/stores/useEditStore';
import { Header } from './controls';
import { SaveBar, SwatchPicker, TextField, Toggle } from './fields';

const edit = useEditStore.getState();

// Objective detail: editable fields committed as one form. Objectives have no
// children, so this level is the form alone (delete lives on the group row).
export function ObjectiveLevel() {
  const objectiveId = useEditStore((state) => state.selectedObjectiveId);
  const objective = useMissionStore((state) =>
    objectiveId ? state.objectives[objectiveId] : undefined
  );
  const saveId = `objective-save-${objectiveId}`;
  const pending = useEditStore((state) => Boolean(state.pending[saveId]));

  const [draft, setDraft] = useState({
    label: objective?.label ?? '',
    color: objective?.color ?? '',
    isHidden: objective?.isHidden ?? false,
  });

  if (!objectiveId || !objective) {
    return <Header titleKey="contentEditor.objectiveTitle" />;
  }

  const dirty =
    draft.label !== objective.label ||
    draft.color !== objective.color ||
    draft.isHidden !== objective.isHidden;

  return (
    <>
      <Header rawTitle={objective.label} />
      <TextField
        labelKey="contentEditor.fieldLabel"
        value={draft.label}
        disabled={pending}
        onChange={(label) => setDraft((current) => ({ ...current, label }))}
      />
      <SwatchPicker
        value={draft.color}
        disabled={pending}
        onPick={(color) => setDraft((current) => ({ ...current, color }))}
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
        onSave={() => edit.updateObjective(saveId, objective.id, draft)}
        onCancel={() =>
          setDraft({
            label: objective.label,
            color: objective.color,
            isHidden: objective.isHidden,
          })
        }
      />
    </>
  );
}
