import { ActionButton, DeleteControl } from './controls';
import { ColorField, HiddenToggle } from './fields';

type ObjectiveDraft = { label: string; color: string; isHidden: boolean };

// One objective edited in place inside its group, kept to a single compact
// row: label input, popup colour picker, hidden switch (state in the button),
// then Move / Delete. Field edits go to the group's batched draft; Move and
// Delete are immediate structural actions.
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
      <input
        className="c-content-editor__obj-label"
        type="text"
        value={value.label}
        disabled={disabled}
        onChange={(event) => onChange({ label: event.target.value })}
      />
      <ColorField
        value={value.color}
        disabled={disabled}
        onPick={(color) => onChange({ color })}
      />
      <HiddenToggle
        hidden={value.isHidden}
        disabled={disabled}
        onToggle={(isHidden) => onChange({ isHidden })}
      />
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
  );
}
