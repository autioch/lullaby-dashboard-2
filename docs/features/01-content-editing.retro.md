# Content editing (missions, groups, objectives) — Iteration Retrospective

> Spec: [01-content-editing.md](01-content-editing.md) · Plan: [01-content-editing.plan.md](01-content-editing.plan.md) · Summary: [01-content-editing.summary.md](01-content-editing.summary.md) · Adjustments: [round 1](01-content-editing.adjustments-1.md), [round 2](01-content-editing.adjustments-2.md), [round 3](01-content-editing.adjustments-3.md)
> Owner: Jakub Szczepaniak · Date: 2026-06-11

Product-owner review of the whole iteration — spec → plan → implement → adjust. The wrap-up the
owner reads before deciding the next move. Terse and blunt; every claim traces to an artifact or
commit.

## Signals

- **Plan fidelity:** Steps 1–6 executed cleanly — one green, independently committable commit each
  (`5923230` auth → `fce2687` menu wire). **Step 7 (end-to-end validation + close-out) never ran**
  (summary _Skipped/deferred_): no acceptance walk on the TV UA, no security review, no status flip.
  The build followed the plan; the iteration never closed it.
- **Churn:** 3 adjustment rounds, ~13 commits, **~1,949 insertions / 814 deletions across 32 files**
  — nearly a second full build on top of the original ~2,144 insertions. Mix of genuine TV-driven
  simplification (R1 CR-1 drop attach/library; R2 CR-2 drop the objective level; R3 CR-2 compact
  row) and avoidable rework (save model and button radius round-tripped — see _What to improve_).
  Two genuine bugs surfaced by testing: random-logout-on-save (`986f952`), disabled-button cursor
  (`e3afa79`).
- **Drift:** Total and unreconciled. Spec still `agreed`, plan still `in-progress`. All three rounds
  flag `/reconcile`; nothing folded back. Spec still describes the attach/library model, a 4-level
  drill-down with a dedicated objective screen, per-field/immediate saves, and `401 → auth gate` —
  the code does none of these.
- **Loose ends:** original auth/session/admin-write `/security-review` never run; live
  authenticated persistence never walked (dev `PUBLIC_SKIP_AUTH` masks 401s); `ReauthPrompt` never
  live-exercised; real-TV hardware confirmation outstanding; dead attach/remove API actions +
  repo/store methods retained since R1; statuses never flipped.

## What went well

- Bottom-up plan held — each step left the tree green and independently committable; the build
  never broke (`5923230`…`fce2687`).
- Layering respected end to end: writes go client → edit repo → admin route → snapshot, no manual
  Zustand mutation, `tools/firestore.rules` stayed `write: false` (summary Verification).
- `/adjust` worked as a pressure valve — three rounds of real product feedback landed without
  corrupting the frozen contracts, each change traced to commits.
- Adjustment testing caught two real bugs that the build missed: the auth-flag/cookie decoupling
  "random logout on save" (`986f952`) and the disabled-button `wait` cursor (`e3afa79`).

## What to improve

- **The spec over-designed, and `/adjust` paid for it.** The attach/library reference model (spec
  §Behavior "Membership and ordering") and the 4-level drill-down with a dedicated objective screen
  were both killed in R1/R2 as "too complex on a TV" — ~800 deletions of code the spec mandated.
  Root cause (owner): there was **no UI/UX design step**, so complexity was derived straight from
  the data shape (id-based references) rather than from how a parent operates the TV.
- **Save semantics flip-flopped three times:** spec (per-field + immediate stepper) → R1 (explicit
  Save/Cancel per entity) → R2 (group-batched Save). Avoidable rework — the save model belonged in
  the spec/design up front.
- **Styling churned in circles:** R1 _added_ button radius (via Button reuse) → R2 squared buttons
  → R3 squared everything. The app's "square, minimalistic" look is an existing principle; the build
  should have honored it from the start instead of round-tripping it.
- **The iteration never closed.** Step 7 was deferred and never picked up; the original
  `/security-review` of brand-new auth/session/admin-write code is still outstanding — the riskiest
  open gap. There is no distinct, mandatory close-out (validate + secure + reconcile) in the cycle,
  so it silently fell off.

## Bottom line

A clean, well-sequenced build of an over-specified feature — then three rounds of `/adjust` mostly
_removing_ complexity the spec shouldn't have committed to, with the close-out (validation +
security review + reconcile) never done. The code works on the TV UA; the unmatched contract and
the unrun security review are the debt. The real lesson is about the **pipeline**, not this feature.

## Owner's feedback

Captured from the retro Q&A — the owner's own read, in substance:

- **On churn:** "Lack of UI/UX design step caused issues. The complexity was derived from the data
  shape. The spec should be always MVP with improvements later." → the pipeline needs a design step
  before/within `/spec`, and specs should scope to an MVP, deferring enhancements rather than
  front-loading them.
- **On the close-out gap:** "A separate, distinct step should be introduced after the development
  step. It's important to keep the app secure and well maintained." → security and maintenance
  belong in their own explicit pipeline stage after `/implement`, not folded into validation that
  can be skipped.
- **On what's next / reconcile:** "The reconciliation and updating docs should be a separate step in
  the development cycle. The separate artifacts should be kept for reference. The general
  documentation should be updated, not the history of feature implementation." → `/reconcile`
  should be its own cycle step that updates the **general docs** (spec/architecture/README) while
  the per-feature artifacts (spec, plan, summary, adjustments) are preserved as historical
  reference, not rewritten.

## Suggested next actions

Concrete and prioritized — each tied to a problem above. Suggestions only; the owner decides.

1. **`/security-review` the auth/session/admin-write code** — the original Step-7 security pass on
   brand-new `setSession`/`requireSession` + admin write routes never ran. Highest risk, do first.
2. **`/reconcile 01-content-editing`** — fold three rounds of drift into the spec/general docs so the
   contract matches the code; keep the adjustments artifacts as reference (per owner). Flip
   spec `Status` → `implemented`, plan → done.
3. **Real-TV / authenticated walk** — verify live authenticated persistence and exercise
   `ReauthPrompt` on the deployed app (dev `PUBLIC_SKIP_AUTH` masks the 401 paths).
4. **Remove dead attach/remove code** — strip the retained-but-unused API actions + repo/store
   methods (dead since R1) once `/reconcile` confirms they're not coming back.
5. **Process tweaks for the next feature** (from owner feedback):
   - Add a **UI/UX design step** (TV-readability lens, MVP-first scoping) before or inside `/spec`,
     so complexity isn't derived from the data shape.
   - Add a **distinct security/maintenance step** after `/implement` that can't be silently skipped.
   - Make **`/reconcile` + doc-sync** an explicit cycle step that updates general docs and preserves
     the feature artifacts as history.

## Decision

Left for the owner to record what they will actually do next.

-
