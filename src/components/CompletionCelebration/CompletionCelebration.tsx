import './CompletionCelebration.css';
import { useMemo, type CSSProperties } from 'react';
import { useMissionStore, useMission } from '@/stores/useMissionStore';
import { computeProgress } from '@/stores/missionProgress';
import { useTimerStore } from '@/stores/useTimerStore';
import { Typography } from '@/components/Typography/Typography';

// Each firework is a radial cluster of particles. Several fire across the
// screen, staggered, at varied positions and sizes (--cc-burst-scale), then the
// sequence settles into the persistent glow.
const PARTICLES_PER_BURST = 12;
const PARTICLE_INDICES = Array.from(
  { length: PARTICLES_PER_BURST },
  (_, i) => i
);

type Burst = { left: string; top: string; scale: number; delay: number };

// Fixed placements: spread across the screen, varied size and start time so the
// celebration lasts ~3s. Last burst (2100ms) + ~1300ms anim ≈ 3.4s total.
const BURSTS: Burst[] = [
  { left: '50%', top: '42%', scale: 1, delay: 0 },
  { left: '24%', top: '30%', scale: 0.7, delay: 500 },
  { left: '76%', top: '34%', scale: 0.85, delay: 950 },
  { left: '34%', top: '66%', scale: 0.65, delay: 1500 },
  { left: '68%', top: '60%', scale: 0.9, delay: 2100 },
];

// CSS custom properties aren't in csstype's CSSProperties, so cast.
function burstStyle(b: Burst): CSSProperties {
  return {
    'left': b.left,
    'top': b.top,
    '--cc-burst-scale': String(b.scale),
    '--cc-burst-delay': `${b.delay}ms`,
  } as unknown as CSSProperties;
}

function particleStyle(i: number): CSSProperties {
  return {
    '--cc-angle': `${(360 / PARTICLES_PER_BURST) * i}deg`,
    '--cc-delay': `${(i % 4) * 50}ms`,
    '--cc-distance': i % 2 === 0 ? '28vmin' : '34vmin',
  } as unknown as CSSProperties;
}

// Presentation-only completion celebration: a CSS-only fireworks sequence that
// settles into a persistent glow, painted behind the dashboard content
// (pointer-transparent). Renders nothing until visible progress hits 100%, so it
// unmounts when progress drops and the sequence replays on each re-arrival.
export function CompletionCelebration() {
  const checkedKeys = useMissionStore((state) => state.checkedKeys);
  const mission = useMission();
  const objectiveGroups = useMissionStore((state) => state.objectiveGroups);
  const objectives = useMissionStore((state) => state.objectives);

  const { total, completed } = useMemo(
    () => computeProgress(objectiveGroups, objectives, checkedKeys, mission),
    [objectiveGroups, objectives, checkedKeys, mission]
  );

  // Did this completing run beat a prior record? Drives the "New best!" beat.
  const newBest = useTimerStore((state) =>
    mission
      ? state.runsByMission[mission.id]?.completionWasBest === true
      : false
  );

  // Celebrate only a real completion — every visible objective checked. Guard on
  // counts, not the ceil-rounded percent (which hits 100 one objective early on
  // very large missions), and require total > 0 so empty/all-hidden missions
  // don't celebrate a vacuous 100%.
  if (total === 0 || completed !== total) {
    return null;
  }

  return (
    <>
      <div className="c-completion-celebration" aria-hidden="true">
        <div className="c-completion-celebration__glow" />
        <div className="c-completion-celebration__bursts">
          {BURSTS.map((b, bi) => (
            <div
              key={bi}
              className="c-completion-celebration__burst"
              style={burstStyle(b)}
            >
              {PARTICLE_INDICES.map((i) => (
                <span
                  key={i}
                  className="c-completion-celebration__particle"
                  style={particleStyle(i)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* The one celebration element above the content (legibility): a
          transient, pointer-transparent banner — no focus trap, no list block. */}
      {newBest ? (
        <div className="c-completion-celebration__new-best" aria-hidden="true">
          <Typography textKey="completionCelebration.newBest" as="span" />
        </div>
      ) : null}
    </>
  );
}
