---
description: Turn an agreed feature spec into a step-by-step implementation plan under docs-journal/
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion
---

Turn an agreed spec from `docs-journal/` into a durable, ordered implementation plan any agent
can execute step by step. **Do not write app code in this command** — the output is the plan
document only. Implementation is a separate step.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The spec to plan (path, `NN`, or feature name; may be empty): `$ARGUMENTS`

## Role

Act as both the **Product Owner** and the **Solution Architect / Tech Lead**. As Product Owner,
guard scope and keep the plan true to the agreed spec; as Architect / Tech Lead, own the
sequencing, the layering (Firestore → repository → store → component → API route), and a step
order that keeps the tree green and each step independently committable. Resolve blocking gaps by
Q&A and record them back into the spec — never silently assume.

## Steps

1. **Locate the spec.** Resolve `$ARGUMENTS` to a file in `docs-journal/`. If empty or
   ambiguous, list the available specs and ask which one. Read it in full. If its `Status` is
   not `agreed`, flag that and confirm before planning (planning a `draft` is allowed, but say
   so).

2. **Ground yourself in the real code.** Per the pipeline guide's grounding reads (esp. the dev guide's
   **Conventions** and `docs/07`), then read the actual source the
   spec's **"Impact on the codebase"** names — types, repos, stores, components, API routes — so
   steps are based on what exists, not assumptions. Skim neighbouring features/plans in
   `docs-journal/` for patterns and the right `NN`.

3. **Resolve blocking gaps via Q&A.** If anything blocks an unambiguous step — including the
   spec's own **"Open questions"** — ask focused multiple-choice questions (`AskUserQuestion`,
   recommended option first). Write each resolution **back into the spec** (and bump its
   `Last updated`) so the contract stays the single source of truth. Never silently assume; but
   don't re-litigate decisions the spec already settled.

4. **Write the plan.** Copy [`docs-journal/_TEMPLATE_plan.md`](../../docs-journal/_TEMPLATE_plan.md)
   to `docs-journal/NN_plan_<short-name>.md` (**same `NN` and `<short-name>` as the spec**) and
   fill every section. Ordering rules:
   - Sequence so the **tree is never broken** and each step is independently committable:
     preparation/refactors first, then build **bottom-up**
     (Firestore/types → repository → store → component → API route), then wiring/mount, then
     validation.
   - Make each step **self-contained**: its own Goal, the **markdown + code to Read** for that
     step, the exact files to create/modify, and a **Done-check** — a real gate (`npm run ci`,
     `npm run build`, or a preview/TV check).
   - End with a **Final verification** step.
   - Set the plan `Status: ready` only if no blocking questions remain (else `draft`); set
     today's date.

5. **Inform** the user of the plan's path and its `Status`. `/plan` stops here; `/implement` is a
   separate step.

Rules:

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, ask-don't-invent. Call out `compat/compat` on the specific steps where it applies.
- The plan is an execution contract — unambiguous, no filler.
- Plan the work, don't do it: no edits under `src/` or `tools/` here. The only writes outside
  the plan file are recording spec resolutions from step 3.
