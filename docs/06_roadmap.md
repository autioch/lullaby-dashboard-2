# Roadmap

The prioritized backlog: every candidate change, grouped by type of change.

> **`/steer` maintains this doc** as its single writer. Within each group, items are ordered by
> priority (top = pick next); `/steer` adds new items, reprioritizes, and at the top of each loop
> marks shipped picks `[x]` (reconciled against `docs-journal/`). Ordering _is_ the priority
> signal — no per-item estimates. The order things were actually built, and why, lives in
> `docs-journal/`.

## Core dashboard

The shipped MVP — the working dashboard.

- [x] Mission selection
- [x] Objective completion
- [x] Progress tracking
- [x] Remaining objectives (completed are de-emphasized in place)
- [x] Status messages
- [x] Per-objective colors
- [x] Content editing (missions / groups / objectives)

## Dashboard design (specced, not yet built)

Specified for the dashboard but not implemented — relocated from `05_design.md` so that doc
describes only the current UI.

- [x] **Completion celebration** — a distinct 100%-complete moment (today only the "done" status
      message marks completion).
- [x] **Completed-objective behavior** — move completed objectives to the bottom and collapse them
      (today they're only de-emphasized in place).
- [ ] **Mission-name header** — show the active mission's name on the dashboard.
- [ ] **Theme system** — presentation-only skins that never alter mission logic, each with its own
      status vocabulary. Initial themes:
  - Space — Mission Control · Crew Boarding · Launch Ready · Orbit Achieved
  - Minecraft Adventure — Village Preparation · Supplies Ready · Entering Cave · Expedition Complete
  - Pirate Voyage — Crew Boarding · Raise the Sails · Leaving Port · Treasure Expedition Complete
- [x] **Mission timer display** — show mission duration (always-visible readout under the Clock;
      auto start/pause/freeze, per-mission `useTimerStore`).
- [x] **Best completion time / records** — per-mission best run shown under the Timer; "New best!"
      beat in the completion celebration; mission-scoped reset in Settings.
- [ ] **Optional deadline countdown**.
- [ ] **User-created themes** — let users author their own skins (extends the predefined Theme
      system above).

## Tooling & infrastructure

- [ ] Add Dependabot
- [ ] Add Sentry
- [ ] Add license + CODEOWNERS
- [ ] Evaluate head/meta management (is React Helmet still relevant under Astro?)
- [x] Add Vitest + a few tests on stores/hydration logic
- [ ] Component-test + end-to-end layers — see qa.md "deferred gaps"

## Features & UX

- [ ] Dark/light mode
- [ ] Checklist: reset a single objective, turning the list into repeatable chores
- [ ] Display a task's completion time (e.g. when the cat got its medicine and can next be fed)
- [ ] Complete the full Firebase authorization
- [ ] AI: auto-suggest groups and objectives from the mission description
- [ ] In-progress state of an objective
- [ ] Animations — _deprioritized: the UI is an interim PoC; skip non-mandatory animation until the
      post-stabilization UI rework_
- [ ] History tracking
- [ ] User accounts
- [ ] Multi-household support
- [ ] Social features
- [ ] Editor code imported dynamically or moved to a separate page

## Product & onboarding

- [ ] Product landing/description page (free)
- [ ] Getting-started guide for new users
- [ ] Default lists for new users
- [ ] Monetization

## Reliability & tech debt

- [ ] **Security-review the shipped auth/session/admin-write code** — the content-editing Step-7
      security pass on brand-new `setSession` / `requireSession` + admin write routes never ran
      (retro [01](../docs-journal/01_retro_content-editing.md), flagged the riskiest open gap).
- [ ] **Real-TV / authenticated persistence walk** — verify live authenticated writes and exercise
      `ReauthPrompt` on the deployed app; dev `PUBLIC_SKIP_AUTH` masks the 401 paths (retro 01).
- [ ] **Remove dead attach/remove code** — strip the retained-but-unused attach/remove API actions +
      repo/store methods (dead since content-editing R1) once confirmed they aren't returning
      (retro 01).
- [ ] Handle the case where the app is redeployed while a user still has an old version open
- [ ] Hunt down logic living in components or hooks and move it into stores or testable utils

## Process & pipeline

Improvements to the feature pipeline itself (the `/spec`→`/plan`→`/implement`→`/adjust`→`/retro` commands), surfaced in the feature 01 retro.

- [ ] **Lighten the workflow for small / interim-UI changes** — add lane-selection guidance (`/tweak` vs the full `/spec`→`/plan`→`/implement` pipeline) and record the interim-UI default (UI is a PoC: minimize polish, skip non-mandatory animation) so small visual changes stop over-spending the pipeline (feature 17 retro)
- [ ] Add a distinct UI/UX design step before/within `/spec` — MVP-first, complexity driven by how the user operates the app (TV-readability lens), not derived from the data shape (today only the "MVP-first" wording exists, not a design pass)
- [ ] Add a distinct, non-skippable security/maintenance step after `/implement` (today it's only a per-trigger `/security-review` reference inside the review step, which can be silently skipped)
- [x] Add a top-of-loop `/steer` step to groom the backlog and pick the highest-value next item (spike [04](../docs-spikes/04_spike_steer-command.md), tweak [13](../docs-journal/13_tweak_steer-command.md))
