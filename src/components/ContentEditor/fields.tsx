import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';
import { useEditStore } from '@/stores/useEditStore';
import { useMissionStore } from '@/stores/useMissionStore';

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

// Numeric stepper. Defaults (step 1, min 0, no max, no wrap) match the original
// retention-hours use; `max`/`step`/`wrap`/`format` support the bounded, wrapping
// deadline hour/minute steppers.
export function Stepper(props: {
  labelKey: string;
  value: number;
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
  wrap?: boolean;
  format?: (value: number) => string;
  onChange: (value: number) => void;
}) {
  const {
    labelKey,
    value,
    disabled = false,
    step = 1,
    min = 0,
    max,
    wrap = false,
    format,
    onChange,
  } = props;

  const atMin = value <= min;
  const atMax = max !== undefined && value >= max;

  const dec = () => {
    if (atMin) {
      if (wrap && max !== undefined) onChange(max);
      return;
    }
    onChange(value - step);
  };
  const inc = () => {
    if (atMax) {
      if (wrap) onChange(min);
      return;
    }
    onChange(value + step);
  };

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
          disabled={disabled || (atMin && !wrap)}
          onClick={dec}
        >
          −
        </button>
        <span className="c-content-editor__stepper-value">
          {format ? format(value) : value}
        </span>
        <button
          type="button"
          className="c-content-editor__icon-btn"
          disabled={disabled || (atMax && !wrap)}
          onClick={inc}
        >
          ＋
        </button>
      </span>
    </div>
  );
}

const TIME_MODES = ['freestyle', 'challenge', 'deadline'] as const;
export type TimeMode = (typeof TIME_MODES)[number];

const MODE_LABEL_KEYS: Record<TimeMode, string> = {
  freestyle: 'contentEditor.modeFreestyle',
  challenge: 'contentEditor.modeChallenge',
  deadline: 'contentEditor.modeDeadline',
};

// Mission time-mode selector: three D-pad-focusable buttons (no native select),
// the active one marked `aria-pressed` / `is-on`.
export function ModeField(props: {
  value: TimeMode;
  disabled?: boolean;
  onChange: (value: TimeMode) => void;
}) {
  const { value, disabled = false, onChange } = props;

  return (
    <div className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey="contentEditor.fieldTimeMode"
      />
      <span className="c-content-editor__stepper">
        {TIME_MODES.map((mode) => (
          <button
            key={mode}
            type="button"
            className={`c-content-editor__toggle ${mode === value ? 'is-on' : ''}`}
            aria-pressed={mode === value}
            disabled={disabled}
            onClick={() => onChange(mode)}
          >
            <Typography textKey={MODE_LABEL_KEYS[mode]} />
          </button>
        ))}
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

// Compact colour picker: a swatch button that opens a small popup of the
// palette. Keeps the inline objective editor to a single row when closed. The
// palette comes from the `color` collection; value and onPick are colour ids.
export function ColorField(props: {
  value: string;
  disabled?: boolean;
  onPick: (colorId: string) => void;
}) {
  const { value, disabled = false, onPick } = props;
  const colorList = useMissionStore((state) => state.colorList);
  const colors = useMissionStore((state) => state.colors);
  const [open, setOpen] = useState(false);

  const selected = colors[value];

  return (
    <div className="c-content-editor__color">
      <button
        type="button"
        className="c-content-editor__color-trigger"
        style={{ backgroundColor: selected?.value }}
        aria-label={selected?.label ?? value}
        aria-expanded={open}
        disabled={disabled}
        onClick={() => setOpen((current) => !current)}
      />
      {open ? (
        <div className="c-content-editor__color-menu" role="group">
          {colorList.map((color) => (
            <button
              key={color.id}
              type="button"
              className={`c-content-editor__swatch ${
                color.id === value ? 'is-selected' : ''
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.label}
              aria-pressed={color.id === value}
              onClick={() => {
                onPick(color.id);
                setOpen(false);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

// Compact hidden switch: the button itself shows the current state
// (Visible / Hidden), so no separate field label is needed.
export function HiddenToggle(props: {
  hidden: boolean;
  disabled?: boolean;
  onToggle: (hidden: boolean) => void;
}) {
  const { hidden, disabled = false, onToggle } = props;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={hidden}
      disabled={disabled}
      className={`c-content-editor__toggle ${hidden ? 'is-on' : ''}`}
      onClick={() => onToggle(!hidden)}
    >
      <Typography
        textKey={hidden ? 'contentEditor.hidden' : 'contentEditor.visible'}
      />
    </button>
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
