# Ship command as the canonical commit+push — Tweak

> **Artifact:** `04_tweak_ship-command.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Written at close-out; keep it terse and factual. Claims must
trace to the commit. For anything bigger, the full `/spec` → `/plan` → `/implement` pipeline and
its artifacts apply instead.

## What & why

`/ship` (stage, commit, push) had to run **as fast as possible while still running the husky
hooks**, and become the **single** commit+push action the whole pipeline uses — the pipeline
commands previously each hand-rolled their own `git add/commit/push` prose. Made `/ship` the
canonical commit+push action, sharpened it for speed, and switched every pipeline command to
delegate its commit step to it. Doc-only / instruction-only change — no app code (`src/`) touched.

## Approach

- **`/ship` is the single source of truth** for commit mechanics (message format, `Co-Authored-By`
  trailer, hooks, no `--no-verify`, single-line output).
- **Speed = don't duplicate the hooks.** The husky pre-commit (`lint-staged`) and pre-push
  (`npm run ci`) hooks are the gate and run automatically; `/ship` never pre-runs `ci`/`verify`/
  `build` and never bypasses with `--no-verify`.
- **Staging fix for per-step commits.** `/ship` now commits the **already-staged** set when changes
  are staged (a pipeline step stages just its files), falling back to `git add -A` only when nothing
  is staged. This lets the pipeline keep per-step granularity while still delegating commit+push.
- **Pipeline delegates.** `implement`, `adjust`, `retro`, `tweak` each stage their
  step's files, then run `/ship` with a Conventional Commits subject instead of spelling out git.

## Changes

- `.claude/commands/ship.md` — rewritten: canonical commit+push, husky-as-gate, staged-set-vs-`add -A`
  logic, no-validation / no-`--no-verify`, single-line output.
- `.claude/commands/implement.md`, `adjust.md`, `retro.md`, `tweak.md` — commit step
  now delegates to `/ship`.
- `docs/feature-workflow.md` — **Committing** section: `/ship` as the single commit+push action the
  pipeline delegates to.
- `docs/development.md` — pipeline paragraph notes the `/ship` delegation.
- `docs/features/04_tweak_ship-command.md` — this artifact.

## Verification

`npm run ci` — green (tsc + lint + prettier `--check`). No `src/` change, so no build/preview/TV
check needed. The pipeline commands list `Skill` in their `allowed-tools` so they can invoke
`/ship`.

## Commit

`<sha> — docs(ship): make /ship the canonical commit+push for the pipeline`.
