# Timer manual pause — Retrospective

> **Artifact:** `22_retro_timer-manual-pause.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13
> **Related:** [spike](../docs-spikes/08_spike_timer-manual-pause.md) · [spec](22_spec_timer-manual-pause.md) · [plan](22_plan_timer-manual-pause.md) · [implement](22_implement_timer-manual-pause.md)

Review of the iteration — spike → spec → plan → implement — run in one pass. This one deliberately
**reverses** spike 07's "no manual controls" call, so the spike earned its place validating the
reversal.

## Signals

- **Plan fidelity:** built exactly as planned — store → icons → component → validate. No in-flight
  spec/plan rewrites; the one mid-plan correction (drop the `lsWrapper` bump) was caught _in_ the plan
  before any code, not during the build.
- **Churn:** **zero** adjustment rounds. Three upfront forks in the spike (use case, affordance, icon
  semantics) plus the spec's resolved open questions left nothing open for the build.
- **Loose ends:** `L5` real-TV (lone-focusable-Timer + reveal-on-focus on the actual remote). Hover
  reveal verified by CSS + DOM, not a synthesized pointer hover.

## Doc reconciliation

- `docs/05_design.md` — Timer entry now documents click/Enter pause-resume, the hover/focus action
  icon, and the paused watermark. Current.
- `docs/06_roadmap.md` — new done entry under Dashboard design (Manual timer pause/resume).
- `docs/development.md` — store list still names `useTimerStore` (unchanged); accurate. No other
  durable-doc drift.

## What went well

- **The spike caught the real risk and the build never hit it.** The opening idea was hover-driven;
  the spike's grounding (the dashboard has _zero_ focusable elements — every control is a click-`div`)
  exposed that hover can't be load-bearing on mixed input. Reshaping to a `<button>` with
  hover-**or**-focus reveal + a persistent watermark happened in the spike, so the build was
  mechanical.
- **The store stayed clean.** Manual pause folded in as one input to the already-derived `running`
  (`&& !userPaused`); the wall-clock bank/segment math in `setRunState` did the actual pausing for
  free. No new time logic — the spike-07 store design keeps absorbing features.
- **No `lsWrapper` bump.** Treating `userPaused` as an undefined-tolerant optional field preserved
  existing runs and the feature-20 best records — a bump would have silently wiped bests on deploy.
  Worth catching in the plan rather than after.
- **Verified the load-bearing paths live** — toggle, persisted flag, paused watermark opacity, and
  sticky-across-reload all confirmed on the preview.

## What to improve

- **Hover reveal still isn't drivable.** Same gap as the records retro's "New best!" beat — the
  pointer-hover state can't be synthesized cleanly in the preview, so it leaned on reading the CSS
  rules + DOM. A pointer-hover harness (or accepting CSS-rule assertions as sufficient) would close
  this honestly.
- **First focusable dashboard control = a real-TV unknown.** The Timer is now the only thing a D-pad
  can focus on the dashboard. Whether that's a useful entry point or an odd lone stop is exactly the
  kind of thing only real hardware answers — it sharpens the case for the standing `L5` sweep.
- **The D-pad-vs-code contradiction is now load-bearing.** CLAUDE.md claims "D-pad-operable" but the
  app is pointer-only in practice. This feature half-addresses it (one focusable control); worth a
  deliberate decision someday on whether the dashboard commits to D-pad or to pointer.

## Bottom line

Clean, zero-churn iteration that knowingly reverses an earlier decision — and the reversal is the
right call, because auto-pause genuinely can't cover "we walked away but left it up." The spike did
the hard thinking; the build was small and the store barely grew.

## Team feedback

- **Product Owner:** This is the one manual control worth having. The watermark sells it — you can
  see at a glance that the clock is stopped, which is the whole point when nobody's at the screen.
- **Tech Lead:** The store keeps paying dividends — every timer feature so far (records, now pause)
  is one input to an existing derivation, not new machinery. Catching the no-bump call protected the
  bests.
- **Developer:** Mechanical once the spike settled the affordance. The only fiddly bit was the CSS
  state matrix (running/paused × idle/hover) — kept it to a few explicit rules rather than getting
  clever.
- **Design:** Reveal-on-interaction + watermark keeps the always-visible Timer uncluttered while
  making it discoverable. Action-on-reveal icons match what users expect from a media control.

## Suggested next actions

- **Batch the standing `L5` real-TV sweep** — now with a sharper reason: the Timer is the first
  focusable dashboard control; confirm D-pad focus + reveal-on-focus behave on the real remote.
- **Decide the input-model question** (D-pad vs pointer) before building more interactive dashboard
  controls, so the next one isn't another lone special case.
- Otherwise: ship as is.

## Decision

- _(owner to record)_
