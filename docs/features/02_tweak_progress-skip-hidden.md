# Progress count skips hidden — Tweak

> **Artifact:** `02_tweak_progress-skip-hidden.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one.

## What & why

The progress bar's `total` and `completed` counts included objectives in hidden objective
groups and hidden objectives, while `ObjectiveList` doesn't render those. The footer therefore
disagreed with the visible list (e.g. a mission whose items are all hidden showed a non-zero
total). The counts now skip hidden objective groups and hidden objectives, matching what the
user actually sees.

## Approach

- Component-only change in `ProgressBar`; no store/repo/Firestore changes. The store already
  exposes the `objectives` map and each `ObjectiveGroupRec`/`ObjectiveRec` carries `isHidden`.
- `useGetValues` now derives a single `visibleObjectiveIds` list — for each non-hidden group,
  keep objective ids whose record exists and is not hidden — mirroring `ObjectiveList`
  (`group.isHidden`) and `ObjectiveRow` (`!objective || objective.isHidden`). `total` is its
  length; `completed` tallies `checkedKeys` over the same list.

## Changes

- `src/components/ProgressBar/ProgressBar.tsx` — read `objectives` from the store; compute
  `total`/`completed` from `visibleObjectiveIds` (skips hidden groups + hidden objectives).

## Verification

- `npm run ci` — green (tsc + eslint incl. `compat/compat` + prettier).
- Preview drive (SmartTV-class app, dev server): for every mission `footerTotal` equalled the
  number of rendered `.c-objective` rows — Wieczorem 21/21, Przed wyjazdem 21/21, Rano 20/20,
  and Sprzątanie `0 / 0` despite having 2 (fully hidden) groups. Checking 2 visible objectives
  in Rano yielded `2 / 20 (10%)`, confirming `completed` counts only visible checked items.

## Commit

`<sha> — fix(progress): skip hidden objectives and groups in progress count`.
