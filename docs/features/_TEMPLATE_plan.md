# <Feature name> — Plan

> **Artifact:** `NN_plan_<short-name>.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `draft` | `ready` | `in-progress` | `done`
> **Owner:** <name> · **Created:** YYYY-MM-DD · **Last updated:** YYYY-MM-DD
> **Related:** [spec](NN_spec_<short-name>.md) · [implement](NN_implement_<short-name>.md) · [adjust](NN_adjust_<short-name>-r1.md) · [reconcile](NN_reconcile_<short-name>.md) · [retro](NN_retro_<short-name>.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable
steps. The **Product Owner** guards scope; the **Solution Architect / Tech Lead** owns the
sequencing and layering. Unambiguous, no filler.

## Goal

One line: what shipping this delivers, taken from the spec.

## Approach

Short paragraph — how the feature maps onto the layers
(Firestore → repository → store → component, plus API routes if any) and the overall order of
attack. Default to **bottom-up** so the tree is never broken: data/types → repository → store →
component → wiring → validation.

## Read before starting

Context every step assumes — keep open while implementing:

- [CLAUDE.md](../../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor
- [docs/development.md](../development.md) — architecture, conventions, command table, doc-sync map
- [docs/07_data-architecture.md](../07_data-architecture.md) — layering authority
- [the spec — `NN_spec_<short-name>.md`](NN_spec_<short-name>.md) — the contract
- <any other docs this feature touches: 04_design-principles, 05_design, README, …>

## Steps

Ordered and **self-contained** — each leaves the tree green (`npm run ci` passes) and is
independently committable. Phases: **Prep/refactor → Build → Wire → Validate.**

### Step N — <imperative title> · phase: `prep` | `build` | `wire` | `validate`

- **Goal:** what this step achieves and why it comes here.
- **Read:** the markdown + code to consult for _this_ step (e.g. spec §Behavior, a `docs/` file,
  the exact source files being changed). Be specific — name files, not "the docs".
- **Change:** files to create/modify (paths) and the concrete edits.
- **Done-check:** the verifiable gate — `npm run ci`, `npm run build`, or a preview/TV check —
  **plus** any doc to update in the **same commit** (per the sync map).

_(repeat per step)_

## Final verification

- [ ] `npm run ci` green (tsc + lint incl. `compat/compat` + format)
- [ ] `npm run build` succeeds
- [ ] Behavior matches every item in the spec's **Acceptance criteria** (verify on the TV user
      agent / preview, not just unit-level) — use `/verify`
- [ ] Review gate clean: `/code-review` (+ `/security-review` if auth / API / `firestore.rules`
      touched), findings addressed
- [ ] Docs synced; tree internally consistent

## Docs to update

Per the dev guide's **"Keeping docs in sync"** map — list the specific files this feature
touches and when (e.g. `README.md`, `docs/07_data-architecture.md`, and flip the spec's
`Status` → `implemented` on completion).

## Risks & assumptions

- Assumptions made — especially anything resolved from the spec's **Open questions** (and where
  it was recorded).
- Known risks, sequencing hazards, or rollback notes.
