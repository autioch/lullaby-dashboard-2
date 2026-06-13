# Timer manual pause — Implementation

> **Artifact:** `22_implement_timer-manual-pause.md` · **Roles:** Senior Fullstack React/Node.js Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13
> **Related:** [spec](22_spec_timer-manual-pause.md) · [plan](22_plan_timer-manual-pause.md) · [retro](22_retro_timer-manual-pause.md)

## Outcome

The Timer is now a toggle button while a run is in progress: clicking it (or Enter on focus) pauses
and resumes the run by hand — a sticky per-mission override of the auto-pause that covers the
step-away case (dashboard left up). Hover/focus reveals the action icon (pause while running, play
while paused); a faint pause watermark keeps the stopped state visible.

## Added

- `src/icons/pause.svg`, `src/icons/play.svg` — `currentColor`, `viewBox 0 0 512 512`, matching the
  existing icon style; imported via `?react`.
- `useTimerStore.setUserPaused(missionId, paused)` — sets the sticky flag and persists (creates a
  zeroed run if none).
- `timer.pauseLabel` / `timer.resumeLabel` aria-labels (en/pl).

## Changed

- **Store** — `src/stores/useTimerStore.ts`: `TimerRun` gains persisted `userPaused`; `setRunState`
  preserves it; `PersistedRun.userPaused` is optional and loads as `?? false`, so **no `lsWrapper`
  version bump** (existing runs + the feature-20 bests survive). `resetTimerState` clears it with the
  runs.
- **Store tests** — `src/stores/useTimerStore.test.ts`: `userPaused` threaded through the `run()`
  helper and persistence expectations; new `setUserPaused` cases (sets + persists; preserved across a
  `setRunState` transition with bank-on-pause and resume; cleared by Restart).
- **Component** — `src/components/Timer/Timer.tsx`: the elapsed readout is a `<button className="c-timer__toggle">`,
  `disabled` outside an in-progress run, with an action `aria-label`; `running` folds in `!userPaused`;
  click calls `setUserPaused`; pause/play icon overlays; root state classes `c-timer--running` /
  `c-timer--paused`.
- **CSS** — `src/components/Timer/Timer.css`: native button chrome reset; reveal the action icon on
  `:hover, :focus-visible` (pause when running, play when paused) with the readout dimming; persistent
  pause watermark when `--paused`; hover/focus precedence over the watermark; `:focus-visible` outline.
- **Docs** — `docs/05_design.md` (Timer now documents click/Enter pause-resume, hover/focus icon,
  watermark); `docs/06_roadmap.md` (new done entry: Manual timer pause/resume).

## Skipped / deferred

- **No general D-pad focus system** for the rest of the dashboard — the Timer is intentionally the
  first focusable dashboard control; objectives/menu stay click-`div`s (spec out-of-scope).
- **`L5` real-TV** — not run; needs confirming the lone focusable Timer isn't an odd focus stop and
  that reveal-on-focus works on the actual remote.
- Auto-resume heuristics, sound, animation, anti-cheat on paused time — all out of scope.

## Verification

- **L0 gate** — `npm run ci` green: tsc + eslint (incl. `compat/compat` for the Chrome 87 floor) +
  **70 unit tests** (3 new) + prettier. Re-run clean by the pre-push hook on commit `c25d636`.
- **L1 build** — `npm run build` succeeded (`?react` SVG imports resolve).
- **L4 knip** — clean.
- **L2 behavior drive** (dev preview, mission with an objective checked → in progress): Timer renders
  as an enabled `<button>` with `aria-label` "Wstrzymaj licznik" and state `c-timer--running`.
  Clicking toggled to `c-timer--paused`, aria-label → "Wznów licznik", and persisted `userPaused:true`;
  the pause watermark showed at opacity 0.3 with the readout dimmed to 0.5; clicking again resumed
  (`c-timer--running`, persisted false). Pausing then reloading kept the paused state (sticky
  persistence). No console errors.
- **Acceptance criteria** — met; only `L5` real-TV pending. (Hover/focus reveal verified via the CSS
  rules + DOM, not a synthesized pointer hover.)

## Commits

- `c25d636` — feat(timer): manual pause/resume by clicking the Timer
