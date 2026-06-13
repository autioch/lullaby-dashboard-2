# Lighten the workflow for small / interim-UI changes — Tweak

> **Artifact:** `18_tweak_lighten-workflow.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13

A single durable record of a small change made through the `/tweak` lane. Docs-only.

## What & why

From the [feature-17 retro](17_retro_completed-objective-behavior.md): the full
`/spec`→`/plan`→`/implement` pipeline was heavy for a ~75-line visual change, and the owner wants to
stop over-investing in the UI — it's an interim proof-of-concept that will be reworked once the
feature set stabilizes. Two durable-doc changes capture that so future runs route and scope
correctly:

1. **Lane-selection guidance** — when a change should take the lightweight `/tweak` lane vs the full
   pipeline, chosen up front by the change's shape.
2. **Interim-UI default** — record in the always-loaded `CLAUDE.md` that the UI is a PoC pending a
   ground-up rework, so agents minimize polish and skip non-mandatory animation.

Scope edge: docs only — no app code, no command-prompt logic changes. The roadmap done-mark +
Animations deprioritization were already handled in the preceding `/steer` run (commit `ee9b4f1`).

## Approach

Durable-doc edits only (doc-sync map row: _Workflow / command / pipeline change_ → `feature-workflow.md`,
`CLAUDE.md`). No layering touched.

- **`CLAUDE.md`** — add a "Status — interim UI (PoC)" note under _What this is_ (UI is a test harness,
  reworked from the ground up once the feature set stabilizes), and an _Interim UI — minimize polish_
  bullet under _Working style_ (default new visual work to instant/no-motion; add animation only on
  request; keep the functional TV-first baseline as the floor, not "polish").
- **`docs/feature-workflow.md`** — add a _Choosing the lane_ section: pick `/tweak` vs the full
  pipeline by the change's shape, default small/interim-UI visual changes to `/tweak`, start in
  `/tweak` when in doubt and escalate to `/spec` if it grows.

## Changes

- `CLAUDE.md` — _Working style_ "Interim UI — minimize polish" bullet; _What this is_ "Status —
  interim UI (PoC)" paragraph.
- `docs/feature-workflow.md` — new "Choosing the lane: `/tweak` vs the full pipeline" section after
  the Pipeline list.

## Verification

- **L0 gate** (`npm run ci`): green — tsc, ESLint, Vitest (52 tests), Prettier all pass.
- **L1 build / L2 drive:** N/A — docs-only, no compiled or user-visible app change.
- **L4 dead-code** (`npm run knip`): unaffected (no code change).
- **Cross-check:** internal links resolve (`CLAUDE.md`, `docs/development.md#...`); no doc now
  contradicts the code. The interim-UI rule is consistent with the design principles (TV-first
  baseline preserved) and the agent-memory note `ui-is-interim-minimize-polish`.
- **L5:** none.

## Commit

`<sha>` — docs(workflow): lane-selection guidance + interim-UI minimize-polish default
