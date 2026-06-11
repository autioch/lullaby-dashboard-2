---
description: Spec, plan, and implement a small change in one pass, recording a single tweak artifact
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(npm run build:*), Bash(npm run verify:*), Bash(npm run fix:*), Bash(npm run dev:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*), mcp__context7, mcp__firebase, mcp__chrome-devtools, Skill
---

The **lightweight lane** for a change too small to justify the full `/spec` → `/plan` →
`/implement` pipeline. One command does it all — Q&A to pin down the change, a brief plan, the
code, and **one** terminal artifact in `docs/features/`. **This command writes app code.**

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
   store / repo / component / API route involved). Skim `docs/features/` to avoid duplication and
   pick the next zero-padded `NN`. Don't re-explore the whole repo.

2. **If `$ARGUMENTS` is empty**, ask what to change, then continue.

3. **Pin the change down via `AskUserQuestion`.** Ask only the focused, blocking questions needed
   to make the change unambiguous (multiple-choice, recommended option first) — exact behavior,
   placement, scope edges, anything the request leaves open. Propose defaults grounded in the
   docs; skip questions the request already answers. If answers reveal this is bigger than a
   tweak, escalate per the section above.

4. **State the plan, then build.** Briefly tell the user the approach and the files you'll touch
   (a sentence or two — no separate plan document). Then make the change exactly as scoped,
   applying the shared coding conventions and **Chrome 87 floor** (layering, BEM `c-` CSS, `@/*`
   alias, i18n registration, no `compat/compat` hits). Before using a stack API you're unsure of
   at this repo's version, confirm it via **context7**.

5. **Validate.** Run `npm run ci` (tsc + lint incl. `compat/compat` + format) and fix by hand
   until green; `npm run verify` auto-fixes first. Run `npm run build` if the change could affect
   compilation. If the change is user-visible, drive the app with the SmartTV user agent
   (`…Chrome/87…SmartTV…`) via chrome-devtools / preview and confirm the behavior + D-pad
   reachability; capture proof. Use the **firebase** MCP when the change touches Firestore or
   rules. Flag anything that needs real-TV confirmation.

6. **Sync docs.** Apply any doc update this change implies per the dev guide's **doc-sync map**, in
   the same change — never ship code and prose that disagree.

7. **Write the tweak artifact.** Copy
   [`docs/features/_TEMPLATE_tweak.md`](../../docs/features/_TEMPLATE_tweak.md) to
   `docs/features/NN_tweak_<short-name>.md` (zero-padded `NN`, kebab-case `<short-name>`) and fill
   every section from this run's facts. Keep it terse — it's a terminal record; claims must trace
   to the actual change. Set today's date.

8. **Commit + push.** Once the gate is green, commit the code change, any synced docs, and the
   artifact together — Conventional Commits subject (the change's intent) + a body of what & why,
   ending with the trailer `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` — then push.
   The pre-push hook re-runs `npm run ci`; if it blocks, fix and re-push. Never `--no-verify`.

9. **Inform** the user in one line: the artifact path, the gate result, and anything flagged for
   real-TV confirmation. No summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style,
  layering, TV / Chrome 87, doc-sync, don't-duplicate, ask-don't-invent.
- **One artifact only** (`NN_tweak_<short-name>.md`) — no spec/plan/implement documents. The
  tweak lane trades the three-artifact paper trail for speed; the git commit carries the history.
- Stay in scope: if the change turns out to need the full pipeline, **stop and route to `/spec`**
  rather than ballooning the tweak.
- Don't guess a stack API — look it up via context7. Use firebase / chrome-devtools MCP as the
  change warrants.
