import './ContentEditor.css';
import { useEffect, useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { useControlsStore } from '@/stores/useControlsStore';
import { useMissionStore } from '@/stores/useMissionStore';
import { useEditStore, type DeleteKind } from '@/stores/useEditStore';
import { Overlay } from '../Overlay/Overlay';
import { Panel } from '../Panel/Panel';
import { Layout } from '../Layout/Layout';

// Fixed swatch palette (no hex typing on a TV). First entry matches the
// server-side create default in api/content/objectives.ts.
const COLOR_PALETTE = ['#faa', '#afa', '#aaf', '#ffd', '#f1f1f1', '#ffffff'];

const { closeContentEditor } = useControlsStore.getState();
const edit = useEditStore.getState();

// Presentation-only editor. All logic lives in useEditStore; entities are read
// live from useMissionStore so onSnapshot updates re-render the editor.
export function ContentEditor() {
  const level = useEditStore((state) => state.level);
  const errorKey = useEditStore((state) => state.errorKey);

  useEffect(() => {
    useEditStore.getState().reset();

    // Escape / TV Back steps up a level, or closes the overlay at the root.
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') {
        return;
      }
      const state = useEditStore.getState();
      if (state.level === 'missions') {
        closeContentEditor();
      } else {
        state.back();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Overlay className="c-content-editor">
      <Panel>
        <Layout className="c-content-editor__layout">
          {errorKey ? (
            <Typography
              as="div"
              className="c-content-editor__error"
              textKey={errorKey}
            />
          ) : null}
          {level === 'missions' ? <MissionsLevel /> : null}
          {level === 'mission' ? <MissionLevel /> : null}
          {level === 'group' ? <GroupLevel /> : null}
          {level === 'objective' ? <ObjectiveLevel /> : null}
        </Layout>
      </Panel>
    </Overlay>
  );
}

// --- Levels ---------------------------------------------------------------

function MissionsLevel() {
  const missionList = useMissionStore((state) => state.missionList);

  return (
    <>
      <Header titleKey="contentEditor.missionsTitle" isRoot />
      <div className="c-content-editor__list">
        {missionList.length === 0 ? (
          <EmptyNote textKey="contentEditor.noMissions" />
        ) : null}
        {missionList.map((mission) => (
          <div className="c-content-editor__row" key={mission.id}>
            <RowLabel label={mission.label} />
            <div className="c-content-editor__row-actions">
              <ActionButton
                textKey="contentEditor.edit"
                onClick={() => edit.openMission(mission.id)}
              />
              <DeleteControl
                kind="mission"
                id={mission.id}
                controlId={`mission-delete-${mission.id}`}
                onDelete={() =>
                  edit.deleteMission(`mission-delete-${mission.id}`, mission.id)
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="c-content-editor__add">
        <ActionButton
          textKey="contentEditor.addMission"
          controlId="mission-create"
          onClick={() => edit.createMission('mission-create')}
        />
      </div>
    </>
  );
}

function MissionLevel() {
  const missionId = useEditStore((state) => state.selectedMissionId);
  const mission = useMissionStore((state) =>
    missionId ? state.missions[missionId] : undefined
  );
  const groups = useMissionStore((state) => state.objectiveGroups);

  if (!missionId || !mission) {
    return <Header titleKey="contentEditor.missionTitle" />;
  }

  const attachable = Object.values(groups).filter(
    (group) => !mission.objectiveGroupIds.includes(group.id)
  );

  return (
    <>
      <Header rawTitle={mission.label} />
      <FieldText
        key={`mission-label-${mission.id}`}
        labelKey="contentEditor.fieldLabel"
        value={mission.label}
        controlId={`mission-label-${mission.id}`}
        onSave={(value) =>
          edit.updateMission(`mission-label-${mission.id}`, mission.id, {
            label: value,
          })
        }
      />
      <FieldText
        key={`mission-youtube-${mission.id}`}
        labelKey="contentEditor.fieldYoutubeUrl"
        value={mission.youtubeUrl}
        controlId={`mission-youtube-${mission.id}`}
        onSave={(value) =>
          edit.updateMission(`mission-youtube-${mission.id}`, mission.id, {
            youtubeUrl: value,
          })
        }
      />
      <FieldStepper
        labelKey="contentEditor.fieldRetentionHours"
        value={mission.retentionHours}
        controlId={`mission-retention-${mission.id}`}
        onChange={(value) =>
          edit.updateMission(`mission-retention-${mission.id}`, mission.id, {
            retentionHours: value,
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
                <ActionButton
                  textKey="contentEditor.remove"
                  controlId={`group-remove-${groupId}`}
                  onClick={() =>
                    edit.removeGroup(
                      `group-remove-${groupId}`,
                      mission.id,
                      groupId
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <AddSection
        addLabelKey="contentEditor.addGroup"
        createControlId={`group-create-${mission.id}`}
        onCreate={() =>
          edit.createGroup(`group-create-${mission.id}`, mission.id)
        }
        library={attachable}
        attachControlId={(id) => `group-attach-${id}`}
        onAttach={(id) =>
          edit.attachGroup(`group-attach-${id}`, mission.id, id)
        }
      />
    </>
  );
}

function GroupLevel() {
  const groupId = useEditStore((state) => state.selectedGroupId);
  const group = useMissionStore((state) =>
    groupId ? state.objectiveGroups[groupId] : undefined
  );
  const objectives = useMissionStore((state) => state.objectives);

  if (!groupId || !group) {
    return <Header titleKey="contentEditor.groupTitle" />;
  }

  const attachable = Object.values(objectives).filter(
    (objective) => !group.objectiveIds.includes(objective.id)
  );

  return (
    <>
      <Header rawTitle={group.label} />
      <FieldText
        key={`group-label-${group.id}`}
        labelKey="contentEditor.fieldLabel"
        value={group.label}
        controlId={`group-label-${group.id}`}
        onSave={(value) =>
          edit.updateGroup(`group-label-${group.id}`, group.id, {
            label: value,
          })
        }
      />
      <FieldToggle
        labelKey="contentEditor.fieldHidden"
        checked={group.isHidden}
        controlId={`group-hidden-${group.id}`}
        onToggle={(value) =>
          edit.updateGroup(`group-hidden-${group.id}`, group.id, {
            isHidden: value,
          })
        }
      />
      <div className="c-content-editor__row-actions">
        <DeleteControl
          kind="group"
          id={group.id}
          controlId={`group-delete-${group.id}`}
          onDelete={() =>
            edit.deleteGroup(`group-delete-${group.id}`, group.id)
          }
        />
      </div>

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
              <Swatch color={objective.color} />
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
                <ActionButton
                  textKey="contentEditor.remove"
                  controlId={`objective-remove-${objectiveId}`}
                  onClick={() =>
                    edit.removeObjective(
                      `objective-remove-${objectiveId}`,
                      group.id,
                      objectiveId
                    )
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      <AddSection
        addLabelKey="contentEditor.addObjective"
        createControlId={`objective-create-${group.id}`}
        onCreate={() =>
          edit.createObjective(`objective-create-${group.id}`, group.id)
        }
        library={attachable}
        attachControlId={(id) => `objective-attach-${id}`}
        onAttach={(id) =>
          edit.attachObjective(`objective-attach-${id}`, group.id, id)
        }
      />
    </>
  );
}

function ObjectiveLevel() {
  const objectiveId = useEditStore((state) => state.selectedObjectiveId);
  const objective = useMissionStore((state) =>
    objectiveId ? state.objectives[objectiveId] : undefined
  );

  if (!objectiveId || !objective) {
    return <Header titleKey="contentEditor.objectiveTitle" />;
  }

  return (
    <>
      <Header rawTitle={objective.label} />
      <FieldText
        key={`objective-label-${objective.id}`}
        labelKey="contentEditor.fieldLabel"
        value={objective.label}
        controlId={`objective-label-${objective.id}`}
        onSave={(value) =>
          edit.updateObjective(
            `objective-label-${objective.id}`,
            objective.id,
            {
              label: value,
            }
          )
        }
      />
      <SwatchPicker
        value={objective.color}
        controlId={`objective-color-${objective.id}`}
        onPick={(color) =>
          edit.updateObjective(
            `objective-color-${objective.id}`,
            objective.id,
            {
              color,
            }
          )
        }
      />
      <FieldToggle
        labelKey="contentEditor.fieldHidden"
        checked={objective.isHidden}
        controlId={`objective-hidden-${objective.id}`}
        onToggle={(value) =>
          edit.updateObjective(
            `objective-hidden-${objective.id}`,
            objective.id,
            {
              isHidden: value,
            }
          )
        }
      />
      <div className="c-content-editor__row-actions">
        <DeleteControl
          kind="objective"
          id={objective.id}
          controlId={`objective-delete-${objective.id}`}
          onDelete={() =>
            edit.deleteObjective(
              `objective-delete-${objective.id}`,
              objective.id
            )
          }
        />
      </div>
    </>
  );
}

// --- Building blocks ------------------------------------------------------

function Header(props: {
  titleKey?: string;
  rawTitle?: string;
  isRoot?: boolean;
}) {
  const { titleKey, rawTitle, isRoot = false } = props;

  return (
    <div className="c-content-editor__header">
      <button
        type="button"
        className="c-content-editor__btn"
        onClick={() => (isRoot ? closeContentEditor() : edit.back())}
      >
        <Typography textKey="contentEditor.back" />
      </button>
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

function ActionButton(props: {
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
    <button
      type="button"
      className={`c-content-editor__btn ${
        variant ? `c-content-editor__btn--${variant}` : ''
      }`}
      onClick={onClick}
      disabled={disabled || pending}
    >
      <Typography textKey={pending ? 'contentEditor.pending' : textKey} />
    </button>
  );
}

function DeleteControl(props: {
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

function FieldText(props: {
  labelKey: string;
  value: string;
  controlId: string;
  onSave: (value: string) => void;
}) {
  const { labelKey, value, controlId, onSave } = props;
  const [draft, setDraft] = useState(value);
  const pending = useEditStore((state) => Boolean(state.pending[controlId]));

  return (
    <label className="c-content-editor__field">
      <Typography
        as="span"
        className="c-content-editor__field-label"
        textKey={labelKey}
      />
      <span className="c-content-editor__field-control">
        <input
          className="c-content-editor__input"
          type="text"
          value={draft}
          disabled={pending}
          onChange={(event) => setDraft(event.target.value)}
        />
        <button
          type="button"
          className="c-content-editor__btn"
          onClick={() => onSave(draft)}
          disabled={pending || draft === value}
        >
          <Typography
            textKey={pending ? 'contentEditor.pending' : 'contentEditor.save'}
          />
        </button>
      </span>
    </label>
  );
}

function FieldStepper(props: {
  labelKey: string;
  value: number;
  controlId: string;
  onChange: (value: number) => void;
}) {
  const { labelKey, value, controlId, onChange } = props;
  const pending = useEditStore((state) => Boolean(state.pending[controlId]));

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
          className="c-content-editor__btn"
          disabled={pending || value <= 0}
          onClick={() => onChange(value - 1)}
        >
          −
        </button>
        <span className="c-content-editor__stepper-value">{value}</span>
        <button
          type="button"
          className="c-content-editor__btn"
          disabled={pending}
          onClick={() => onChange(value + 1)}
        >
          ＋
        </button>
      </span>
    </div>
  );
}

function FieldToggle(props: {
  labelKey: string;
  checked: boolean;
  controlId: string;
  onToggle: (value: boolean) => void;
}) {
  const { labelKey, checked, controlId, onToggle } = props;
  const pending = useEditStore((state) => Boolean(state.pending[controlId]));

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
        disabled={pending}
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

function SwatchPicker(props: {
  value: string;
  controlId: string;
  onPick: (color: string) => void;
}) {
  const { value, controlId, onPick } = props;
  const pending = useEditStore((state) => Boolean(state.pending[controlId]));

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
            disabled={pending}
            onClick={() => onPick(color)}
          />
        ))}
      </div>
    </div>
  );
}

function AddSection(props: {
  addLabelKey: string;
  createControlId: string;
  onCreate: () => void;
  library: { id: string; label: string }[];
  attachControlId: (id: string) => string;
  onAttach: (id: string) => void;
}) {
  const {
    addLabelKey,
    createControlId,
    onCreate,
    library,
    attachControlId,
    onAttach,
  } = props;
  const [showLibrary, setShowLibrary] = useState(false);

  return (
    <div className="c-content-editor__add">
      <ActionButton
        textKey={addLabelKey}
        controlId={createControlId}
        onClick={onCreate}
      />
      <button
        type="button"
        className="c-content-editor__btn"
        onClick={() => setShowLibrary((value) => !value)}
      >
        <Typography textKey="contentEditor.attachExisting" />
      </button>
      {showLibrary ? (
        <div className="c-content-editor__library">
          {library.length === 0 ? (
            <EmptyNote textKey="contentEditor.attachLibraryEmpty" />
          ) : null}
          {library.map((item) => (
            <div className="c-content-editor__row" key={item.id}>
              <RowLabel label={item.label} />
              <ActionButton
                textKey="contentEditor.attach"
                controlId={attachControlId(item.id)}
                onClick={() => onAttach(item.id)}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function RowLabel(props: { label: string }) {
  return (
    <span className="c-content-editor__row-label">{props.label || '—'}</span>
  );
}

function Swatch(props: { color: string }) {
  return (
    <span
      className="c-content-editor__row-swatch"
      style={{ backgroundColor: props.color }}
    />
  );
}

function EmptyNote(props: { textKey: string }) {
  return (
    <Typography
      as="div"
      className="c-content-editor__empty"
      textKey={props.textKey}
    />
  );
}
