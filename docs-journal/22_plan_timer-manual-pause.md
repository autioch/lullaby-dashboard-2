# Timer manual pause — Plan

> **Artifact:** `22_plan_timer-manual-pause.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `done`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spec](22_spec_timer-manual-pause.md) · [implement](22_implement_timer-manual-pause.md) · [retro](22_retro_timer-manual-pause.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable steps.

## Goal

Manual pause/resume on the Timer for the step-away case: click or Enter toggles, an action icon
reveals on hover **or** focus, a persistent pause watermark shows the stopped state, and the pause is
a sticky per-mission override of the existing auto-pause.

## Approach

Store then component — no Firestore/repository/API. The store gains a **persisted per-mission**
`userPaused` flag on `TimerRun`; the Timer keeps deriving `running` but ANDs in `!userPaused`, so the
existing single time-math path (`setRunState` → wall-clock bank/segment) handles the pause/resume for
free. The toggle is a thin store action that flips + persists the flag; the component's existing
effect (keyed on `[missionId, running, complete]`) then re-drives `setRunState`. The Timer becomes a
`<button>` (the app's first focusable dashboard control) disabled outside an in-progress run; CSS
state classes (`c-timer--running` / `c-timer--paused`) drive the reveal-on-`:hover,:focus` action
icon and the persistent paused watermark, with hover/focus taking precedence over the watermark. Two
new `currentColor` SVGs (pause, play) in the existing `viewBox="0 0 512 512"` style. Order: store +
tests → icons → component (button, toggle, icons, CSS) → validate. All Chrome 87-floor client code.

## Read before starting

- [CLAUDE.md](../CLAUDE.md) — house rules, TV / Chrome 87 floor
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering (logic in stores)
- [docs-journal/22_spec_timer-manual-pause.md](22_spec_timer-manual-pause.md) — the contract
- [docs-spikes/08_spike_timer-manual-pause.md](../docs-spikes/08_spike_timer-manual-pause.md) — the de-risked shape
- [src/stores/useTimerStore.ts](../src/stores/useTimerStore.ts) + [useTimerStore.test.ts](../src/stores/useTimerStore.test.ts) — `setRunState`, persist/load, `TimerRun`, test pattern
- [src/components/Timer/Timer.tsx](../src/components/Timer/Timer.tsx) + [Timer.css](../src/components/Timer/Timer.css) + [translations.ts](../src/components/Timer/translations.ts) — derived `running`/`complete`, the `Best` line, the existing i18n map
- [src/icons/restart.svg](../src/icons/restart.svg) — SVG format (`viewBox 0 0 512 512`, `fill:currentColor`); [src/components/Icon/Icon.tsx](../src/components/Icon/Icon.tsx) — `?react` import pattern

## Steps

### Step 1 — `userPaused` in the store (+ tests) · phase: `build`

- **Goal:** A persisted per-mission paused flag that overrides auto-running, without touching the
  time math.
- **Read:** spec §Behavior; `useTimerStore.ts` (`TimerRun`, `PersistedRun`, `setRunState`,
  `persist`/`loadState`); `useTimerStore.test.ts`.
- **Change:** `src/stores/useTimerStore.ts`:
  - `TimerRun` gains `userPaused: boolean` (default `false`); add it to `PersistedRun` and to the
    persist/load round-trip. **No `lsWrapper` version bump** — `userPaused` is an undefined-tolerant
    optional field (`run.userPaused ?? false` on load), which per the `lsWrapper` contract needs no
    bump and preserves existing runs **and** the just-added best records.
  - `setRunState` preserves `current.userPaused` in the written run (no new time logic — the component
    passes an already-`userPaused`-aware `running`).
  - `setUserPaused(missionId, paused)`: set the run's flag (create a zeroed run if none), persist.
  - `resetTimerState` already clears runs → paused state clears with them (confirm, no change needed).
- **Done-check:** `npm run ci` green. Tests: `setUserPaused` sets + persists the flag;
  `setRunState` preserves it; a paused run passed `running=false` banks and stays paused; resume path
  re-opens the segment; `resetTimerState` drops the flag.

### Step 2 — Pause / play icons · phase: `build`

- **Goal:** Two inline SVGs matching the existing icon style.
- **Read:** `src/icons/restart.svg` (format).
- **Change:** `src/icons/pause.svg` (two bars) and `src/icons/play.svg` (triangle), `viewBox="0 0 512
512"`, `fill:currentColor`.
- **Done-check:** `npm run build` resolves the `?react` imports (used in Step 3); `npm run ci` green.

### Step 3 — Timer as a toggle button (+ i18n) · phase: `build`

- **Goal:** Interactive Timer: click/Enter toggles, hover/focus reveals the action icon, paused shows
  the watermark, inert outside an in-progress run.
- **Read:** spec §Behavior/§UI; `Timer.tsx`, `Timer.css`, `translations.ts`.
- **Change:**
  - `Timer.tsx`: read `userPaused` from the run; `inProgress = completed >= 1 && !complete`;
    `running = inProgress && !anyModalOpen && pageVisible && !userPaused`. Render the elapsed inside a
    `<button className="c-timer__toggle" disabled={!inProgress} aria-label={t(running? 'timer.pauseLabel' : 'timer.resumeLabel')} onClick={() => setUserPaused(missionId, !userPaused)}>`; keep the existing `Best` line outside the button. Add `PauseSvg`/`PlaySvg` overlay elements; root gets state classes (`c-timer--running` / `c-timer--paused`). The tick interval continues to gate on actually-accumulating (`running`).
  - `Timer.css`: action icon hidden by default; shown on `.c-timer__toggle:hover, .c-timer__toggle:focus` (pause when running, play when paused — via the state class); persistent faint pause watermark when `.c-timer--paused` and not hovered/focused; hover/focus precedence over the watermark; `pointer-events`/`cursor` only when enabled; reset the native `<button>` chrome (background/border/font inherit).
  - `translations.ts`: add `pauseLabel` / `resumeLabel` (en/pl).
- **Done-check:** `npm run ci` + `npm run build` green (`compat/compat` clean).

### Step 4 — TV-UA validation + doc sync · phase: `validate`

- **Goal:** Prove the acceptance criteria; sync durable docs.
- **Read:** spec §Acceptance criteria; [docs/qa.md](../docs/qa.md) L2 + store/component rows.
- **Change:** no `src/` changes beyond fixes. Doc sync (same commit as the code):
  - `docs/05_design.md` — Timer entry notes click/Enter pause-resume, the hover/focus icon, and the
    paused watermark.
  - `docs/06_roadmap.md` — add a done entry under Dashboard design (manual timer pause), or note it on
    the timer line.
- **Done-check:** see **Final verification**.

## Final verification

- [ ] `L0` gate + `L1` build green (`compat/compat` clean — Chrome 87 floor)
- [ ] `L2`: every spec **Acceptance criteria** item confirmed on the TV UA — `/verify` (click toggle, Enter toggle, hover-reveal, focus-reveal, paused watermark, sticky through modal/hide, reload-survives, Restart-clears, inert at 00:00 + complete)
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; **`/security-review` not triggered** — no auth/API/rules/data change)
- [ ] `L4` `npm run knip` clean (new icons + i18n imported; no orphan)
- [ ] Tree consistent; flip the spec `Status` → `implemented`
- [ ] `L5` real-TV: confirm the lone focusable Timer isn't an odd focus stop and the reveal-on-focus works on the actual remote — **flag pending**, don't fake it

## Risks & assumptions

- **Open questions resolved in the spec** (persist per-mission; checking stays paused; inert edges;
  hover/focus beats watermark) — implemented as written; no new product calls in `/plan`.
- **Two-step toggle (flag → effect → setRunState)** keeps the single time-math path; the flag is
  separate state the component already re-derives from. No duplicated bank/segment logic.
- **First focusable dashboard control.** The `<button>` enters tab/D-pad order alone. Acceptable
  (spike-agreed); verify no weird lone focus stop on pointer devices (L5).
- **Disabled-button semantics.** Outside an in-progress run the button is `disabled` → not focusable/
  clickable and no reveal, satisfying the inert edges without extra guards.
- **No `lsWrapper` bump** — `userPaused` loads as `?? false`, an undefined-tolerant optional field, so
  existing persisted runs and the feature-20 best records survive the upgrade. (Bumping would have
  wiped the just-added bests — deliberately avoided.)
- **Chrome 87:** `<button>`, `:hover`/`:focus`, `pointer-events`, opacity, SVG — all in-floor; no
  motion. Keep `compat/compat` green.
