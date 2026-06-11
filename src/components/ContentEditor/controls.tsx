import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { useControlsStore } from '@/stores/useControlsStore';
import { useEditStore, type DeleteKind } from '@/stores/useEditStore';

// Shared presentational controls for the content editor. Logic lives in
// useEditStore; these only render and dispatch.

const { closeContentEditor } = useControlsStore.getState();
const edit = useEditStore.getState();

export function Header(props: {
  titleKey?: string;
  rawTitle?: string;
  isRoot?: boolean;
}) {
  const { titleKey, rawTitle, isRoot = false } = props;

  return (
    <div className="c-content-editor__header">
      <Button
        textKey="contentEditor.back"
        onClick={() => (isRoot ? closeContentEditor() : edit.back())}
      />
      {rawTitle !== undefined ? (
        <span className="c-content-editor__title">{rawTitle || '—'}</span>
      ) : (
        <Typography
          as="span"
          size="large"
          className="c-content-editor__title"
          textKey={titleKey ?? ''}
        />
      )}
    </div>
  );
}

// A button bound to a per-control pending flag in useEditStore: while its
// action is in flight it disables and shows the saving label.
export function ActionButton(props: {
  textKey: string;
  onClick: () => void;
  controlId?: string;
  variant?: 'danger';
  disabled?: boolean;
}) {
  const { textKey, onClick, controlId, variant, disabled = false } = props;
  const pending = useEditStore((state) =>
    controlId ? Boolean(state.pending[controlId]) : false
  );

  return (
    <Button
      textKey={pending ? 'contentEditor.pending' : textKey}
      onClick={onClick}
      isLoading={pending}
      disabled={disabled}
      variant={variant}
    />
  );
}

// Delete with an in-overlay confirm step (spec: every delete is confirmed).
export function DeleteControl(props: {
  kind: DeleteKind;
  id: string;
  controlId: string;
  onDelete: () => void;
}) {
  const { kind, id, controlId, onDelete } = props;
  const isConfirming = useEditStore(
    (state) =>
      state.pendingDelete?.kind === kind && state.pendingDelete.id === id
  );

  if (!isConfirming) {
    return (
      <ActionButton
        textKey="contentEditor.delete"
        variant="danger"
        onClick={() => edit.requestDelete(kind, id)}
      />
    );
  }

  return (
    <span className="c-content-editor__confirm" role="group">
      <Typography textKey="contentEditor.confirmDeletePrompt" />
      <ActionButton
        textKey="contentEditor.confirm"
        variant="danger"
        controlId={controlId}
        onClick={onDelete}
      />
      <ActionButton
        textKey="contentEditor.cancel"
        onClick={() => edit.cancelDelete()}
      />
    </span>
  );
}

// Single create-only add action (no attach-existing — the editor presents a
// plain tree; sharing/references are not exposed).
export function AddButton(props: {
  textKey: string;
  controlId: string;
  onClick: () => void;
}) {
  return (
    <div className="c-content-editor__add">
      <ActionButton
        textKey={props.textKey}
        controlId={props.controlId}
        onClick={props.onClick}
      />
    </div>
  );
}

export function RowLabel(props: { label: string }) {
  return (
    <span className="c-content-editor__row-label">{props.label || '—'}</span>
  );
}

export function RowSwatch(props: { color: string }) {
  return (
    <span
      className="c-content-editor__row-swatch"
      style={{ backgroundColor: props.color }}
    />
  );
}

export function EmptyNote(props: { textKey: string }) {
  return (
    <Typography
      as="div"
      className="c-content-editor__empty"
      textKey={props.textKey}
    />
  );
}
