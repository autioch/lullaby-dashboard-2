---
description: Turn an agreed feature spec into a step-by-step implementation plan under docs/features/
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion
---

Turn an agreed spec from `docs/features/` into a durable, ordered implementation plan any agent
can execute step by step. **Do not write app code in this command** — the output is the plan
document only. Implementation is a separate step.

The spec to plan (path, `NN`, or feature name; may be empty): `$ARGUMENTS`

## Steps

1. **Locate the spec.** Resolve `$ARGUMENTS` to a file in `docs/features/`. If empty or
   ambiguous, list the available specs and ask which one. Read it in full. If its `Status` is
   not `agreed`, flag that and confirm before planning (planning a `draft` is allowed, but say
   so).

2. **Ground yourself in the real code.** Read the layering and conventions the steps must
   respect: `.github/instructions/development.instructions.md` (Architecture, Adding a feature,
   Conventions, the command table, Keeping docs in sync) and `docs/07_data-architecture.md`.
   Then read the actual source the spec's **"Impact on the codebase"** names — types, repos,
   stores, components, API routes — so steps are based on what exists, not assumptions. Skim
   neighbouring features/plans in `docs/features/` for patterns and the right `NN`.

3. **Resolve blocking gaps via Q&A.** If anything blocks an unambiguous step — including the
   spec's own **"Open questions"** — ask focused multiple-choice questions (`AskUserQuestion`,
   recommended option first). Write each resolution **back into the spec** (and bump its
   `Last updated`) so the contract stays the single source of truth. Never silently assume; but
   don't re-litigate decisions the spec already settled.

4. **Write the plan.** Copy [`docs/features/_PLAN_TEMPLATE.md`](../../docs/features/_PLAN_TEMPLATE.md)
   to `docs/features/NN-kebab-name.plan.md` (**same `NN` and name as the spec**) and fill every
   section. Ordering rules:
   - Sequence so the **tree is never broken** and each step is independently committable:
     preparation/refactors first, then build **bottom-up**
     (Firestore/types → repository → store → component → API route), then wiring/mount, then
     validation.
   - Make each step **self-contained**: its own Goal, the **markdown + code to Read** for that
     step, the exact files to create/modify, and a **Done-check** — a real gate (`npm run ci`,
     `npm run build`, or a preview/TV check) plus any doc to update in the **same commit** per
     the sync map.
   - End with a **Final verification** step and a **Docs to update** list.
   - Set the plan `Status: ready` only if no blocking questions remain (else `draft`); set
     today's date.

5. **Report** in two lines: the plan path, and a one-line summary (step count + phases). Then
   ask whether to start implementing **Step 1** — a separate step; `/plan` stops at the written
   plan.

Rules:

- House style: short, direct, precise. The plan is an execution contract — unambiguous, no filler.
- Respect TV-first + Chrome 87 and the Firestore → repository → store → component layering in
  every step; call out `compat/compat` and doc-sync obligations where they apply.
- Plan the work, don't do it: no edits under `src/` or `tools/` here. The only writes outside
  the plan file are recording spec resolutions from step 3.
- Don't invent answers to decisions only the user can make — ask.
