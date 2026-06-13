# Completed-objective behavior — Retrospective

> **Artifact:** `17_retro_completed-objective-behavior.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13
> **Related:** [spec](17_spec_completed-objective-behavior.md) · [plan](17_plan_completed-objective-behavior.md) · [implement](17_implement_completed-objective-behavior.md)

Review of the **whole** iteration — spec → plan → implement — led by the Product Owner with every
role weighing in. Terse and blunt; every claim traces to an artifact or commit.

## Signals

- **Plan fidelity:** textbook. 2 src commits matching the 2 build/wire steps exactly; **zero**
  in-flight edits, **zero** review-fix commits.
- **Churn:** **0** adjustment rounds. No rework.
- **Loose ends:** none. L5 (compact-row readability/operability at 3–5 m on real TV) was flagged in
  the [implementation record](17_implement_completed-objective-behavior.md) and **confirmed good by
  the owner**.
- **Scale:** 75 insertions / 4 files — pure helper + 7 tests (55 lines), `ObjectiveGroup` (7), CSS (14).

## Doc reconciliation

Repo-wide audit against the current code (doc-sync map). **No drift** — the per-commit sync already
brought `docs/05_design.md`'s "Main — objective list" bullet in line (completed objectives now sink
to the bottom of their group and compact; commit `2b90387`). `README.md` and `docs/development.md`
need nothing.

## What went well

- **Clean contract → exact execution → no churn.** The spec held as written; nothing leaked into a
  `/adjust`. The plan's 3 steps ran in order with a green tree throughout.
- **The "extract + test" choice paid off.** `orderByCompletion` (`src/stores/objectiveOrder.ts`) is a
  pure derivation with 7 unit cases mirroring `computeProgress` — a regression net on the one thing
  that could silently break (authored order within each partition). Contrast feature 16, whose inline
  guard shipped a (review-caught) bug.
- **MVP discipline held.** Animation explicitly deferred; presentation-only; no data/store-state/API/
  i18n touched; authored order in Firestore untouched.

## What to improve

- **The full pipeline was heavy for a ~75-line change.** Spec→plan→implement for a small,
  well-bounded visual change is more ceremony than it needed — the `/tweak` lane likely fits this
  class of change. (Owner's read, below.)
- **Don't over-invest in interim UI.** The compact sizing was tuned by hand and landed first-try, but
  the broader signal is to spend _less_ on UI polish, not more, while the UI is a test harness — see
  the product-direction shift below.

## Bottom line

About as clean as a small iteration gets — tested core logic, exact execution, zero churn, L5
confirmed. The takeaways are about **process weight and UI investment**, not this code.

## Team feedback

- **Product Owner (Jakub):** "Turns out it was a small change — `/tweak` maybe could handle it, maybe
  not. I think the workflow needs some adjustments." And, importantly: **"I don't want to invest into
  UI too much, as it will be reworked later — now it just serves to test the API and features. Skip
  animations where they're not mandatory."**
  - **Product-direction shift:** the current UI is an **interim harness** to exercise the API/features
    and **will be reworked later** (the Theme system will redo presentation). Future work should
    **minimize UI polish, default to no animation unless required, and bias small/visual changes to
    `/tweak`.** This **reverses the prior "keep iterating live" lean toward polish** (feature 16
    retro). Saved to agent memory (`ui-is-interim-minimize-polish`) so it carries across sessions.
- **Tech Lead read:** sequencing and layering held; the pure-helper extraction is the reusable win.
- **Developer read:** nothing bit — clean build, no review findings.

## Suggested next actions

Suggestions only — the owner decides.

1. **`/steer`** — mark the roadmap's "Completed-objective behavior" `[x]` and pick the next item.
   (Recommended; natural next step.)
2. **Process tweak — lane guidance + lower the UI-polish bar.** A small `/tweak` on the workflow docs
   to (a) clarify when a change should take `/tweak` vs the full pipeline, and (b) record the
   "interim UI → minimize polish, skip non-mandatory animation" default so it's not just in memory.
   Addresses both owner points above. (Feeds the open Process & pipeline backlog.)
3. **Drop / deprioritize the deferred sink-compact animation.** Given "skip animations where not
   mandatory," the animation noted as a future tweak should **not** be scheduled now — leave it out
   unless the owner asks.

## Decision

_Left for the owner._

- [ ] …
