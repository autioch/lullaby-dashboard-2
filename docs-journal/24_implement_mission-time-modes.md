# Mission time modes — Implementation

> **Artifact:** `24_implement_mission-time-modes.md` · **Roles:** Senior Fullstack React/Node.js Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13
> **Related:** [spec](24_spec_mission-time-modes.md) · [plan](24_plan_mission-time-modes.md) · [adjust](24_adjust_mission-time-modes-r1.md) · [retro](24_retro_mission-time-modes.md)

A concise, durable record of what the `/implement` run did, executing the plan exactly.

## Outcome

Each mission now has a `timeMode` (`freestyle` / `challenge` / `deadline`, default `freestyle`) that
gates the single mission-time readout under the Clock: freestyle shows nothing, challenge keeps the
existing elapsed timer + best + manual pause, and deadline shows a gentle wall-clock countdown to
today's `HH:MM` (with overtime and a "time to spare" completion beat). The owner sets the mode and a
deadline time in the content editor.

## Added

- `src/stores/missionTime.ts` — pure, testable time logic: `getDeadlineRemainingMs` (signed
  today's-`HH:MM` − now), `parseHhMm`, `formatHhMm` (+ co-located `missionTime.test.ts`).
- `useTimerStore.deadlineResultByMission` + `recordDeadlineResult` — idempotent freeze of the signed
  deadline-remaining at completion, persisted (additive, no `lsWrapper` bump) and cleared on Restart.
- `Timer` mode dispatch with two subcomponents: `ChallengeTimer` (the prior elapsed-timer logic,
  unchanged) and `DeadlineTimer` (countdown, overtime, sticky freeze).
- `CompletionCelebration` "{time} to spare" beat for early deadline finishes.
- `ContentEditor` `ModeField` (three D-pad buttons, `aria-pressed`, no native select); `Stepper`
  gained optional `step`/`max`/`wrap`/`format` for the deadline hour/minute steppers.
- API helpers `readTimeMode` (enum-guard) and `readHhMm` (24h `HH:MM`) in `content/_shared.ts`
  (+ tests).
- i18n: `timer.over`; `completionCelebration.toSpare`; editor `fieldTimeMode`, three mode labels,
  `fieldDeadlineHour`, `fieldDeadlineMinute` (en + pl).

## Changed

- **Data** (`src/database/missionRepository.ts`): `MissionDoc` gains optional `timeMode` +
  `deadlineTime`; existing docs hydrate as `freestyle`.
- **Transport** (`content/missions.ts`, `contentEditRepository.ts`, `useEditStore.ts`): create
  defaults `timeMode` to `freestyle`; update patches both fields when present (validated, else
  ignored); `MissionPatch` + repo payloads carry them.
- **Editor** (`ContentEditor/MissionLevel.tsx`): draft/dirty/save/cancel extended for `timeMode` +
  `deadlineTime`; deadline steppers shown only in deadline mode; `deadlineTime` sent only in deadline
  mode.
- **Timer** (`Timer.tsx`, `Timer.css`): mode-gated; `c-timer--overtime` mild-colour shift;
  `formatElapsed` exported for reuse by the celebration.
- **Seed** (`tools/configuration.json`, `tools/db-seed.cjs`): Rano = deadline `08:00`, Sprzątanie =
  challenge, others freestyle by omission; `db-seed.cjs` writes the fields only when set.
- **Docs** (`docs/05_design.md`): aside readout, editor, and celebration sections describe the
  mode-gated behavior.

## Skipped / deferred

- **Frozen-result expiry pruning** — the result persists per mission until Restart, matching the
  timer store's existing non-pruning behavior (accepted limitation, recorded in the plan/spec). Not
  expanded here.
- **Evening-before-morning-deadline** shows large overtime rather than a tomorrow countdown — the
  accepted MVP limitation (today's `HH:MM`, signed, midnight reset; same-session is dominant).
- **`L5` real-TV confirmation** — not run; needs the SmartTV. Specifically: D-pad focus order across
  the new editor mode buttons + steppers, and overtime colour contrast at 3–5 m.
- **DB reseed not run** — `db:seed` wipes & reseeds the owner's Firestore (destructive); left to the
  owner. The seed _content_ is in place.

## Verification

- **`L0`** gate (tsc + lint incl. `compat/compat` + 85 unit tests + format): **green**.
- **`L1`** production build (`npm run build`): **green**.
- **`L2`** (running app, live editor + dashboard drive): freestyle hides the readout; challenge
  shows the elapsed timer + pause toggle and auto-pauses while a modal is open; deadline counts down
  (`MM:SS`) before any objective is checked, with no pause control; past the deadline it renders
  `13:12:15 po czasie` with `c-timer--overtime`; the editor's mode selector + hour/minute steppers
  persist and the dashboard reflects them on save. **Freeze-on-completion, the "to spare" banner, and
  late-no-banner** are covered by unit tests (`recordDeadlineResult` idempotent freeze/persist/clear)
  and the reviewed celebration logic — **flagged for real-use confirmation** (completing a full
  20-objective mission live wasn't practical).
- **`L3`** review gate: `/code-review` raised 2 findings (Stepper not clamping `value±step` to
  bounds; deadline completion not sticky on uncheck) — both fixed in `ad75033`. `/simplify`: clean.
  `/security-review`: no findings (the write route enum-/regex-validates the new fields behind the
  unchanged session guard; React handles escaping).
- **`L4`** `npm run knip`: **clean** (no orphaned exports).

## Commits

- `2f447be` — feat(timer): add mission timeMode/deadlineTime fields + pure deadline time helpers
- `e779ea4` — feat(timer): freeze + persist signed deadline result per mission
- `3f9c0eb` — feat(timer): gate the mission-time readout by timeMode
- `fe70632` — feat(timer): render the deadline-mode wall-clock countdown
- `e75272d` — feat(celebration): add the deadline 'time to spare' beat
- `0f5ac1f` — feat(api): carry timeMode/deadlineTime through the mission write path
- `fccf531` — feat(editor): add the mission time-mode selector + deadline steppers
- `9a0ab59` — feat(seed): demo all three time modes; doc the mode-gated readout
- `ad75033` — fix(timer): clamp stepper to bounds; make deadline completion sticky (L3 follow-up)
