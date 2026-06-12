# Roadmap cleanup & /steer done-reconciliation — Tweak

> **Artifact:** `15_tweak_roadmap-cleanup.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Decisions were settled in spike
[05](../docs-spikes/05_spike_roadmap-cleanup.md); this records the build.

## What & why

`docs/06_roadmap.md` had drifted into a mix of a frozen MVP record, a deliberate-non-goals list, and
the live backlog, with **no done-marking** and a Decision log the owner didn't want. Reshaped it into
a single prioritized backlog whose only job is "the items to choose from," and gave `/steer` a step
that actually marks items done — without breaking its single-writer ownership of the roadmap.

Scope edges (owner calls, recorded in the spike): hard non-goals (Monetization, Multi-household,
Social) fold into the backlog as `[ ]` items rather than keeping a "Not planned" note; the Decision
log is dropped entirely (reverses spike 04 — `docs-journal/` covers shipped work); done items stay
marked `[x]` **in their bucket** (accepting unbounded growth, flagged to revisit). `/retro` and
`/tweak` were deliberately **not** touched — they do not write the roadmap.

## Approach

Docs + command prompt only; no app code, no stack/Chrome 87 surface.

- **Roadmap rewrite** — dropped the `MVP` wrapper, `Excluded`, `Analytics intent`, the
  MVP-specced-not-built note, and the entire `Decision log`. One flat backlog grouped by the existing
  change-type buckets, plus a new **Core dashboard** bucket holding the 7 shipped MVP features (all
  `[x]`). Folded the `Excluded` items in as `[ ]`, **de-duped** against existing entries
  (Authentication ↔ "Complete the full Firebase authorization"; AI-generated content ↔ "AI:
  auto-suggest…"; User-created themes placed next to the predefined Theme system). Folded items sink
  to the bottom of their bucket (previously non-goals → lower priority). In-bucket order stays the
  priority signal.
- **`/steer` command** — widened step 2 to **reconcile done-state** (mark `[x]` any item whose work
  shipped, checked against `docs-journal/`) and stated it's the single roadmap writer; dropped the
  Decision-log write from step 6 and the "+ Decision-log entry" phrasing from the "No journal
  artifact" rule; purged the `Future`/MVP/Excluded language.
- **Doc-sync** — `feature-workflow.md` (Artifacts & roles exception note: dropped Decision-log
  mention, now "priority order, with shipped picks marked done"); `docs/README.md` (roadmap doc
  description: "MVP scope & what's next" → "Prioritized backlog (`/steer`-maintained)"). CLAUDE.md
  needed no change — its Features section already describes `/steer` as maintaining the roadmap with
  no Decision-log or MVP/Excluded reference.

## Changes

- `docs/06_roadmap.md` — full rewrite to a flat prioritized backlog.
- `.claude/commands/steer.md` — done-reconciliation step; dropped Decision-log writes; purged
  MVP/Excluded/Future language.
- `docs/feature-workflow.md` — Artifacts & roles exception note updated.
- `docs/README.md` — roadmap doc-index description updated.
- `docs-journal/15_tweak_roadmap-cleanup.md` — this record.

## Verification

`L0` gate (`npm run ci` — tsc + lint + unit tests + format) and `L4` (`npm run knip`) per
[qa.md § Recording QA](../docs/qa.md#recording-qa). Markdown/command-prompt-only change — no app
code, so no `L1` build or `L2` TV-UA drive applies; no `L5` real-TV item. Result recorded at commit.

## Commit

`<sha> — docs(roadmap): flatten to prioritized backlog; /steer marks items done`.
