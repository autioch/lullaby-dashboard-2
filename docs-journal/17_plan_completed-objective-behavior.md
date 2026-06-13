# Completed-objective behavior — Plan

> **Artifact:** `17_plan_completed-objective-behavior.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `in-progress`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spec](17_spec_completed-objective-behavior.md) · [implement](17_implement_completed-objective-behavior.md) · [retro](17_retro_completed-objective-behavior.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable
steps. The **Product Owner** guards scope; the **Solution Architect / Tech Lead** owns the
sequencing and layering. Unambiguous, no filler.

## Goal

Within each objective group, render unchecked objectives first and sink completed ones to the bottom
in a compact-but-clickable style — presentation-only, instant, authored order in Firestore unchanged.

## Approach

Purely the **component** layer plus one **pure derivation** — no Firestore, repository, store-state,
or API change. A new pure `orderByCompletion(objectiveIds, checkedForMission)` (in `src/stores/`,
mirroring `missionProgress.ts`) stably partitions a group's `objectiveIds` into unchecked-then-checked;
`ObjectiveGroup` calls it before mapping. Completed rows get a compact CSS treatment layered on the
existing `c-objective--checked`. Order: build + unit-test the helper in isolation (Step 1), wire it
into `ObjectiveGroup` and add the compact style (Step 2), validate on the TV UA (Step 3). Steps 1–2
are client code on the **Chrome 87 floor** — `compat/compat` stays green; ordering uses
`Array.prototype.filter` + spread (in-floor), no `Array.prototype.at` / `structuredClone`.

## Read before starting

Context every step assumes — keep open while implementing:

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor
- [docs/development.md](../docs/development.md) — conventions, Copy-from, "Tests" rule
- [docs/qa.md](../docs/qa.md) — testing levels, test-by-scope, "tests are part of the change"
- [docs-journal/17_spec_completed-objective-behavior.md](17_spec_completed-objective-behavior.md) — the contract
- [docs/04_design-principles.md](../docs/04_design-principles.md) — Progress Over Completion, TV-first, Accessibility
- [src/stores/missionProgress.ts](../src/stores/missionProgress.ts) + [missionProgress.test.ts](../src/stores/missionProgress.test.ts) — the pure-derivation + test pattern to mirror
- [src/components/ObjectiveList/ObjectiveList.tsx](../src/components/ObjectiveList/ObjectiveList.tsx) — `ObjectiveGroup` (maps `group.objectiveIds`; has `checkedKeys`, `missionId`)
- [src/components/ObjectiveList/Objective.tsx](../src/components/ObjectiveList/Objective.tsx) + [Objective.css](../src/components/ObjectiveList/Objective.css) — row markup + current `c-objective--checked` (line-through only)

## Steps

Ordered and **self-contained** — each leaves the tree green (`npm run ci` passes) and is
independently committable. Phases: **Prep/refactor → Build → Wire → Validate.**

### Step 1 — Pure `orderByCompletion` helper + unit test · phase: `build` ✅

- **Goal:** A tested, pure ordering derivation, built and tested in isolation before any component
  uses it. A wrong partition would silently lose authored order, so it gets a regression net.
- **Read:** spec §Behavior (unchecked-first, completed-bottom, stable within each partition);
  `missionProgress.ts` (pure-fn style, no React/Firestore) + `missionProgress.test.ts` (Vitest shape);
  `ObjectiveList.tsx` for the input types (`group.objectiveIds: string[]`,
  `checkedKeys[missionId]: Record<string, boolean> | undefined`).
- **Change:**
  - `src/stores/objectiveOrder.ts` — `export function orderByCompletion(objectiveIds: string[],
checkedForMission: Record<string, boolean> | undefined): string[]`. Stable partition: unchecked
    ids (in order) then checked ids (in order), e.g. two `filter` passes keyed on
    `checkedForMission?.[id]`, returned via spread. No React, no Firestore, no `Array.prototype.at`.
  - `src/stores/objectiveOrder.test.ts` — cover: mixed (order preserved within each partition),
    all-checked, all-unchecked, empty array, `checkedForMission` undefined, ids absent from the
    checked map (treated unchecked).
- **Done-check:** `npm run ci` green (incl. the new Vitest cases). Helper is unused until Step 2
  (exported, so no lint error).

### Step 2 — Use the ordering in `ObjectiveGroup` + compact completed style · phase: `wire`

- **Goal:** Completed objectives render at the bottom of their group, compact but legible and
  clickable.
- **Read:** spec §Behavior, §UI & TV constraints, §Acceptance criteria; `ObjectiveList.tsx`
  (`ObjectiveGroup`), `Objective.css` (current `.c-objective` padding `0.75rem 0.5rem`, list
  `font-size: 2rem`, `.c-objective__state` `2rem`).
- **Change:**
  - `src/components/ObjectiveList/ObjectiveList.tsx` — in `ObjectiveGroup`, compute
    `orderByCompletion(group.objectiveIds, checkedKeys[missionId])` and map over that instead of
    `group.objectiveIds`. (Hidden objectives still self-skip in `ObjectiveRow`; their position in the
    partition is irrelevant since they render `null`.)
  - `src/components/ObjectiveList/Objective.css` — add a compact treatment on `.c-objective--checked`
    layered on the existing line-through: reduced `padding` and `font-size` (e.g. `~0.8em`) and a
    de-emphasis (e.g. lowered `opacity`), plus a smaller `.c-objective--checked .c-objective__state`.
    **Keep it legible and a large-enough click/D-pad target at 3–5 m** — compact, not tiny. No
    animation/transition.
- **Done-check:** `npm run ci` green (**`compat/compat` matters — client code**) + `npm run build`;
  `npm run dev` under the **TV user agent** (`Chrome/87 … SmartTV`) — checking an objective sinks it
  to the bottom of its group, compact; un-checking pops it back up full-size at its authored position.

### Step 3 — TV-UA validation · phase: `validate`

- **Goal:** Prove every acceptance criterion against the running app on the TV UA.
- **Read:** spec §Acceptance criteria; [docs/qa.md](../docs/qa.md) L2 + the Component/UI test-by-scope row.
- **Change:** none under `src/` beyond fixes surfaced by testing. On the TV UA, walk each criterion:
  unchecked-above-completed within each group; authored order preserved in each partition; compact
  completed rows still visible/legible with ✓ and still clickable; check sinks + compacts, uncheck
  restores position + full size (both instant); hidden groups/objectives still skipped; footer count
  and group order unchanged; both languages render. Capture a screenshot as proof.
- **Done-check:** see **Final verification** below.

## Final verification

Run the [qa.md](../docs/qa.md) levels for this feature's scope and check off:

- [ ] `L0` gate + `L1` build green (`compat/compat` clean; new Vitest cases pass)
- [ ] `L2`: every item in the spec's **Acceptance criteria** confirmed in the running app (TV UA) — `/verify`; check both check→sink and uncheck→restore, and TV legibility of compact rows
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; **`/security-review` not triggered** — no auth/API/rules/data), findings addressed
- [ ] `L4` `npm run knip` clean (helper imported by `ObjectiveGroup`; no orphan)
- [ ] Tree internally consistent; flip the spec's `Status` → `implemented` on completion
- [ ] `L5` real-TV: confirm compact completed rows stay readable and D-pad-operable on actual TV hardware — **flag as pending**, don't fake it

## Risks & assumptions

- **Presentation-only ordering (spec-confirmed):** the reorder is render-time only; `objectiveIds` in
  Firestore and the content editor's authored order are never mutated. No store action, no
  `onSnapshot` involvement.
- **Helper extracted + tested (owner plan-shape choice):** `orderByCompletion` is a pure `src/stores/`
  derivation with its own `*.test.ts`, mirroring `computeProgress` — per
  [qa.md](../docs/qa.md#tests-are-part-of-the-change) (logic gets a co-located test).
- **Compact legibility is the real risk:** "compact" must stay readable and clickable at 3–5 m on a
  TV. Exact metric is tuned in Step 2 and confirmed in the L2 drive; final readability is an `L5`
  real-TV check.
- **Chrome 87:** ordering uses `filter` + spread only; no `Array.prototype.at` / `structuredClone` /
  top-level await. CSS is plain sizing. Keep `compat/compat` green on Steps 1–2.
- **No interaction with the completion celebration:** when all objectives are done they all compact at
  the bottom of their groups; the celebration is unaffected.
