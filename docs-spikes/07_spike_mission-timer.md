# Mission timer — Spike

> **Artifact:** `docs-spikes/07_spike_mission-timer.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-13
> **Graduated to:** _(fill once/if this idea proceeds to `/spec`)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

A `useTimerStore` already exists but is **dead** (never started, never shown). Is an automatic
mission-duration display worth building, what lifecycle/pause rules survive the TV-first / Chrome 87
reality, and should "fastest run" records ride along — without recycling the old, unmaintainable
code?

## Idea as posed

> Add a UI element that displays how much time is spent on the mission. Old code didn't work and was
> hard to maintain — discard it before a new attempt. The timer should **start when the first item is
> checked**, **pause when the launchpad isn't displayed / is closed**, and **pause when the mission
> selection changes** (other conditions to research). Maybe a **manual pause/start**? Maybe a
> **"fastest run"** — how does this work in games? Not competitive (no comparison to others), but
> **encouraging to do things faster, saving time for leisure**. UI: maybe between the current time and
> the options, or closer to the progress bar — keep it from cluttering the UI.

## Findings

### Product & common sense

Strong fit, and it lands on **two stated product goals**:

- Vision success-metric #2 is literally _"Routine completion time decreases over time"_ — a visible
  duration is the most direct way to make that metric felt.
- The _Cooperative Not Competitive_ principle **prefers** "Team records / Family accomplishments"
  and only bans leaderboards / rankings / individual scores. So the owner's "fastest run, but not
  competitive" instinct is **on-principle** when framed as the household beating its own past — not a
  red flag.

Standard pattern in chore/habit apps (a session timer; "personal best" in habit trackers). The
**encourage-faster / save-time-for-leisure** motivation is delivered in two doses: the **live ticking
timer alone** gives most of it (you can see time passing), and a **household best** adds the gentle
"beat your last run" target. The owner chose to ship the first dose now and defer the second — keeping
v1 minimal per the interim-UI / minimize-polish rule.

The roadmap already splits this into two items — **"Mission timer display"** and **"Best completion
time / records"** — so deferring records is the existing plan, not a new cut.

**The old code is safe to discard.** `useTimerStore` persists `timerRunsByList` / `fastestRunsByList`
to localStorage and exposes `startTimer` / `pauseTimer` / `resumeTimer` / `completeRun`, but **nothing
calls them** — `checkFinished` is commented out and only `resetTimerState` is wired (Menu → Restart).
No behavior depends on it; a from-scratch store is a clean replacement, not a risky migration.

### UX standards

TV-first reality drove the shape:

- **Fully automatic — no manual pause/start.** On a 10-foot, D-pad UI a manual control is clutter and
  an extra focus target for little gain in a family routine. Considered and **cut** (owner). The
  lifecycle is entirely implicit.
- **Always-visible readout in the aside, next to the Clock.** Chrono-adjacent placement reads as
  ambient time info and doesn't compete with the footer progress messaging. Always rendered: `00:00`
  before a run, ticking during, frozen final after completion. (Owner picked this over a
  near-progress-bar slot and over show-only-when-running.)
- **Large, high-contrast, glanceable.** `MM:SS`, rolling to `H:MM:SS` past an hour; readable at 3–5 m.
- **Stop & freeze at 100%.** On completion the timer stops and holds the run's final duration — a
  clean "mission took X" result, and the natural value a later best-time record would capture.

### Technical viability

Cleanly viable on the stack and the Chrome 87 floor — no library, no Firestore, no compat risk:

- **Wall-clock elapsed, not tick-counting.** Derive elapsed from `Date.now()` deltas plus accumulated
  paused time; a 1s `setInterval` only triggers the re-render. Robust against timer throttling and
  drift. `Date.now()` / `setInterval` are universal.
- **Pause when covered or hidden** via the **Page Visibility API** (`document.visibilityState` /
  `visibilitychange`, Chrome 33+, well below the floor) plus the existing `useControlsStore` modal
  flags (`isAppOptions` / `isMissionSelect` / `isContentEditor`) to detect a covered launchpad.
- **Per-mission run, persisted to localStorage** via the existing `lsWrapper` pattern — keyed by
  `missionId`, exactly mirroring how `checkedKeys` / `listExpiryTimestamps` already live in
  `useMissionStore`. Per-device, ephemeral, no data-model or Firestore change. Switching missions
  pauses the current run and resumes the target mission's accumulated time.
- **Reset** already flows through `resetTimerState` (Menu → Restart) — the new store keeps that seam.
- **Start hook** is the first check of a run, observable from `toggleObjective` /
  `computeProgress` in the mission store; no new plumbing into components (logic stays in the store).

No Firestore read/write, no data-model change, no new dependency, no Chrome 87-unsafe API.

## Options & trade-offs

**Records / "fastest run" (resolved with owner):**

- **Option A — live timer only in v1; records as a fast-follow. _(recommended, owner-chosen)_**
  Smallest, least clutter; the live timer already nudges "go faster". Records stay the separate
  roadmap item. Con: the "beat your best" nudge isn't delivered until the follow-up.
- **Option B — timer + household best now.** Fuller motivation in one go, on-principle as a family
  record. **Deferred (owner)** — more scope (persist best, compare on completion, "new best!" moment)
  against the minimize-polish floor.
- **Option C — timer, shaped records-ready.** Build the timer but design the run-completion shape so
  records bolt on without rework. **Folded into A** — the frozen-final value is already the record's
  natural input; no extra work needed now.

**Manual controls:** Fully automatic _(owner-chosen)_ · manual pause/start _(rejected — clutter + extra
state on a D-pad TV)_.

**Placement:** Always-visible in the aside by the Clock _(owner-chosen)_ · near the progress bar
_(rejected — competes with progress messaging)_ · show-only-when-running _(rejected — owner wants it
always present)_.

**Completion behavior:** Stop & freeze final time _(owner-chosen)_ · keep counting past 100%
_(rejected — the number drifts past the real completion time)_.

**Old store:** Discard and rebuild _(owner-chosen, and safe — the store is dead code)_ · refactor in
place _(rejected — nothing wired, no value in salvaging)_.

## Verdict & recommendation

**`viable-with-changes`.** Discard the dead `useTimerStore` and build a fresh, minimal timer store:
a **per-mission run** keyed by `missionId`, persisted to **localStorage** (mirroring the mission
store's pattern), with **wall-clock-derived elapsed** and a 1s render tick. **Fully automatic
lifecycle:** start on the first objective check of a run; pause when the launchpad is covered (any
modal open), the page is hidden (`visibilitychange`), or the mission is switched; **stop and freeze
the final duration at 100%**; reset on Restart. **UI:** a small, always-visible readout in the aside
next to the Clock (`00:00` → ticking → frozen final), `MM:SS` / `H:MM:SS`. **Records / fastest run
are cut from v1** and remain the separate roadmap item; the frozen-final value is the record's natural
input when that follow-up lands. No Firestore, no data-model change, no new dependency, no Chrome 87
risk.

## Suggested scope

**Keep in scope (for `/spec`):**

- A **new** minimal timer store replacing `useTimerStore`; per-mission run in localStorage via
  `lsWrapper`; wall-clock elapsed + 1s render tick.
- Automatic lifecycle: start on first check; pause on covered launchpad (modal flags) / page-hidden
  (`visibilitychange`) / mission switch; stop+freeze at 100%; reset on Restart.
- Always-visible readout in the aside beside the Clock; `MM:SS` rolling to `H:MM:SS`; TV-readable.
- Co-located unit tests for the store's pure lifecycle/elapsed logic (tests-are-part-of-the-change).
- Doc sync: `docs/05_design.md` (aside now includes a timer), `docs/06_roadmap.md` (mark "Mission
  timer display" done), `docs/03_user-scenarios.md` if a timer behavior scenario is added,
  `docs/development.md` store list note if the store name/shape changes.

**Cut from scope:** best-time / fastest-run records, "new best!" moment, persistence of a best;
manual pause/start controls; any Firestore or data-model change; any shared/cross-device timer state;
deadline countdown (separate roadmap item); animation/polish on the readout.

## Open questions & risks

- [ ] **Resume vs. restart on re-entry.** When re-opening a partially-done mission, does the timer
      resume the stored accumulated time or start fresh? (Lean: resume — the run is per-mission and
      paused, not ended.) Settle in `/spec`.
- [ ] **Expiry coupling.** Should a mission's frozen/accumulated time clear when its
      `listExpiryTimestamps` entry expires (same lifecycle as `checkedKeys`)? Likely yes for
      consistency — confirm in `/spec`.
- [ ] **First-check detection.** Define "first item checked of a run" precisely (first check when the
      run is at 0 / not yet started), including the un-check-everything-then-re-check edge.
- [ ] **Idle/clock-skew display.** Format rules at `00:00`, past one hour, and on system clock changes
      while paused — name the expected readout in `/spec`.
- [ ] **Records follow-up shape (accepted debt).** The deferred best-time item will read the frozen
      final; no wiring now, but `/spec` should keep that value cleanly accessible.

## Next step

**`/spec`** (reuse short-name `mission-timer`) — the product forks (records deferred, automatic-only,
placement, completion behavior, discard-and-rebuild) are resolved; the resume/expiry/first-check
mechanics and format edges are spec/plan work. This spike graduates; it does not write the spec.

## References

- Roadmap entries: [`docs/06_roadmap.md`](../docs/06_roadmap.md) — "Mission timer display" and
  "Best completion time / records" (separate items).
- Dead code under review: [`src/stores/useTimerStore.ts`](../src/stores/useTimerStore.ts)
  (`startTimer` / `pauseTimer` / `resumeTimer` / `completeRun` / `resetTimerState`; `checkFinished`
  commented out) · only consumer [`src/components/Menu/Menu.tsx`](../src/components/Menu/Menu.tsx)
  (Restart → `resetTimerState`).
- Mission state to hook into: [`src/stores/useMissionStore.ts`](../src/stores/useMissionStore.ts)
  (`toggleObjective`, `checkedKeys`, `listExpiryTimestamps`, `lsWrapper` pattern).
- Modal/visibility flags for pause: [`src/stores/useControlsStore.ts`](../src/stores/useControlsStore.ts)
  (`isAppOptions` / `isMissionSelect` / `isContentEditor`).
- Mount point / placement: [`src/components/Dashboard/Dashboard.tsx`](../src/components/Dashboard/Dashboard.tsx)
  (`c-dashboard__aside` holds `VideoEmbed` · `Clock` · `Menu`).
- Principles & vision that shaped the verdict:
  [`docs/04_design-principles.md`](../docs/04_design-principles.md) (TV First · Cooperative Not
  Competitive — prefers team/family records) · [`docs/01_vision.md`](../docs/01_vision.md)
  (success-metric #2: routine completion time decreases over time).
- Browser support: Page Visibility API (`visibilitychange` / `document.visibilityState`) — Chrome
  33+, below the Chrome 87 floor; `Date.now()` / `setInterval` — universal.
