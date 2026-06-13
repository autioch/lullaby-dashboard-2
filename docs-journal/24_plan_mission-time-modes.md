# Mission time modes — Plan

> **Artifact:** `24_plan_mission-time-modes.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `in-progress`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spec](24_spec_mission-time-modes.md) · [implement](24_implement_mission-time-modes.md) · [adjust](24_adjust_mission-time-modes-r1.md) · [retro](24_retro_mission-time-modes.md)

The execution map — _how_ — turning the agreed spec into ordered, independently committable steps.

## Goal

Give each mission a `timeMode` (`freestyle` / `challenge` / `deadline`) that gates the single
mission-time readout under the Clock — hiding the timer for freestyle, keeping today's elapsed
timer + best for challenge, and showing a gentle wall-clock countdown (with a "time to spare"
completion beat) for deadline.

## Approach

Bottom-up so the tree never breaks: **data/types + pure helpers → timer store → component
(gate, then countdown) → celebration → transport → editor UI → seed/validate**. The new mission
fields type onto `MissionRec`, which already flows straight into `useMissionStore`, so they reach
every consumer once typed. The deadline countdown is **pure wall-clock** during the run (no
persistence); only its **frozen result at completion** is stored, in `useTimerStore`
(`deadlineResultByMission`), reusing that store's persistence + `resetTimerState`. The deadline
target is **today's `HH:MM`, signed** (negative = overtime), resetting at midnight — not a rolling
next-occurrence. Mode-gating lives **inside the `Timer` component** (it's mounted unconditionally in
the aside), so no `Dashboard` change. Editor follows the established field → draft → SaveBar →
`updateMission` → API path; a small D-pad mode-selector control is net-new in `fields.tsx`.

## Read before starting

- [CLAUDE.md](../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor
- [docs/development.md](../docs/development.md) — architecture, conventions, command table
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering authority
- [the spec — `24_spec_mission-time-modes.md`](24_spec_mission-time-modes.md) — the contract
- [docs/05_design.md](../docs/05_design.md) — the aside (Clock + Timer); update the readout description
- [docs/qa.md](../docs/qa.md) — test levels & test-by-scope for the done-checks
- [docs-spikes/09_spike_mission-time-modes.md](../docs-spikes/09_spike_mission-time-modes.md) — de-risked approach

## Steps

Ordered and self-contained — each leaves the tree green (`npm run ci`) and is independently
committable. Phases: **Prep/refactor → Build → Wire → Validate.**

### Step 1 — Mission time fields + pure deadline helpers · phase: `prep` ✅

- **Goal:** land the data types and the pure, testable time logic everything else builds on.
- **Read:** spec §Behavior + §Impact; [`src/database/missionRepository.ts`](../src/database/missionRepository.ts)
  (`MissionDoc`); [`src/stores/missionProgress.ts`](../src/stores/missionProgress.ts) as the pattern
  for a pure stores-level module + co-located test.
- **Change:**
  - `missionRepository.ts`: add to `MissionDoc` — `timeMode?: 'freestyle' | 'challenge' | 'deadline'`
    and `deadlineTime?: string` (`HH:MM`). Optional so existing docs hydrate as `freestyle`.
  - New `src/stores/missionTime.ts` (pure, no React/store imports):
    - `getDeadlineRemainingMs(time: string /* 'HH:MM' */, now: number): number` — signed ms of
      **today's** `HH:MM` (local) minus `now` (build a `Date` from `now`, `setHours(h, m, 0, 0)`).
      Positive before, negative after; no rolling.
    - a tiny `parseHhMm`/`formatHhMm` pair (hour 0–23, minute 0–59) for the editor steppers and
      validation, if helpful.
  - New `src/stores/missionTime.test.ts`: before-now → positive; after-now → negative; exact-now ≈ 0;
    `H:MM:SS`-range value; a `parse`/`format` round-trip. No `Intl`, no `Array.prototype.at`.
- **Done-check:** `npm run ci` (tsc + lint + new unit tests + format) green.

### Step 2 — Timer store: deadline result capture + reset · phase: `build` ✅

- **Goal:** a place to freeze the deadline remaining at completion that survives reload and clears on
  Restart.
- **Read:** spec §Behavior (completion freeze); [`src/stores/useTimerStore.ts`](../src/stores/useTimerStore.ts)
  (`PersistedState`, `loadState`, `persist`, `resetTimerState`, `lsWrapper`); its test file.
- **Change:** in `useTimerStore.ts`:
  - Add `deadlineResultByMission: Record<string, number>` to `TimerState` + `PersistedState`; load
    default `{}` (additive, **no `lsWrapper` version bump** — mirror how `userPaused` was added);
    include it in `persist`.
  - Add `recordDeadlineResult(missionId: string, remainingMs: number): void` — **idempotent**: only
    sets when the mission has no result yet (freezes the first completion); persists.
  - `resetTimerState()` also clears `deadlineResultByMission` (Restart begins a new run).
  - Extend `useTimerStore.test.ts`: `recordDeadlineResult` sets once and is idempotent; `resetTimerState`
    clears it.
- **Done-check:** `npm run ci` green.

### Step 3 — Gate the Timer by mode · phase: `build` ✅

- **Goal:** make the existing readout mode-aware without changing challenge behavior; freestyle and
  (interim) deadline render nothing.
- **Read:** spec §Behavior (gating); [`src/components/Timer/Timer.tsx`](../src/components/Timer/Timer.tsx);
  [`src/stores/useMissionStore.ts`](../src/stores/useMissionStore.ts) (`useMission()`).
- **Change:** in `Timer.tsx` read `mission?.timeMode ?? 'freestyle'`. Early-return `null` for
  `freestyle` **and** `deadline` (deadline handled in Step 4); render the **existing, unchanged**
  elapsed UI only for `challenge`. No behavior change to the challenge path.
- **Done-check:** `npm run ci` green; preview — a `challenge`/unset mission shows the timer as today;
  a `freestyle` mission shows only the Clock. (Set a mission's mode via Firestore/seed or temporarily
  in dev to eyeball.)

### Step 4 — Deadline countdown rendering · phase: `build` ✅

- **Goal:** the deadline readout — countdown, gentle overtime, freeze on completion.
- **Read:** spec §Behavior (deadline countdown + completion freeze) + §UI; `missionTime.ts` (Step 1);
  `useTimerStore` (`recordDeadlineResult`, `deadlineResultByMission`); `Timer.css`;
  [`src/components/Timer/translations.ts`](../src/components/Timer/translations.ts).
- **Change:**
  - `Timer.tsx`: add the `deadline` branch — visible whenever the mission is **selected & incomplete**
    (independent of first-check). 1s `setInterval` tick while not complete; **no** pause inputs (ignore
    modal/visibility/userPaused) and **no** pause control. Compute `remaining =
getDeadlineRemainingMs(deadlineTime, Date.now())`; show `MM:SS` / `H:MM:SS` of `Math.abs`, with an
    `over` suffix + an overtime state class when negative. On the **completion edge** (progress → 100%)
    call `recordDeadlineResult(missionId, remaining)`; once complete, render the **frozen**
    `deadlineResultByMission[missionId]` (stop ticking).
  - `translations.ts`: add `over: '{time} over'` (en) / equivalent (pl); register is automatic (file
    already wired in `src/i18n/translations.ts`).
  - `Timer.css`: a `c-timer--overtime` mild colour shift (no red/alarm); reuse existing readout type
    sizing.
- **Done-check:** `npm run ci` green; preview — a deadline mission set ~1–2 min ahead counts down,
  crosses into `over`, and on 100% freezes. `compat/compat`: confirm clean (only `Date`/`setInterval`).

### Step 5 — Completion celebration "to spare" beat · phase: `build` ✅

- **Goal:** the early-finish reward; nothing extra when late.
- **Read:** spec §Behavior (completion beat); [`src/components/CompletionCelebration/CompletionCelebration.tsx`](../src/components/CompletionCelebration/CompletionCelebration.tsx)
  (the `newBest` banner pattern); its `translations.ts`.
- **Change:** in `CompletionCelebration.tsx` read `mission?.timeMode` and
  `deadlineResultByMission[mission.id]`. When `deadline` and the frozen result is **positive**, render a
  `{time} to spare` banner alongside the fireworks (mirroring `newBest`); when ≤ 0 (late) render **no**
  extra banner. Add `toSpare: '{time} to spare'` to `CompletionCelebration/translations.ts` (en + pl).
- **Done-check:** `npm run ci` green; preview — completing a deadline mission early shows the banner;
  late shows the normal celebration only.

### Step 6 — Transport: edit store + repository + API · phase: `wire` ✅

- **Goal:** the write path can persist `timeMode` / `deadlineTime` (UI added next).
- **Read:** spec §Impact (API); [`src/pages/api/content/missions.ts`](../src/pages/api/content/missions.ts);
  [`src/pages/api/content/_shared.ts`](../src/pages/api/content/_shared.ts) (`readString`, guards);
  [`src/database/contentEditRepository.ts`](../src/database/contentEditRepository.ts) (`createMission`/`updateMission`);
  [`src/stores/useEditStore.ts`](../src/stores/useEditStore.ts) (`MissionPatch`).
- **Change:**
  - `missions.ts`: in `create` + `update`, read `timeMode` (accept only the three enum values, else
    ignore) and `deadlineTime` (accept only a valid `HH:MM`, else ignore); add to create defaults and
    to the `update` patch (only when present). A small `readTimeMode` / `readHhMm` helper in
    `_shared.ts`.
  - `contentEditRepository.ts`: add `timeMode?` / `deadlineTime?` to the `createMission` /
    `updateMission` payload types.
  - `useEditStore.ts`: add `timeMode?` / `deadlineTime?` to `MissionPatch`.
- **Done-check:** `npm run ci` green (server code is off the Chrome 87 floor).

### Step 7 — Editor UI: mode selector + deadline steppers · phase: `wire` ✅

- **Goal:** let the owner set the mode and deadline time in the content editor.
- **Read:** spec §Behavior (editor); [`src/components/ContentEditor/MissionLevel.tsx`](../src/components/ContentEditor/MissionLevel.tsx)
  (draft / dirty / SaveBar / `updateMission`); [`src/components/ContentEditor/fields.tsx`](../src/components/ContentEditor/fields.tsx)
  (`Stepper`, `Toggle` patterns); [`src/components/ContentEditor/translations.ts`](../src/components/ContentEditor/translations.ts).
- **Change:**
  - `fields.tsx`: new `ModeField` — three focusable buttons (freestyle / challenge / deadline),
    D-pad-operable, `aria-pressed`; **no** native `<select>`.
  - `MissionLevel.tsx`: extend `draft` with `timeMode` + `deadlineTime`; render `ModeField`, and when
    `timeMode === 'deadline'` two `Stepper`s (hour 0–23 with wrap/clamp, minute in 5-min steps 0–55)
    bound to the `HH:MM` draft via `parse`/`format` (Step 1); extend `dirty`; pass both into
    `edit.updateMission`; reset them on cancel.
  - `translations.ts`: `fieldTimeMode`, the three mode labels, `fieldDeadlineHour`,
    `fieldDeadlineMinute` (en + pl).
- **Done-check:** `npm run ci` green; preview — set a mission to deadline 1 min ahead, save, reopen
  (values persisted), and confirm the dashboard countdown reflects it.

### Step 8 — Seed demo + final verification · phase: `validate`

- **Goal:** demonstrate each mode in seed data and close the feature.
- **Read:** [`tools/configuration.json`](../tools/configuration.json) (mission entries with
  `retentionHours`); [`tools/db-seed.cjs`](../tools/db-seed.cjs) (confirm it writes mission objects
  through, so new keys seed without code change); [docs/05_design.md](../docs/05_design.md) (aside).
- **Change:** add `timeMode` to a few seed missions (at least one `deadline` with a `deadlineTime`,
  one `challenge`, leave others `freestyle` by omission) so a fresh DB shows all three. Doc sync:
  update `docs/05_design.md`'s aside/readout description to note the mode-gated readout; the roadmap
  item is already groomed (steer).
- **Done-check:** Final verification below.

## Final verification

- [ ] `L0` gate + `L1` build green
- [ ] `L2`: every item in the spec's **Acceptance criteria** confirmed in the running app (TV UA) — `/verify`
- [ ] `L3` review gate clean (`/code-review`, `/simplify`; `/security-review` — the API touches a write
      route, so run it for that step), findings addressed
- [ ] `L4` `npm run knip` clean (no orphaned helper/export from Step 1–2)
- [ ] Tree internally consistent; flip the spec's `Status` → `implemented` on completion

## Risks & assumptions

- **Deadline target rule (resolved with owner, recorded in spec):** today's `HH:MM` signed, overtime
  for the rest of the day, midnight reset — **not** a rolling next-occurrence (which would break the
  chosen gentle-overtime). Known accepted limitation: a deadline mission opened the evening before a
  morning deadline shows large overtime instead of a tomorrow countdown — same-session is the
  dominant case and retention/Restart resets the run daily.
- **Frozen result lifecycle:** stored in `useTimerStore.deadlineResultByMission`, persisted and
  cleared by `resetTimerState` (Restart). The timer store does **not** actively expiry-prune runs
  today; the deadline result follows the same behavior (persists per mission until Restart) — not
  expanding prune logic here.
- **No `lsWrapper` version bump:** the new persisted field is additive with an empty default, matching
  how `userPaused` was introduced; old payloads hydrate cleanly.
- **`compat/compat`:** client code uses only `Date`, `setInterval`, and buttons — no Chrome 87 risk;
  confirm on Steps 4 and 7. Server/API (Step 6) is off the floor.
- **Challenge unchanged:** Step 3 only gates visibility; the elapsed-timer behavior, best, and manual
  pause must behave exactly as today when `timeMode === 'challenge'` (default for missions the owner
  sets so; new/unset missions default `freestyle`).
- **Seed assumption:** `db-seed.cjs` writes mission objects through without field allow-listing
  (verify in Step 8); if it filters keys, add `timeMode`/`deadlineTime` there too.
