# Completion celebration — Spec

> **Artifact:** `16_spec_completion-celebration.md` · **Roles:** Product Owner
> **Status:** `agreed`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12 · **Last updated:** 2026-06-12
> **Related:** [spike](../docs-spikes/06_spike_completion-celebration.md) · [plan](16_plan_completion-celebration.md) · [implement](16_implement_completion-celebration.md) · [retro](16_retro_completion-celebration.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner** and
settled before any code. Precise and unambiguous; this is the source of truth the rest of the
pipeline executes against.

## Problem / motivation

Finishing a mission is the emotional payoff of the whole "mission" framing, but today reaching 100%
only swaps the footer status line to "Success!" — a small, easy-to-miss change on a 3–5 m TV. There
is no distinct _moment_ that rewards the family for completing together. A presentation-only
celebration delivers that payoff cheaply, without touching mission logic or the data model.

## User story

As a **household**, I want **a visible celebration when we complete every objective** so that
**finishing a mission feels like a shared win, not just a checklist hitting the bottom**.

## Behavior

- When **visible progress reaches 100%** (every visible objective in the active mission is checked),
  a celebration renders as a **full-bleed background layer behind the dashboard content**.
- The celebration is a **burst-then-settle**: a confetti / fireworks burst plays for a few seconds,
  then settles into a **calm persistent glow** that remains for as long as the mission stays at 100%.
- The layer is **pointer-transparent and sits below the content** — the objective list, Menu, Clock,
  Restart, and footer stay fully visible, clickable, and focusable. Nothing is occluded or blocked.
- **Check/uncheck behavior is unchanged.** Done objectives keep de-emphasizing in place — nothing
  moves, hides, collapses, or reorders.
- **Re-trigger:** unchecking any objective (dropping below 100%) **removes** the celebration;
  re-reaching 100% **replays the burst** from the start, then settles again. Every fresh arrival at
  100% celebrates.
- **Reduced motion:** viewers with `prefers-reduced-motion: reduce` get the **static glow only** —
  no confetti, no fireworks, no burst or looping motion — still a clear "mission complete" signal.
- **Purely visual:** the celebration adds no text. The existing footer status ("Success!" /
  "Sukces!") remains the words.
- The celebration **does not fire when there are no visible objectives** (an empty or fully hidden
  mission never reaches 100%).
- **No sound.**

## Scope

**In scope**

- A presentation-only background celebration layer, derived from existing visible-progress
  completion (`percent === 100`).
- CSS-only confetti / fireworks burst that settles into a persistent glow.
- Restart-on-each-arrival re-trigger semantics.
- `prefers-reduced-motion` static-glow fallback.
- en + pl unaffected (no new strings).

**Out of scope** (explicitly not doing now)

- Sound / audio.
- Any celebratory text, headline, or copy.
- Theme-system hooks or themed completion vocabulary ("Orbit Achieved", etc.) — generic visual only;
  themed copy is later rework when the Theme system lands.
- Any change to check/uncheck behavior or done-objective presentation (no move / hide / collapse /
  reorder).
- Records, best completion time, streaks, scoring, or any `completeRun` wiring.
- Any Firestore, data-model, repository, or API change.
- A full-screen overlay / modal / takeover.

## Impact on the codebase

Map the change onto the layered architecture (Firestore → repository → store → component).
Leave a layer blank if untouched.

- **Data model / Firestore** (`src/database/*` record types, collections): _none._
- **Repository** (`src/database/`): _none._
- **Zustand store** (`src/stores/`): _none required._ Completion is derived from the existing pure
  `computeProgress` (`src/stores/missionProgress.ts`, `percent`). Any state needed for the
  burst-replay re-trigger is **ephemeral UI state** (component/render-level) — never written to
  Firestore; the exact mechanism is a `/plan` decision.
- **Components** (`src/components/<Name>/`): a new `CompletionCelebration` component (BEM
  `c-completion-celebration`, CSS imported atop its `.tsx`), mounted in
  [`Dashboard.tsx`](../src/components/Dashboard/Dashboard.tsx) as a sibling **behind**
  `c-dashboard__content`. It reads progress via the same store selectors as
  [`ProgressBar.tsx`](../src/components/ProgressBar/ProgressBar.tsx) + `computeProgress`.
- **API routes** (`src/pages/api/`, admin SDK): _none._

## UI & TV constraints

- **Layout / where it appears:** full-bleed within `.c-dashboard`, positioned behind
  `.c-dashboard__content` (lower `z-index`) and `pointer-events: none` so all interaction passes
  through. Non-blocking by construction — no overlay, no focus trap, nothing to dismiss.
- **TV-first checks:** high-contrast glow legible at 3–5 m; the burst is brief so it doesn't become
  ambient clutter; the resting glow is calm, not distracting. No D-pad interaction required or added.
- **Chrome 87 compatibility:** CSS-only animation — `@keyframes`, `transform`, `opacity`,
  `radial-gradient`, `pointer-events`, and the `prefers-reduced-motion` media query are all
  supported on the floor (reduced-motion since Chrome 74). **No animation library** (no
  `canvas-confetti`), no new dependency. This is the app's first real animation and sets the
  reduced-motion pattern.

## i18n

**None.** The celebration is purely visual; no strings are added or changed. Existing
`progressBar` completion text ("Success!" / "Sukces!") is untouched. Languages: en, pl (unaffected).

## Acceptance criteria

- [ ] Reaching 100% visible completion in a mission shows a confetti / fireworks burst that settles
      into a persistent glow.
- [ ] The celebration renders **behind** the dashboard content; the objective list, Menu, Clock,
      Restart, and footer remain visible, clickable, and focusable (pointer-transparent).
- [ ] Unchecking an objective (dropping below 100%) removes the celebration; re-reaching 100%
      **replays** the burst from the start.
- [ ] With `prefers-reduced-motion: reduce`, only the static glow shows — no confetti/fireworks,
      no burst or looping motion.
- [ ] No new or changed text anywhere; the footer status still reads "Success!" / "Sukces!".
- [ ] Check/uncheck behavior and done-objective styling are unchanged (no move/hide/collapse/reorder).
- [ ] No celebration appears when the mission has no visible objectives.
- [ ] No sound plays.
- [ ] No Firestore / data-model / API change; no new client dependency; no Chrome 87 compat errors
      (`npm run ci:lint` clean).

## Open questions

None blocking — status `agreed`. The following are **non-blocking `/plan`/implementation choices**,
not product decisions: exact burst duration and visual treatment (confetti vs. fireworks vs. both),
the glow's color/intensity, and the precise React mechanism for replaying the burst on each fresh
arrival at 100%.
