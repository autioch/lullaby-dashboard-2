# Lighten `/steer`, untangle it from `/retro` — Tweak

> **Artifact:** `25_tweak_steer-retro-split.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Written at close-out; keep it terse and factual. Claims must
trace to the commit. For anything bigger, the full `/spec` → `/plan` → `/implement` pipeline and
its artifacts apply instead.

## What & why

`/steer` loaded a lot of context and ran slow for a "pick the next item" command, and overlapped
`/retro` (both acted as the feature's wrap-up/prep bookends). Root cause: spike
[04](../docs-spikes/04_spike_steer-command.md) made `/steer` the roadmap's **single writer**, which
forced all bookkeeping into one cold command — done-reconciliation (scan ~55 `docs-journal/`
artifacts) and gathering candidates from every retro's prose + every spike. Implements spike
[10](../docs-spikes/10_spike_steer-retro-split.md): invert to a **single inbox, many writers**
model — the commands that finish or generate work write the roadmap when their context is hot;
`/steer` becomes a pure **reader** (read → rank → pick → reprioritize).

Scope edge: **no new command** (redistribution only), no app code, no tool-grant changes except
trimming `/steer`'s now-unused `git log/diff/status` grants. The "full feature shipped without a
`/retro`" gap is handled by the owner marking it `[x]` during the next `/steer` (owner's call) — not
by re-adding a scan, and not by touching `/implement`.

## Approach

Process/prose change across the command files + their doc-sync. One deliberate deviation from spike
10: the spike said `/spike` would "file a viable verdict as a backlog candidate", but `/spike` is
charter-bound investigation-only and its `allowed-tools` carry no git/`/ship` (it can't commit). So
`/spike` instead **recommends the owner file** a deferred viable idea into the roadmap, and `/steer`
drops the `docs-spikes/` scan too — keeping `/steer` a pure reader without violating `/spike`'s
charter.

- **`/retro`** closes its own roadmap item `[x]` (folded into the step-6 durable-doc reconcile, since
  the roadmap is a durable doc) and files its carried-forward follow-ups as roadmap entries (step 5).
- **`/tweak`** closes its own roadmap item and files spawned follow-ups on ship (step 7).
- **`/spike`** recommends the owner file a deferred viable idea (step 7).
- **`/steer`** reads open roadmap items + owner additions only; no `docs-journal/`/`docs-spikes/`
  scan; still owns whole-backlog reprioritizing.
- Filed entries follow the existing roadmap convention: **title · one-sentence why · source ref**
  (`(retro [NN])` / `(tweak [NN])` / `(spike [NN])`) — per the owner's note in the request.

No migration needed: open retro next-actions are already in the roadmap (Reliability/Tooling/Process
buckets cite retro 01 & 24), and the "un-graduated viable spikes" are all stale graduation links for
work that already shipped.

## Changes

- **Commands** — `.claude/commands/steer.md` (reader rewrite: intro, step 2, step 6, no-journal
  rule; trimmed `git log/diff/status` from `allowed-tools`), `.claude/commands/retro.md` (intro +
  steps 5–6: close own item, file follow-ups), `.claude/commands/tweak.md` (step 7: close own item),
  `.claude/commands/spike.md` (step 7: recommend filing a deferred idea).
- **Durable docs** — `docs/06_roadmap.md` (header: single-inbox/many-writers model),
  `docs/feature-workflow.md` (pipeline diagram, `/steer` + `/retro` bullets, the `/steer`-exception
  paragraph), `CLAUDE.md` (Features section, two spots), `docs-journal/_TEMPLATE_retro.md`
  (_Suggested next actions_ note that carried-forward items are also filed to the roadmap).
- **Spike** — `docs-spikes/10_spike_steer-retro-split.md` `Graduated to:` → this tweak.

## Verification

`L0` gate (`npm run ci` — tsc + lint + unit tests + format) green; `L4` `npm run knip` clean.
Docs/command prose only — no app code, so no `L1` build, `L2` TV-drive, or `L5` real-TV checks
apply. The change is to agent-facing command prompts; its real test is the next `/steer` / `/retro`
run executing the lighter flow.

## Commit

`<sha> — docs(pipeline): make /steer a roadmap reader; /retro & /tweak close their own item`.
