import './CompletionCelebration.css';
import { useMemo, type CSSProperties } from 'react';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { computeProgress } from '@/stores/missionProgress';

// Number of radial burst particles. Even spread around the circle.
const PARTICLE_COUNT = 24;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => i);

// CSS custom properties aren't in csstype's CSSProperties, so cast per particle.
function particleStyle(i: number): CSSProperties {
  return {
    '--cc-angle': `${(360 / PARTICLE_COUNT) * i}deg`,
    '--cc-delay': `${(i % 6) * 40}ms`,
    '--cc-distance': i % 2 === 0 ? '38vmin' : '46vmin',
  } as unknown as CSSProperties;
}

// Presentation-only completion celebration: a CSS-only confetti/fireworks burst
// that settles into a persistent glow, painted behind the dashboard content
// (pointer-transparent). Renders nothing until visible progress hits 100%, so
// it unmounts when progress drops and the burst replays on each re-arrival.
export function CompletionCelebration() {
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const mission = useMission();
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const { percent } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );

  if (percent !== 100) {
    return null;
  }

  return (
    <div className="c-completion-celebration" aria-hidden="true">
      <div className="c-completion-celebration__glow" />
      <div className="c-completion-celebration__burst">
        {PARTICLES.map((i) => (
          <span
            key={i}
            className="c-completion-celebration__particle"
            style={particleStyle(i)}
          />
        ))}
      </div>
    </div>
  );
}
