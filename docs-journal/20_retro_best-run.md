# Best run — Retrospective

> **Artifact:** `20_retro_best-run.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13
> **Related:** [spec](20_spec_best-run.md) · [plan](20_plan_best-run.md) · [implement](20_implement_best-run.md)

Review of the iteration — spec → plan → implement — run in one pass as the deferred follow-up to the
[mission timer](19_spec_mission-timer.md), the records half the timer spike split off.

## Signals

- **Plan fidelity:** built exactly as planned — store → Timer line → celebration beat → Settings
  reset → validate. No in-flight spec/plan rewrites. _Skipped / deferred_ holds only pre-agreed cuts
  (no floor, no history, `L5`).
- **Churn:** **zero** adjustment rounds. Four upfront `AskUserQuestion` forks (display, new-best
  feedback, junk-run handling, clear/Restart) plus one follow-up (reset location/scope) settled the
  shape before any code.
- **Loose ends:** `L5` real-TV unverified (display-only; no expected risk). The "New best!" beat was
  verified by unit test + render path, not a live faster-completion drive.

## Doc reconciliation

- `docs/05_design.md` — Timer entry notes the `Best` line and best-survives-Restart; Settings lists
  the mission-scoped reset; the completion-celebration section documents the "New best!" beat and
  corrects the old "no added text" claim. Current.
- `docs/06_roadmap.md` — "Best completion time / records" → done. The timer/records pair from the
  spike is now both shipped.
- No other durable-doc drift (the store name is unchanged; `development.md` still accurate).

## What went well

- **Building on the timer store paid off.** The frozen `accumulatedMs` was exactly the input records
  needed — the whole record is one branch on the existing completion edge in `setRunState`, no new
  lifecycle. The timer spike's "frozen-final is the record's natural input" prediction held.
- **Owner forks killed ambiguity early.** The junk-run question surfaced a real footgun (a 2-second
  bogus record); the owner's "count everything + a separate reset" answer turned it into a clean,
  bounded design instead of a half-built heuristic.
- **Separation of run vs. record state** made "survives the objectives Restart" fall out of narrowing
  `resetTimerState` — no special-casing.
- **The stacking-context catch.** Spotting that the celebration's `z-index: 0` root caps its
  children below content (so the banner had to be a fragment sibling) avoided an invisible "New
  best!" that would only have shown up on real hardware.
- **Reset verified end-to-end on the preview** (button conditional, confirm, storage cleared) — the
  destructive path proven, not assumed.

## What to improve

- **The "New best!" beat wasn't driven live.** Verifying it needs two full completions (record, then
  a faster one) — too tedious to click through 20 objectives twice, so it leaned on unit tests + the
  render path. A seam to force a completion state in the preview would make celebration variants
  actually drivable.
- **`L5` gap keeps growing.** Timer, celebration, completed-objective behavior, and now records are
  all "preview-verified, hardware-pending." Still worth one batched real-TV sweep.
- **Coupling crept into the celebration.** `CompletionCelebration` now reads the timer store — fine
  and guarded, but it's the first cross-feature read there. Watch that it doesn't accrete more.

## Bottom line

Clean, zero-churn follow-up that closes the timer/records pair from the spike. The upfront forks did
the heavy lifting; the build was a small, well-bounded extension of an already-tested store. Both
roadmap items the spike spawned are now shipped.

## Team feedback

- **Product Owner:** Exactly the shape I wanted. Deferring records out of the timer build and doing
  them as their own pass kept each step small and the decisions sharp.
- **Tech Lead:** The record is a near-trivial add because the store was designed right the first time.
  The one judgment call worth its weight was the foreground-banner stacking fix.
- **Developer:** Smooth — reused the translation-map, Button/confirm, and fake-LS test patterns
  wholesale. The only real thinking was where the "New best!" element lives in the z-order.
- **Design:** Best line reads as a quiet secondary stat under the live time; the new-best banner is a
  genuine moment without becoming a takeover (transient, pointer-transparent). Reduced-motion honored.

## Suggested next actions

- **Batch a single real-TV (`L5`) sweep** across timer, records, celebration, and completed-objective
  behavior.
- Consider a small **preview/test seam to force completion state** so celebration variants are
  drivable without 20 clicks (tooling, low priority).
- Otherwise: ship as is. The timer/records arc is complete; next pick is open in `/steer`.

## Decision

- _(owner to record)_
