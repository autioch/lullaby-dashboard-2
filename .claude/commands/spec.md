---
description: Elicit a feature spec through Q&A and write it to docs/features/
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion
---

Drive the elicitation loop that turns a feature idea into a durable, agreed spec under
`docs/features/`. **Do not write app code in this command** — the output is the spec only.

The feature idea (may be empty): `$ARGUMENTS`

## Steps

1. **Ground yourself first.** Read the relevant context so your questions are sharp and few:
   `docs/01_vision.md`, `docs/04_design-principles.md`, `docs/05_design.md`,
   `docs/07_data-architecture.md`, and the "Architecture" + "Adding a Feature" sections of
   `.github/copilot-instructions.md`. Skim existing specs in `docs/features/` to avoid
   duplication and to pick the next `NN`. Read the actual code (`src/types.ts`, relevant
   stores/repos/components) before assuming how something works.

2. **If `$ARGUMENTS` is empty**, ask the user what feature they want to spec, then continue.

3. **Elicit via `AskUserQuestion`.** Ask focused, multiple-choice questions (with a
   recommended option first) to fill the template. Cover, as needed: target user & problem,
   exact behavior/flow, in/out of scope, data-model changes, UI placement, TV-first
   constraints, i18n, and acceptance criteria. Batch related questions; don't interrogate —
   propose sensible defaults grounded in the docs and let the user confirm or redirect.
   Keep going until there are no blocking open questions.

4. **Write the spec.** Copy `docs/features/_TEMPLATE.md` to `docs/features/NN-kebab-name.md`,
   fill every section from the answers, set `Status: agreed` only if no open questions
   remain (otherwise `draft`), and set today's date.

5. **Report** in two lines: the spec path, and a one-line summary of what was agreed. Then
   ask whether to proceed to planning/implementation (a separate step — `/spec` stops at the
   written spec).

Rules:
- Match the house style: short and direct. The spec is a contract, so be precise.
- Respect TV-first + Chrome 87 constraints and the Firestore → repository → store →
  component layering when describing impact.
- Never invent answers to questions only the user can decide — ask.
