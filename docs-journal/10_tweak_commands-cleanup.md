# De-duplicate the slash-command files (spike 03) — Tweak

> **Artifact:** `10_tweak_commands-cleanup.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane. Executes
[`docs-spikes/03_spike_commands-cleanup.md`](../docs-spikes/03_spike_commands-cleanup.md) (verdict
`viable-with-changes`, Option B).

## What & why

The 8 `.claude/commands/*.md` files repeated context that already lives in `feature-workflow.md`,
`qa.md`, `ship.md`, and the artifact templates — the "First read feature-workflow.md…" descriptor,
re-listed grounding reads, the context7 block, the `/ship` mechanics, the conventions + Chrome 87
list, and artifact writing-tone guidance. De-duped each restatement down to a pointer.

**Scope edges** (per spike, owner decisions: _de-dup only / template owns artifact contents / small
shared-file edits allowed_):

- **Kept verbatim:** all frontmatter (`description`, `allowed-tools`), `$ARGUMENTS`, every numbered
  procedural step, and every command-specific rule (implement's autopilot / HEAD base-ref / `✅` /
  status transitions; adjust's frozen-contracts / `rN` / session fallback; retro's
  reconcile-only-durable-docs / Decision-for-user; plan's bottom-up ordering / no-`src/`-edits).
- **Not done:** compressing procedural steps (Option C, owner declined); any `allowed-tools` change.
- `ship.md` left as-is — already lean and itself the SoT for `/ship` mechanics.

## Approach

- **`feature-workflow.md`** (absorbing edits, so the shared content exists before cutting from
  commands): extended the template-SoT line to cover "**and how to write them**" (terse, factual,
  claims trace to a commit); added a **"Don't guess a stack API → context7"** shared rule (it only
  existed restated inside implement/adjust).
- **7 commands** (`spec`, `plan`, `implement`, `adjust`, `retro`, `tweak`, `spike`): replaced the
  re-listed grounding reads with an anchor link to `feature-workflow.md#grounding-reads`; cut the
  context7 detail, the `/ship` mechanics, and the conventions/Chrome-87 enumeration to short
  pointers; trimmed the "Follow the shared rules in feature-workflow.md — …" tails (the pointer
  stays, the re-listed rule names go); dropped artifact writing-tone restatement (templates own it);
  folded `plan`'s artifact ordering rules into a template pointer.
- No app code, no template structural change.

## Changes

- `docs/feature-workflow.md` — 2 absorbing edits (template-SoT line; context7 shared rule).
- `.claude/commands/{spec,plan,implement,adjust,retro,tweak,spike}.md` — de-dup to pointers.
- (`.claude/commands/ship.md` — untouched.)

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): green — tsc + ESLint + 43 Vitest tests + Prettier
  `--check` (covers the edited markdown) all pass.
- **Frontmatter intact:** no `allowed-tools` / `description` / `$ARGUMENTS` line was touched — edits
  are body-prose only.
- **Read-pointers preserved:** every command still explicitly tells the agent to read
  `feature-workflow.md` + its template; the new `feature-workflow.md#grounding-reads` anchor resolves
  (heading "## Grounding reads" present).
- **Command-specific rules preserved:** spot-checked the autopilot / frozen-contract / reconcile /
  ordering rules all survive.
- L1/L2/L4 not applicable (prompt/doc files, no runtime surface). No `L5` items.

## Commit

`<sha> — docs(commands): de-duplicate slash-command files per spike 03`.
