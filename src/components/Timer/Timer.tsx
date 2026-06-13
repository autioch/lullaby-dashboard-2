import './Timer.css';
import { useEffect, useMemo, useState } from 'react';
import PauseSvg from '@/icons/pause.svg?react';
import PlaySvg from '@/icons/play.svg?react';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { useControlsStore } from '@/stores/useControlsStore';
import { useLanguageStore } from '@/stores/useLanguageStore';
import { computeProgress } from '@/stores/missionProgress';
import { getDeadlineRemainingMs } from '@/stores/missionTime';
import { useTimerStore, getElapsedMs } from '@/stores/useTimerStore';
import { Typography } from '@/components/Typography/Typography';
import { t } from '@/i18n/translations';

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

export function formatElapsed(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
}

// Pause the timer while the tab/page is hidden (launchpad effectively closed).
function usePageVisible() {
  const [visible, setVisible] = useState(
    typeof document === 'undefined' || document.visibilityState === 'visible'
  );

  useEffect(() => {
    const onChange = () => setVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', onChange);
    return () => document.removeEventListener('visibilitychange', onChange);
  }, []);

  return visible;
}

// Mode gate: the single mission-time readout under the Clock is chosen by the
// mission's `timeMode`. `challenge` keeps today's elapsed-timer behavior;
// `deadline` shows a wall-clock countdown; `freestyle` shows nothing.
export function Timer() {
  const mission = useMission();
  const timeMode = mission?.timeMode ?? 'freestyle';

  if (timeMode === 'challenge') {
    return <ChallengeTimer />;
  }
  if (timeMode === 'deadline') {
    return <DeadlineTimer />;
  }
  return null;
}

// Wall-clock countdown to today's `deadlineTime`. Visible while the mission is
// selected and incomplete (even before the first check — a deadline matters
// before you start). Never pauses (real time marches on); has no pause control.
function DeadlineTimer() {
  const missionId = useMissionStore((state) => state.missionId);
  const mission = useMission();
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const recordDeadlineResult = useTimerStore(
    (state) => state.recordDeadlineResult
  );
  const frozenResult = useTimerStore((state) =>
    missionId ? state.deadlineResultByMission[missionId] : undefined
  );

  const { completed, total } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );
  // A frozen result keeps the readout frozen even if an objective is later
  // unchecked — completion is sticky until Restart, mirroring the challenge
  // timer's isComplete (the result is cleared by resetTimerState).
  const frozen = frozenResult !== undefined;
  const complete = frozen || (total > 0 && completed === total);
  const deadlineTime = mission?.deadlineTime;

  // Tick once a second while running; stop once complete (frozen).
  const [, setTick] = useState(0);
  useEffect(() => {
    if (complete) {
      return;
    }
    const id = setInterval(() => setTick((tick) => tick + 1), 1000);
    return () => clearInterval(id);
  }, [complete]);

  // Freeze the remaining-at-completion on the completion edge (idempotent).
  useEffect(() => {
    if (complete && missionId && deadlineTime) {
      recordDeadlineResult(
        missionId,
        getDeadlineRemainingMs(deadlineTime, Date.now())
      );
    }
  }, [complete, missionId, deadlineTime, recordDeadlineResult]);

  if (!deadlineTime) {
    return null;
  }

  const remaining =
    frozenResult !== undefined
      ? frozenResult
      : getDeadlineRemainingMs(deadlineTime, Date.now());
  const overtime = remaining < 0;
  const display = formatElapsed(Math.abs(remaining));

  return (
    <div className={`c-timer ${overtime ? 'c-timer--overtime' : ''}`}>
      {overtime ? (
        <Typography
          textKey="timer.over"
          values={{ time: display }}
          as="span"
          className="c-timer__elapsed"
        />
      ) : (
        <span className="c-timer__elapsed">{display}</span>
      )}
    </div>
  );
}

function ChallengeTimer() {
  const missionId = useMissionStore((state) => state.missionId);
  const mission = useMission();
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);
  const language = useLanguageStore((state) => state.language);

  const isAppOptions = useControlsStore((state) => state.isAppOptions);
  const isMissionSelect = useControlsStore((state) => state.isMissionSelect);
  const isContentEditor = useControlsStore((state) => state.isContentEditor);
  const pageVisible = usePageVisible();

  const setRunState = useTimerStore((state) => state.setRunState);
  const setUserPaused = useTimerStore((state) => state.setUserPaused);
  const run = useTimerStore((state) =>
    missionId ? state.runsByMission[missionId] : undefined
  );
  const best = useTimerStore((state) =>
    missionId ? state.bestByMission[missionId] : undefined
  );

  const { completed, total } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );

  const anyModalOpen = isAppOptions || isMissionSelect || isContentEditor;
  const complete = total > 0 && completed === total;
  const userPaused = run?.userPaused ?? false;
  // A run is interactive (toggleable) only while in progress: started and not
  // yet complete. `running` folds the manual pause into the auto-pause inputs.
  const inProgress = completed >= 1 && !complete;
  const running = inProgress && !anyModalOpen && pageVisible && !userPaused;

  // Drive the store only when the derived inputs change — not every tick.
  useEffect(() => {
    if (!missionId) {
      return;
    }
    setRunState(missionId, running, complete);
  }, [missionId, running, complete, setRunState]);

  // Re-render once a second only while time is actually accumulating.
  const ticking = running && run?.isComplete !== true;
  const [, setTick] = useState(0);
  useEffect(() => {
    if (!ticking) {
      return;
    }
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [ticking]);

  const stateClass = !inProgress
    ? ''
    : userPaused
      ? 'c-timer--paused'
      : 'c-timer--running';
  const actionLabel = t(
    userPaused ? 'timer.resumeLabel' : 'timer.pauseLabel',
    language
  );

  return (
    <div className={`c-timer ${stateClass}`}>
      <button
        type="button"
        className="c-timer__toggle"
        disabled={!inProgress}
        aria-label={actionLabel}
        onClick={() => {
          if (missionId) {
            setUserPaused(missionId, !userPaused);
          }
        }}
      >
        <span className="c-timer__elapsed">
          {formatElapsed(getElapsedMs(run, Date.now()))}
        </span>
        <span className="c-timer__icon c-timer__icon--pause" aria-hidden="true">
          <PauseSvg />
        </span>
        <span className="c-timer__icon c-timer__icon--play" aria-hidden="true">
          <PlaySvg />
        </span>
      </button>
      {best !== undefined ? (
        <Typography
          textKey="timer.best"
          values={{ time: formatElapsed(best) }}
          as="div"
          className="c-timer__best"
        />
      ) : null}
    </div>
  );
}
