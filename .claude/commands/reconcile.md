---
description: Reconcile an implemented feature spec against the code and re-sync it
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion
---

Verify an `implemented` spec in `docs/features/` still matches the code, and re-sync the spec —
the one obligation the `/spec` → `/plan` → `/implement` pipeline otherwise leaves to memory.
**Do not write app code in this command** — the output is the updated spec only.

First read [docs/features/WORKFLOW.md](../../docs/features/WORKFLOW.md) — the shared grounding
reads and rules for every pipeline command.

The feature to reconcile (path, `NN`, or name; may be empty): `$ARGUMENTS`

## Steps

1. **Resolve the spec.** Find the feature in `docs/features/` (ask if `$ARGUMENTS` is empty or
   ambiguous) and read it in full. If its `Status` isn't `implemented`, say so and confirm it's
   worth reconciling.

2. **Read the real code.** From the spec's **Impact on the codebase** section, open the named
   types, repositories, stores, components, and API routes — plus `tools/firestore.rules` if it
   covers them. Establish what the code actually does now.

3. **Diff spec vs. code, both directions:**
   - Spec says X, code does Y → either the spec is **stale** (update it) or the code **regressed**
     (flag it — don't fix code here).
   - Code does Z the spec omits → the spec is **incomplete** (add it).
   - Note anything the spec promised that isn't built.

4. **Re-sync the spec.** Patch it to describe the **current + target state** (no change history),
   keeping the acceptance criteria honest; bump `Last updated`. Ask before any change that encodes
   a real product decision rather than a plain description of what's built.

5. **Report** the drift found and what you changed: spec edits made, suspected code regressions to
   investigate (suggest `/verify` or `/implement` to fix — separate steps), and anything still
   unbuilt. This command does not touch app code.

## Rules

- Follow the shared rules in [WORKFLOW.md](../../docs/features/WORKFLOW.md) — house style,
  layering, TV / Chrome 87, doc-sync, ask-don't-invent, and specs stating current + target state
  (not history).
- Reconcile maintains the spec; it never edits `src/` or `tools/`.
- Never invent answers to questions only the user can decide — ask.
