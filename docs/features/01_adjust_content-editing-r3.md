# Content editing (missions, groups, objectives) — Adjustments (Round 3)

> **Artifact:** `01_adjust_content-editing-r3.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-11 · **Base ref:** `7b5af7f` (pre-adjustment HEAD)
> **Related:** [spec](01_spec_content-editing.md) · [plan](01_plan_content-editing.md) · [implement](01_implement_content-editing.md) · adjust [r1](01_adjust_content-editing-r1.md), [r2](01_adjust_content-editing-r2.md) · [retro](01_retro_content-editing.md)

Record of the third post-review adjustment round. The spec, plan, and implementation record are
**frozen** — this file plus rounds [1](01_adjust_content-editing-r1.md) and
[2](01_adjust_content-editing-r2.md) are the only record of post-review changes until
`/reconcile` re-syncs the spec. Every claim traces to a commit.

## Change requests

Classification is one of: **requirement change** · **refactor** · **design change**.

### CR-1 — Fully square UI

- **Source:** Design — Jakub Szczepaniak
- **Request:** The whole UI should be square — no rounded corners anywhere.
- **Why:** Consistency with the app's square, minimalistic look (round 2 squared the buttons; other
  elements were still rounded).
- **Classification:** design change.
- **How handled:** Removed every remaining `border-radius` (auth input, editor error / rows /
  inputs / row-swatch / palette swatches, and the unused `.c-button--text` variant). Only
  `ProgressBar`'s `border-radius: inherit` remains, which resolves to 0 with no rounded ancestor.
- **Acceptance check:** No rounded corners in the app.
- **Result:** Implemented — verified on the SmartTV UA (screenshots): inputs, buttons, swatches and
  the colour trigger are square. Commit `f9e89e6`.

### CR-2 — Compact, single-row objective editor

- **Source:** Product owner / Design — Jakub Szczepaniak
- **Request:** The inline objective editor (round 2) takes too much space. Drop the input's field
  label; make colour selection a popup/dropdown; make the hidden button contain its own state label
  instead of an external label; the editor should fit in one (max two) rows.
- **Why:** Density — the four stacked field blocks per objective made the group list very long.
- **Classification:** requirement + design change.
- **How handled:** Rewrote `ObjectiveEditor` as a single flex row: a plain label `input` (no field
  label), a new compact `ColorField` (a swatch trigger that opens a small popup of the palette;
  closed it is one swatch button), a new `HiddenToggle` whose own text shows the state
  (Visible / Hidden — `visible` / `hidden` strings), then Move ↑/↓ and Delete. `ColorField` and
  `HiddenToggle` were added to `fields.tsx`, replacing the labelled `SwatchPicker` (removed); the
  now-unused `fieldColor` string and `__swatches` style were dropped. Field edits still feed the
  group's batched draft; Move/Delete stay immediate.
- **Acceptance check:** No field labels per objective; colour via a popup; hidden button shows its
  state; each objective fits in one (max two) rows.
- **Result:** Implemented — verified on the SmartTV UA: each objective is one row (label · colour
  trigger · "Widoczne/Ukryte" toggle · Move · Delete); the colour popup opens with the 6 square
  swatches and picking closes it (verified pick → close with no dirty change). Commit `c07b484`.

### CR-3 — Disabled buttons show a loading cursor (bug)

- **Source:** Development — Jakub Szczepaniak
- **Request:** Disabled buttons show the loading (`wait`) cursor; that's wrong.
- **Why:** A non-applicable disabled control implied a pending action.
- **Classification:** refactor (bug fix).
- **How handled:** Changed the `:disabled` cursor from `wait` to `not-allowed` on `.c-button` and
  the editor glyph/colour-trigger buttons.
- **Acceptance check:** Disabled buttons show `not-allowed`, not a loading cursor.
- **Result:** Implemented — verified on the SmartTV UA: a disabled button's computed `cursor` is
  `not-allowed`. Commit `e3afa79`.

### CR-4 — Root action should say "Close", not "Back"

- **Source:** Design — Jakub Szczepaniak
- **Request:** On the missions list (root), the header button should suggest closing the editor, not
  going back.
- **Why:** At the root the action closes the overlay, so "Back" was misleading.
- **Classification:** design change.
- **How handled:** `Header` shows `contentEditor.close` ("Close" / "Zamknij") when `isRoot`, else
  `contentEditor.back`; behaviour unchanged (root closes, deeper levels go back).
- **Acceptance check:** Root reads "Close"/"Zamknij" and closes; deeper levels read "Back".
- **Result:** Implemented — verified on the SmartTV UA: the missions root shows "Zamknij". Commit
  `5df678c`.

## Verification

- **Gate:** `npm run ci` (tsc + ESLint incl. `compat/compat` + Prettier) green; `npm run build`
  succeeds.
- **Original acceptance criteria (no regression):** re-walked on the SmartTV UA — editor opens from
  the menu and closes; create/rename/delete reachable; editable fields work (objective fields now
  via the compact controls into the group's batched save); Move ↑/↓ with correct end-disabling;
  delete confirm; keyboard/D-pad operable with the 4px focus ring; `tools/firestore.rules`
  untouched. No console errors.
- **New acceptance checks:** CR-1…CR-4 each confirmed (see Result lines).
- **Review skills:** `/code-review` (no surviving correctness findings) and `/simplify` (clean —
  `ColorField` / `HiddenToggle` are clean extractions, dead `SwatchPicker` / `__swatches` /
  `fieldColor` removed). `/security-review` **not triggered** — no auth, API route, or
  `tools/firestore.rules` change this round.

## Commits

- `f9e89e6` — style: remove all rounded corners for a fully square UI
- `e3afa79` — fix(button): use not-allowed cursor on disabled buttons
- `5df678c` — feat(editor): label the root action Close instead of Back
- `c07b484` — feat(editor): compact single-row objective editor

## Drift — spec/plan to re-sync

The spec, plan, and implementation record stay frozen and now lag further (on top of rounds 1–2). Run
`/reconcile content-editing` to fold these into the spec. Requirement deltas the spec does not
yet reflect:

- **Objective editing (CR-2):** the spec's objective fields (`label` text, `color` preset swatch,
  `isHidden` toggle) are now a compact inline row — a labelless input, a **popup** colour picker,
  and a state-labelled hidden switch — not the labelled stacked fields. (Layered on the round-2
  "objectives edited in place" drift.)
- **Styling (CR-1, CR-4):** the UI is fully square (no rounded corners); the editor's root action
  reads "Close" rather than "Back". Non-behavioral but worth noting if the design doc fixes these.
- **Still open from earlier rounds:** retained-but-unused attach/remove server endpoints (round 1);
  the deferred Step-7 close-out (live authenticated persistence on real TV, original auth/API
  security review, flip spec `Status` → `implemented`); the `ReauthPrompt` not yet live-exercised
  (dev skip-auth removes 401s) (round 2).
