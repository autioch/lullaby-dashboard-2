# Mission time modes — Spec

> **Artifact:** `24_spec_mission-time-modes.md` · **Roles:** Product Owner
> **Status:** `agreed`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spike](../docs-spikes/09_spike_mission-time-modes.md) · [plan](24_plan_mission-time-modes.md) · [implement](24_implement_mission-time-modes.md) · [adjust](24_adjust_mission-time-modes-r1.md) · [retro](24_retro_mission-time-modes.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner** and
settled before any code.

## Problem / motivation

The dashboard always shows the elapsed timer + best record, regardless of whether a family cares
about timing a given routine. But routines relate to time differently: some are no-pressure lists,
some are races to beat, and some have a hard "be done by" deadline (bedtime, leaving the house). One
always-on stopwatch serves only the "race" case and adds pressure to routines that don't want it —
and the roadmap's "Optional deadline countdown" is still unbuilt. Give each mission a **time mode**
so it shows the treatment that fits its intent, and fold the deadline countdown in as one of those
modes — unifying the shipped Clock / Timer / best with the new countdown instead of bolting on a
fourth time feature. (Spike [09](../docs-spikes/09_spike_mission-time-modes.md), `viable-with-changes`.)

## User story

As a **household**, I want **each mission to show the kind of time information that fits why we do
it — nothing, a stopwatch, or a countdown to a deadline** so that **timing encourages us (with a
"time to spare" reward) where we want it, without adding pressure where we don't**.

## Behavior

Each mission has a **`timeMode`**: `freestyle` · `challenge` · `deadline` (**default `freestyle`**).
A `deadline` mission also has a **`deadlineTime`** (`HH:MM`, local). The **Clock** (current wall
time) stays in the aside, **unchanged, in every mode**. The single mission-time readout beneath the
Clock is **gated by the mode**:

- **`freestyle`** — **no readout** (Clock only). The elapsed timer, best record, and manual-pause
  control do **not** render.
- **`challenge`** — **exactly today's elapsed-timer behavior, now shown only in this mode**: counts
  up from the first checked objective; auto-pauses on a covering modal / hidden page / mission
  switch; manual pause/resume by clicking; shows the best comparison and the "New best!" celebration
  beat; freezes the final duration at 100%. No change to that behavior — only its visibility is
  gated.
- **`deadline`** — a **countdown** to the next occurrence of `deadlineTime`.

**Deadline countdown:**

- **Visible whenever the mission is selected and not yet complete** — including before the first
  objective is checked (a deadline is meaningful before you start). _This intentionally diverges
  from the elapsed timer's start-on-first-check._
- **Remaining = today's `HH:MM` (local) − now**, a **signed** value, formatted `MM:SS`, rolling to
  `H:MM:SS` past an hour, updating ~once a second. Before `HH:MM` it counts **down**; once `HH:MM`
  passes it goes **negative** (overtime) for the rest of the day; at local **midnight** it resets to
  count toward the new day's `HH:MM`. Local time, so DST is handled by the local date. _Known
  limitation (accepted, MVP):_ a deadline mission opened the evening before a morning deadline shows
  large overtime rather than a countdown to tomorrow — the dominant case is same-session, and
  retention/Restart resets the run daily.
- **Does not pause** for modals, a hidden page, or a mission switch — real time marches toward the
  deadline regardless. On return from a hidden page it simply shows the correct remaining.
- **No manual-pause control** in this mode (a wall clock can't be paused).
- **Past the deadline, before completion:** tips into **gentle overtime** — shows the time over (e.g.
  `4:00 over`) with a **mild colour shift only**; no alarm, no red "time's up".
- **On completion (100%):** **freezes** the remaining-at-completion as the result and stops updating
  — a positive value reads as time to spare, a negative value as the overtime. The frozen result
  **survives a page reload**, and is **cleared on Restart** and on the mission's normal expiry
  lifecycle (the same as its checks).

**Completion beat (deadline mode):**

- Finishing **early** (positive remaining) shows a **"X to spare"** banner in the completion
  celebration, alongside the existing fireworks (mirroring the "New best!" beat).
- Finishing **late** shows the **normal celebration with no penalty banner** — no scold, no red, no
  suppressed fireworks (cooperative, not stressful). There is no "to spare" beat when there's none.

**Records:** best-time records stay **`challenge`-only** — no best, no "New best!" in `deadline` or
`freestyle`.

**Editor:** the mission editor gains a **mode selector** (`freestyle` / `challenge` / `deadline`)
and, when `deadline` is selected, **two steppers** — deadline **hour** (0–23) and **minute** (5-minute
steps) — committed with the rest of the mission form.

## Scope

**In scope**

- `timeMode` + `deadlineTime` on the mission record; **default `freestyle`** (absent ⇒ freestyle, no
  migration write).
- **Mode-gating** the existing elapsed timer / best / manual-pause so they render only in `challenge`.
- The **deadline countdown** readout: wall-clock-derived, no pause, gentle overtime, freeze-on-
  completion with a persisted frozen result, cleared on Restart / expiry.
- The **"time to spare"** completion beat for early deadline finishes, reusing the completion
  celebration.
- **Editor:** a new mode-selector control + deadline hour/minute steppers; read + validate in the
  missions API; the new fields in the seed.
- **i18n** for the new copy (mode labels, "over" / overtime, "to spare", editor field labels).
- Co-located **unit tests** for the pure logic (next-occurrence, remaining / overtime, early-vs-late
  classification).

**Out of scope** (explicitly not doing now)

- **`timebox`** (fixed-duration budget) mode — the fast-follow; the original "a set time" idea lands
  there later.
- Composable show-X toggles; showing the elapsed timer **and** a countdown together.
- Best-time records in `deadline` mode; any cross-device / shared timing.
- Escalating urgency colours **before** the deadline; any animation/polish beyond the existing
  celebration banner.
- Per-theme motivational copy — the roadmap **Theme system** owns framing.
- Any change to the Clock.

## Impact on the codebase

- **Data model / Firestore** (`src/database/*`): the `mission` doc gains `timeMode:
'freestyle' | 'challenge' | 'deadline'` and optional `deadlineTime: string` (`HH:MM`). Update
  `MissionDoc` / `MissionRec` in `missionRepository.ts`. Additive and optional — existing docs with
  no `timeMode` hydrate as `freestyle`.
- **Repository** (`src/database/`): `missionRepository` reads flow the new fields via `withId` (type
  change only). `contentEditRepository` create/update carry `timeMode` / `deadlineTime`.
- **Zustand store** (`src/stores/`): `useEditStore` `MissionPatch` + create/update carry the new
  fields; `useMissionStore` mission hydration carries them through. The **deadline freeze-on-
  completion** result must be persisted per mission, reset on Restart, and pruned on the check-expiry
  lifecycle — extend `useTimerStore` or a parallel structure (**/plan decides the mechanism**). Pure
  helpers (`nextOccurrence`, remaining/overtime, early-vs-late) exported for unit testing.
- **Components** (`src/components/`): `Timer/` becomes mode-aware (gate on `mission.timeMode`; render
  the countdown in `deadline` mode, the existing elapsed UI in `challenge`, nothing in `freestyle`);
  `CompletionCelebration/` gains the "X to spare" beat; `ContentEditor/MissionLevel.tsx` gains the
  mode selector + deadline steppers; `ContentEditor/fields.tsx` gains a small **mode-select control**
  (no select/radio control exists today).
- **API routes** (`src/pages/api/`): `content/missions.ts` `create` + `update` read and validate
  `timeMode` (enum) and `deadlineTime` (`HH:MM`, only meaningful when `deadline`).

## UI & TV constraints

- **Layout:** the readout stays in the aside under the Clock — one line, `tabular-nums`, large,
  high-contrast, readable at 3–5 m. Overtime is a **mild colour shift only**. The editor reuses the
  existing D-pad-operable `Stepper`; the mode selector must be D-pad-operable (focusable buttons, not
  a native `<select>`).
- **TV-first:** `deadline` adds **no** new focus target on the dashboard (display-only, no pause
  control); `freestyle` removes one. Minimal clutter — a single readout, never two.
- **Chrome 87:** `Date.now()`, `setInterval`, and the `Date` constructor (today-at-`HH:MM`, local) are
  all below the floor. No new dependency, no Chrome 87-unsafe API.

## i18n

New keys, in **every language the app currently ships** (mirror the existing component
`translations.ts` files):

- Editor: time-mode field label, the three mode labels (`freestyle` / `challenge` / `deadline`),
  deadline hour/minute field labels.
- Readout: overtime format (e.g. `{time} over`).
- Celebration: the "{time} to spare" beat.

The numeric countdown itself (`MM:SS` / `H:MM:SS`) stays language-neutral, as the elapsed timer is.

## Acceptance criteria

- [ ] A mission with no `timeMode` set (existing data) behaves as `freestyle`: no timer readout, no
      best, no pause control — only the Clock.
- [ ] A `challenge` mission shows the existing elapsed timer + best + manual pause, with **no
      behavior change** from today (start on first check, auto/manual pause, freeze at 100%, "New
      best!").
- [ ] A `deadline` mission shows a countdown to the next occurrence of its `HH:MM` **as soon as it is
      selected**, before any objective is checked.
- [ ] The deadline countdown updates ~once a second and **does not pause** when a modal opens, the
      page is hidden, or the mission is switched; on return it shows the correct remaining.
- [ ] `deadline` mode shows **no** manual-pause control.
- [ ] Past the deadline (before completion) the readout shows the overtime (e.g. `4:00 over`) with a
      mild colour shift — no red/alarm.
- [ ] Completing a `deadline` mission **freezes** the remaining-at-completion; it survives a page
      reload and stops updating; Restart clears it.
- [ ] Completing **early** shows a "X to spare" banner in the celebration; completing **late** shows
      the normal celebration with **no** penalty banner.
- [ ] The mission editor can set the mode and, for `deadline`, the hour (0–23) and minute (5-min
      steps); saving persists them; reopening shows the saved values.
- [ ] The remaining is **today's `HH:MM` − now** (signed): positive before the time, negative
      (overtime) after it, resetting at local midnight — verified by unit test (a time before now →
      negative/overtime; a time after now → positive countdown).
- [ ] `npm run ci` passes (tsc + lint + unit tests + format); the pure time logic is unit-tested.

## Open questions

_None — resolved as Product Owner (forks settled in the spike and this elicitation):_ structure
(single `timeMode` enum), default (`freestyle`), gating (timer is `challenge`-only), deadline
visibility (while selected & incomplete), at/after-deadline (gentle overtime, freeze on completion),
late finish (gentle, no penalty beat), and editor input (hour/minute steppers).

_Resolved in `/plan`:_ the frozen deadline result lives in `useTimerStore`
(`deadlineResultByMission`); the write API enum-guards `timeMode` and validates `deadlineTime` as
`HH:MM`; and the deadline target is **today's `HH:MM`, signed, resetting at midnight** (above) — not a
rolling next-occurrence — so the chosen gentle-overtime behavior works.
