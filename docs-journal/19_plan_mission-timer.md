# Mission timer — Plan

> **Artifact:** `19_plan_mission-timer.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `done`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spec](19_spec_mission-timer.md) · [implement](19_implement_mission-timer.md) · [retro](19_retro_mission-timer.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable steps.

## Goal

An always-visible elapsed-time readout under the Clock that starts on the first check, auto-pauses
when the launchpad is covered/hidden or the mission is switched, and freezes the final duration at
100% — backed by a fresh, testable timer store replacing the dead one.

## Approach

Two layers only — **store** then **component** — no Firestore/repository/API. Discard the dead
`useTimerStore` and rebuild it around a single source of truth per mission:

```
type TimerRun = {
  accumulatedMs: number;       // time banked from finished active segments
  segmentStartMs: number | null; // start of the live segment, or null when paused (runtime-only)
  isComplete: boolean;         // frozen at 100%
};
```

Elapsed at any instant is a **pure function** `getElapsedMs(run, now) = accumulatedMs + (segmentStartMs ? now - segmentStartMs : 0)`. One action `setRunState(missionId, running, complete)` does all transitions: it banks+pauses any _other_ mission with an open segment (so a mission switch pauses the previous run for free), starts a segment when `running && !isComplete && !complete`, banks the segment when pausing/completing, and sets `isComplete` on completion. Persistence stores only `{ accumulatedMs, isComplete }` per mission (not `segmentStartMs`), so a reload restores banked time **paused** and never counts the reload gap.

The `Timer` component derives the boolean inputs from existing state — `useMission`/progress (via the
same `computeProgress` selectors as `ProgressBar`), the three `useControlsStore` modal flags, and a
local page-visibility flag from a `visibilitychange` listener — computes `running` and `complete`,
and drives the store through **one effect keyed on `[missionId, running, complete]`** (fires only on
change, not every tick). A separate 1-second interval, active only while `running`, bumps local state
to re-render the readout from `getElapsedMs`. Order: store + tests (bottom) → component → wire into
the aside → validate. All client code on the **Chrome 87 floor**.

## Read before starting

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor
- [docs/development.md](../docs/development.md) — conventions, Copy-from, store list
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering (logic in stores, never mutate after a write)
- [docs-journal/19_spec_mission-timer.md](19_spec_mission-timer.md) — the contract
- [src/stores/useTimerStore.ts](../src/stores/useTimerStore.ts) — the dead store being replaced
- [src/stores/useMissionStore.ts](../src/stores/useMissionStore.ts) + [useMissionStore.test.ts](../src/stores/useMissionStore.test.ts) — `lsWrapper` persistence + the fake-LS test pattern to mirror
- [src/stores/missionProgress.ts](../src/stores/missionProgress.ts) — `computeProgress` (`completed`, `total`, `percent`)
- [src/components/ProgressBar/ProgressBar.tsx](../src/components/ProgressBar/ProgressBar.tsx) — the selector + `computeProgress` pattern to mirror
- [src/components/Clock/Clock.tsx](../src/components/Clock/Clock.tsx) + [Clock.css](../src/components/Clock/Clock.css) — neighbour style (`tabular-nums`) + the aside `margin-bottom: auto` to relocate
- [src/components/Dashboard/Dashboard.tsx](../src/components/Dashboard/Dashboard.tsx) + [Dashboard.css](../src/components/Dashboard/Dashboard.css) — aside mount point
- [src/components/Menu/Menu.tsx](../src/components/Menu/Menu.tsx) — Restart already calls `resetTimerState`

## Steps

### Step 1 — Replace the timer store + unit tests · phase: `build`

- **Goal:** A fresh, minimal, tested timer store; the only consumer (`Menu` → `resetTimerState`) keeps
  working. Pure elapsed helper for testability.
- **Read:** spec §Behavior, §Impact; `useTimerStore.ts` (discard its body); `lsWrapper` (versioned
  key — bump to a fresh version since the persisted shape changes); `useMissionStore.test.ts` (hoisted
  fake-LS + `vi.useFakeTimers`/`setSystemTime` pattern).
- **Change:**
  - Rewrite `src/stores/useTimerStore.ts`:
    - Export pure `getElapsedMs(run, now)`.
    - State `runsByMission: Record<string, TimerRun>`; load persisted `{ accumulatedMs, isComplete }`
      per mission into runs with `segmentStartMs: null`.
    - `setRunState(missionId, running, complete)`: bank+pause every _other_ mission's open segment;
      for the target — bank the segment when it must stop (`!running || isComplete || complete`),
      start one when `running && !isComplete && !complete`, set `isComplete` when `complete`; persist
      `{ accumulatedMs, isComplete }` for all runs.
    - `resetTimerState()`: clear all runs + `ls.clear()` (unchanged signature — Menu still calls it).
    - Use `lsWrapper('timer', <new version>)`.
  - Create `src/stores/useTimerStore.test.ts` covering: start→elapsed grows; pause banks and freezes
    elapsed; resume continues from banked; switching missions pauses the previous; complete freezes
    and a later `running=true` does **not** resume; `resetTimerState` clears; reload restores banked
    time paused (segmentStartMs null). Use fake timers.
- **Done-check:** `npm run ci` green (tsc + lint + the new tests + format).

### Step 2 — Build the `Timer` component + CSS · phase: `build`

- **Goal:** A self-contained, display-only readout that derives its run/complete inputs and drives the
  store. Built in isolation (unmounted; knip is L4, run at the end).
- **Read:** spec §Behavior, §UI & TV constraints; `ProgressBar.tsx` (the four progress selectors +
  `useMemo(computeProgress)`); `useControlsStore` (`isAppOptions`/`isMissionSelect`/`isContentEditor`);
  `Clock.tsx`/`Clock.css` (style + `tabular-nums`).
- **Change:**
  - `src/components/Timer/Timer.tsx` (BEM root `c-timer`, `import './Timer.css'` at top): - Read `missionId`, progress (`completed`, `total`), the three modal flags; track `pageVisible`
    via a `visibilitychange` effect (default `document.visibilityState === 'visible'`). - `complete = total > 0 && completed === total`; `running = completed >= 1 && !complete &&
!anyModalOpen && pageVisible`. - Effect on `[missionId, running, complete]` → `setRunState(missionId, running, complete)`. - Interval (1 s) active only while `running` bumps a local `now`/tick; read
    `getElapsedMs(runsByMission[missionId], Date.now())`; format `MM:SS` / `H:MM:SS`. - Render a single line `<div className="c-timer">{formatted}</div>`.
  - `src/components/Timer/Timer.css`: large, high-contrast, `font-variant-numeric: tabular-nums`,
    `text-align: center`, smaller than the Clock; minimal.
- **Done-check:** `npm run ci` + `npm run build` green (component renders nowhere yet).

### Step 3 — Mount in the aside under the Clock · phase: `wire`

- **Goal:** Render `<Timer />` directly under `<Clock />`, grouped at the top of the aside, Menu at the
  bottom.
- **Read:** spec §UI; `Dashboard.tsx` aside; `Clock.css` (`margin-bottom: auto`).
- **Change:**
  - `Dashboard.tsx`: import and render `<Timer />` between `<Clock />` and `<Menu />` in
    `c-dashboard__aside`.
  - `Clock.css`: remove `margin-bottom: auto`; `Timer.css`: add `margin-bottom: auto` so Clock + Timer
    sit together at the top and Menu stays pinned to the bottom.
- **Done-check:** `npm run build` + `npm run ci` green; `npm run dev` under the **TV UA** — readout
  visible under the clock, `00:00` idle.

### Step 4 — TV-UA validation + doc sync · phase: `validate`

- **Goal:** Prove every acceptance criterion on the TV UA and sync the durable docs.
- **Read:** spec §Acceptance criteria; [docs/qa.md](../docs/qa.md) L2 + the store/component
  test-by-scope rows.
- **Change:** no `src/` changes beyond fixes surfaced by testing. Doc sync (same commit as the code
  that earns it):
  - `docs/05_design.md` — aside now lists a Timer under the Clock.
  - `docs/06_roadmap.md` — mark **"Mission timer display"** done; leave "Best completion time /
    records" open.
  - `docs/03_user-scenarios.md` — the Restart scenario already says "timer resets"; confirm it still
    holds (it now does literally).
- **Done-check:** see **Final verification**.

## Final verification

- [ ] `L0` gate + `L1` build green (`compat/compat` clean — client code on the Chrome 87 floor)
- [ ] `L2`: every spec **Acceptance criteria** item confirmed on the TV UA — `/verify` (start-on-first-check, modal pause/resume, page-hidden pause, mission-switch independence, freeze-at-100%, Restart reset, `H:MM:SS` rollover, reload survives)
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; **`/security-review` not triggered** — no auth/API/rules/data change), findings addressed
- [ ] `L4` `npm run knip` clean (`Timer` imported by `Dashboard`; old store members gone)
- [ ] Tree internally consistent; flip the spec `Status` → `implemented`

## Risks & assumptions

- **Open questions resolved in the spec** (resume banked time; freeze stays frozen until Restart;
  prune on the mission's expiry lifecycle) — implemented as written; no new product calls in `/plan`.
- **One-action design avoids the old store's sprawl:** all segment math lives in `setRunState`; the
  component only computes booleans and ticks. This is the maintainability fix over the discarded code.
- **Mission-switch pause** relies on `setRunState` banking _other_ missions' open segments rather than
  on component effect-cleanup — robust to remounts.
- **`lsWrapper` version bump** orphans the old `launchpad_2_timer` entry (different shape) — intended
  discard-on-change, no migration.
- **Expiry pruning** is light-touch: a run for an unknown/expired mission is simply never displayed
  and is overwritten on next use; full prune-on-hydrate parity with `useMissionStore` is **not**
  required for v1 (no hydrate cross-store dependency) — noted as acceptable, revisit only if stale
  runs accumulate.
- **Chrome 87:** `Date.now`, `setInterval`, Page Visibility API all in-floor; no `structuredClone` /
  `.at()` / top-level await. Keep `compat/compat` green.
