# Resume timer on objective toggle — Tweak

> **Artifact:** `23_tweak_resume-on-toggle.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13

## What & why

Toggling an objective (check or uncheck) now **resumes** a manually-paused timer for that mission —
interacting with the list means the family is back at it. This **supersedes** the
[timer-manual-pause spec's](22_spec_timer-manual-pause.md) resolution that "checking while paused
stays paused"; the owner reversed that call. The manual pause button and the paused watermark are
unchanged — this only adds an extra resume trigger.

## Approach

Store layer. `toggleObjective` (in `useMissionStore`) clears the timer's `userPaused` for the active
mission. Cross-store call mission → timer (no cycle: `useTimerStore` doesn't import the mission
store). Guarded — only fires when the run is actually paused, so a normal toggle never creates a
spurious run or an extra persist.

- `useMissionStore.toggleObjective`: after the checkedKeys update,
  `if (useTimerStore.getState().runsByMission[missionId]?.userPaused) setUserPaused(missionId, false)`.

## Changes

- `src/stores/useMissionStore.ts` — import `useTimerStore`; clear `userPaused` on toggle (guarded).
- `src/stores/useMissionStore.test.ts` — two cases: a toggle resumes a paused timer; a toggle does
  **not** create a timer run when nothing is paused.
- `docs/05_design.md` — Timer entry notes that checking/unchecking an objective resumes a manually
  paused run.

## Verification

- **L0 gate** — `npm run ci` green (tsc + lint + **72 tests**, 2 new + format).
- **L4 knip** — clean.
- **L2 behavior drive** (dev preview, in-progress run): paused the timer via its button
  (`c-timer--paused`, `userPaused:true`), then clicked an objective → resumed (`c-timer--running`,
  `userPaused:false`). No console errors.
- **L5 real-TV** — not run; pure state-logic change, no expected hardware risk.

## Commit

`d3690fc` — feat(timer): resume a manually-paused timer when an objective is toggled
