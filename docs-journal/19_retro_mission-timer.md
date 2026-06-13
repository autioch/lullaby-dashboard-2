# Mission timer — Retrospective

> **Artifact:** `19_retro_mission-timer.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13
> **Related:** [spec](19_spec_mission-timer.md) · [plan](19_plan_mission-timer.md) · [implement](19_implement_mission-timer.md)

Review of the whole iteration — spike → spec → plan → implement — run in one pass at the owner's
request (chain executed tweak-style: pause only on a real fork, otherwise proceed).

## Signals

- **Plan fidelity:** built exactly as planned — store → component → wire → validate, all four steps
  landed. No in-flight spec/plan rewrites. Implementation record _Skipped / deferred_ carries only
  pre-agreed cuts (records, `L5`, expiry-prune parity).
- **Churn:** **zero** adjustment rounds. The spike resolved every product fork up front (records
  deferred, automatic-only, placement, freeze-at-100%, discard-and-rebuild), so spec/plan/implement
  ran clean with no rework.
- **Loose ends:** `L5` real-TV unverified (display-only, no expected risk); best-time records remain
  the separate open roadmap item.

## Doc reconciliation

Repo-wide audit against the code (doc-sync map):

- `docs/05_design.md` — added the Timer to the aside **and** removed "mission timer" (and the
  already-shipped "completed-objective collapse") from the intro's not-built list. Now current.
- `docs/06_roadmap.md` — "Mission timer display" → done; "Best completion time / records" left open.
- `docs/03_user-scenarios.md` — Restart scenario's "the timer resets" is now literally true; no edit
  needed.
- `docs/development.md` — store list still names `useTimerStore` (name unchanged); accurate.
- No other durable-doc drift.

## What went well

- **The spike paid for itself.** Front-loading the forks into `/spike` meant zero churn downstream —
  the clearest evidence the optional de-risk lane earns its place for an idea with real product
  ambiguity ("fastest run?", manual controls, placement).
- **The one-action store design is the maintainability fix.** All segment math lives in
  `setRunState`; the component only computes booleans and ticks. Directly answers the owner's
  complaint that the old store "didn't work and was hard to maintain" — and it's fully unit-tested
  (9 tests) where the old one had none.
- **Pause-on-hidden verified live, by accident.** The headless preview reported the page as `hidden`,
  so the timer sat at `00:00` until visibility was forced — a free, real confirmation of the
  hardest-to-fake criterion, then `00:00 → 00:03` once visible.
- **Persisting banked-time-only (not `segmentStartMs`)** cleanly solved the reload-gap problem without
  extra logic.

## What to improve

- **`L5` is still an honest gap.** Every timer iteration ends "verified on preview, real-TV pending."
  Fine for a display-only readout, but the backlog of unconfirmed-on-hardware changes is growing —
  worth a single real-TV sweep at some point rather than per-feature.
- **Screenshot proof was unavailable** — `preview_screenshot` timed out (the visibility override
  wedged the renderer). DOM/computed-style assertions covered it, but visual proof for the owner was
  lost this run. If forcing visibility for a check, do it last.

## Bottom line

Clean, low-risk iteration: a stated roadmap item shipped, a stated success-metric (completion time
made visible) now served, the dead store replaced with a tested one, zero churn. The spike-first
discipline is the takeaway worth repeating.

## Team feedback

- **Product Owner:** Got what I wanted with no back-and-forth. Deferring records was right — the live
  timer already does the "nudge faster" job; records can be their own small win later.
- **Tech Lead:** The derive-don't-command shape (component computes booleans, store owns all
  transitions) is what kept this maintainable. The "pause every _other_ mission's open segment" trick
  made mission-switch correctness fall out for free instead of needing effect-cleanup.
- **Developer:** Smooth — mirrored `ProgressBar`'s selectors and `useMissionStore`'s fake-LS test
  pattern, nothing novel to fight. Only friction was the flaky preview screenshot.
- **Design:** Placement under the Clock reads as ambient chrono info, doesn't fight the progress bar.
  Minimal-polish honored — no animation, one line, `tabular-nums` so digits don't jitter.

## Suggested next actions

- **Records / fastest-run** as the next pick when the owner wants it — small, well-scoped, builds
  directly on the frozen `accumulatedMs` (route via `/tweak` or a short `/spec`).
- **Batch a single real-TV (`L5`) sweep** across recent display-only features (timer, completion
  celebration, completed-objective behavior) rather than per-feature.
- Otherwise: ship as is.

## Decision

- _(owner to record)_
