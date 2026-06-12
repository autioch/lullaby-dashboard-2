# Tighten the dense reference docs (spike 02, Option B) — Tweak

> **Artifact:** `09_tweak_docs-tighten.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Executes the remaining recommendation of
[`docs-spikes/02_spike_docs-cleanup.md`](../docs-spikes/02_spike_docs-cleanup.md) (the `05_design`
staleness piece was already done in `08_tweak_design-roadmap-split`).

## What & why

The dense-tier reference docs carried bloated connective prose and self-repetition that made them
hard for a human to skim. Tightened the prose; kept every table, code block, rationale ("why"), and
heading. Owner decisions: **tighten but keep all rationale** (don't gut context agents rely on) and
**full Option B scope**.

**Scope edges:** docs-only, no code/logic. `02_marketing.md` left narrative (intentional copy);
clean docs (`01`, `03`, `04`, `06`, `README`) left as-is — no bloat worth churning. **No heading
text changed**, so every cross-doc anchor slug (`development.md#keeping-docs-in-sync`,
`qa.md#test-by-scope` / `#masking-traps` / `#tests-are-part-of-the-change` / `#recording-qa` /
`#user-story-regression`) still resolves.

## Approach

- **`development.md`** — cut the architecture restatement after the layering diagram; collapsed the
  duplicate feature-pipeline wall into a one-line pointer to `feature-workflow.md`; turned the
  "durable docs stay current two ways" paragraph into two labelled bullets.
- **`qa.md`** — tightened the intro (three-questions + doc-sync-sibling framing).
- **`feature-workflow.md`** — dropped the `/spike` and `/tweak` descriptions from the Pipeline
  diagram (they duplicated the bullets directly below); merged the two-paragraph Committing section,
  removing the repeated `/ship` description.
- **`07_data-architecture.md`** — removed the Core rule that merely restated the Read-flow diagram.
- No layering touched (docs only).

## Changes

- `docs/development.md` — prose trims (Architecture, Adding a feature, Keeping docs in sync).
- `docs/qa.md` — intro trim.
- `docs/feature-workflow.md` — Pipeline diagram + Committing section trims.
- `docs/07_data-architecture.md` — Core-rules trim.

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): green — tsc + ESLint + 43 Vitest tests + Prettier
  `--check` (covers the edited markdown) all pass.
- **Internal links / anchors:** no heading text changed; spot-checked that the protected slugs above
  still match their headings, and `qa.md` → `03_user-scenarios.md` is a (correct) file-level link.
- **No doc-vs-code contradiction:** trims removed duplication only; no factual claims altered.
- L1/L2/L4 not applicable (docs-only, no runtime surface). No `L5` items.

## Commit

`<sha> — docs: tighten dense reference docs per spike 02 (Option B)`.
