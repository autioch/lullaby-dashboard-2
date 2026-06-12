# Completion celebration — Spike

> **Artifact:** `docs-spikes/06_spike_completion-celebration.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** _(fill once/if this idea proceeds to `/spec`)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

Today, hitting 100% only swaps the footer status line to "Success!". Is a distinct
completion moment worth building, and what shape survives the TV-first / Chrome 87 reality without
touching mission logic or the data model?

## Idea as posed

> **Completion celebration** — a distinct 100%-complete moment (today only the "done" status
> message marks completion).

Owner direction during the spike: a confetti / fireworks burst-and-glow, drawn **in the background
below the content** so everything stays clickable; **no change** to how checking/unchecking works
(no moving or hiding done objectives); unchecking away from 100% stops the animation and re-reaching
100% restarts it.

## Findings

### Product & common sense

Strong fit. Completion celebration is a standard pattern in task/habit/chore apps (Todoist,
Habitica, Finch, OurHome), and for a family "mission" dashboard it is the emotional payoff that
makes the _Mission Over Checklist_ framing land — the screen visibly rewards finishing together.

The principle that constrains it is _Cooperative Not Competitive_: this must be a **shared "we did
it"** moment, not an individual score, streak, or leaderboard. That rules in a presentation-only
celebration and rules out any tie to scoring or records. It also stays clear of the separate
roadmap items it brushes against — **Best completion time / records** (no data, no `completeRun`
wiring here) and **Completed-objective behavior** (the owner explicitly froze check/uncheck
behavior — done objectives keep de-emphasizing in place, nothing moves or collapses).

Simpler alternatives (just restyle the "Success!" line) were considered and rejected by the owner
in favor of a real background burst — still cheap, but an actual _moment_.

### UX standards

TV-first reality drove the shape:

- **Non-blocking by construction.** The celebration is a **background layer below the content**,
  pointer-transparent — so the objective list, Restart, and Menu stay fully clickable and focusable.
  No overlay, no modal, no focus trap, nothing to D-pad out of. This matters on a shared, often
  remote-less TV where the last objective was just tapped and no one is holding a controller.
- **Behavior-preserving.** No reordering, hiding, or collapsing of done objectives (owner's hard
  constraint) — the celebration is purely additive paint behind the existing UI.
- **Re-trigger is intentional, not dampened.** Dropping below 100% stops the animation; returning to
  100% restarts it. (This reverses the draft's "dampen re-fires" instinct — the owner wants the
  burst every time the family completes the mission.)
- **Reduced motion.** A full-bleed animated burst must honor `prefers-reduced-motion`; reduced-motion
  viewers get a calm completed state (e.g. a static glow) instead of motion. Accessibility principle,
  not optional.
- **No sound (v1).** Visual-only — avoids autoplay-policy friction, collision with a playing YouTube
  mission embed, and disruption in a shared room. Sound can be its own later item.

### Technical viability

Cleanly viable on the stack and the Chrome 87 floor:

- **CSS-only, no dependency.** Confetti / fireworks / glow are achievable with `@keyframes` +
  `transform`/`opacity`/`radial-gradient`, all comfortably within Chrome 87. No `canvas-confetti` or
  other library needed (avoids a compat check and a dependency). This would be the app's **first real
  animation** — today only the progress fill has a `transition` — so it also establishes the
  animation + reduced-motion pattern for later work (the broader "Animations" roadmap item).
- **`prefers-reduced-motion`** is supported well below the floor (Chrome 74+), so the guard is safe to
  rely on.
- **Pointer-transparency** via `pointer-events: none` and a `z-index` beneath
  `c-dashboard__content` keeps the layer non-interactive — long-supported, no floor risk.
- **State stays presentation-only.** `computeProgress` already derives `percent` purely; the
  celebration is `percent === 100`. The owner's re-trigger rule (restart on each fresh arrival) is a
  small render concern — restart the keyframes on every below→100 transition (e.g. a remount key /
  epoch counter bumped on arrival), held as **ephemeral UI state**, never written to Firestore.
  Per the layering rules, no repository/Firestore involvement and no mutation after a write.
- **Mount point** is a new sibling layer inside `c-dashboard`, painted behind
  `c-dashboard__content` — `Dashboard.tsx` already composes the regions there.

No data-model change, no API, no Firestore read/write.

## Options & trade-offs

**Form (resolved with owner):**

- **Option A — background burst-and-glow layer, below content, pointer-transparent. _(recommended,
  owner-chosen)_** Non-blocking, behavior-preserving, CSS-only. Con: a behind-content layer is less
  in-your-face than an overlay — acceptable, and the point.
- **Option B — full-screen takeover overlay.** Biggest payoff, but blocks the list and needs clean
  dismiss/auto-timeout on a remote-less TV. **Rejected (owner).**
- **Option C — footer flourish only** (restyle "Success!"). Smallest, but barely a "moment".
  **Rejected (owner).**

**Sound:** No sound for v1 _(owner-chosen)_ · optional-off-by-default _(rejected — scope for a
feature most won't enable)_ · on-by-default _(rejected — autoplay + shared-space disruption)_.

**Theme coupling:** Ship now, **no theme hooks** _(owner-chosen)_ — generic copy, no seam for the
unbuilt Theme system · ship now theme-ready _(rejected by owner — slightly more now for later
convenience)_ · wait for themes _(rejected — delays an independent win)_.

**Re-trigger:** Restart on every fresh arrival at 100% _(owner-chosen)_ · fire-once-and-dampen
_(rejected — owner wants it each time)_.

## Verdict & recommendation

**`viable-with-changes`.** Build Option A: a presentation-only **background celebration layer**
rendered below `c-dashboard__content` and pointer-transparent, showing a CSS-only confetti /
fireworks burst-and-glow while visible progress is at 100%. Derive it from `percent === 100`;
restart the animation on each below→100 transition; stop it when progress drops below 100%. Honor
`prefers-reduced-motion`. No sound, no theme hooks, no data model, and **no change** to
check/uncheck or done-objective behavior. Generic copy ("Mission complete!" / existing "Success!"
vocabulary).

## Suggested scope

**Keep in scope (for `/spec`):**

- A new background layer in `Dashboard.tsx` (behind `c-dashboard__content`, `pointer-events: none`,
  lower `z-index`) that renders the celebration when visible progress is 100%.
- CSS-only confetti/fireworks burst + glow (`@keyframes`, `transform`/`opacity`/`radial-gradient`);
  Chrome 87-safe; first animation pattern in the app.
- `prefers-reduced-motion` guard → static/calm completed state under reduced motion.
- Re-trigger semantics: animation runs while at 100%, stops below 100%, **restarts** on each fresh
  arrival (ephemeral UI state / remount key; no Firestore).
- Generic completion copy — reuse/extend existing `progressBar` "done" vocabulary; en + pl.

**Cut from scope:** sound; full-screen overlay/modal; theme vocabulary hooks; any reorder/hide/
collapse of done objectives; records / best-time / `completeRun`; any Firestore or data-model
change.

## Open questions & risks

- [ ] **Burst vs. sustained.** Does the animation play once on arrival then hold a static glow, or
      loop while at 100%? Settle the exact motion in `/spec` (lean: a short burst that settles into a
      calm glow, restarted on re-arrival).
- [ ] **Restart mechanism.** Confirm the React approach to re-fire keyframes on each below→100 edge
      (remount key / epoch counter) during `/plan`; keep it ephemeral, no Firestore.
- [ ] **Reduced-motion fallback shape.** Define what reduced-motion viewers see (static glow? plain
      completed tint?) in `/spec`.
- [ ] **Theme rework debt (accepted).** When the Theme system lands, themed completion vocabulary
      ("Orbit Achieved", "Treasure Expedition Complete") will mean revisiting this copy. Accepted as
      later rework per "no theme hooks".
- [ ] **Empty / single-objective missions.** Confirm celebration only fires for a real completion
      (e.g. `total > 0`), not a vacuous 100% — `/spec` edge case.

## Next step

**`/spec`** (reuse short-name `completion-celebration`) — every product fork was resolved here, but
the motion details, reduced-motion fallback, and restart mechanism are spec/plan work. This spike
graduates; it does not write the spec.

## References

- Roadmap entry: [`docs/06_roadmap.md`](../docs/06_roadmap.md#dashboard-design-specced-not-yet-built)
  (Completion celebration; adjacent Completed-objective behavior, records, Theme system, Animations).
- Current completion surface: [`src/components/ProgressBar/ProgressBar.tsx`](../src/components/ProgressBar/ProgressBar.tsx)
  (`getProgressText` → `progressDone`) · [`translations.ts`](../src/components/ProgressBar/translations.ts)
  ("Success!" / "Sukces!").
- Pure progress derivation: [`src/stores/missionProgress.ts`](../src/stores/missionProgress.ts)
  (`computeProgress` → `percent`).
- Mount point: [`src/components/Dashboard/Dashboard.tsx`](../src/components/Dashboard/Dashboard.tsx).
- Principles that shaped the verdict: [`docs/04_design-principles.md`](../docs/04_design-principles.md)
  (Cooperative Not Competitive · TV First · Accessibility) ·
  [`docs/05_design.md`](../docs/05_design.md) (current footer/status behavior).
- Browser support: `prefers-reduced-motion` — Chrome 74+ (below the Chrome 87 floor).
