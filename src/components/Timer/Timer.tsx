import './Timer.css';
import { useEffect, useMemo, useState } from 'react';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { useControlsStore } from '@/stores/useControlsStore';
import { computeProgress } from '@/stores/missionProgress';
import { useTimerStore, getElapsedMs } from '@/stores/useTimerStore';

function pad(num: number) {
  return num.toString().padStart(2, '0');
}

function formatElapsed(ms: number) {
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

export function Timer() {
  const missionId = useMissionStore((state) => state.missionId);
  const mission = useMission();
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const isAppOptions = useControlsStore((state) => state.isAppOptions);
  const isMissionSelect = useControlsStore((state) => state.isMissionSelect);
  const isContentEditor = useControlsStore((state) => state.isContentEditor);
  const pageVisible = usePageVisible();

  const setRunState = useTimerStore((state) => state.setRunState);
  const run = useTimerStore((state) =>
    missionId ? state.runsByMission[missionId] : undefined
  );

  const { completed, total } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );

  const anyModalOpen = isAppOptions || isMissionSelect || isContentEditor;
  const complete = total > 0 && completed === total;
  const running = completed >= 1 && !complete && !anyModalOpen && pageVisible;

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

  return (
    <div className="c-timer">
      {formatElapsed(getElapsedMs(run, Date.now()))}
    </div>
  );
}
