---
description: Elicit a feature spec through Q&A and write it to docs/features/
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion
---

Drive the elicitation loop that turns a feature idea into a durable, agreed spec under
`docs/features/`. **Do not write app code in this command** — the output is the spec only.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The feature idea (may be empty): `$ARGUMENTS`

## Role

Act as the **Product Owner**. You own _what_ and _why_, not _how_ — vision, user value, scope, and
acceptance criteria — deferring implementation detail to `/plan`. Keep the spec **MVP-first**: ship
the smallest coherent slice and push enhancements to **Out of scope**. Never invent a product
decision only the user can make — ask.

## Steps

1. **Ground yourself first.** From the pipeline guide's grounding reads, lean on the product / design docs
   (`01_vision`, `04_design-principles`, `05_design`, `07_data-architecture`) and the
   **Architecture** + **Adding a feature** sections of the dev guide. Skim existing specs in
   `docs/features/` to avoid duplication and pick the next `NN`. Read the actual code (record
   types in `src/database/*`, the relevant stores / repos / components) before assuming how
   something works.

2. **If `$ARGUMENTS` is empty**, ask the user what feature they want to spec, then continue.

3. **Elicit via `AskUserQuestion`.** Focused multiple-choice questions (recommended option first)
   to fill the template. Cover, as needed: target user & problem, exact behavior / flow, in / out
   of scope, data-model changes, UI placement, TV-first constraints, i18n, acceptance criteria.
   Batch related questions; propose sensible defaults grounded in the docs; keep going until no
   blocking questions remain.

4. **Write the spec.** Copy [`docs/features/_TEMPLATE_spec.md`](../../docs/features/_TEMPLATE_spec.md)
   to `docs/features/NN_spec_<short-name>.md` (zero-padded `NN`, kebab-case `<short-name>` — both
   reused by every later artifact for this feature) and fill every section per the template. Set
   `Status: agreed` only if no open questions remain (else `draft`), and set today's date.

5. **Inform** the user of the spec's path and its `Status`. `/spec` stops here; `/plan` is a
   separate step.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, doc-sync, ask-don't-invent, and specs stating current + target state (not history).
- The spec is a contract — precise and unambiguous.
- Never invent answers to questions only the user can decide — ask.
