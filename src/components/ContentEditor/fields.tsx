import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { useEditStore } from '@/stores/useEditStore';
import { COLOR_PALETTE } from './constants';

// Controlled field inputs. They edit a local draft owned by the level above;
// nothing persists until the SaveBar commits the whole form.

export function TextField(props: {
  labelKey: string;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}) {
  const { labelKey, value, disabled = false, onChange } = props;

  return (
    <label className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey={labelKey}
      />
      <input
        className="c-content-editor__input"
        type="text"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function Stepper(props: {
  labelKey: string;
  value: number;
  disabled?: boolean;
  onChange: (value: number) => void;
}) {
  const { labelKey, value, disabled = false, onChange } = props;

  return (
    <div className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey={labelKey}
      />
      <span className="c-content-editor__stepper">
        <button
          type="button"
          className="c-content-editor__icon-btn"
          disabled={disabled || value <= 0}
          onClick={() => onChange(value - 1)}
        >
          −
        </button>
        <span className="c-content-editor__stepper-value">{value}</span>
        <button
          type="button"
          className="c-content-editor__icon-btn"
          disabled={disabled}
          onClick={() => onChange(value + 1)}
        >
          ＋
        </button>
      </span>
    </div>
  );
}

export function Toggle(props: {
  labelKey: string;
  checked: boolean;
  disabled?: boolean;
  onToggle: (value: boolean) => void;
}) {
  const { labelKey, checked, disabled = false, onToggle } = props;

  return (
    <div className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey={labelKey}
      />
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={`c-content-editor__toggle ${checked ? 'is-on' : ''}`}
        onClick={() => onToggle(!checked)}
      >
        <Typography
          textKey={
            checked ? 'contentEditor.toggleOn' : 'contentEditor.toggleOff'
          }
        />
      </button>
    </div>
  );
}

export function SwatchPicker(props: {
  value: string;
  disabled?: boolean;
  onPick: (color: string) => void;
}) {
  const { value, disabled = false, onPick } = props;

  return (
    <div className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey="contentEditor.fieldColor"
      />
      <div className="c-content-editor__swatches" role="group">
        {COLOR_PALETTE.map((color) => (
          <button
            key={color}
            type="button"
            className={`c-content-editor__swatch ${
              color === value ? 'is-selected' : ''
            }`}
            style={{ backgroundColor: color }}
            aria-label={color}
            aria-pressed={color === value}
            disabled={disabled}
            onClick={() => onPick(color)}
          />
        ))}
      </div>
    </div>
  );
}

// Explicit commit/revert for a whole entity form. Save is enabled only when
// the draft differs from the saved entity; while saving it shows the pending
// label (per-control flag from useEditStore).
export function SaveBar(props: {
  controlId: string;
  dirty: boolean;
  onSave: () => void;
  onCancel: () => void;
}) {
  const { controlId, dirty, onSave, onCancel } = props;
  const pending = useEditStore((state) => Boolean(state.pending[controlId]));

  return (
    <div className="c-content-editor__savebar">
      <Button
        textKey={pending ? 'contentEditor.pending' : 'contentEditor.save'}
        onClick={onSave}
        isLoading={pending}
        disabled={!dirty}
      />
      <Button
        textKey="contentEditor.cancel"
        onClick={onCancel}
        disabled={!dirty || pending}
      />
    </div>
  );
}
