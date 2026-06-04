import './FocusTimerCard.css';
import { useEffect, useRef, useState } from 'react';
import { useDashboardStore } from '@/stores/useDashboardStore';

function formatDuration(durationMs: number) {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default function FocusTimerCard() {
  const [tick, setTick] = useState(Date.now());
  const selectedIndex = useDashboardStore((state) => state.selectedIndex);
  const lists = useDashboardStore((state) => state.lists);
  const timerRunsByList = useDashboardStore((state) => state.timerRunsByList);
  const fastestRunsByList = useDashboardStore(
    (state) => state.fastestRunsByList
  );
  const pauseTimer = useDashboardStore((state) => state.pauseTimer);
  const resumeTimer = useDashboardStore((state) => state.resumeTimer);

  const selectedList = lists[selectedIndex] ?? null;
  const currentRun = selectedList
    ? timerRunsByList[selectedList.id]
    : undefined;
  const fastestRun = selectedList
    ? fastestRunsByList[selectedList.id]
    : undefined;
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
    if (!selectedList?.id) return;

    if (
      previousSelectedId.current &&
      previousSelectedId.current !== selectedList.id
    ) {
      pauseTimer(previousSelectedId.current);
    }

    const run = timerRunsByList[selectedList.id];
    if (run && !run.isRunning && document.visibilityState === 'visible') {
      resumeTimer(selectedList.id);
    }

    previousSelectedId.current = selectedList.id;
  }, [pauseTimer, resumeTimer, selectedList, timerRunsByList]);

  useEffect(() => {
    if (!selectedList) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pauseTimer(selectedList.id);
        return;
      }

      const run = timerRunsByList[selectedList.id];
      if (run && !run.isRunning && run.startedAtMs) {
        resumeTimer(selectedList.id);
      }
    };

    const handleBeforeUnload = () => {
      pauseTimer(selectedList.id);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pauseTimer, resumeTimer, selectedList, timerRunsByList]);

  useEffect(() => {
    if (!selectedList || !currentRun?.isRunning) return;

    const intervalId = window.setInterval(() => setTick(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, [currentRun?.isRunning, selectedList?.id]);

  if (!selectedList) return null;

  return (
    <section className="app__timer-card" aria-live="polite">
      <p className="app__timer-label">Active focus</p>
      <strong className="app__timer-value">
        {formatDuration(currentElapsedMs)}
      </strong>
      <p className="app__timer-fastest">
        Fastest: {fastestRun ? formatDuration(fastestRun.elapsedMs) : '—'}
      </p>
    </section>
  );
}
