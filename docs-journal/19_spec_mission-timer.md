# Mission timer — Spec

> **Artifact:** `19_spec_mission-timer.md` · **Roles:** Product Owner
> **Status:** `implemented`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spike](../docs-spikes/07_spike_mission-timer.md) · [plan](19_plan_mission-timer.md) · [implement](19_implement_mission-timer.md) · [retro](19_retro_mission-timer.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner** and
settled before any code.

## Problem / motivation

The dashboard shows _what_ is left but never _how long_ a mission is taking. Seeing elapsed time is
a gentle nudge to finish a routine faster and free up leisure time (vision success-metric #2:
"routine completion time decreases over time"). A dead `useTimerStore` already exists but is never
started or shown — it's hard to maintain and is discarded here in favour of a clean, automatic timer.

## User story

As a **household**, I want **the dashboard to show how long the current mission has been taking** so
that **we can see our pace and are nudged to finish and get to the fun stuff**.

## Behavior

A small elapsed-time readout sits in the aside under the Clock, **always visible**.

- **Idle:** before the first objective of a run is checked, it shows `00:00`.
- **Start:** the timer begins counting on the **first checked objective** of the current mission's
  run (when completed goes from 0 to ≥1).
- **Tick:** while running it updates every second. Elapsed is derived from wall-clock time
  (`Date.now()` deltas), not by counting ticks, so it can't drift.
- **Pause (auto, no buttons):** the timer stops accumulating whenever
  - the launchpad is covered by a modal (options, mission-select, or content-editor open), **or**
  - the page/tab is hidden (Page Visibility API), **or**
  - a different mission is selected (the leaving mission's run pauses and banks its time).
    When the blocking condition clears and the mission is still in progress, it resumes from the
    banked time.
- **Switch missions:** each mission has its own independent run. Switching pauses the current run
  and shows the target mission's run (resumed if it was mid-progress).
- **Complete:** when the mission reaches 100% (all visible objectives checked), the timer **stops and
  freezes** the final duration. It stays frozen even if an objective is later unchecked — only
  Restart begins a new run.
- **Restart:** the Restart menu action resets the run to `00:00` (already wired through
  `resetTimerState`).
- **Format:** `MM:SS`, rolling to `H:MM:SS` once a run passes one hour. Zero-padded, tabular digits.
- **Reload / expiry:** the banked elapsed time and completion survive a page reload (persisted to
  localStorage, mirroring `checkedKeys`); time elapsed _while the page was gone_ is not counted. A
  run is dropped on the same lifecycle as the mission's checks — when its `listExpiryTimestamps`
  entry expires or the mission no longer exists.

## Scope

**In scope**

- A new minimal Zustand timer store (replacing the dead `useTimerStore`), persisted per-mission to
  localStorage, with wall-clock elapsed and automatic pause/resume/complete/reset.
- An always-visible `Timer` readout in the aside under the Clock.
- Pause inputs: modal flags (`useControlsStore`), page visibility (`visibilitychange`), mission
  switch.
- Co-located unit tests for the store's elapsed/lifecycle logic.

**Out of scope** (explicitly not doing now)

- **Best time / fastest-run records** — stays the separate roadmap item; the frozen final duration is
  its natural future input, but no best-time persistence, comparison, or "new record!" UI now.
- Manual pause/start controls.
- Any Firestore / data-model change or cross-device shared timer.
- Deadline countdown (separate roadmap item).
- Animation/polish on the readout (interim-UI: minimal, instant).

## Impact on the codebase

- **Data model / Firestore:** none.
- **Repository:** none.
- **Zustand store** (`src/stores/`): replace `useTimerStore.ts` with a fresh minimal store
  (`runsByMission`, `setRunState`, `resetTimerState`) + co-located `useTimerStore.test.ts`. Pure
  elapsed helper for testability.
- **Components** (`src/components/`): new `Timer/` (`Timer.tsx`, `Timer.css`); mounted in
  `Dashboard.tsx` aside under `Clock`. Minor `Clock.css` tweak so Clock + Timer group together at the
  top of the aside.
- **API routes:** none.

## UI & TV constraints

- **Layout:** aside (right column), directly under the Clock; always rendered. Large, high-contrast,
  `font-variant-numeric: tabular-nums` like the Clock, readable at 3–5 m. Smaller than the Clock so
  the wall time stays the dominant reading.
- **TV-first:** no new focus targets (display-only, automatic). Minimal clutter — a single line.
- **Chrome 87:** `Date.now()`, `setInterval`, and the Page Visibility API (`visibilitychange` /
  `document.visibilityState`, Chrome 33+) are all below the floor. No new dependency.

## i18n

None — the readout is numeric (`MM:SS` / `H:MM:SS`), language-neutral. No `translations.ts`.

## Acceptance criteria

- [ ] Timer shows `00:00` for a selected mission with nothing checked.
- [ ] Checking the first objective starts the count; it ticks ~once per second.
- [ ] Opening any modal (options / mission-select / content-editor) pauses it; closing resumes from
      the banked time.
- [ ] Hiding the page/tab pauses it; returning resumes.
- [ ] Switching to another mission pauses the first and shows the second's own run; switching back
      resumes the first from where it paused.
- [ ] Reaching 100% freezes the final duration; unchecking afterwards does **not** resume it.
- [ ] Restart resets the readout to `00:00`.
- [ ] A run passing one hour displays as `H:MM:SS`.
- [ ] Banked time survives a page reload; the reload gap is not counted.
- [ ] `npm run ci` passes (tsc + lint + unit tests + format); store logic is unit-tested.

## Open questions

_None — resolved as Product Owner:_

- **Resume vs. restart on re-entry** → resume the banked time (a run is per-mission and paused, not
  ended).
- **Behavior after completion** → stays frozen until Restart; unchecking does not reopen the run.
- **Expiry coupling** → a run is pruned on the same lifecycle as the mission's checks
  (`listExpiryTimestamps` expiry / unknown mission).
