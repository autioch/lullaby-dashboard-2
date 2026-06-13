---
description: Spec, plan, and implement a small change in one pass, recording a single tweak artifact
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(npm run build:*), Bash(npm run verify:*), Bash(npm run fix:*), Bash(npm run dev:*), Bash(npm run knip), Bash(npm run knip:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*), mcp__context7, mcp__firebase, mcp__chrome-devtools, Skill
---

The **lightweight lane** for a change too small to justify the full `/spec` → `/plan` →
`/implement` pipeline. One command does it all — Q&A to pin down the change, a brief plan, the
code, and **one** terminal artifact in `docs-journal/`. **This command writes app code.**

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules every command obeys.

The change to make (may be empty): `$ARGUMENTS`

## When to use this vs. the full pipeline

Use `/tweak` for a single, well-bounded change — a copy edit, a style tweak, a small behavior
fix, a config change, one self-contained feature touching a layer or two. **If it grows** — new
data model, multiple stores/components, real open product questions, or work that wants
independently committable steps — **stop and tell the user to run `/spec`** instead. Don't force a
big feature through this lane.

## Role

Wear all three hats pragmatically: **Product Owner** (guard scope, keep it MVP), **Tech Lead**
(respect the layering Firestore → repository → store → component → API route), and **Senior
Fullstack Developer** (write the code to the repo's conventions). Never invent a product decision
only the user can make — ask.

## Steps

1. **Ground yourself narrowly.** From the pipeline guide's grounding reads, read only what this
   change touches — the relevant docs and the actual source (record types in `src/database/*`, the
   store / repo / component / API route involved). Skim `docs-journal/` to avoid duplication and
   pick the next zero-padded `NN`. Don't re-explore the whole repo.

2. **If `$ARGUMENTS` is empty**, ask what to change, then continue.

3. **Pin the change down via `AskUserQuestion`.** Ask only the focused, blocking questions needed
   to make the change unambiguous (multiple-choice, recommended option first) — exact behavior,
   placement, scope edges, anything the request leaves open. Propose defaults grounded in the
   docs; skip questions the request already answers. If answers reveal this is bigger than a
   tweak, escalate per the section above.

4. **State the plan, then build.** Briefly tell the user the approach and the files you'll touch
   (a sentence or two — no separate plan document). Then make the change exactly as scoped,
   applying the shared coding conventions and Chrome 87 floor; look up any uncertain stack API via
   **context7**.

5. **Validate** per [qa.md](../../docs/qa.md): the `L0` gate (and `L1` build if compilation could be
   affected); for a user-visible change the `L2` TV-UA behavior drive (capture proof); and the `L4`
   `npm run knip` dead-code pass as the final pre-ship check. Apply qa.md's **test-by-scope** checks
   for the layer touched, and flag anything that needs real-TV confirmation (`L5`). (The lightweight
   lane skips the `L3` review skills — escalate to the full pipeline if the change needs them.)

6. **Write the tweak artifact.** Copy
   [`docs-journal/_TEMPLATE_tweak.md`](../../docs-journal/_TEMPLATE_tweak.md) to
   `docs-journal/NN_tweak_<short-name>.md` (zero-padded `NN`, kebab-case `<short-name>`) and fill
   every section per the template, from this run's facts. Set today's date.

7. **Commit + push via `/ship`.** Once the gate is green, stage the code change, the tweak
   artifact, **and any durable doc the change affects** (per the doc-sync map —
   [dev guide](../../docs/development.md#keeping-docs-in-sync)) together (`git add <paths>`), then
   run `/ship` with a Conventional Commits subject (the change's intent). **If this tweak maps to a
   roadmap item, mark it `[x]` in [`docs/06_roadmap.md`](../../docs/06_roadmap.md)** (and file any
   follow-up it spawned as a new entry — title · one-sentence why · `(tweak [NN])` source); the tweak
   closes its own item, since `/steer` no longer reconciles done-state.

8. **Inform** the user in one line: the artifact path, the gate result, and anything flagged for
   real-TV confirmation. No summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md).
- **One artifact only** (`NN_tweak_<short-name>.md`) — no spec/plan/implement documents. The
  tweak lane trades the three-artifact paper trail for speed; the git commit carries the history.
- Stay in scope: if the change turns out to need the full pipeline, **stop and route to `/spec`**
  rather than ballooning the tweak.
- Use firebase / chrome-devtools MCP as the change warrants.
