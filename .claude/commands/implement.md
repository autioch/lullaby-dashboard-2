---
description: Execute an agreed implementation plan from docs-journal/ step by step
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(npm run build:*), Bash(npm run verify:*), Bash(npm run fix:*), Bash(npm run dev:*), Bash(npm run knip), Bash(npm run knip:*), Bash(npm run firebase:push-rules:*), Bash(npm run db:seed:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*), Bash(git rev-parse:*), mcp__context7, mcp__firebase, mcp__chrome-devtools, Skill
---

Execute a `ready` implementation plan from `docs-journal/`, turning its ordered steps into
committed, validated code. **Unlike `/spec` and `/plan`, this command writes app code** — it
follows the plan and its spec **exactly** and never invents a product decision.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The plan to implement (path, `NN`, feature name; optional trailing `step N` or `steps N-M`; may
be empty): `$ARGUMENTS`

## Role

Act as a **Senior Fullstack React / Node.js Developer**. Execute the plan and its spec exactly —
no new scope, no skipped steps, no reorders. Honor the conventions (layering, BEM `c-` CSS, the
`@/*` alias, i18n registration), keep client code within the Chrome 87 floor, commit and push per
step with the tree green, and stop and ask rather than invent a product decision.

## Steps

1. **Locate the plan & spec.** Resolve `$ARGUMENTS` to a `NN_plan_<short-name>.md` in
   `docs-journal/` and its sibling spec `NN_spec_<short-name>.md`. If empty or ambiguous, list the
   available plans and ask which.
   Read **both in full**. If the plan's `Status` is not `ready` or `in-progress`, flag it and
   confirm before proceeding (a `draft` may be planned-but-not-ready). Parse an optional
   `step N` / `steps N-M` from `$ARGUMENTS`; with none, target every step not yet marked done
   (a completed step's heading carries a `✅`, and each lands its own commit — use both to find
   where to resume).

2. **Ground yourself once, narrowly.** Read [docs/feature-workflow.md](../../docs/feature-workflow.md)
   (shared grounding reads + rules) and the plan's own **"Read before starting"** list, then read
   the actual source each targeted step will touch before editing it. Trust the plan — don't
   re-explore the whole repo.

3. **Mark start.** Set the plan `Status: in-progress` and bump `Last updated` to today (skip if
   already set); bundle this edit into the first step's commit — no standalone commit. Record the
   current `HEAD` (`git rev-parse HEAD`) as the pre-implementation base — the review gate (step 5)
   reviews the whole feature diff from here.

4. **Execute each targeted step in order.** The plan is sequenced so the tree never breaks and
   every step is independently committable. For each step, in order:
   1. **Read** the step's own **Read** list (spec sections, docs, the exact source files). Before
      using any framework/library API you're not certain of at this repo's version, pull the
      authoritative spec via **context7** (`resolve-library-id` → `query-docs`) for Astro 6 /
      React 19 / Zustand 5 / Firebase client SDK / `firebase-admin`. Match the current API, not
      memory.
   2. **Make the Change** exactly as the step specifies — the files and edits it names, nothing
      extra. Apply the pipeline guide's **shared coding conventions and Chrome 87 floor** (layering,
      BEM `c-` CSS, `@/*` alias, i18n registration, no `compat/compat` hits).
   3. **Satisfy the Done-check** — run exactly the gate the step names, per
      [qa.md](../../docs/qa.md): the `L0` gate and `L1` build for a code step, the `L2` TV-UA
      behavior drive (capture proof) for a UI step, plus any command the step calls for
      (`firebase:push-rules`, `db:seed`). Apply qa.md's **test-by-scope** checks for the layer the
      step touches, and flag anything only confirmable on real TV hardware (`L5`).
   4. **Mark the step done.** Append `✅` to the step's heading in the plan.
   5. **Sync affected docs, then commit and push via `/ship`.** Before staging, check the doc-sync
      map ([dev guide](../../docs/development.md#keeping-docs-in-sync)): if this step's change
      touches anything the map lists, update those durable docs now and stage them **with** the
      step's files (`git add <paths>`). Then run `/ship` — the canonical commit+push action — with
      the step's Conventional Commits subject (its intent). `/ship` commits the staged set (what &
      why body + the `Co-Authored-By` trailer), runs the husky hooks (pre-push `npm run ci` is the
      gate; never `--no-verify`), and pushes. One commit per step, code + its doc updates together.

   If a step can't proceed unambiguously — the plan/spec is silent, or reality has diverged from
   what the plan assumed — **stop and ask** (`AskUserQuestion`, recommended option first). Record
   the resolution **back into the spec or plan** (bump `Last updated`) so the contract stays the
   single source of truth, then continue. Never invent a product decision to keep moving.

5. **Final verification & review gate.** Run the plan's **Final verification** block per
   [qa.md](../../docs/qa.md): `L0` gate + `L1` build green, then **`L2`** — use **`/verify`** to walk
   **every Acceptance criterion in the spec** in the running app (TV UA), item by item. Run the
   **`L3`** review skills over the feature diff since the step-3 base ref (`/code-review`,
   `/simplify`, `/security-review` per its trigger); address findings as follow-up commits (push
   each). Finish with the **`L4`** `npm run knip` dead-code pass (`knip:fix` auto-removes — review
   the diff), then re-run the gate so it ends green.

6. **Close out.** Set the plan `Status: done` and flip the spec `Status: implemented` — in a final
   commit + push.

7. **Write the implementation record.** Copy
   [`docs-journal/_TEMPLATE_implement.md`](../../docs-journal/_TEMPLATE_implement.md) to
   `docs-journal/NN_implement_<short-name>.md` (**same `NN` and `<short-name>` as the spec &
   plan**) and fill every section per the template, from this run's facts. Keep it terse — every
   claim must trace to a commit or to the plan's step state; later skills consume it (ship / PR
   flows), so don't assert work that wasn't done. Commit + push it (own commit, or fold into the
   step-6 close-out commit).

8. **Inform** the user of the implementation-record path, the gate result, and anything flagged for
   real-TV confirmation. No report or summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, don't-duplicate, ask-don't-invent. Follow the plan and spec
  **exactly**: don't add scope, skip steps, or reorder.
- **Whole-plan autopilot:** with no `step` argument, execute every remaining step end-to-end,
  pausing only for a gate failure you can't fix or a genuinely blocking question. With
  `step N` / `steps N-M`, do only those.
- **Commit + push per step**, gate passing first. Never leave the tree broken or bypass the hooks
  (`--no-verify`) except a real emergency the user authorizes.
- Use MCP as needed: **context7** for current stack APIs, **firebase** for Firestore / rules,
  **chrome-devtools** / preview for TV verification. Don't guess an API — look it up.
