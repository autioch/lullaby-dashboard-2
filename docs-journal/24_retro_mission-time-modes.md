# Mission time modes — Retrospective

> **Artifact:** `24_retro_mission-time-modes.md` · **Roles:** Product Owner (lead) · all roles weigh in
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-13
> **Related:** [spec](24_spec_mission-time-modes.md) · [plan](24_plan_mission-time-modes.md) · [implement](24_implement_mission-time-modes.md) · [adjust](24_adjust_mission-time-modes-r1.md)

Review of the whole iteration — spike → spec → plan → implement → adjust.

## Signals

- **Plan fidelity:** high. 8 plan steps → 8 commits in order, tree green at each
  (`2f447be`…`9a0ab59`), no reorders, no skipped steps. The implementation record's
  _Skipped / deferred_ are all spec/plan-sanctioned (expiry-pruning, evening-before-morning
  limitation, `L5` real-TV, owner-run reseed) — no in-scope functionality dropped.
- **Churn:** 1 adjustment round (r1), 2 CRs, both **design changes** on the interim UI (overtime
  shown as signed `-time` instead of `{time} over`; hour/minute steppers in one row). CR-1 reversed
  the spec's stated overtime format (`{time} over`); minor, interim-UI polish.
- **Review caught real bugs:** `/code-review` in `/implement` found 2 latent defects (Stepper
  underflow on non-5-aligned minutes; deadline completion not sticky on uncheck), fixed in
  `ad75033` before close-out — the gate working as intended, not churn.
- **Loose ends:** runtime-only checks deferred to unit tests + reviewed logic (freeze-on-completion,
  "to spare" banner, late-no-banner); `L5` real-TV (overtime contrast, D-pad focus); owner-run
  `db:seed`; a lingering inert `deadlineTime` left on the Rano doc from QA drives.

## Doc reconciliation

Repo-wide audit against current code (doc-sync map). Per-commit syncs held; the full pass found one
drift:

- `docs/06_roadmap.md` — **Mission time modes** was still `[ ]` in the backlog though shipped. Moved
  to the shipped "Dashboard design" cluster as `[x]` with a present-tense description (overtime now a
  signed `-time`; `timebox` noted as the fast-follow). `05_design.md` and `07_data-architecture.md`
  were already current (per-commit syncs). No other durable-doc drift.
- Added two backlog items **at the owner's request** during this retro (see Decision):
  - Tooling & infra — **Safe QA fixtures for TV-flow drives** (throwaway/seeded test data so `L2`
    doesn't mutate the live dev Firestore; exercise the deferred runtime checks end-to-end).
  - Process & pipeline — **Iterate the review gate inside `/implement`** (make `L3` a
    review → fix → re-review loop rather than a single pass).

## What went well

- **Plan held exactly** — 8 steps, 8 ordered commits, green throughout; bottom-up sequencing
  (types/helpers → store → component → transport → editor → seed) never broke the tree.
- **Spec was a real contract** — the hard calls (deadline target = today's `HH:MM` signed; frozen
  result in `useTimerStore`) were resolved in `/plan` and written back to the spec before code; next
  to nothing leaked into `/adjust`.
- **Review gate earned its keep** — 2 genuine latent bugs caught and fixed pre-close-out (`ad75033`).
- **Reuse over duplication** — `formatElapsed` exported rather than re-implemented; `Stepper`
  generalized (`step`/`max`/`wrap`/`format`) rather than a special-case deadline control.

## What to improve

- **Runtime-only acceptance criteria left unconfirmed live** — freeze-on-completion, the "to spare"
  banner, and late-no-banner were validated by unit tests + reviewed logic, not by an end-to-end
  drive. Owner's call: this is a future testing/dev-DB concern, now on the roadmap.
- **QA mutated the live dev DB** — TV-flow verification toggled mission modes directly in the owner's
  Firestore (left an inert `deadlineTime` on Rano). Needs a throwaway fixture — now on the roadmap.

## Bottom line

A clean, faithful iteration: plan held, spec held as a real contract, the review gate caught the
bugs that mattered. The only open items are verification gaps (deferred runtime checks, real-TV),
not design or code debt.

## Team feedback

- **Product Owner (owner's own read):** "Lane confusion was my mistake, not the process" — the
  `/tweak`→`/adjust` restart was an owner mis-pick, **not** a pipeline flaw, so it is explicitly
  **not** recorded as a process problem. Testing and the dev-DB pollution are real but "will be
  addressed in the future" → captured as roadmap items rather than acted on now. Wants the review
  step to **iterate inside `/implement`** (review → fix → re-review). Overall: "the iterations are
  getting smoother and smoother."

## Suggested next actions

- **`/spec` the `timebox` mode** — the explicit fast-follow named in the spec and roadmap
  (fixed-duration budget). The natural next feature when the owner wants it.
- **Verification walk + `L5` real-TV** — confirm the deferred runtime criteria and overtime
  contrast / D-pad focus on the deployed SmartTV (no code).
- **Reseed (`db:seed`)** — demo all three modes on a clean DB and clear the lingering Rano
  `deadlineTime` (owner-run; destructive).
- **Roadmap (done this retro):** QA-fixtures item + review-iteration-in-`/implement` item added.

## Decision

Owner's decision, recorded this retro:

- **Ship as is** — close the iteration; the feature is done and the loose ends are acceptable.
- **Roadmap entries added** (owner-directed): "Safe QA fixtures for TV-flow drives" (Tooling &
  infra) and "Iterate the review gate inside `/implement`" (Process & pipeline) — to be addressed in
  future iterations, not now.
- The `/tweak`→`/adjust` restart is noted as an owner mis-pick, **not** a process issue.
