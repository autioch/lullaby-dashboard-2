# Docs cleanup — Spike

> **Artifact:** `docs-spikes/02_spike_docs-cleanup.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** _(not a feature — execute as a docs `/tweak` or direct editing pass; see Next step)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

Is a blanket "blunt-ify the walls of text" pass over `docs/` the right move — or do the docs need
a more selective treatment? And how far should "describe current state" go before it collides with
the existing `/retro` reconcile process that already owns code-vs-doc accuracy?

## Idea as posed

> I need a final wrap up of the markdown files in the `docs` folder. They have a lot of text, some
> of it doesn't describe current status or what needs to be done. They all contain lots of text
> (walls of text) that might be readable to an agent, but hard to go through by human. My
> perspective is that these documentation files should:
>
> - describe current state
> - where possible, use bullet points / numbered lists / tables
> - avoid bloated language, be blunt and straight to the point
> - focus on their domain

## Findings

### Product & common sense

The goal is sound — these are durable, human- and agent-facing docs and CLAUDE.md already mandates
"short, direct, precise." So this is **enforcement of an existing standard**, not a new one.

But the premise ("walls of text") only partly holds. Read across all 11 files, the docs are in
**three very different states**, which is why a uniform pass is wrong:

| State                                                                      | Files                                                                                | Reality                                                                                    |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Already clean** (lists/tables, accurate)                                 | `01_vision`, `04_design-principles`, `06_roadmap`, `README`                          | Little to do. `06` was just reorganized into a checklist (commit `5b906f6`).               |
| **Dense but structured** — table-driven, wrapped in heavy connective prose | `development`, `qa`, `feature-workflow`, `07_data-architecture`, `03_user-scenarios` | The real target. Tables are fine; the **prose around them** is bloated and repeats itself. |
| **Stale / aspirational**                                                   | `05_design` (and stray roadmap-ish lines)                                            | Describes an **intended** design, not the built one — see below.                           |
| **Intentionally narrative** (exempt)                                       | `02_marketing`                                                                       | Positioning/tone copy; bullets would make it worse. Owner confirmed: leave narrative.      |

**Staleness is real and grounded, not hypothetical.** `05_design.md`'s whole "Theme System"
section (Space / Minecraft / Pirate themes with named status strings like "Orbit Achieved") has
**zero matches anywhere in `src/`** (grepped `Minecraft|Pirate|Crew Boarding|Orbit Achieved|theme`,
case-insensitive → no files). It documents an unbuilt feature as if current. That is precisely the
"doesn't describe current status" problem.

Simpler-alternative check: the cheapest win is **prose trimming + tabularizing the dense tier**, not
a rewrite. The clean tier and marketing should be left mostly alone. So most of the value comes from
a focused minority of files.

### UX standards

"Reader" here is split: **agents** (who tolerate density and rely on the _rationale_ baked into the
prose) and **the human owner** (who wants to skim). The risk is optimizing for skim-ability by
deleting the "why" that agents use to make correct decisions. Resolution: **cut filler words and
redundant restatement, keep decision rationale** — blunt ≠ stripping the reasons. The TV/Chrome 87
floor is irrelevant here (no runtime surface); the only "UX" is document readability.

### Technical viability

Trivially viable — markdown edits, no stack or Chrome 87 surface. Two **mechanical risks** that make
this not-zero-risk and worth recording:

1. **Cross-doc anchor links.** These docs reference each other by heading anchor — e.g.
   `qa.md#test-by-scope`, `qa.md#masking-traps`, `development.md#keeping-docs-in-sync`,
   `qa.md#tests-are-part-of-the-change`, `03_user-scenarios.md#user-story-regression`. Renaming a
   heading silently breaks every inbound link, **including links from `CLAUDE.md` and the
   `.claude/commands/*` files outside `docs/`**. Restructure must preserve heading slugs or sweep
   and fix every referrer.
2. **Process overlap with `/retro` reconcile.** Code-vs-doc accuracy is already owned by the
   repo-wide reconcile inside `/retro` and the per-commit doc-sync map. A "verify every claim against
   code" pass would duplicate that. Owner chose the middle path (fix obvious staleness in passing, no
   systematic audit), which avoids the collision.

## Options & trade-offs

- **Option A — Uniform blunt-ify all 11 docs.** Simple rule. ✗ Wrong for marketing (narrative), ✗
  wasted effort on already-clean docs, ✗ highest anchor-breakage surface. Rejected.
- **Option B — Per-doc triage: restyle the dense tier, fix obvious staleness, leave clean +
  marketing alone. _(recommended)_** Matches the docs' actual states and the owner's three answers.
  Focused effort, contained risk. Pairs with an anchor-link sweep.
- **Option C — Full restyle + code reconcile.** Most thorough. ✗ Duplicates `/retro` reconcile, ✗
  heavy, ✗ scope creep beyond a "wrap up". Rejected.

## Verdict & recommendation

**`viable-with-changes`.** The idea is good but the scope is reshaped from "blunt-ify the walls of
text" (the premise overstates the problem) to a **per-doc triage** (Option B). Recommended approach,
per the owner's elicited decisions:

- **Depth:** restyle (cut bloat, lists/tables) **+ fix obvious staleness spotted in passing** — no
  systematic code audit (that stays with `/retro` reconcile).
- **Per-doc plan:**
  - `development`, `qa`, `feature-workflow`, `07_data-architecture` — **primary targets.** Trim
    connective prose, drop repeated restatement, keep tables and rationale.
  - `05_design` — **rewrite to current state.** Cut/flag the unbuilt Theme System; describe what the
    dashboard actually renders today. Highest staleness payoff.
  - `03_user-scenarios` — light prose trim only; the `S1`–`S8` structure is load-bearing for QA
    regression, keep ids and headings.
  - `01_vision`, `04_design-principles`, `06_roadmap`, `README` — **light touch**, only clear wins.
  - `02_marketing` — **leave narrative.**
- **Constraints:** preserve heading slugs (or fix every inbound anchor in `docs/`, `CLAUDE.md`,
  `.claude/commands/*`); update `docs/README.md` index if any heading/domain shifts; one commit via
  `/ship`.

## Suggested scope

**Keep:** the dense-tier prose trim + tabularize; the `05_design` current-state rewrite; the anchor
sweep. **Cut from scope:** marketing restructure, full code reconcile, restructuring already-clean
docs for consistency's sake. **Reshape:** "describe current state" → "fix obvious staleness only,"
deferring deep accuracy to the existing reconcile.

## Open questions & risks

- [ ] `05_design.md` current-state rewrite needs the owner (or a quick code read) to confirm what the
      dashboard renders **today** — themes, status messages, records/best-time, deadline countdown
      are all candidates that may not be built. Resolve when editing `05`.
- [ ] Anchor-link sweep must cover referrers **outside** `docs/` (`CLAUDE.md`, `.claude/commands/*`).
      Easy to miss; verify with a repo-wide grep for any changed slug.
- [ ] Watch the agent-vs-human tension: don't delete rationale agents depend on while trimming for
      human skim-ability.

## Next step

**Not a feature — no `/spec`.** This is a bounded editing pass over durable docs. Execute as a docs
**`/tweak`** (single artifact, Q&A + plan + edits in one pass) — or, since it's pure prose with no
logic, as a direct editing pass committed via `/ship`. `/tweak` is the better fit because it records
the per-doc decisions and runs the gate (internal-link check). Reuse short-name `docs-cleanup` if it
graduates.

## References

- Files reviewed: `docs/01`–`07`, `docs/README.md`, `docs/development.md`, `docs/qa.md`,
  `docs/feature-workflow.md`.
- Grep evidence for `05_design` staleness: `Minecraft|Pirate|Crew Boarding|Orbit Achieved|theme`
  (case-insensitive) over `src/` → **0 files**.
- Process this overlaps: `/retro` repo-wide reconcile + doc-sync map
  (`development.md#keeping-docs-in-sync`).
- House style standard being enforced: CLAUDE.md "Working style"; `feature-workflow.md` "Shared
  rules → House style."
