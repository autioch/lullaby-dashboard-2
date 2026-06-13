# Completed-objective behavior — Spec

> **Artifact:** `17_spec_completed-objective-behavior.md` · **Roles:** Product Owner
> **Status:** `agreed`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [plan](17_plan_completed-objective-behavior.md) · [implement](17_implement_completed-objective-behavior.md) · [retro](17_retro_completed-objective-behavior.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner** and
settled before any code. Precise and unambiguous; this is the source of truth the rest of the
pipeline executes against.

## Problem / motivation

Completed objectives stay in place, only de-emphasized (`c-objective--checked`). On a 3–5 m TV the
remaining work doesn't visually float to the top — the eye still scans past done items to find
what's left. The _Progress Over Completion_ design principle says to prioritize remaining
objectives; this makes the list do that by sinking completed items to the bottom of their group and
compacting them, so "what's left" reads at a glance.

## User story

As a **household**, I want **completed objectives to drop to the bottom of their group and shrink**
so that **the objectives still to do stay at the top and easy to read from across the room**.

## Behavior

- Within **each objective group's column**, objectives render in two partitions: **unchecked first**
  (in authored order), then **completed at the bottom** (in authored order among themselves). The
  reorder is **presentation-only** — the authored order stored in Firestore is unchanged.
- Completed objectives render in a **compact style** (smaller / condensed) in addition to the
  existing de-emphasis, but each stays **individually visible and clickable**. The ✓ indicator
  stays.
- Clicking a completed (compact) objective **un-checks** it; it returns to the unchecked partition
  at its authored position and to full size. Clicking an unchecked objective checks it and it sinks
  to the bottom.
- The transition is **instant** — no animation in this slice.
- Completion stays a per-group partition: a group with all objectives done shows them all compact at
  the bottom of its own column; nothing moves between groups.
- Hidden groups and hidden objectives are still skipped, exactly as today.

## Scope

**In scope**

- Presentation-only ordering: unchecked-then-completed **within each group**.
- A compact visual style for completed rows, kept legible and clickable on TV.
- Instant reorder/compact on every check/uncheck, both directions.

**Out of scope** (explicitly not doing now)

- **Animation** of the move/compact (deferred — a later tweak; reduced-motion handling comes with
  it).
- Collapsing completed into a **summary/count line** or **hiding** them — completed rows stay
  individually visible.
- Gathering completed objectives **across groups** (e.g. one mission-wide "done" area) — reorder is
  within-group only.
- Persisting any reordering to the data model — authored order in Firestore is never mutated.
- Any change to grouping, group order, the footer count, or the completion celebration.

## Impact on the codebase

Map the change onto the layered architecture (Firestore → repository → store → component).
Leave a layer blank if untouched.

- **Data model / Firestore** (`src/database/*` record types, collections): _none._
- **Repository** (`src/database/`): _none._
- **Zustand store** (`src/stores/`): _none._ Ordering derives from existing `checkedKeys` +
  `objectiveIds`; no new state or action.
- **Components** (`src/components/<Name>/`):
  - `ObjectiveList/ObjectiveList.tsx` (`ObjectiveGroup`) — order each group's `objectiveIds`
    unchecked-then-completed (stable partition by `checkedKeys[missionId]`) before rendering. Pure,
    presentation-only derivation.
  - `ObjectiveList/Objective.css` (and/or `Objective.tsx`) — a compact style for the checked state,
    layered on the existing `c-objective--checked`.
- **API routes** (`src/pages/api/`, admin SDK): _none._

## UI & TV constraints

- **Layout / where it appears:** the existing objective-list columns (`c-objective-list__group`);
  completed rows sit at the bottom of each column in compact form. No new region.
- **TV-first checks:** remaining (unchecked) objectives stay full-size, high-contrast, readable at
  3–5 m; **compact completed rows must still be legible and a large-enough click / D-pad target** —
  "compact" is reduced, not tiny. ✓ keeps a color-independent indicator. Minimal clutter — no new
  headings or separators.
- **Chrome 87 compatibility:** plain array ordering + CSS sizing only; no JS/CSS newer than Chrome 87
  (no `Array.prototype.at` / `structuredClone`; clone arrays the in-floor way).

## i18n

**None.** No new or changed user-facing text — the ✓ indicator and existing labels are unchanged.
Languages: en, pl (unaffected).

## Acceptance criteria

- [ ] Within each group, all unchecked objectives appear above all completed ones; authored order is
      preserved within each partition.
- [ ] Completed objectives render in a compact style at the bottom of their group, each still
      individually visible with its ✓.
- [ ] Clicking a completed (compact) objective un-checks it and it returns to its authored position
      among the unchecked, full size.
- [ ] Clicking an unchecked objective checks it and it moves to the bottom of its group, compact.
- [ ] Reorder/compact is instant (no animation).
- [ ] Hidden groups/objectives are still skipped; grouping, group order, and the footer count are
      unchanged.
- [ ] Authored order in Firestore is unchanged (presentation-only); no data/store/API/i18n change.
- [ ] Readable and operable on the TV UA at 3–5 m: unchecked full-size, completed compact but
      legible and clickable; `compat/compat` clean.

## Open questions

None blocking — status `agreed`. Non-blocking `/plan`/implementation detail: the exact compact
metric (font size / row height / padding) and whether the completion ordering is extracted to a
tested pure helper vs. inlined in `ObjectiveGroup`.
