# Converge-before-recording across the artifact-writing commands — Tweak

> **Artifact:** `12_tweak_converge-before-recording.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane. Generalizes the
convergence step added to `/spike` in `11_tweak_spike-converge` across the rest of the pipeline.

## What & why

`/spec`, `/plan`, and `/retro` all elicited then wrote their artifact without an explicit "agree on
the final shape" gate — the agent could record a unilateral draft, the same gap just closed in
`/spike`. Added a shared **Converge before recording** rule (the single source of truth) and a
convergence step in each of the three commands.

**Scope edges:** docs/prompt-only. `/spike` already has its convergence step (shipped in
`e697e71`) — left untouched; the new shared rule names it. No CLAUDE.md sync needed: its pipeline
summary ("each command emits one artifact") still holds; convergence is an internal step refinement.

## Approach

- **`feature-workflow.md`** (the SoT): added a **Converge before recording** shared rule naming the
  four eliciting-then-writing commands (`/spike`, `/spec`, `/plan`, `/retro`) — play the shaped
  result back, iterate until agreed, before writing.
- **`spec.md`**: new step 4 "Converge with the user on the final shape" (play back
  problem/behavior/scope/acceptance), before the write; renumbered write→5, inform→6.
- **`plan.md`**: new step 4 "Converge with the user on the approach" (confirm approach + step
  sequence), before the write; renumbered write→5, inform→6.
- **`retro.md`**: new step 7 "Converge with the user before recording" (confirm the verdict + next
  actions reflect the user's reads; **Decision** stays theirs), before the write; renumbered
  write→8, inform→9.
- Each command step references the shared rule by name rather than restating it (consistent with the
  spike-03 de-dup discipline).

## Changes

- `docs/feature-workflow.md` — new shared rule.
- `.claude/commands/{spec,plan,retro}.md` — convergence step + renumbering.

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): green — tsc + ESLint + 43 Vitest tests + Prettier
  `--check` (covers the edited markdown) all pass.
- **Frontmatter intact:** `description` / `allowed-tools` / `$ARGUMENTS` untouched (body-prose only).
- **Renumbering consistent:** each command's steps run 1..N with no gap/dupe; the new shared-rule
  name (`Converge before recording`) matches the in-step references.
- L1/L2/L4 not applicable (prompt/doc files, no runtime surface). No `L5` items.

## Commit

`<sha> — docs(pipeline): converge with the user before recording across spec/plan/retro`.
