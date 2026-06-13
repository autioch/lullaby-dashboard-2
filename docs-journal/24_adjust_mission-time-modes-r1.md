# Mission time modes — Adjustments (Round 1)

> **Artifact:** `24_adjust_mission-time-modes-r1.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13 · **Base ref:** e8673d1 (pre-adjustment HEAD)
> **Related:** [spec](24_spec_mission-time-modes.md) · [plan](24_plan_mission-time-modes.md) · [implement](24_implement_mission-time-modes.md) · [retro](24_retro_mission-time-modes.md)

One post-review adjustment round on the just-shipped mission-time-modes feature. The spec, plan,
and implementation record are **frozen**; this file is the only record of these changes. (Note the
drift: the implementation record's "Added" still lists the `timer.over` i18n key, which CR-1 below
removed.)

## Change requests

### CR-1 — Overtime readout as a signed `-time`, not an "over" label

- **Source:** Design / Product owner — Jakub Szczepaniak
- **Request:** Change the deadline overtime text to a leading `-` before the time (e.g. `-4:00`)
  instead of `{time} over` / `{time} po czasie`. Keep the colour change.
- **Why:** The trailing word widened/shifted the single-line readout; a bare signed time keeps it
  compact and steady — the mild colour shift already carries the "past deadline" meaning.
- **Classification:** design change
- **How handled:** `src/components/Timer/Timer.tsx` (`DeadlineTimer`) — render a plain
  `c-timer__elapsed` span with `display = `${overtime ? '-' : ''}${formatElapsed(Math.abs(remaining))}``;
dropped the `Typography`/`timer.over`branch. Removed the now-unused`over`key (en + pl) and its
type member from`src/components/Timer/translations.ts`. Doc-synced
`docs/05_design.md`(the overtime example now reads`-4:00`).
- **Result:** Implemented (`00db340`). Live: a deadline mission past its time shows `-13:30:57` with
  the `c-timer--overtime` colour class and no "over"/"po czasie" text; the positive countdown is
  unprefixed and unchanged.

### CR-2 — Deadline hour + minute steppers in one row

- **Source:** Design / Product owner — Jakub Szczepaniak
- **Request:** Put the editor's deadline hour and minute steppers in one row (next to the mode
  buttons if they fit — not required).
- **Why:** Two full-width stacked steppers waste vertical space; side-by-side is tidier.
- **Classification:** design change
- **How handled:** `src/components/ContentEditor/MissionLevel.tsx` — wrap the two `Stepper`s in a
  `div.c-content-editor__field-row`; add that flex-row rule (with `flex-wrap`) to
  `src/components/ContentEditor/ContentEditor.css`. Took the simpler side-by-side row; did not move
  them up next to the mode buttons (explicitly optional).
- **Result:** Implemented (`2f3fd27`). Live: in deadline mode the hour and minute steppers render
  side by side, top-aligned, in a single row.

## Verification

- **`L0`** gate (tsc + lint incl. `compat/compat` + 85 unit tests + format): **green**.
- **`L1`** build: covered by the pre-push `ci` on both commits; the changes are syntax/layout only
  (`flex`/`gap`/`flex-wrap` are within the Chrome 87 floor).
- **`L2`** (running app, TV-flow drive):
  - CR-1 confirmed — deadline overtime renders `-13:30:57` in the overtime colour, no label text.
  - CR-2 confirmed — the two steppers sit side by side in one row (DOM top-aligned + screenshot).
  - **No regression** to the original spec's acceptance criteria: freestyle still shows no readout;
    challenge still shows the elapsed timer + pause toggle and auto-pauses on a modal; deadline still
    counts down (`MM:SS` / `H:MM:SS`) before any check with no pause control; the editor still
    sets/persists mode + deadline and the dashboard reflects it.
- **`L3`** review: the adjustment diff is a string-format swap (CR-1) plus a layout wrapper + CSS
  (CR-2) — no new logic, no data/auth surface. `/code-review`, `/simplify`, `/security-review`: no
  findings (`timer.over` fully removed; `Typography` still used by `ChallengeTimer`).
- **`L4`** `npm run knip`: **clean** (no orphaned exports after removing the `over` key).
- **`L5`** real-TV: overtime colour contrast at 3–5 m and D-pad focus order across the one-row
  steppers still want confirmation on the SmartTV (carried over from the implementation record).

## Commits

- `00db340` — fix(timer): show deadline overtime as a signed -time instead of an 'over' label
- `2f3fd27` — feat(editor): lay the deadline hour + minute steppers in one row
