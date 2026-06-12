---
description: Apply post-review change requests to an implemented feature, then record them in an adjustments artifact
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(npm run build:*), Bash(npm run verify:*), Bash(npm run fix:*), Bash(npm run dev:*), Bash(npm run knip), Bash(npm run knip:*), Bash(npm run firebase:push-rules:*), Bash(npm run db:seed:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*), Bash(git rev-parse:*), mcp__context7, mcp__firebase, mcp__chrome-devtools, mcp__ccd_session_mgmt, Skill
---

Apply the change requests raised **after** a feature was implemented — product-owner requirement
changes, developer refactors, and designer tweaks — turning them into committed, validated code,
then recording the round in an **adjustments** artifact. **This command writes app code** (like
`/implement`) but it does **not** edit the contract docs: the spec, plan, and implementation
record are **frozen** here and will lag the code afterward.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The feature to adjust (path, `NN`, or name; may be empty): `$ARGUMENTS`

## Role

Act as the **full team** — this round is a joint effort. Wear three hats and keep them distinct:
the **Product Owner** (requirement changes, scope, accept / defer / reject calls), the **Solution
Architect / Tech Lead** (refactors, structural and layering decisions), and the **Senior Fullstack
Developer** (implementing each accepted change to the conventions and the Chrome 87 floor). Design
tweaks come in through the Product Owner / Tech Lead lens. Surface any conflict with the frozen
contract rather than bending it silently — ask.

## Steps

1. **Locate the feature & read its frozen artifacts.** Resolve `$ARGUMENTS` to a feature in
   `docs/features/` and read its **spec** (`NN_spec_<short-name>.md`), **plan**
   (`NN_plan_<short-name>.md`), and **implementation record** (`NN_implement_<short-name>.md`)
   **in full** — these are the canonical record of what
   shipped and are **read-only for this command**. If `$ARGUMENTS` is empty or ambiguous, list
   the features that have a `NN_implement_<short-name>.md` (i.e. have been implemented, even partially —
   the spec `Status` may still read `agreed` if close-out didn't flip it) and ask which. If the
   implementation record is missing or partial, or the artifacts
   don't explain _how_ something was built, fall back to the original implementation **session**:
   use the session MCP (`mcp__ccd_session_mgmt` — `list_sessions`, then
   `search_session_transcripts` for the feature name / its commits) to find the `/implement` run
   and read the context you need. Artifacts are primary; the session is only a gap-filler.

2. **Ground yourself in the real code, narrowly.** From the pipeline guide's grounding reads and the
   implementation record's **Added** / **Changed** + the spec's **Impact on the codebase**, open the actual
   current source the requests are likely to touch — types, repos, stores, components, API
   routes, `tools/firestore.rules` — before assuming how it works. Record the current `HEAD`
   (`git rev-parse HEAD`) as the **pre-adjustment base** — the review gate (step 5) reviews the
   whole adjustment diff from here. Determine this round's number `N` by globbing for existing
   `NN_adjust_<short-name>-r*.md`.

3. **Gather the change requests via Q&A, grouped by stakeholder.** Drive an `AskUserQuestion`
   loop (recommended option first).

   For **each** request, capture: the request (what), the **why** / who raised it, a
   **classification** (requirement change · refactor · design change), and — because the spec is
   frozen — an explicit **acceptance check** for it (the spec won't carry it, so this artifact
   must). Confirm scope before implementing; batch related requests. If a request **conflicts**
   with the frozen spec/plan, the layering rules, or the Chrome 87 floor, surface it and ask
   rather than silently bending it — the user may accept, defer, or reject it. Keep going until
   the request set is complete and unambiguous.

4. **Implement each accepted request in order.** For each, like an `/implement` step:
   1. **Read** the exact source it touches. Before using any framework/library API you're not
      certain of at this repo's version, pull the authoritative spec via **context7**
      (`resolve-library-id` → `query-docs`) for Astro 6 / React 19 / Zustand 5 / Firebase client
      SDK / `firebase-admin`. Match the current API, not memory.
   2. **Make the change** respecting the pipeline guide's **shared coding conventions and Chrome 87
      floor** (layering, BEM `c-` CSS, `@/*` alias, i18n registration, no `compat/compat` hits).
   3. **Satisfy the Done-check** — run the gate the change warrants: `npm run ci` (tsc + lint
      incl. `compat/compat` + format) and, where relevant, `npm run build`; `npm run verify`
      auto-fixes then re-checks. The `ci:*` scripts only **check** — fix failures by hand. For a
      UI/TV change, start `npm run dev` and drive it with the SmartTV user agent
      (`…Chrome/87…SmartTV…`) via chrome-devtools MCP / preview tooling: confirm the behavior,
      verify D-pad reachability + visible focus, capture proof. Use the **firebase** MCP for
      Firestore / `tools/firestore.rules` when data or rules change.
   4. **Sync affected durable docs, then commit and push via `/ship`** — one commit per coherent
      change. Per the doc-sync map ([dev guide](../../docs/development.md#keeping-docs-in-sync)),
      update any **durable** doc this change affects and stage it with the change's files
      (`git add <paths>`) — the **feature artifacts stay frozen**, only durable docs move here.
      Then run `/ship` with a Conventional Commits subject. `/ship` commits the staged set (what &
      why body + the `Co-Authored-By` trailer), runs the husky hooks (pre-push `npm run ci`; never
      `--no-verify`), and pushes.

   If a request is **deferred** or **rejected**, don't force it — record that outcome (and why)
   for step 6 instead.

5. **Final verification & review gate.** Run `npm run ci` green and `npm run build`, then use
   **`/verify`** to drive the app (TV user agent for UI) and walk **both**: every **original
   acceptance criterion in the spec** (must still hold — no regression) **and** each new request's
   acceptance check from step 3. Then run the review skills over the adjustment diff (since the
   step-2 base ref): **`/code-review`** (correctness), **`/simplify`** (quality), and
   **`/security-review`** when any change touched auth, an API route, or `tools/firestore.rules`.
   Address findings as follow-up commits (push each). As the **final pre-ship check**, run
   `npm run knip` and clear any dead code it flags (`npm run knip:fix` auto-removes — review the
   diff; see the guide's **Validation & review**). Then re-run the gate so it ends green.

6. **Write the adjustments artifact.** Copy
   [`docs/features/_TEMPLATE_adjust.md`](../../docs/features/_TEMPLATE_adjust.md) to
   `docs/features/NN_adjust_<short-name>-rN.md` (**same `NN` and `<short-name>` as the spec**,
   `N` = this round) and fill every section per the template, from this run's facts. Keep it terse
   and factual — every claim traces to a commit. Commit + push it.

7. **Inform** the user of the adjustments-artifact path, the gate result, and anything flagged for
   real-TV confirmation. No report or summary.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, don't-duplicate, ask-don't-invent.
- **Frozen contracts:** never edit the spec (`NN_spec_<short-name>.md`), plan
  (`NN_plan_<short-name>.md`), or implementation record (`NN_implement_<short-name>.md`) in this
  command — they are read-only inputs.
- **Commit + push per change**, gate passing first. Never leave the tree broken or bypass the
  hooks (`--no-verify`) except a real emergency the user authorizes.
- The adjustments artifact is the **only** record of these changes — so it must be complete:
  every request, its rationale, how it was handled, and its result.
- Use MCP as needed: **context7** for current stack APIs, **firebase** for Firestore / rules,
  **chrome-devtools** / preview for TV verification, **ccd_session_mgmt** only to recover context
  the artifacts don't carry. Don't guess an API — look it up.
- Never invent a product decision to keep moving — ask, then record the resolution in the
  adjustments artifact.
