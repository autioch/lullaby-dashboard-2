# Best run — Spec

> **Artifact:** `20_spec_best-run.md` · **Roles:** Product Owner
> **Status:** `implemented`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13 · **Last updated:** 2026-06-13
> **Related:** [spike](../docs-spikes/07_spike_mission-timer.md) · [timer spec](19_spec_mission-timer.md) · [plan](20_plan_best-run.md) · [implement](20_implement_best-run.md) · [retro](20_retro_best-run.md)

The agreed contract for this feature — _what_ and _why_, owned by the **Product Owner**.

## Problem / motivation

The [mission timer](19_spec_mission-timer.md) made elapsed time visible but deliberately deferred
records. A "best run so far" turns that elapsed time into a gentle, **cooperative** target — the
family beating its own past time, never each other (per _Cooperative Not Competitive_, which
explicitly prefers _team/family records_). It reinforces vision metric #2 ("routine completion time
decreases over time"): see the record, try to beat it, get to leisure sooner. The timer already
freezes a final duration at 100% — that frozen value is the natural input, so this is a small,
additive follow-up.

## User story

As a **household**, I want **to see our best completion time for a mission and know when we beat it**
so that **finishing faster feels rewarding and we keep improving**.

## Behavior

- **Record:** the **best** is the lowest frozen final duration among **completed** (100%) runs of a
  mission. Every completion counts — there is **no minimum-duration floor** (a very fast completion
  sets a very fast record; the separate reset below fixes a bad one).
- **Recording on completion:** when a run reaches 100% and freezes, its final duration is compared to
  the mission's stored best. If it is lower (or there is no best yet), it becomes the new best.
- **Display:** a `Best MM:SS` line (rolling to `H:MM:SS`) sits **under the live Timer**, shown **only
  once a best exists** for the selected mission. Nothing before the first completion.
- **New-best moment:** when a completing run **beats a prior record**, the existing
  [completion celebration](16_spec_completion-celebration.md) additionally shows a transient,
  legible **"New best!"** beat. The **first-ever** completion sets the record **silently** (there was
  nothing to beat) — the normal celebration still plays.
- **Restart (objectives):** the Menu Restart resets the current run to `00:00` as before but **does
  not** clear the best — the record is historical and persists across runs.
- **Reset best (separate):** a **"Reset best time"** action in the **Settings** panel clears the best
  for the **currently selected mission** only. It is distinct from the objectives Restart and only
  appears when that mission has a best.
- **Persistence:** the best is stored per-mission in localStorage (alongside the timer state),
  per-device, surviving reloads. No cross-device sharing.

## Scope

**In scope**

- `bestByMission` record state in the timer store, recorded on completion, persisted separately from
  run state so the objectives Restart preserves it.
- A `Best …` readout under the Timer (shown only when a best exists).
- A transient "New best!" beat in the completion celebration on a record-beating completion.
- A mission-scoped "Reset best time" action in the Settings panel.
- i18n (en + pl) for the `Best …` label, the "New best!" message, and the reset control.
- Co-located unit tests for the record/reset logic.

**Out of scope** (explicitly not doing now)

- Any minimum-duration floor / "valid run" heuristic.
- Run **history** beyond the single best (no list of past times, no second-best, no averages).
- Manual pause/start, deadline countdown, cross-device/shared records, Firestore.
- A best-reset in the always-visible Menu row (kept out of the 10-foot UI; lives in Settings).

## Impact on the codebase

- **Data model / Firestore:** none.
- **Repository:** none.
- **Zustand store** (`src/stores/useTimerStore.ts`): add `bestByMission: Record<string, number>`;
  record the best on the completion transition in `setRunState` and flag the run's completion as a
  new best (runtime-only); add `resetBest(missionId)`; change `resetTimerState` to clear runs **but
  keep bests**; bump the `lsWrapper` version (persisted shape grows). Update co-located tests.
- **Components:**
  - `src/components/Timer/Timer.tsx` (+ `translations.ts`) — render the `Best …` line.
  - `src/components/CompletionCelebration/CompletionCelebration.tsx` (+ CSS, `translations.ts`) —
    read the run's new-best flag and show the transient "New best!" beat (foreground,
    `pointer-events: none`, auto-fading — does not trap focus or block the list).
  - `src/components/AppOptions/AppOptions.tsx` (+ `translations.ts`) — mission-scoped "Reset best
    time" button (confirm, like Menu Restart), shown only when the current mission has a best.
- **API routes:** none.

## UI & TV constraints

- **Layout:** `Best …` under the Timer in the aside — secondary to both the Clock and the live Timer
  (smaller / de-emphasized), `tabular-nums`, readable at 3–5 m. The "New best!" beat is centred,
  large, high-contrast, transient, and pointer-transparent.
- **TV-first:** no new always-visible focus target (the reset lives in the Settings modal, which is
  already D-pad reachable). The celebration beat adds no interactive element.
- **Chrome 87:** only `Date.now`, comparisons, CSS used by the existing celebration. No new
  dependency or floor-risk API.

## i18n

Languages: en + pl.

- `timer.best` — e.g. `Best {time}` / `Najlepszy {time}`.
- `completionCelebration.newBest` — e.g. `New best!` / `Nowy rekord!`.
- `appOptions.resetBest` — e.g. `Reset best time` / `Wyczyść najlepszy czas`.

## Acceptance criteria

- [ ] No `Best …` line shows for a mission that has never been completed.
- [ ] Completing a mission for the first time records a best and shows the `Best …` line; the
      celebration plays **without** a "New best!" beat.
- [ ] Completing again **faster** updates the best and shows the "New best!" beat in the celebration.
- [ ] Completing again **slower** leaves the best unchanged and shows **no** "New best!" beat.
- [ ] The Menu Restart resets the run to `00:00` but leaves the `Best …` line intact.
- [ ] Settings shows "Reset best time" only when the current mission has a best; using it clears that
      mission's best (after confirm) and removes the `Best …` line; other missions' bests are
      untouched.
- [ ] The best survives a page reload.
- [ ] `npm run ci` passes; record/reset logic is unit-tested.

## Open questions

_None — resolved with the owner:_

- **Display** → `Best …` under the Timer, only once it exists.
- **New-best feedback** → folded into the completion celebration ("New best!" beat).
- **Junk/too-fast runs** → counted as-is, no floor.
- **Clear/Restart** → best survives the objectives Restart; a **separate**, mission-scoped reset lives
  in Settings.
