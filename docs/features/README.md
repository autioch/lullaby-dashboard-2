# Feature specs & plans

Durable specs for features built from scratch via Q&A. Each **spec** is the agreed contract
(_what_ and _why_) before any code is written; each **plan** is the step-by-step execution map
(_how_) derived from a spec; each **summary** is the record of what an `/implement` run actually
did (_what shipped_). All three stay in the repo as the record.

## Convention

- One feature per `NN`, zero-padded sequence:
  - **Spec** — `NN-kebab-name.md` (e.g. `01-mission-streaks.md`). Copy [`_TEMPLATE.md`](_TEMPLATE.md)
    to start; fill it through the elicitation Q&A. `Status` moves
    `draft` → `agreed` (all open questions resolved) → `implemented`.
  - **Plan** — `NN-kebab-name.plan.md`, same `NN` and name. Copy
    [`_PLAN_TEMPLATE.md`](_PLAN_TEMPLATE.md). `Status` moves
    `draft` → `ready` → `in-progress` → `done`.
  - **Summary** — `NN-kebab-name.summary.md`, same `NN` and name. Written by `/implement` at
    close-out from [`_SUMMARY_TEMPLATE.md`](_SUMMARY_TEMPLATE.md); records what was added,
    changed, and skipped. A terminal record — no `Status` lifecycle. Later skills read it.
- Keep spec and plan current: when the build deviates, update the spec; when the approach
  changes, update the plan. The summary is written once per implementation run.

## Workflow

See **"Adding a feature"** in
[`.github/instructions/development.instructions.md`](../../.github/instructions/development.instructions.md),
and [`WORKFLOW.md`](WORKFLOW.md) for the shared grounding reads and rules every pipeline command
follows. The commands chain: `/spec` drives the elicitation loop and writes the spec → `/plan`
turns an agreed spec into the implementation plan → `/implement` executes that plan step by step,
committing and validating each (running `/verify`, `/code-review`, and `/security-review` before
close-out) and writing the implementation **summary** at the end. Later,
`/reconcile <feature>` re-syncs an `implemented` spec with the code if it drifts.
