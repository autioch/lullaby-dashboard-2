# Completion celebration — Plan

> **Artifact:** `16_plan_completion-celebration.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `done`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12 · **Last updated:** 2026-06-12
> **Related:** [spec](16_spec_completion-celebration.md) · [implement](16_implement_completion-celebration.md) · [retro](16_retro_completion-celebration.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable
steps. The **Product Owner** guards scope; the **Solution Architect / Tech Lead** owns the
sequencing and layering. Unambiguous, no filler.

## Goal

A presentation-only background celebration: when visible progress reaches 100%, a CSS-only
confetti/fireworks burst plays behind the dashboard content and settles into a persistent glow —
clickable-through, replayed on every fresh arrival at 100%, with a static-glow fallback under
`prefers-reduced-motion`.

## Approach

Purely the **component** layer — no Firestore, repository, store, API, or data-model change. The new
`CompletionCelebration` reads progress through the **same store selectors as `ProgressBar`**
(`checkedKeys`, `objectiveGroups`, `objectives`) plus `useMission()`, runs the existing pure
`computeProgress`, and renders nothing unless `percent === 100` (an inline render guard — not
business logic, so no new util or unit test; per the owner's plan-shape choice). Because the
component returns `null` while incomplete, it **unmounts on dropping below 100% and remounts on each
re-arrival**, so the CSS burst animation restarts for free — no extra state, no key bookkeeping. The
burst settles into a steady glow via `animation-fill-mode` / a persistent glow element; a
`prefers-reduced-motion: reduce` block suppresses the burst and shows the static glow only. Order:
build the component in isolation (Step 1), then wire it into `Dashboard` behind the content with the
stacking context (Step 2), then validate on the TV UA (Step 3). Every step is client code on the
**Chrome 87 floor** — `compat/compat` must stay green; all CSS used (`@keyframes`, `transform`,
`opacity`, `radial-gradient`, `pointer-events`, `prefers-reduced-motion`) is in-floor and Vite
down-levels syntax to `chrome87`.

## Read before starting

Context every step assumes — keep open while implementing:

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor
- [docs/development.md](../docs/development.md) — architecture, conventions, command table, Copy-from
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering authority (component stays presentation-only)
- [docs-journal/16_spec_completion-celebration.md](16_spec_completion-celebration.md) — the contract
- [docs/04_design-principles.md](../docs/04_design-principles.md) — TV-first, Cooperative Not Competitive, Accessibility
- [src/components/ProgressBar/ProgressBar.tsx](../src/components/ProgressBar/ProgressBar.tsx) — the selector + `computeProgress` pattern to mirror
- [src/stores/missionProgress.ts](../src/stores/missionProgress.ts) — `computeProgress` (`percent`)
- [src/components/Dashboard/Dashboard.tsx](../src/components/Dashboard/Dashboard.tsx) + [Dashboard.css](../src/components/Dashboard/Dashboard.css) — mount point + layout

## Steps

Ordered and **self-contained** — each leaves the tree green (`npm run ci` passes) and is
independently committable. Phases: **Prep/refactor → Build → Wire → Validate.**

### Step 1 — Build the `CompletionCelebration` component + CSS · phase: `build` ✅

- **Goal:** A self-contained, presentation-only celebration layer that renders only at 100% visible
  completion and animates a CSS-only burst settling into a glow. Built in isolation; not yet mounted
  (an unimported component keeps `npm run ci` green — knip is L4, run at the end).
- **Read:** spec §Behavior, §UI & TV constraints, §Scope; `ProgressBar.tsx` (exact selectors:
  `useMissionStore((s) => s.checkedKeys|objectiveGroups|objectives)` + `useMission()` +
  `computeProgress`); `missionProgress.ts` (`percent === 100` ⟺ `completed === total && total ≥ 1`,
  so the guard also excludes empty/all-hidden missions); `docs/development.md` conventions (BEM `c-`,
  CSS imported atop the `.tsx`, `@/*` alias); a neighbouring component's CSS for the `c-` style.
- **Change:**
  - `src/components/CompletionCelebration/CompletionCelebration.tsx` (BEM root
    `c-completion-celebration`, `import './CompletionCelebration.css'` at top). Read the four progress
    inputs via the same selectors as `ProgressBar`, `useMemo` over `computeProgress`, and
    `if (percent !== 100) return null;`. When complete, render the celebration markup (a glow element
    - confetti/fireworks particle elements — pure presentational divs/SVG, no text, no interactive
      elements). No props.
  - `src/components/CompletionCelebration/CompletionCelebration.css`:
    - Root: `position: absolute; inset: 0; pointer-events: none;` full-bleed; high-contrast but calm.
    - `@keyframes` for the **burst** (confetti/fireworks via `transform` translate/scale/rotate +
      `opacity`) and a **glow** (e.g. `radial-gradient` background, gentle pulse or steady). Burst
      plays once and settles (use `animation-fill-mode: forwards`, or layer a steady glow element
      that persists for as long as the component is mounted).
    - `@media (prefers-reduced-motion: reduce)`: disable the burst keyframes/particles entirely;
      show **only the static glow** (no motion).
- **Done-check:** `npm run ci` green (**`compat/compat` matters — client code**); `npm run build`
  succeeds. (Component renders nowhere yet — visual check is Step 2.)

### Step 2 — Mount behind the dashboard content · phase: `wire` ✅

- **Goal:** Render the celebration as a full-bleed layer **behind** `c-dashboard__content` so the
  list, Menu, Clock, Restart, and footer stay visible, clickable, and focusable.
- **Read:** spec §UI & TV constraints, §Acceptance criteria #1–#2; `Dashboard.tsx` (sibling layout)
  and `Dashboard.css` (`.c-dashboard` is `height/width: 100%`; content is the grid).
- **Change:**
  - `src/components/Dashboard/Dashboard.tsx`: import and render `<CompletionCelebration />` as the
    **first child** of `.c-dashboard`, before `.c-dashboard__content`.
  - `src/components/Dashboard/Dashboard.css`: establish the stacking context — add
    `position: relative;` to `.c-dashboard`, and `position: relative; z-index: 1;` to
    `.c-dashboard__content` so the content sits above the celebration layer (the celebration's own CSS
    sets `position: absolute; inset: 0` with a lower/auto `z-index`). Pointer-transparency comes from
    the component's `pointer-events: none`; double-check the content remains interactive.
- **Done-check:** `npm run build` + `npm run ci` green; `npm run dev` under the **TV user agent**
  (`Chrome/87 … SmartTV`) — check every visible objective in a mission, confirm the burst plays and
  settles into a glow **behind** the list, the list/menu stay clickable, and unchecking then
  re-completing **replays** the burst.

### Step 3 — TV-UA validation · phase: `validate` ✅

- **Goal:** Prove every acceptance criterion against the running app on the TV UA.
- **Read:** spec §Acceptance criteria; [docs/qa.md](../docs/qa.md) L2 (TV-UA drive) and the
  Component/UI test-by-scope row.
- **Change:** none under `src/` beyond fixes surfaced by testing. On the TV UA, walk each acceptance
  criterion: reach 100% → burst then settled glow; layer behind content with list/Menu/Restart still
  clickable and focusable; uncheck (drop below 100%) removes the celebration; re-reach 100% replays
  the burst; toggle `prefers-reduced-motion: reduce` (devtools rendering emulation) → static glow
  only, no burst; footer still reads "Success!" / "Sukces!" with no new text; no sound; a mission
  with no visible objectives shows no celebration. Capture a screenshot of the completed state as
  proof.
- **Done-check:** see **Final verification** below.

## Final verification

Run the [qa.md](../docs/qa.md) levels for this feature's scope and check off:

- [ ] `L0` gate + `L1` build green (`compat/compat` clean for the Chrome 87 floor)
- [ ] `L2`: every item in the spec's **Acceptance criteria** confirmed in the running app (TV UA) — `/verify`; include the `prefers-reduced-motion` static-glow check and the click-through check
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; **`/security-review` not triggered** — no auth/API/rules/data change), findings addressed
- [ ] `L4` `npm run knip` clean (new component is imported by `Dashboard`; no orphan)
- [ ] Tree internally consistent; flip the spec's `Status` → `implemented` on completion
- [ ] `L5` real-TV: D-pad reachability is unaffected (no new focusable elements — the layer is
      `pointer-events: none`), but confirm animation **performance** on real TV hardware — **flag as
      pending**, don't fake it

## Risks & assumptions

- **`isComplete` kept inline (owner plan-shape choice):** the celebration guards inside the
  component rather than extracting an `isComplete` derivation to `missionProgress.ts`. Consequence:
  no new util and **no new unit test** — it's a presentational render guard, not business logic (per
  [qa.md](../docs/qa.md#tests-are-part-of-the-change) exemptions). `computeProgress` and
  `missionProgress.test.ts` are **untouched**. If this is later reused elsewhere, promote it to a
  tested `isComplete` flag then.
  - **Guard on counts, not percent (L3 review fix):** the guard is `total > 0 && completed === total`,
    **not** `percent === 100`. `computeProgress.percent` is `Math.ceil`-rounded, so it reaches 100 one
    objective early on very large missions (199/200 → `ceil(99.5) = 100`). Guarding on the raw counts
    fires only on a true completion and naturally excludes empty/all-hidden missions (`total === 0`).
- **Empty / all-hidden missions:** no special guard needed beyond the `total === 0` check above —
  `computeProgress` reports `total: 0` for them, so the celebration never fires.
- **Burst-replay mechanism:** relies on the component returning `null` while incomplete, so React
  unmounts/remounts it across the 100% boundary and the CSS animation restarts naturally. No
  `useEffect`/`useRef`/key counter. If a future change keeps the layer mounted below 100%, the replay
  will need an explicit remount key.
- **Stacking regression risk:** adding `position: relative` + `z-index` to `.c-dashboard` /
  `.c-dashboard__content` could perturb existing overlays (`AppOptions`, `MissionSelect`,
  `ContentEditor`) which render as later siblings of `.c-dashboard`. Verify overlays still sit above
  everything during the Step 2/3 drive; keep the celebration's `z-index` at/below the content's.
- **Chrome 87:** no client-JS floor risk (React hooks + selectors only — no `structuredClone` /
  `Array.prototype.at` / top-level await). All CSS is in-floor; `prefers-reduced-motion` is supported
  since Chrome 74. Keep `compat/compat` green on Steps 1–2.
- **First animation in the app:** this establishes the `@keyframes` + reduced-motion pattern; keep it
  self-contained in the component's CSS, not global.
