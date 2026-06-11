# Feature specs & plans

Durable specs for features built from scratch via Q&A. Each pipeline command emits exactly one
markdown artifact, named on a single scheme: **`NN_<command>_<short-name>.md`**. Each **spec** is
the agreed contract (_what_ and _why_) before any code; each **plan** is the step-by-step
execution map (_how_); each **implementation** record captures what shipped — and so on through
adjust, reconcile, and retro. All of them stay in the repo as the record, and every command forces
the role(s) that own it (see each command's header and `WORKFLOW.md`).

## Convention

- One feature per `NN`, zero-padded sequence; one `<short-name>` (kebab-case) shared by every
  artifact. Each command copies its template (`_TEMPLATE_<command>.md`) and all templates share
  one header style (`Artifact` · `Roles` · `Status` · `Owner` · `Related`):
  - **Spec** — `NN_spec_<short-name>.md` (e.g. `01_spec_mission-streaks.md`). Role: **Product
    Owner**. Copy [`_TEMPLATE_spec.md`](_TEMPLATE_spec.md); fill it through the elicitation Q&A.
    `Status` moves `draft` → `agreed` (all open questions resolved) → `implemented`.
  - **Plan** — `NN_plan_<short-name>.md`. Roles: **Product Owner · Solution Architect / Tech
    Lead**. Copy [`_TEMPLATE_plan.md`](_TEMPLATE_plan.md). `Status` moves
    `draft` → `ready` → `in-progress` → `done`.
  - **Implementation** — `NN_implement_<short-name>.md`. Role: **Senior Fullstack Developer**.
    Written by `/implement` at close-out from [`_TEMPLATE_implement.md`](_TEMPLATE_implement.md);
    records what was added, changed, and skipped. A terminal record — no `Status` lifecycle. Later
    skills read it.
  - **Adjustments** — `NN_adjust_<short-name>-rN.md`, one per post-review round (`-r1`, `-r2`, …).
    Roles: **the full team** (Product Owner · Tech Lead · Developer). Written by `/adjust` from
    [`_TEMPLATE_adjust.md`](_TEMPLATE_adjust.md); records the change requests raised after
    implementation (product owner / dev / design), how each was handled, and the result.
    `/adjust` changes code but leaves spec, plan, and implementation record frozen, so they drift
    until `/reconcile` re-syncs the spec. A terminal record — no `Status`.
  - **Reconciliation** — `NN_reconcile_<short-name>.md`. Roles: **Product Owner · Solution
    Architect / Tech Lead**. Written by `/reconcile` from
    [`_TEMPLATE_reconcile.md`](_TEMPLATE_reconcile.md); records the drift found between an
    `implemented` spec and the code, and the re-sync applied to the spec + general docs (the
    feature history is preserved, not rewritten). A terminal record — no `Status`.
  - **Retro** — `NN_retro_<short-name>.md`, one per iteration. Roles: **Product Owner (lead) · all
    roles weigh in**. Written by `/retro` from [`_TEMPLATE_retro.md`](_TEMPLATE_retro.md); a review
    of the whole cycle — what worked, what to improve, the team's feedback, and suggested next
    actions. It reads every other artifact but edits none. The wrap-up the user reads to decide
    what's next. A terminal record — no `Status`.
- Keep spec and plan current: when the build deviates, update the spec; when the approach
  changes, update the plan. The implementation record is written once per implementation run; each
  adjustments file once per review round.

## Workflow

See **"Adding a feature"** in [`development.md`](../development.md),
and [`WORKFLOW.md`](WORKFLOW.md) for the shared grounding reads and rules every pipeline command
follows. The commands chain: `/spec` drives the elicitation loop and writes the spec → `/plan`
turns an agreed spec into the implementation plan → `/implement` executes that plan step by step,
committing and validating each (running `/verify`, `/code-review`, and `/security-review` before
close-out) and writing the **implementation record** at the end. Post-review change requests go
through `/adjust` (code changes; spec, plan, and implementation record stay frozen). Later,
`/reconcile <feature>` re-syncs an `implemented` spec with the code if it drifts and writes a
**reconciliation** record. To close the cycle, `/retro <feature>` reviews the whole iteration and
writes the **retro** — the wrap-up the user reads before deciding what's next. Every command
forces the role(s) that own its step.
