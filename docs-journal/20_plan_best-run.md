# Best run — Plan

> **Artifact:** `20_plan_best-run.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `done`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spec](20_spec_best-run.md) · [implement](20_implement_best-run.md) · [retro](20_retro_best-run.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable steps.

## Goal

A per-mission "best completion time" that records on completion, shows under the live Timer once it
exists, surfaces a "New best!" beat in the completion celebration when a record is beaten, survives
the objectives Restart, and has its own mission-scoped reset in Settings.

## Approach

Extends the existing timer store + three components — no Firestore/repository/API. The store gains a
`bestByMission: Record<string, number>` persisted **separately** from `runsByMission` (so the
objectives Restart, which clears runs, keeps records). The record is computed inside the existing
`setRunState` on the **completion transition** (`complete && !current.isComplete`): after banking the
final segment, compare the run's frozen elapsed to the stored best; if lower (or none), update the
best and set a **runtime-only** `completionWasBest` flag on the run for the celebration to read.
First completion (no prior best) sets the record but `completionWasBest` stays `false` — there was
nothing to beat. `resetTimerState` is narrowed to clear only runs; a new `resetBest(missionId)` clears
one mission's record. Persisted shape grows, so bump `lsWrapper('timer', 3 → 4)`.

The display reuses what exists: `Timer` reads `bestByMission[missionId]` and renders a secondary
`Best …` line only when defined. `CompletionCelebration` reads the current mission's run and, when
`completionWasBest`, renders a transient, foreground, `pointer-events: none` "New best!" beat layered
**above** content (the bursts stay behind content as designed; only this small legible label sits in
front, auto-fading — no focus trap, no list-block). `AppOptions` gains a mission-scoped "Reset best
time" button (confirm, mirroring Menu Restart), shown only when the current mission has a best. Order:
store + tests → display (Timer) → celebration beat → Settings reset → validate. All Chrome 87-floor
client code.

## Read before starting

- [CLAUDE.md](../CLAUDE.md) — house rules, TV / Chrome 87 floor
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering (logic in stores; never mutate after a write)
- [docs-journal/20_spec_best-run.md](20_spec_best-run.md) — the contract
- [src/stores/useTimerStore.ts](../src/stores/useTimerStore.ts) + [useTimerStore.test.ts](../src/stores/useTimerStore.test.ts) — the store to extend + its test pattern
- [src/components/Timer/Timer.tsx](../src/components/Timer/Timer.tsx) — where the `Best …` line goes; needs a new `translations.ts`
- [src/components/CompletionCelebration/CompletionCelebration.tsx](../src/components/CompletionCelebration/CompletionCelebration.tsx) + [.css](../src/components/CompletionCelebration/CompletionCelebration.css) — fold in the beat
- [src/components/AppOptions/AppOptions.tsx](../src/components/AppOptions/AppOptions.tsx) + [translations.ts](../src/components/AppOptions/translations.ts) — Settings panel + Button/confirm pattern
- [src/components/Menu/Menu.tsx](../src/components/Menu/Menu.tsx) — existing `confirm()` + `resetTimerState` call (must still work)
- [src/i18n/translations.ts](../src/i18n/translations.ts) — register new component translation maps

## Steps

### Step 1 — Record + reset in the store (+ tests) · phase: `build`

- **Goal:** Record the best on completion, keep it separate from runs, expose a new-best flag and a
  per-mission reset; preserve the existing timer behavior.
- **Read:** spec §Behavior, §Impact; `useTimerStore.ts` (the `setRunState` completion branch, the
  persist/load helpers); `useTimerStore.test.ts` (fake-LS + fake-timers pattern).
- **Change:** `src/stores/useTimerStore.ts`:
  - `TimerRun` gains `completionWasBest: boolean` (runtime-only; default `false`; **not** persisted).
  - State gains `bestByMission: Record<string, number>` (persisted).
  - `setRunState`: capture `justCompleted = complete && !current.isComplete`. After banking the
    segment, if `justCompleted`, let `final = accumulatedMs`; `prev = bestByMission[missionId]`;
    `isNewBest = prev === undefined || final < prev`; update `bestByMission[missionId] = final` when
    `isNewBest`; set `completionWasBest = prev !== undefined && final < prev`. Otherwise
    `completionWasBest = false`.
  - `resetBest(missionId)`: delete the mission's best, persist.
  - `resetTimerState()`: clear `runsByMission` only; **keep** `bestByMission`; persist bests + clear.
  - `persist`/`load`: include `bestByMission`; bump to `lsWrapper('timer', 4)`.
- **Done-check:** `npm run ci` green. New tests: first completion sets best, `completionWasBest`
  false; faster completion updates best, flag true; slower completion no-ops, flag false;
  `resetTimerState` keeps bests; `resetBest` clears one mission; persisted payload includes
  `bestByMission`.

### Step 2 — `Best …` line under the Timer (+ i18n) · phase: `build`

- **Goal:** Show the record under the live time, only when it exists.
- **Read:** spec §UI; `Timer.tsx`; `ProgressBar/translations.ts` as the translation-map shape;
  `i18n/translations.ts` registration.
- **Change:**
  - `Timer.tsx`: read `best = useTimerStore(s => missionId ? s.bestByMission[missionId] : undefined)`;
    below the elapsed line render `Best {formatElapsed(best)}` only when `best !== undefined`, via
    `Typography`/`t` with `timer.best`.
  - `src/components/Timer/translations.ts`: `best: 'Best {time}'` (en) / `'Najlepszy {time}'` (pl).
  - Register `timerTranslations` in `src/i18n/translations.ts`.
  - `Timer.css`: a `c-timer__best` modifier — smaller, de-emphasized vs the elapsed line.
- **Done-check:** `npm run ci` + `npm run build` green.

### Step 3 — "New best!" beat in the celebration (+ i18n) · phase: `build`

- **Goal:** Show a transient, legible "New best!" only when the completing run beat a prior record.
- **Read:** spec §Behavior/§UI; `CompletionCelebration.tsx` (the `total/completed` guard) + `.css`.
- **Change:**
  - `CompletionCelebration.tsx`: read `run = useTimerStore(s => mission ? s.runsByMission[mission.id]
: undefined)`; when the existing completion guard passes **and** `run?.completionWasBest`, render
    a `c-completion-celebration__new-best` label with `t('completionCelebration.newBest')`.
  - `src/components/CompletionCelebration/translations.ts`: `newBest: 'New best!'` / `'Nowy rekord!'`;
    register in `i18n/translations.ts`.
  - `.css`: the new-best label is centred, large, high-contrast, `position: absolute`,
    `pointer-events: none`, a higher `z-index` so it reads **above** content, with a short
    fade/scale-in then fade-out keyframe (honor `prefers-reduced-motion` → static, no motion). Bursts
    unchanged (stay behind content).
- **Done-check:** `npm run ci` + `npm run build` green (`compat/compat` clean — client code).

### Step 4 — Mission-scoped "Reset best time" in Settings (+ i18n) · phase: `wire`

- **Goal:** A separate reset for the record, in the Settings panel, current mission only.
- **Read:** spec §Behavior; `AppOptions.tsx` (Button + `closeOptions`); `Menu.tsx` (`confirm()`
  pattern); store `resetBest`.
- **Change:**
  - `AppOptions.tsx`: read `missionId` + `bestByMission`; when the current mission has a best, render a
    `Button textKey="appOptions.resetBest"` that `confirm()`s then calls `resetBest(missionId)`.
  - `AppOptions/translations.ts`: `resetBest` en/pl.
- **Done-check:** `npm run ci` + `npm run build` green.

### Step 5 — TV-UA validation + doc sync · phase: `validate`

- **Goal:** Prove the acceptance criteria on the TV UA; sync durable docs.
- **Read:** spec §Acceptance criteria; [docs/qa.md](../docs/qa.md) L2 + store/component rows.
- **Change:** no `src/` changes beyond fixes. Doc sync (same commit as the code):
  - `docs/05_design.md` — Timer entry notes the `Best …` line; Settings/aside note the reset; mention
    the celebration's new-best beat where completion is described.
  - `docs/06_roadmap.md` — mark **"Best completion time / records"** done.
- **Done-check:** see **Final verification**.

## Final verification

- [ ] `L0` gate + `L1` build green (`compat/compat` clean — Chrome 87 floor)
- [ ] `L2`: every spec **Acceptance criteria** item confirmed on the TV UA — `/verify` (first completion records silently; faster → "New best!"; slower → no beat; Restart keeps best; Settings reset scoped + conditional; reload survives)
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; **`/security-review` not triggered** — no auth/API/rules/data change)
- [ ] `L4` `npm run knip` clean (new translation maps imported; no orphan)
- [ ] Tree consistent; flip the spec `Status` → `implemented`

## Risks & assumptions

- **`completionWasBest` is runtime-only:** not persisted, so a reload never replays "New best!". The
  celebration reads it live off the store; it is set in the same `setRunState` call the `Timer`
  effect fires on completion, so the celebration re-renders with the flag a tick after mounting —
  acceptable (the beat appears just into the burst).
- **Celebration coupling:** `CompletionCelebration` now reads the timer store. Low risk — both already
  derive from the same completion event; keep the new-best label additive and behind the existing
  `total>0 && completed===total` guard.
- **Foreground beat vs behind-content bursts:** the "New best!" label is the one celebration element
  rendered above content (legibility) — kept `pointer-events: none` and auto-fading so it neither
  traps focus nor blocks the list, preserving the celebration spike's non-blocking principle.
- **`lsWrapper` v4 bump** orphans the v3 timer entry (runs reset once); bests start fresh — acceptable,
  no migration, consistent with the discard-on-change LS policy.
- **No floor (owner decision):** a too-fast junk record is possible by design; the Settings reset is
  the remedy. Recorded in spec Open questions.
- **Chrome 87:** comparisons + existing celebration CSS only; `prefers-reduced-motion` (Chrome 74+)
  guards the new-best motion. Keep `compat/compat` green.
