# <Feature name> — Implementation Summary

> Spec: [NN-name.md](NN-name.md) · Plan: [NN-name.plan.md](NN-name.plan.md)
> Owner: <name> · Completed: YYYY-MM-DD

A concise, durable record of what an `/implement` run actually did — written at close-out from
this template. Other skills read it, so keep each section terse and factual: claims must trace to
a commit or to the plan's step state. No filler, no history prose.

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
