# Mission timer — Implementation

> **Artifact:** `19_implement_mission-timer.md` · **Roles:** Senior Fullstack React/Node.js Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13
> **Related:** [spec](19_spec_mission-timer.md) · [plan](19_plan_mission-timer.md) · [retro](19_retro_mission-timer.md)

## Outcome

The dashboard now shows mission elapsed time: an always-visible readout under the Clock that
auto-starts on the first checked objective, pauses when the launchpad is covered / the page is hidden
/ the mission is switched, and freezes the final duration at 100%. Backed by a fresh, unit-tested
per-mission timer store replacing the dead `useTimerStore`.

## Added

- `src/components/Timer/Timer.tsx` — display-only readout. Derives `running`/`complete` from
  `computeProgress` (same selectors as `ProgressBar`), the three `useControlsStore` modal flags, and a
  `visibilitychange`-backed `pageVisible`; drives the store via one effect on
  `[missionId, running, complete]`; a 1 s interval (active only while accumulating) re-renders from
  `getElapsedMs`. Format `MM:SS` → `H:MM:SS` past an hour.
- `src/components/Timer/Timer.css` — `c-timer`: 4rem, bold, `tabular-nums`, centered,
  `margin-bottom: auto` (groups with the Clock, pins Menu to the aside bottom).
- `src/stores/useTimerStore.test.ts` — 9 tests: elapsed math, start/pause/bank/resume, mission-switch
  pause, freeze-at-completion + no-resume-after, persisted-shape, reload-restores-paused, reset.

## Changed

- **Store** — `src/stores/useTimerStore.ts` rewritten. `runsByMission: Record<string, TimerRun>`
  (`{ accumulatedMs, segmentStartMs, isComplete }`); pure exported `getElapsedMs(run, now)`; single
  `setRunState(missionId, running, complete)` that banks+pauses every other mission's open segment,
  opens/banks the target segment, and freezes on completion; `resetTimerState()` unchanged signature.
  Persists only `{ accumulatedMs, isComplete }` (runtime `segmentStartMs` dropped) via
  `lsWrapper('timer', 3)` (version bump orphans the old shape).
- **Component wiring** — `src/components/Dashboard/Dashboard.tsx`: `<Timer />` rendered between
  `<Clock />` and `<Menu />` in the aside.
- **CSS** — `src/components/Clock/Clock.css`: `margin-bottom: auto` removed (relocated to `Timer.css`).
- **Docs** — `docs/05_design.md` (aside now lists the Timer); `docs/06_roadmap.md` ("Mission timer
  display" → done; "Best completion time / records" left open).

## Skipped / deferred

- **Best time / fastest-run records** — out of scope per spec; remains the separate roadmap item. The
  frozen `accumulatedMs` is its natural future input.
- **`L5` real-TV** — not run; behavior verified on the TV-UA/dev preview only (see Verification). No
  hardware-specific risk (display-only, no animation, no new focus target).
- **Expiry pruning parity with `useMissionStore`** — intentionally light-touch (plan Risks): a run for
  an unknown/expired mission is simply never shown; no cross-store hydrate prune added.

## Verification

- **L0 gate** — `npm run ci` green: tsc + eslint (incl. `compat/compat` for Chrome 87) + **63 unit
  tests** (9 new) + prettier. Re-run clean by the pre-push hook on commit `370edb1`.
- **L4 dead-code** — `npm run knip` clean (`Timer` imported by `Dashboard`; old store members gone).
- **L2 TV-UA behavior drive** (dev preview): readout renders under the Clock (`aside` order
  `video · clock · timer · menu`), `tabular-nums`/centered/64px, no console errors. Timer paused at
  `00:00` while the page reported `hidden` (pause-on-hidden criterion); on forcing visibility it
  ticked `00:00 → 00:01 → 00:03 → …` — start + tick + resume-on-visible confirmed live. Modal-pause,
  mission-switch independence, freeze-at-100%, reset, reload-survival, and `H:MM:SS` rollover are
  exercised by the store unit tests over the same `setRunState`/`getElapsedMs` logic.
- **Acceptance criteria** — all met; only `L5` real-TV pending (no expected risk).

## Commits

- `370edb1` — feat(dashboard): add automatic mission timer; replace dead useTimerStore
