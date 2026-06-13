# Completed-objective behavior — Implementation

> **Artifact:** `17_implement_completed-objective-behavior.md` · **Roles:** Senior Fullstack React/Node.js Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13
> **Related:** [spec](17_spec_completed-objective-behavior.md) · [plan](17_plan_completed-objective-behavior.md) · [retro](17_retro_completed-objective-behavior.md)

A concise, durable record of what an `/implement` run actually did, written at close-out by the
**Senior Fullstack Developer** who executed the plan. Other skills read it, so keep each section
terse and factual: claims must trace to a commit or to the plan's step state.

## Outcome

Within each objective group, completed objectives now sink to the bottom in a compact, de-emphasized
style while unchecked ones stay full-size at the top — so "what's left" reads at a glance on the TV.
Reorder is presentation-only and instant; un-checking restores a row to its authored position, full
size. Before, completed objectives stayed in place with only a line-through.

## Added

- `src/stores/objectiveOrder.ts` — pure `orderByCompletion(objectiveIds, checkedForMission)`: stably
  partitions a group's `objectiveIds` into unchecked-then-completed (two `filter` passes + spread),
  preserving authored order within each half. No React/Firestore; mirrors `missionProgress.ts`.
- `src/stores/objectiveOrder.test.ts` — 7 Vitest cases: mixed, all-checked, all-unchecked, undefined
  checked map, ids absent from the map, falsy checked value, empty array.

## Changed

- **Component / ordering:** `src/components/ObjectiveList/ObjectiveList.tsx` — `ObjectiveGroup` maps
  `orderByCompletion(group.objectiveIds, checkedKeys[missionId])` instead of `group.objectiveIds`.
- **CSS:** `src/components/ObjectiveList/Objective.css` — compact treatment on `.c-objective--checked`
  (padding `0.3rem 0.5rem`, `font-size: 0.78em`, `opacity: 0.6`) plus a smaller checkmark
  (`.c-objective--checked > .c-objective__state` → `1.4rem`), layered on the existing line-through.
- **Docs (doc-sync):** `docs/05_design.md` — the "Main — objective list" bullet now says completed
  objectives sink to the bottom of their group and compact (was "**not** reordered or collapsed").

## Skipped / deferred

- **Animation** of the move/compact — out of scope per the spec (instant for MVP); a later tweak,
  which would also bring the `prefers-reduced-motion` handling.
- **Summary/count collapse, hide-completed, cross-group gathering** — out of scope; completed rows
  stay individually visible, within their own group.
- **No store-state / data / API / i18n change** — ordering is a pure render-time derivation; authored
  order in Firestore is untouched; no new strings.

## Verification

- **L0 gate** (`npm run ci`): green — tsc, ESLint incl. `compat/compat` (Chrome 87 floor; `filter` +
  spread + optional chaining all in-floor), **52** Vitest tests (7 new), Prettier. **L1 build**
  (`npm run build`): succeeds.
- **L2 behavior drive** (dev app, `PUBLIC_SKIP_AUTH`, seeded Firestore, mission "Rano"): every
  acceptance criterion confirmed —
  - Checked "Ubranie" + "Śniadanie" (authored indices 0, 2) → unchecked stay top in authored order
    (Siku, Umyć zęby, …), completed sink to the bottom in authored order (Ubranie before Śniadanie).
  - Compact completed rows measured: `font-size` 24.96px (= 0.78 × 32px) vs 32px unchecked, padding
    4.8px vs 12px, opacity 0.6 — smaller and de-emphasized but legible, each still showing ✓ and
    clickable.
  - Un-checking "Ubranie" returned it to index 0 (authored position), full-size (32px), unchecked;
    remaining completed stayed compact at the bottom.
  - Footer count correct (1/20, 5%); grouping/group order unchanged; no console warnings/errors.
    Screenshot captured.
- **L3 review** — `/code-review` over `886d8c4..HEAD`: no findings (stable partition preserves
  authored order; `key={objectiveId}` keeps rows stable across reorder — no remount, verified instant;
  `checkedKeys[missionId]` undefined handled by the helper). `/simplify`: nothing. `/security-review`
  **not triggered** — no auth/API/rules/data.
- **L4 dead-code** (`npm run knip`): clean — helper imported by `ObjectiveGroup`, no orphan.
- **L5 / pending (real-TV):** the L2 drive ran in the desktop preview. Compact-row **readability and
  D-pad operability at 3–5 m on actual TV hardware** are **unverified — flagged for owner confirmation
  on the TV** (compact font ≈ 25px; confirm it stays comfortable).

## Commits

- `819de0b` — feat(dashboard): add orderByCompletion helper for completed-objective ordering
- `2b90387` — feat(dashboard): sink completed objectives to bottom of group, compact style
