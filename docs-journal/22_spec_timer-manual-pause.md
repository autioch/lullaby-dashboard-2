# Timer manual pause — Spec

> **Artifact:** `22_spec_timer-manual-pause.md` · **Roles:** Product Owner
> **Status:** `implemented`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spike](../docs-spikes/08_spike_timer-manual-pause.md) · [plan](22_plan_timer-manual-pause.md) · [implement](22_implement_timer-manual-pause.md) · [retro](22_retro_timer-manual-pause.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner**.

## Problem / motivation

The mission timer auto-pauses only when a modal covers the launchpad, the page is hidden, or the
mission is switched. None of those fire for the common case: **the family steps away (dinner, errand)
but leaves the launchpad on screen**, so the clock — and the recorded best time — keeps inflating.
A manual pause/resume on the Timer closes that gap. This knowingly reverses the
[mission-timer spike's](../docs-spikes/07_spike_mission-timer.md) "no manual controls" decision,
scoped narrowly to the step-away case.

## User story

As a **household**, I want **to pause and resume the mission timer by hand** so that **stepping away
without closing the dashboard doesn't inflate our time or our best record**.

## Behavior

The Timer becomes an interactive control (a `<button>`) while a run is **in progress** (at least one
objective checked and not yet 100%).

- **Toggle:** clicking the Timer — or activating it with Enter/OK when focused — toggles between
  paused and running.
- **Effective running** = `autoRunning && !userPaused`, where `autoRunning` is the existing
  derivation (in progress · launchpad uncovered · page visible · this mission selected). Manual pause
  is a **sticky override**: once paused it stays paused through a modal opening/closing or the page
  hiding/showing; only a manual resume clears it.
- **Icon affordance** (works on pointer **and** D-pad — reveal on **hover or focus**):
  - Running → revealing shows a **pause** icon (the action: pause).
  - Paused → revealing shows a **play** icon (the action: resume).
- **Paused watermark:** whenever paused, a faint **pause** icon stays visible over the Timer even
  without hover/focus, so the stopped state is never silent (the step-away case has no one hovering).
  On hover/focus while paused, the action **play** icon takes precedence over the watermark.
- **No-op edges:** before a run starts (`00:00`, nothing checked) and after completion (frozen final),
  the Timer is **not** interactive — no toggle, no reveal, no watermark. The control is disabled
  outside an in-progress run.
- **Accessibility:** the button carries an `aria-label` reflecting the action (pause / resume).
- **Persistence:** `userPaused` is stored per-mission alongside the run (localStorage) and **survives
  a reload** (the step-away may span one) and a mission switch (each mission keeps its own paused
  state). Cleared by the objectives Restart (a fresh run starts un-paused).
- **Checking while paused:** checking/unchecking objectives does **not** auto-resume — the run stays
  paused until manually resumed (the watermark is the reminder). Reaching 100% while paused still
  freezes the (paused) elapsed as the final/best.

## Scope

**In scope**

- A per-mission `userPaused` flag in `useTimerStore`, folded into effective running; a toggle action;
  persisted with the run.
- The Timer rendered as a focusable `<button>`, disabled outside an in-progress run, with an
  `aria-label`.
- Reveal-on-hover-or-focus action icon (pause/play) + a persistent paused watermark.
- Two new inline SVGs (pause, play); en/pl `aria-label` strings.
- Co-located unit test for the toggle + effective-running interaction with auto-pause.

**Out of scope** (explicitly not doing now)

- Any general D-pad focus system for the rest of the dashboard (objectives/menu stay click-`div`s).
- Auto-resume heuristics (e.g. resume on first check).
- A separate always-visible pause button, sound, or animation.
- Any anti-cheat handling of paused time (the timer is not competitive).
- Firestore / data-model / API changes.

## Impact on the codebase

- **Data model / Firestore:** none.
- **Repository:** none.
- **Zustand store** (`src/stores/useTimerStore.ts`): `TimerRun` gains persisted `userPaused`;
  `setRunState` preserves it; new `setUserPaused(missionId, paused)` (or toggle) sets + persists it.
  Persisted run shape grows → bump `lsWrapper` version. Update co-located tests.
- **Components** (`src/components/Timer/`): `Timer.tsx` becomes a `<button>` with the toggle, reads
  `userPaused`, computes effective running, renders the icon overlay + watermark; `Timer.css` for the
  reveal/watermark states; `translations.ts` gains the aria labels.
- **Icons** (`src/icons/`): add `pause.svg`, `play.svg`.
- **API routes:** none.

## UI & TV constraints

- **Layout:** stays within the existing Timer block in the aside (no new element). The icon overlays
  the elapsed readout; large and high-contrast, readable at 3–5 m.
- **TV-first / mixed input:** the affordance reveals on `:hover` (pointer) **and** `:focus` (D-pad/
  keyboard); the persistent paused watermark covers the no-pointer case. The Timer is the first
  focusable dashboard control — acceptable, confirm it isn't an odd lone focus stop (real-TV check).
- **Chrome 87:** `:hover`/`:focus`, `pointer-events`, opacity, SVG, `<button>` — all far below the
  floor. No new dependency. No motion required (reduced-motion-safe by construction).

## i18n

Languages: en + pl.

- `timer.pauseLabel` — aria-label, e.g. `Pause timer` / `Wstrzymaj licznik`.
- `timer.resumeLabel` — aria-label, e.g. `Resume timer` / `Wznów licznik`.

## Acceptance criteria

- [ ] While a run is in progress, clicking the Timer pauses it (elapsed stops); clicking again resumes
      from the banked time.
- [ ] Activating the focused Timer with Enter toggles pause (keyboard/D-pad path).
- [ ] On a pointer device, hovering the running Timer reveals a pause icon; hovering while paused
      reveals a play icon. The same reveal happens on focus.
- [ ] While paused and not hovered/focused, a faint pause watermark is visible.
- [ ] Manual pause persists through opening/closing a modal and hiding/showing the page (sticky), and
      survives a page reload; a mission switch keeps each mission's own paused state.
- [ ] The objectives Restart clears the paused state (fresh run is un-paused).
- [ ] At `00:00` (nothing checked) and after completion, the Timer is not interactive (no toggle/
      reveal/watermark).
- [ ] Reaching 100% while paused freezes the paused elapsed as the final time (and best if applicable).
- [ ] `npm run ci` passes; the toggle / effective-running logic is unit-tested.

## Open questions

_None — resolved as Product Owner (from the spike's open questions):_

- **Persistence** → `userPaused` persists per-mission across reload and mission switch; cleared by
  Restart.
- **Checking while paused** → stays paused (no auto-resume); the watermark is the reminder.
- **No-op edges** → inert at `00:00` and after completion.
- **Watermark vs. reveal collision** → hover/focus shows the action icon and takes precedence over the
  persistent paused watermark.
