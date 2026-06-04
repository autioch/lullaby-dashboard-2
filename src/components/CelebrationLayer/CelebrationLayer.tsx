import './CelebrationLayer.css';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { useEffect } from 'react';

export default function CelebrationLayer() {
  const celebration = useDashboardStore((state) => state.celebration);

  if (celebration.visible) {
    return <CelebrationLayerInner />;
  }
  return null;
}

function CelebrationLayerInner() {
  const celebration = useDashboardStore((state) => state.celebration);
  const clearCelebration = useDashboardStore((state) => state.clearCelebration);

  useEffect(() => {
    if (!celebration.visible) return;

    const timeoutId = window.setTimeout(() => clearCelebration(), 3200);
    return () => window.clearTimeout(timeoutId);
  }, [celebration.visible, clearCelebration]);

  if (!celebration.visible) return null;

  return (
    <div className="app__celebration" role="status" aria-live="polite">
      <div className="app__celebration-bubble">
        {celebration.isNewBest ? 'New fastest run!' : 'List cleared!'}
      </div>
      <div className="app__fireworks" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, index) => (
          <span
            key={index}
            className="app__firework"
            style={{ ['--delay' as string]: `${index * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
