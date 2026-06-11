---
description: Execute an agreed implementation plan from docs/features/ step by step
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(npm run build:*), Bash(npm run verify:*), Bash(npm run fix:*), Bash(npm run dev:*), Bash(npm run firebase:push-rules:*), Bash(npm run db:seed:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*), Bash(git rev-parse:*), mcp__context7, mcp__firebase, mcp__chrome-devtools, Skill
---

Execute a `ready` implementation plan from `docs/features/`, turning its ordered steps into
committed, validated code. **Unlike `/spec` and `/plan`, this command writes app code** — it
follows the plan and its spec **exactly** and never invents a product decision.

First read [docs/features/WORKFLOW.md](../../docs/features/WORKFLOW.md) — the shared grounding
reads and rules for every pipeline command.

The plan to implement (path, `NN`, feature name; optional trailing `step N` or `steps N-M`; may
be empty): `$ARGUMENTS`

## Steps

1. **Locate the plan & spec.** Resolve `$ARGUMENTS` to a `*.plan.md` in `docs/features/` and its
   sibling spec `NN-name.md`. If empty or ambiguous, list the available plans and ask which.
   Read **both in full**. If the plan's `Status` is not `ready` or `in-progress`, flag it and
   confirm before proceeding (a `draft` may be planned-but-not-ready). Parse an optional
   `step N` / `steps N-M` from `$ARGUMENTS`; with none, target every step not yet marked done
   (a completed step's heading carries a `✅`, and each lands its own commit — use both to find
   where to resume).

2. **Ground yourself once, narrowly.** Read [docs/features/WORKFLOW.md](../../docs/features/WORKFLOW.md)
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
      extra. Apply the conventions from WORKFLOW / the dev guide; the concrete ones that bite
      while coding: repositories are the only Firestore callers and **never mutate Zustand after a
      write** (let `onSnapshot` flow it back); BEM `c-` CSS imported atop its `.tsx`; the `@/*`
      alias; component `translations.ts` registered in `src/i18n/translations.ts`. Keep **client**
      code within the **Chrome 87** floor — no `compat/compat` hits (clone arrays manually; no
      `structuredClone` / `Array.prototype.at` / top-level await); server & API-route code is
      off-floor.
   3. **Satisfy the Done-check** — run exactly the gate the step names. Common gates: `npm run ci`
      (tsc + lint incl. `compat/compat` + format) and `npm run build`; `npm run verify` auto-fixes
      then re-checks. The `ci:*` scripts only **check** — fix type/lint failures by hand. Run any
      other command the step calls for (e.g. `firebase:push-rules`, `db:seed`) only when it does.
      Where the Done-check asks for a **preview / TV** check, start `npm run dev` and drive it with
      the SmartTV user agent (`…Chrome/87…SmartTV…`) via chrome-devtools MCP / preview tooling:
      confirm the behavior, verify keyboard/D-pad reachability + visible focus, and capture proof
      (snapshot/screenshot). Use the **firebase** MCP to inspect Firestore or validate
      `tools/firestore.rules` when a step touches data or rules. Flag explicitly anything that can
      only be confirmed on real TV hardware.
   4. **Sync docs in the same step.** Apply every doc update the step names (per the dev guide's
      **Keeping docs in sync** map) so code and prose never disagree. Append `✅` to the step's
      heading in the plan to mark it done.
   5. **Commit and push.** Commit just this step's changes — Conventional Commits subject (the
      step's intent) + a body of what & why, ending with the trailer
      `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` — then push. The pre-push hook
      re-runs `npm run ci` as a backstop; if it blocks, fix and re-push. Never `--no-verify`. One
      commit per step.

   If a step can't proceed unambiguously — the plan/spec is silent, or reality has diverged from
   what the plan assumed — **stop and ask** (`AskUserQuestion`, recommended option first). Record
   the resolution **back into the spec or plan** (bump `Last updated`) so the contract stays the
   single source of truth, then continue. Never invent a product decision to keep moving.

5. **Final verification & review gate.** Run the plan's **Final verification** block: `npm run ci`
   green, `npm run build` succeeds, and **every Acceptance criterion in the spec** confirmed — use
   **`/verify`** to drive the app (TV user agent for UI) and walk the acceptance list item by item
   rather than re-checking by hand. Then run the review skills over the feature diff (since the
   step-3 base ref): **`/code-review`** for correctness, **`/simplify`** for quality, and
   **`/security-review`** when any step touched auth, an API route, or `tools/firestore.rules`.
   Address findings as follow-up commits (push each), then re-run the gate so it ends green.

6. **Close out.** Set the plan `Status: done` and flip the spec `Status: implemented`, completing
   the remaining items in the plan's **Docs to update** list — in a final commit + push.

7. **Write the implementation summary.** Copy
   [`docs/features/_SUMMARY_TEMPLATE.md`](../../docs/features/_SUMMARY_TEMPLATE.md) to
   `docs/features/NN-kebab-name.summary.md` (**same `NN` and name as the spec & plan**) and fill
   every section from this run: **Outcome** (what now works), **Added** / **Changed** (honest,
   path-level — group by layer), **Skipped / deferred** (any plan/spec item not done and why —
   deferred steps, descoped items, real-TV-only checks; `None` if fully complete), **Verification**
   (gate + acceptance + which review skills ran), and **Commits** (one line per step,
   `<sha> — <subject>`). Keep it terse and factual — every claim must trace to a commit or to the
   plan's step state; this markdown is consumed by later skills (e.g. `/reconcile`, ship/PR
   flows), so don't assert work that wasn't done. Commit + push it (own commit, or fold into the
   step-6 close-out commit).

8. **Report** in a few lines: the plan path, the **summary path**, the steps completed with their
   commit subjects, the gate result, and anything flagged for real-TV confirmation or any
   spec/plan edit you made. No filler, no next-step suggestions unless asked.

## Rules

- Follow the shared rules in [WORKFLOW.md](../../docs/features/WORKFLOW.md) — house style,
  layering, TV / Chrome 87, doc-sync, don't-duplicate, ask-don't-invent. Follow the plan and spec
  **exactly**: don't add scope, skip steps, or reorder.
- **Whole-plan autopilot:** with no `step` argument, execute every remaining step end-to-end,
  pausing only for a gate failure you can't fix or a genuinely blocking question. With
  `step N` / `steps N-M`, do only those.
- **Commit + push per step**, gate passing first. Never leave the tree broken or bypass the hooks
  (`--no-verify`) except a real emergency the user authorizes.
- Use MCP as needed: **context7** for current stack APIs, **firebase** for Firestore / rules,
  **chrome-devtools** / preview for TV verification. Don't guess an API — look it up.
- If a doc is wrong but out of scope to fix, say so rather than leaving it silently stale.
