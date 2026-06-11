# <Change name> — Tweak

> **Artifact:** `NN_tweak_<short-name>.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** <name> · **Completed:** YYYY-MM-DD

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Written at close-out; keep it terse and factual. Claims must
trace to the commit. For anything bigger, the full `/spec` → `/plan` → `/implement` pipeline and
its artifacts apply instead.

## What & why

The change in one or two lines — what was requested and the problem it solves. Note any scope
edge worth recording (what was explicitly left out).

## Approach

The brief plan as built: the decision(s) taken and the layers touched
(Firestore → repository → store → component → API route). One short paragraph or a few bullets.

- ...

## Changes

Files added or modified (paths), grouped by area. Include any docs synced in the same change.

- ...

## Verification

Gate + behavior result: `npm run ci` / `npm run build` outcome, and any preview / TV check (or
what still needs real-TV confirmation). State plainly what passed.

## Commit

`<sha> — <subject>`.
