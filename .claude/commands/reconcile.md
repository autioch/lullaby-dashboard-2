---
description: Reconcile an implemented feature spec against the code, re-sync it, and record the pass
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npm run ci:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(git log:*), Bash(git diff:*)
---

Verify an `implemented` spec in `docs/features/` still matches the code, re-sync the spec **and the
affected general docs**, and record the pass in a **reconciliation** artifact — the one obligation
the `/spec` → `/plan` → `/implement` (→ `/adjust`) pipeline otherwise leaves to memory. **Do not
write app code in this command** — it maintains docs only.

First read [docs/feature-workflow.md](../../docs/feature-workflow.md) — the pipeline guide with the
shared grounding reads and rules for every command.

The feature to reconcile (path, `NN`, or name; may be empty): `$ARGUMENTS`

## Role

Act as both the **Product Owner** and the **Solution Architect / Tech Lead** (the same pairing as
`/plan`). As Product Owner, confirm the intended target state and accept any product decision the
re-sync would encode; as Architect / Tech Lead, establish what the code actually does now and judge
each drift — stale spec vs. code regression. Never invent a decision only the user can make — ask.

## Steps

1. **Resolve the spec & its history.** Find the feature in `docs/features/` (ask if `$ARGUMENTS`
   is empty or ambiguous) and read its **spec** (`NN_spec_<short-name>.md`) in full. Also read the
   **implementation record** (`NN_implement_<short-name>.md`) and **every** adjustments round
   (`NN_adjust_<short-name>-r*.md`) — their **Drift** notes already enumerate what fell out of
   sync. If the spec's `Status` isn't `implemented`, say so and confirm it's worth reconciling.

2. **Read the real code.** From the spec's **Impact on the codebase** and the adjustments' Drift
   notes, open the named types, repositories, stores, components, and API routes — plus
   `tools/firestore.rules` if it covers them. Establish what the code actually does now.

3. **Diff spec vs. code, both directions:**
   - Spec says X, code does Y → either the spec is **stale** (update it) or the code **regressed**
     (flag it — don't fix code here).
   - Code does Z the spec omits → the spec is **incomplete** (add it).
   - Note anything the spec promised that isn't built.

4. **Re-sync the spec & general docs.** Patch the spec to describe the **current + target state**
   (no change history), keeping the acceptance criteria honest; bump `Last updated` and flip
   `Status` if warranted. Update the **general docs** the drift touches per the dev guide's
   **Keeping docs in sync** map (README, `docs/07`, the dev guide). **Do not** rewrite the plan,
   implementation record, or adjustments artifacts — they stand as history. Ask before any change
   that encodes a real product decision rather than a plain description of what's built.

5. **Write the reconciliation artifact.** Copy
   [`docs/features/_TEMPLATE_reconcile.md`](../../docs/features/_TEMPLATE_reconcile.md) to
   `docs/features/NN_reconcile_<short-name>.md` (**same `NN` and `<short-name>` as the spec**) and
   fill every section per the template, from this pass. Keep it terse — every claim traces to the
   code or a prior artifact. Commit + push it together with the spec/doc edits (the pre-push hook
   runs `npm run ci`; never `--no-verify`).

6. **Inform** the user of the reconciliation-artifact path, plus any suspected code regression to
   investigate (a separate `/verify` or `/implement` step) and anything still unbuilt. No report or
   summary; this command does not touch app code.

## Rules

- Follow the shared rules in [feature-workflow.md](../../docs/feature-workflow.md) — house style, layering,
  TV / Chrome 87, doc-sync, ask-don't-invent, and specs stating current + target state (not history).
- Reconcile maintains the spec, the general docs, and its own artifact; it never edits `src/` or
  `tools/`, and it never rewrites the plan, implementation record, or adjustments (feature history
  is preserved as reference).
- Never invent answers to questions only the user can decide — ask.
