# Make /spike converge with the user before recording — Tweak

> **Artifact:** `11_tweak_spike-converge.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane.

## What & why

`/spike` ran investigate → verdict → **write the artifact** in one shot, so the agent could record a
verdict unilaterally. A spike often reshapes the idea into something different from what the user
first assumed, so the user must agree on the final shape before it's recorded. Added an explicit
**converge-with-the-user loop** between the draft verdict and the write, gating the artifact on
mutual agreement.

**Scope edges:** docs-only, single command file (`spike.md`). The investigation Q&A (step 3) stays;
the convergence is a new, distinct consensus step — not a replacement. No `feature-workflow.md` /
CLAUDE.md sync needed: both describe `/spike` only at the summary level ("investigates an idea and
records a verdict"), which still holds.

## Approach

- Renamed step 4 "Reach a verdict" → **"Form a draft verdict"** (explicitly a proposal to discuss).
- Inserted new **step 5 "Converge with the user on the final shape"**: play the draft verdict back,
  surface **how the idea changed from what the user first assumed**, loop on their pushback until both
  agree, and **do not write on a unilateral verdict**.
- Step 6 (write) now fills the template **to the agreed shape**; renumbered Inform to step 7.
- Reinforced in the intro ("converge with the user on the final shape, then record a verdict") and a
  new Rule ("**Agree before recording**").

## Changes

- `.claude/commands/spike.md` — intro, steps 3–7 restructured, new Rule.

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): green — tsc + ESLint + 43 Vitest tests + Prettier
  `--check` (covers the edited markdown) all pass.
- **Frontmatter intact:** `description` / `allowed-tools` / `$ARGUMENTS` untouched (body-prose only).
- **Internal links resolve:** the `feature-workflow.md#grounding-reads` and template links are
  unchanged and valid; no heading slugs referenced elsewhere were altered.
- L1/L2/L4 not applicable (prompt file, no runtime surface). No `L5` items.

## Commit

`<sha> — docs(spike): converge with the user on the final shape before recording`.
