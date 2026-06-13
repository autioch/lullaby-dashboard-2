# Timer manual pause — Spike

> **Artifact:** `docs-spikes/08_spike_timer-manual-pause.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13
> **Graduated to:** _(fill once/if this idea proceeds to `/spec`)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`).

## The uncertainty

The mission timer is deliberately **fully automatic** (spike 07 cut manual controls). Is adding a
click-to-pause/resume worth the reversal, and what affordance survives the reality that the
dashboard runs on **mixed input** (some pointer, some D-pad) — where hover doesn't always exist?

## Idea as posed

> Clicking on the timer should pause/resume the timer. Hovering should show a pause/start icon over
> the timer. If paused, a pause icon should be displayed over it — some kind of watermark for the
> icons.

## Findings

### Product & common sense

**Justified — it fills a real gap auto-pause can't.** The timer auto-pauses only when a modal covers
the launchpad, the page is hidden, or the mission is switched. None of those fire for the owner's
actual case: **the family steps away (dinner, errand) but leaves the launchpad on screen**, so the
clock — and the recorded best time — keeps inflating. Manual pause is the only thing that covers
"we walked away but left it up." That use case is what reverses spike 07's "no manual controls"
call; the reversal is deliberate and scoped to this gap, not a general re-opening of manual UI.

Comparable: every stopwatch / time-tracker (Toggl, phone stopwatch, sports clocks) has a manual
pause — it's the expected control. The risk is **clutter** against the interim-UI / minimize-polish
floor; mitigated by keeping it to the existing always-visible Timer (no new element) plus a subtle
icon.

### UX standards

The owner's answers drove the shape:

- **Affordance can't be hover-only.** Devices vary (pointer _and_ D-pad). Hover only exists with a
  pointer, so a hover-only icon would be invisible on D-pad screens. The load-bearing signals must be
  input-independent.
- **One control for every input: a real `<button>`.** Today the dashboard has **zero focusable
  elements** — objectives and menu icons are click-only `div`s (no `tabindex`/`role`/`onKeyDown`), so
  it is de-facto pointer-operated. Making the Timer a true `<button>` makes it the first properly
  focusable dashboard control and lets **one** design serve every device: `:hover` reveals the action
  icon on pointer devices, `:focus` reveals the same on D-pad/keyboard, and Enter/OK or click both
  toggle.
- **Action-on-reveal icon semantics** (media-player standard): a **pause** icon while running, a
  **play** icon while paused — the icon shows the action you'd take, not the current state.
- **Persistent paused watermark is load-bearing, not decorative.** In the step-away case nobody is
  hovering, so the paused state must be visible on its own. A faint always-on paused icon (or dimmed
  Timer) both signals "stopped" across all inputs and guards against a stray click silently stopping
  the clock.
- **TV-first.** Keep it within the existing Timer block (no new aside element), large and
  high-contrast, readable at 3–5 m. The reveal/watermark is subtle per minimize-polish.

### Technical viability

Cleanly viable on the stack and the Chrome 87 floor — modest, additive:

- **Store:** a sticky per-mission **`userPaused`** flag. Effective running becomes
  `autoRunning && !userPaused`, ANDed into the Timer's existing derived `running` (which already
  feeds `setRunState`). Manual pause overrides auto-pause (stays paused through modal open/close);
  only a manual resume clears it. The wall-clock bank/segment model from spike 07 already handles
  pause/resume transitions, so this is one more input, not new time math.
- **Component:** the Timer becomes a `<button>` with an `onClick` toggle; an icon overlay revealed via
  `:hover, :focus`; a paused watermark gated on the paused state. Click-to-toggle mirrors how
  objectives toggle (`div onClick`), so it fits the app's interaction model.
- **Assets:** two new inline SVGs (pause, play) — only `restart`/`mission`/`settings`/`edit` exist
  today; they import via `?react` like the rest.
- **Chrome 87:** `:hover`/`:focus`, `pointer-events`, opacity, SVG, and a `<button>` are all far below
  the floor. No new dependency, no Firestore, no API. `compat/compat` stays green.

No data-architecture concern beyond the new persisted flag (localStorage, mirroring the run state).

## Options & trade-offs

**Affordance (resolved with owner):**

- **Option A — `<button>` + reveal on hover **or** focus + persistent paused watermark. *(recommended,
  owner-agreed)*** One design for pointer and D-pad; paused state always visible. Con: introduces the
  first focusable dashboard control (slightly ahead of the rest of the app) — a benefit, not a cost.
- **Option B — hover-only icon on a `div`.** Closest to the literal idea, least code. **Rejected** —
  invisible on D-pad devices; paused state can be silent.
- **Option C — always-visible explicit pause/resume button.** Most discoverable. **Rejected** — extra
  permanent clutter against minimize-polish; the reveal-on-interaction + watermark is enough.

**Icon semantics:** action-on-reveal (pause while running / play while paused) + paused watermark
_(owner-chosen)_ · state-only icon _(rejected — users expect a control to show its action)_ ·
reveal-only, no watermark _(rejected — a stray click could stop the clock silently)_.

**Manual-pause use case:** step-away-with-dashboard-up _(owner-chosen — the gap auto-pause can't
cover)_ · general control preference _(secondary)_ · protect the best from interruptions _(overlaps)_.

## Verdict & recommendation

**`viable-with-changes`.** Build manual pause/resume on the existing Timer, reshaped from the opening
idea on one axis: because the dashboard runs on **mixed input**, the affordance is **not hover-only**.
Make the Timer a focusable `<button>` that reveals an **action icon** (pause while running, play while
paused) on **hover or focus**, toggles the run on click/Enter, and shows a **persistent paused
watermark** whenever stopped. Back it with a sticky per-mission `userPaused` flag where effective
running = `autoRunning && !userPaused`, overriding auto-pause until manually resumed. This knowingly
reverses spike 07's "no manual controls" decision, justified by the step-away gap.

## Suggested scope

**Keep in scope (for `/spec`):**

- A per-mission `userPaused` flag in `useTimerStore`; effective `running = autoRunning && !userPaused`;
  manual toggle action; persisted alongside run state (localStorage).
- Timer as a `<button>`: click/Enter toggles; `:hover, :focus` reveals the action icon (pause/play);
  persistent paused watermark when stopped.
- Two new SVGs (pause, play); BEM `c-timer__…` classes; reduced-motion-safe (no motion needed).
- Co-located unit test for the `userPaused` toggle + effective-running interaction with auto-pause.

**Cut from scope:** any general D-pad focus system for the rest of the dashboard; auto-resume
heuristics; sound; a separate always-visible pause button; competitive/anti-cheat handling of paused
time (not competitive by design).

## Open questions & risks

- [ ] **Persistence across reload / mission-switch.** Does `userPaused` survive a reload and a mission
      switch? Lean: yes, per-mission, persisted (the step-away case may span a reload). Confirm in `/spec`.
- [ ] **Checking an objective while paused.** Does it auto-resume or stay paused? Lean: **stay paused**
      (the watermark reminds the user) — but weigh the risk of silently under-counting if they forget.
- [ ] **Pause before a run starts / after completion.** Toggling at `00:00` (nothing checked) or on a
      frozen completed run should be inert. Define the no-op edges in `/spec`.
- [ ] **Watermark vs. reveal collision.** When paused _and_ hovered/focused, reconcile the persistent
      paused watermark with the revealed play (resume) icon so they don't fight. Settle in `/spec`/`/plan`.
- [ ] **First focusable dashboard control.** The `<button>` enters tab/D-pad order alone; confirm it
      doesn't create an odd lone focus stop on pointer devices (acceptable; note for real-TV check).

## Next step

**`/spec`** (reuse short-name `timer-manual-pause`) — the product forks (use case, affordance, icon
semantics) are resolved; persistence, the paused-vs-reveal collision, and the no-op edges are
spec/plan work. This spike graduates; it does not write the spec.

## References

- Prior decision reversed: [`docs-spikes/07_spike_mission-timer.md`](07_spike_mission-timer.md)
  ("fully automatic — no manual pause/start") and [`docs-journal/19_spec_mission-timer.md`](../docs-journal/19_spec_mission-timer.md).
- Timer internals this builds on: [`src/stores/useTimerStore.ts`](../src/stores/useTimerStore.ts)
  (`setRunState`, wall-clock bank/segment, `runsByMission`) ·
  [`src/components/Timer/Timer.tsx`](../src/components/Timer/Timer.tsx) (derived `running`/`complete`).
- Input-model evidence: [`src/components/Icon/Icon.tsx`](../src/components/Icon/Icon.tsx) +
  [`Icon.css`](../src/components/Icon/Icon.css) (click `div` + `:hover`) ·
  [`src/components/ObjectiveList/Objective.tsx`](../src/components/ObjectiveList/Objective.tsx)
  (click `div`, no focus) — the dashboard is de-facto pointer-operated.
- Icon assets + pattern: [`src/icons/`](../src/icons) (`*.svg?react`).
- Principles: [`docs/04_design-principles.md`](../docs/04_design-principles.md) (TV First · Accessibility) ·
  [CLAUDE.md](../CLAUDE.md) (Chrome 87 floor; D-pad claim vs. the pointer-only reality of the code).
