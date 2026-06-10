import './FocusTimerCard.css';
import { useEffect, useRef, useState } from 'react';
import { useMission } from '@/stores/useMissionStore';
import { useTimerStore } from '@/stores/useTimerStore';

function formatDuration(durationMs: number) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

const { pauseTimer, resumeTimer } = useTimerStore.getState();

export function FocusTimerCard() {
  const [tick, setTick] = useState(Date.now());
  const timerRunsByList = useTimerStore((state) => state.timerRunsByList);
  const fastestRunsByList = useTimerStore((state) => state.fastestRunsByList);
  const mission = useMission();

  const currentRun = mission ? timerRunsByList[mission.id] : undefined;
  const fastestRun = mission ? fastestRunsByList[mission.id] : undefined;
  const currentElapsedMs =
    currentRun && currentRun.isRunning
      ? currentRun.elapsedMs +
        Math.max(
          0,
          tick - (currentRun.lastResumedAtMs ?? currentRun.startedAtMs)
        )
      : (currentRun?.elapsedMs ?? 0);
  const previousSelectedId = useRef<string | null>(null);

  useEffect(() => {
    if (!mission?.id) return;

    if (
      previousSelectedId.current &&
      previousSelectedId.current !== mission.id
    ) {
      pauseTimer(previousSelectedId.current);
    }

    const run = timerRunsByList[mission.id];
    if (run && !run.isRunning && document.visibilityState === 'visible') {
      resumeTimer(mission.id);
    }

    previousSelectedId.current = mission.id;
  }, [mission, timerRunsByList]);

  useEffect(() => {
    if (!mission) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pauseTimer(mission.id);
        return;
      }

      const run = timerRunsByList[mission.id];
      if (run && !run.isRunning && run.startedAtMs) {
        resumeTimer(mission.id);
      }
    };

    const handleBeforeUnload = () => {
      pauseTimer(mission.id);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [mission, timerRunsByList]);

  useEffect(() => {
    if (!mission || !currentRun?.isRunning) return;

    const intervalId = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, [currentRun?.isRunning, mission?.id]);

  if (!mission) return null;

  return (
    <div className="app__timer-card">
      <div className="app__timer-label">Active focus</div>
      <div className="app__timer-value">{formatDuration(currentElapsedMs)}</div>
      <div className="app__timer-fastest">
        Fastest: {fastestRun ? formatDuration(fastestRun) : '—'}
      </div>
    </div>
  );
}
