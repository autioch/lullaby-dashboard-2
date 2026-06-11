# <Feature name> — Implementation

> **Artifact:** `NN_implement_<short-name>.md` · **Roles:** Senior Fullstack React/Node.js Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** <name> · **Completed:** YYYY-MM-DD
> **Related:** [spec](NN_spec_<short-name>.md) · [plan](NN_plan_<short-name>.md) · [adjust](NN_adjust_<short-name>-r1.md) · [reconcile](NN_reconcile_<short-name>.md) · [retro](NN_retro_<short-name>.md)

A concise, durable record of what an `/implement` run actually did, written at close-out by the
**Senior Fullstack Developer** who executed the plan. Other skills read it, so keep each section
terse and factual: claims must trace to a commit or to the plan's step state. No filler, no
history prose.

## Outcome

One or two lines: what now works that didn't before — the shippable result.

## Added

New files / modules / capabilities introduced (paths). What didn't exist before.

- ...

## Changed

Existing code / behavior / docs modified, grouped by layer or area (paths).

- ...

## Skipped / deferred

Plan or spec items **not** done, and why — deferred steps, descoped items, checks that need real
TV hardware, follow-ups carried forward. Write `None` if the build is fully complete.

- ...

## Verification

Gate + acceptance result: `npm run ci` / `npm run build` outcome, acceptance-criteria status, and
which review skills ran (`/code-review`, `/security-review`). State plainly what passed, what is
pending.

## Commits

One line per step: `<sha> — <subject>`.

- ...
