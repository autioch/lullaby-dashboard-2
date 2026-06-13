# Mission time modes — Spike

> **Artifact:** `docs-spikes/09_spike_mission-time-modes.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13
> **Graduated to:** [spec](../docs-journal/24_spec_mission-time-modes.md)

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

The "Optional deadline countdown" roadmap item was the trigger, but the real question grew: rather
than bolt a fourth time-related feature onto the Clock, the elapsed Timer, and best-time records,
**is there one coherent per-mission "time model" that all of them slot into** — and what is its
shape on the Firestore mission record, the TV readout, and the Chrome 87 floor?

## Idea as posed

> Optional countdown timer for missions. It might be a set time or countdown until specific hour.

Reframed by the owner mid-spike: _stop adding time features one at a time and think of it as a
whole._ Families have different (sometimes mixed) reasons for timing a routine:

> - **freestyle** — doesn't matter when it's done; just a list of tasks people do whenever.
> - **challenge** — measure how fast it's done; encourage kids to do it fast, without interruptions.
> - **deadline** — must be done by a point in time (before leaving on vacation).
> - **save time for other activities** — the sooner the list is finished, the more time is left for fun.
>
> Maybe mission should have a "mode" property (challenge / deadline / time-saving / freestyle), or a
> few properties (show current time, show deadline, show timer). And the anchoring bedtime case:
> _"You need to go to sleep at 8 PM. If you do everything earlier, we still have time for playing."_

## Findings

### Product & common sense

The four intents are real and on-product, but they **collapse onto a smaller set of display
mechanics** — because some differ only in _framing_, not in what's shown:

- **Freestyle** → no mission timer; the Clock alone.
- **Challenge** (go fast) → count-up elapsed **+ best-time comparison** (already shipped).
- **Save time for fun** → mechanically _identical_ to challenge (same number); the difference is
  motivational copy ("fun earned" vs "beat your record").
- **Deadline** (done by 7:45) → countdown to a clock time.

The unlocking insight came from the bedtime scenario: **"finish before 8 PM and you get to play" is
just `deadline` mode** — the countdown's _remaining time at the moment of completion_ **is** the play
time earned. That generalizes: **"time to spare" is a completion beat every timed mode can produce**,
measured against that mode's target (`target − actual`):

| Mode                     | Readout during the run           | "Time to spare" beat at completion                                |
| ------------------------ | -------------------------------- | ----------------------------------------------------------------- |
| **Freestyle**            | Clock only                       | —                                                                 |
| **Challenge**            | count-up elapsed + best          | "Beat your best by 2:10" _(the already-shipped "New best!" beat)_ |
| **Deadline**             | countdown to a clock time        | "15 min to play before 8 PM" ← the bedtime scenario               |
| **Timebox** _(deferred)_ | countdown from a duration budget | "Done, 4 min under"                                               |

So "save time for fun" is **not a separate mode** — it's the positive completion beat of a countdown,
and for challenge it is the **existing** "New best!" beat. Modelling framing as its own time mode
would duplicate what the roadmap's **Theme system** (per-theme status vocabulary) is meant to own.

This reframes the whole area: rather than a 4th feature, it's **one unifying `timeMode` per mission**
that the shipped Clock / Timer / best-time and the new countdown all slot into. It **supersedes and
absorbs** the standalone "Optional deadline countdown" roadmap item, and it **retrofits** a behavior
change — the elapsed timer becomes _mode-gated_ instead of always-on.

### UX standards

TV-first reality drove the shape:

- **One choice, not a kit of toggles.** A single intent-named `timeMode` (owner-chosen over
  composable flags) is one D-pad pick in the editor, self-documenting, and structurally avoids the
  two-timers clutter — it fits the single mission-time readout slot we already settled (the countdown
  _replaces_ the elapsed readout; never both).
- **The Clock is orthogonal and stays always-on.** Current wall-time is useful under every intent
  ("it's 7:30, we leave at 8"); it is the baseline, not part of the mode.
- **Mode-gated readout, one number.** `freestyle` shows nothing beneath the Clock; `challenge` shows
  the existing count-up + best; `deadline` shows a countdown. Large, high-contrast, glanceable at
  3–5 m, same `tabular-nums` treatment as the Clock/Timer.
- **Gentle at zero (owner-chosen).** Past a deadline, keep showing and tip into mild overtime — no red
  "TIME'S UP" alarm. On-principle (_Cooperative Not Competitive_, encouraging not stressful), which
  matters most for the kids' bedtime case.
- **No pause control in deadline mode.** A wall clock can't be paused, so the Timer's
  click-to-pause affordance is hidden in `deadline` mode; it stays in `challenge` mode (the existing
  elapsed timer).
- **Editor input for a deadline on a D-pad.** Entering `HH:MM` on a 10-foot UI is heavier than the
  existing numeric `retentionHours` field — a real (small) editor-UX question for `/spec`/design.

### Technical viability

Cleanly viable on the stack and the Chrome 87 floor — one additive Firestore field, no new
dependency, no compat risk.

- **Config on the mission record (owner-chosen), via the well-trodden field path.** `MissionDoc`
  (`label` / `youtubeUrl` / `retentionHours` / `objectiveGroupIds`) gains a `timeMode` (+ a deadline
  time for that mode). Exactly mirrors how `retentionHours` already flows: type in
  `missionRepository.ts` → editor field in `ContentEditor/MissionLevel.tsx` → write/validate in
  `api/content/missions.ts` → seed in `tools/db-seed.cjs` / `configuration.json`. Additive and
  **optional**, so existing docs with no field hydrate as the default with **no migration write**.
- **Two time models under one readout — they share UI, not mechanics.** This is the load-bearing
  finding for `/spec`:
  - **Challenge** = the **shipped** elapsed machinery, unchanged: `useTimerStore`'s per-mission
    banked active time (`accumulatedMs` + live segment), auto-pause on modal/hidden/switch, manual
    pause, best records. No new run logic.
  - **Deadline** = pure **wall-clock**, **no pause**: `remaining = nextOccurrence(HH:MM) − Date.now()`
    with a 1s render tick. It needs **no store run at all** — real time marches toward the deadline
    regardless of modals/page-hidden, so it deliberately ignores the bank/segment/pause machinery.
- **Config vs run-state layering is clean.** `timeMode` is mission _content_ (Firestore, editor-set,
  synced). The transient elapsed _run_ stays per-device in `useTimerStore` (localStorage) as today —
  unused in `deadline`/`freestyle`. Correct layer split, no Firestore writes during a run.
- **Completion "time to spare" reuses the shipped celebration.** Challenge's "to spare" is already the
  `completionWasBest` "New best!" beat. Deadline adds a beat computed from `nextOccurrence − now` at
  100%. Extends the existing completion-celebration component; does not duplicate it.
- **Chrome 87:** `Date.now()`, `setInterval`, and the `Date` constructor (for today-at-`HH:MM`, which
  also gets DST right via local time) are universal. Next-occurrence rollover (now past today's
  `HH:MM` → target tomorrow) and the DST day are the only arithmetic wrinkles. Overtime/"to spare"
  copy needs words → likely a `translations.ts` (unlike today's purely-numeric Timer).

### Approach

Recommended: a **single `timeMode` enum** on the mission, the elapsed Timer **gated** behind
`challenge`, a **derived wall-clock countdown** for `deadline` (no store run, no pause), and a
**mode-aware completion beat** layered on the existing celebration for the "time to spare" reward.
Rejected: composable show-X flags (combinatorial UI, nonsensical combos, re-introduces clutter) and
modelling motivational framing as separate time modes (duplicates the Theme system).

## Options & trade-offs

**Structure (resolved with owner):**

- **Option A — single `timeMode` enum. _(recommended, owner-chosen)_** One D-pad pick presets the
  readout; self-documenting; fits the single readout slot. Con: a mission can't combine treatments —
  acceptable, since the treatments are mutually exclusive anyway.
- **Option B — composable flags** (show timer / show best / show countdown). Flexible for mixed
  reasons, but combinatorial editor UI, nonsensical combos (two timers), and forces the owner to
  assemble a coherent setup from primitives. **Rejected.**
- **Option C — enum + a toggle or two.** Mode plus an independent "show best" / "show countdown".
  Middle ground, more config surface. **Rejected** in favor of the clean enum.

**"Challenge" vs "save time for fun" (resolved):** fold into **one count-up mode**; "time to spare" is
a **completion beat** (owner picked options 1+3), reusing the shipped "New best!" beat — _(chosen)_ ·
keep as two modes that render the same number _(rejected — only the wording differs, which Theme
owns)_.

**Timer always-on vs mode-gated (resolved):** **gate** the elapsed timer + best behind `challenge`
_(owner-chosen)_ · keep it always-on and only add the countdown _(rejected — that is really flags,
not modes)_.

**Timebox (duration budget) mode (resolved):** **defer** to a fast-follow _(owner-chosen — `deadline`
covers the bedtime/leaving cases; prove the mode model first)_ · include in v1 _(deferred; the
original "a set time" idea lands here later)_.

**Default mode (resolved):** **freestyle** for existing + new missions _(owner-chosen — clean
"no pressure unless asked"; deliberately means existing missions go quiet until configured)_ ·
challenge to preserve today's always-on timer _(rejected)_.

**Countdown tone (resolved, carried from the first round):** gentle overtime, no alarm _(chosen)_ ·
red "time's up" _(rejected — stressful, off-principle)_ · stop at zero _(rejected — loses the
"how late" signal)_.

## Verdict & recommendation

**`viable-with-changes`.** Build **one unifying per-mission time model**, not a standalone countdown.
Add an optional **`timeMode`** to the Firestore mission record — **v1 modes `freestyle` · `challenge`
· `deadline`** (timebox deferred), **defaulting to `freestyle`** (absent field ⇒ freestyle ⇒ no
migration). The single mission-time readout under the always-on Clock is **mode-gated**: `freestyle`
shows nothing; `challenge` shows the **shipped** count-up elapsed timer + best (unchanged); `deadline`
shows a **wall-clock countdown** to a configured `HH:MM` that **does not pause** (and hides the manual
pause control), tipping into **gentle overtime** past zero. **"Save time for fun" is not a mode** — it
is a **mode-aware completion beat** (`target − actual`, e.g. "15 min to play before 8 PM"), reusing
the existing completion celebration / "New best!" machinery. Config (Firestore, editor-set) and the
transient elapsed run (localStorage `useTimerStore`) keep their current layer split. One additive
field, no new dependency, no Chrome 87-unsafe API. This is a **real feature** (data model + repo read

- editor UI + write API + seed + the dual time-model display + i18n) → full `/spec → /plan →
/implement`, not a tweak.

## Suggested scope

How the idea changed: from "an optional countdown timer" to **a unified per-mission time model** that
absorbs the shipped Clock/Timer/best and the deadline countdown under one `timeMode`; "time-saving"
reframed as a universal completion beat; timebox deferred; **default `freestyle`** (a deliberate
behavior change — existing missions lose the always-on timer until reconfigured).

**Keep in scope (for `/spec`):**

- Optional **`timeMode`** on `MissionDoc` (`freestyle | challenge | deadline`) + a deadline time for
  `deadline` mode; absent ⇒ `freestyle` (no migration). Exact field shape is `/spec` work.
- **Mode-gate** the elapsed Timer + best: visible only in `challenge`; hidden in `freestyle`/`deadline`.
- **Deadline countdown:** derived wall-clock `remaining = nextOccurrence(HH:MM) − Date.now()`, 1s tick,
  **no run/pause**, manual-pause control hidden, **gentle overtime** past zero.
- **"Time to spare" completion beat:** mode-aware (`target − actual`), reusing the completion
  celebration / "New best!" beat; new copy for the deadline case.
- Editor field in `MissionLevel.tsx` (mode selector + deadline `HH:MM` input), write/validate in
  `api/content/missions.ts`, seed in `db-seed.cjs` / `configuration.json`.
- **i18n** for the new overtime / "to spare" copy (new `translations.ts` as needed).
- Co-located unit tests for the pure logic (next-occurrence, remaining, time-to-spare).
- Doc sync: `docs/05_design.md` (mode-gated aside readout), `docs/06_roadmap.md` (absorb "Optional
  deadline countdown"; note timebox as the fast-follow), `docs/07_data-architecture.md` (new mission
  field), `docs/03_user-scenarios.md` (deadline/bedtime scenario), `docs/development.md` if store/field
  notes change.

**Cut / deferred:** `timebox` (fixed-duration budget) mode — fast-follow; composable show-X flags;
any multi-readout (elapsed + countdown together); per-theme motivational copy (the Theme system owns
framing); animation/polish on the readout.

## Open questions & risks

- [ ] **Exact field shape.** `timeMode` enum + a separate `deadlineTime: 'HH:MM'`, or a discriminated
      union? Validation rules in the write API. Settle in `/spec`.
- [ ] **Deadline display window.** Show the countdown **always while the mission is selected &
      incomplete** (a deadline is meaningful before you even start) or only once in progress? Lean:
      always-while-selected — note it **diverges** from the elapsed timer's start-on-first-check.
- [ ] **Overtime / "to spare" formatting + i18n.** Exact readout strings past zero ("4 min over" /
      "4 min late") and the completion beat ("15 min to play before 8 PM"); which need `translations.ts`.
- [ ] **Next-occurrence / DST / midnight.** Define expected behavior when now is past today's `HH:MM`
      (→ tomorrow) and across a DST day.
- [ ] **Best-time stays challenge-only.** Confirm best records/comparison render only in `challenge`
      (a count-up concept) and the localStorage run is simply unused in `deadline`/`freestyle`.
- [ ] **Default = freestyle regression (accepted).** Existing missions go quiet until reconfigured;
      confirm no migration write is wanted and the editor makes re-enabling timing discoverable.
- [ ] **Editor UX on a D-pad TV.** Pattern for entering a deadline `HH:MM` (single field vs
      hours/minutes) — a design call for `/spec`.
- [ ] **Theme boundary.** Motivational framing ("beat your record" vs "fun earned") belongs to the
      Theme system, not the time model — keep this feature's copy minimal so Theme isn't pre-empted.

## Next step

**`/spec`** (reuse short-name `mission-time-modes`) — the structural forks (single enum, gate the
timer, v1 modes `freestyle`/`challenge`/`deadline`, default freestyle, time-saving as a completion
beat, gentle tone) are resolved; the field shape, display-window, formatting/i18n, next-occurrence
edges, and editor UX are spec/plan work. This spike graduates; it does not write the spec. It
**supersedes** the standalone "Optional deadline countdown" roadmap item.

## References

- Roadmap entry this absorbs: [`docs/06_roadmap.md`](../docs/06_roadmap.md) — "Optional deadline
  countdown" (and the shipped "Mission timer display" / "Best completion time" / "Manual timer
  pause/resume" it unifies with).
- Prior timer spikes/specs this builds on: [`07_spike_mission-timer.md`](07_spike_mission-timer.md)
  (deadline countdown explicitly cut from that v1) · [`08_spike_timer-manual-pause.md`](08_spike_timer-manual-pause.md)
  · [`docs-journal/19_spec_mission-timer.md`](../docs-journal/19_spec_mission-timer.md).
- Mission record + field path:
  [`src/database/missionRepository.ts`](../src/database/missionRepository.ts) (`MissionDoc`:
  `label`/`youtubeUrl`/`retentionHours`/`objectiveGroupIds`) ·
  [`src/components/ContentEditor/MissionLevel.tsx`](../src/components/ContentEditor/MissionLevel.tsx)
  (where `retentionHours` is edited) · [`src/pages/api/content/missions.ts`](../src/pages/api/content/missions.ts)
  (write/validate) · [`tools/db-seed.cjs`](../tools/db-seed.cjs) / `tools/configuration.json` (seed).
- Shipped timer machinery to reuse/gate: [`src/stores/useTimerStore.ts`](../src/stores/useTimerStore.ts)
  (`runsByMission` bank/segment, `bestByMission`, `completionWasBest`) ·
  [`src/components/Timer/Timer.tsx`](../src/components/Timer/Timer.tsx) (elapsed readout, manual
  pause, page-visibility/modal pause inputs) · placement
  [`src/components/Dashboard/Dashboard.tsx`](../src/components/Dashboard/Dashboard.tsx) (aside: Clock
  then Timer).
- Principles & vision shaping the gentle tone and the cooperative framing:
  [`docs/04_design-principles.md`](../docs/04_design-principles.md) (TV First · Cooperative Not
  Competitive) · [`docs/01_vision.md`](../docs/01_vision.md) (success-metric #2: routine completion
  time decreases over time). Motivational copy boundary: the roadmap **Theme system**
  (per-theme status vocabulary).
- Browser support: `Date.now()` / `setInterval` / `Date` constructor — universal, below the Chrome 87
  floor; no new dependency.
