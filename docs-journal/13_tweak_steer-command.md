# Add the `/steer` backlog-grooming command (spike 04) — Tweak

> **Artifact:** `13_tweak_steer-command.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane. Executes
[`docs-spikes/04_spike_steer-command.md`](../docs-spikes/04_spike_steer-command.md) (verdict
`viable-with-changes`, Option B). No app code — a process/tooling change (precedent:
[`10_tweak_commands-cleanup.md`](10_tweak_commands-cleanup.md)).

## What & why

The pipeline had no top-of-loop "what's next" step — picking the next item was ad-hoc, and the
roadmap was a flat, unprioritized checklist. Added **`/steer`**: a Product-Owner command that grooms
the roadmap backlog, ranks candidates by value vs effort, converges with the owner, and **picks one**
next item, handing it off to `/spike` / `/spec` / `/tweak`.

**Scope edges** (per spike, owner decisions):

- **Distinct command** (not folded into `/retro`); `/retro`'s next-actions become `/steer` inputs.
- **Pick one** per run — no batches, sprints, velocity, or time-boxes (single-developer project).
- **No journal artifact** — `/steer` maintains the durable `docs/06_roadmap.md` (priority order +
  a JIRA-epic-style Decision log) instead; a per-run snapshot would only rot.
- **Priority scheme:** ordering within each roadmap bucket is the signal (top = next) — no per-item
  High/Med/Low tags or estimates. The backlog was not pre-prioritized here; that's `/steer`'s job at
  runtime.

## Approach

- **New command** `.claude/commands/steer.md` — PO-led (Tech Lead on effort/risk); steps: ground →
  gather candidates (roadmap open items + open `/retro` next-actions + un-graduated proceed-verdict
  spikes + owner additions) → rank with rationale → `AskUserQuestion` loop → converge on one →
  update roadmap → hand off. `allowed-tools` mirrors `retro.md` (read/search + edit + git for
  `/ship` + `Skill`), minus session-mgmt.
- **Roadmap restructure** (`docs/06_roadmap.md`) — added a `/steer`-maintained-backlog note under
  `## Future` (ordering = priority) and a new `## Decision log` section with a bootstrap entry.
- **Doc-sync** — `feature-workflow.md`: pipeline diagram now loops `/steer → … → /retro → /steer`;
  added the `/steer` command bullet, updated the `/retro` bullet, added the **Artifacts & roles**
  carve-out (the one pipeline command writing a durable doc, not a journal artifact). `CLAUDE.md`
  (Features) and `docs/development.md` (pipeline line) updated to introduce `/steer`.

## Changes

- `.claude/commands/steer.md` — new command.
- `docs/06_roadmap.md` — backlog-maintenance note + `Decision log` section + pipeline item marked done.
- `docs/feature-workflow.md` — pipeline diagram, command bullets, intro list, Artifacts & roles row + carve-out.
- `CLAUDE.md` — Features section.
- `docs/development.md` — "Adding a feature" pipeline line.
- `docs-journal/13_tweak_steer-command.md` — this artifact.

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): tsc + ESLint + Vitest + Prettier `--check` (covers
  the edited/new markdown).
- **No frontmatter risk:** `steer.md` `description` + `allowed-tools` valid YAML; `$ARGUMENTS`
  present; read-pointer to `feature-workflow.md` kept.
- **Links:** new cross-doc links (`docs-spikes/04…`, `docs-journal/13…`, `#decision-log`) resolve.
- L1/L2/L4 not applicable — prompt/doc files, no runtime surface. No `L5` items.

## Commit

`<sha> — feat(pipeline): add /steer backlog-grooming command per spike 04`.
