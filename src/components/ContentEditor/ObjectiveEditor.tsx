import { ActionButton, DeleteControl } from './controls';
import { SwatchPicker, TextField, Toggle } from './fields';

type ObjectiveDraft = { label: string; color: string; isHidden: boolean };

// One objective edited in place inside its group. Field edits go to the
// group's batched draft (committed by the group SaveBar); Move and Delete are
// immediate structural actions, like the rest of the editor.
export function ObjectiveEditor(props: {
  objectiveId: string;
  value: ObjectiveDraft;
  disabled: boolean;
  onChange: (patch: Partial<ObjectiveDraft>) => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDelete: () => void;
}) {
  const {
    objectiveId,
    value,
    disabled,
    onChange,
    canMoveUp,
    canMoveDown,
    onMoveUp,
    onMoveDown,
    onDelete,
  } = props;

  const moveControlId = `objective-move-${objectiveId}`;

  return (
    <div className="c-content-editor__obj">
      <TextField
        labelKey="contentEditor.fieldLabel"
        value={value.label}
        disabled={disabled}
        onChange={(label) => onChange({ label })}
      />
      <SwatchPicker
        value={value.color}
        disabled={disabled}
        onPick={(color) => onChange({ color })}
      />
      <Toggle
        labelKey="contentEditor.fieldHidden"
        checked={value.isHidden}
        disabled={disabled}
        onToggle={(isHidden) => onChange({ isHidden })}
      />
      <div className="c-content-editor__row-actions">
        <ActionButton
          textKey="contentEditor.moveUp"
          controlId={moveControlId}
          disabled={!canMoveUp}
          onClick={onMoveUp}
        />
        <ActionButton
          textKey="contentEditor.moveDown"
          controlId={moveControlId}
          disabled={!canMoveDown}
          onClick={onMoveDown}
        />
        <DeleteControl
          kind="objective"
          id={objectiveId}
          controlId={`objective-delete-${objectiveId}`}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
