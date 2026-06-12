# Content editing (missions, groups, objectives) — Retrospective

> **Artifact:** `01_retro_content-editing.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-11
> **Related:** [spec](01_spec_content-editing.md) · [plan](01_plan_content-editing.md) · [implement](01_implement_content-editing.md) · adjust [r1](01_adjust_content-editing-r1.md), [r2](01_adjust_content-editing-r2.md), [r3](01_adjust_content-editing-r3.md)

Product-owner review of the whole iteration — spec → plan → implement → adjust. The wrap-up the
owner reads before deciding the next move. Terse and blunt; every claim traces to an artifact or
commit.

## Signals

- **Plan fidelity:** Steps 1–6 executed cleanly — one green, independently committable commit each
  (`5923230` auth → `fce2687` menu wire). **Step 7 (end-to-end validation + close-out) never ran**
  (implementation record _Skipped/deferred_): no acceptance walk on the TV UA, no security review, no status flip.
  The build followed the plan; the iteration never closed it.
- **Churn:** 3 adjustment rounds, ~13 commits, **~1,949 insertions / 814 deletions across 32 files**
  — nearly a second full build on top of the original ~2,144 insertions. Mix of genuine TV-driven
  simplification (R1 CR-1 drop attach/library; R2 CR-2 drop the objective level; R3 CR-2 compact
  row) and avoidable rework (save model and button radius round-tripped — see _What to improve_).
  Two genuine bugs surfaced by testing: random-logout-on-save (`986f952`), disabled-button cursor
  (`e3afa79`).
- **Loose ends:** original auth/session/admin-write `/security-review` never run; live
  authenticated persistence never walked (dev `PUBLIC_SKIP_AUTH` masks 401s); `ReauthPrompt` never
  live-exercised; real-TV hardware confirmation outstanding; dead attach/remove API actions +
  repo/store methods retained since R1; statuses never flipped.

## What went well

- Bottom-up plan held — each step left the tree green and independently committable; the build
  never broke (`5923230`…`fce2687`).
- Layering respected end to end: writes go client → edit repo → admin route → snapshot, no manual
  Zustand mutation, `tools/firestore.rules` stayed `write: false` (implementation record Verification).
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
  open gap. There is no distinct, mandatory close-out (validate + secure) in the cycle, so it
  silently fell off.

## Bottom line

A clean, well-sequenced build of an over-specified feature — then three rounds of `/adjust` mostly
_removing_ complexity the spec shouldn't have committed to, with the close-out (validation +
security review) never done. The code works on the TV UA; the unrun security review is the debt.
The real lesson is about the **pipeline**, not this feature.

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

## Suggested next actions

Concrete and prioritized — each tied to a problem above. Suggestions only; the owner decides.

1. **`/security-review` the auth/session/admin-write code** — the original Step-7 security pass on
   brand-new `setSession`/`requireSession` + admin write routes never ran. Highest risk, do first.
2. **Real-TV / authenticated walk** — verify live authenticated persistence and exercise
   `ReauthPrompt` on the deployed app (dev `PUBLIC_SKIP_AUTH` masks the 401 paths).
3. **Remove dead attach/remove code** — strip the retained-but-unused API actions + repo/store
   methods (dead since R1) once confirmed they're not coming back.
4. **Process tweaks for the next feature** (from owner feedback):
   - Add a **UI/UX design step** (TV-readability lens, MVP-first scoping) before or inside `/spec`,
     so complexity isn't derived from the data shape.
   - Add a **distinct security/maintenance step** after `/implement` that can't be silently skipped.

## Decision

Left for the owner to record what they will actually do next.

-
