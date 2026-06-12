# Move unbuilt design from 05_design to the roadmap — Tweak

> **Artifact:** `08_tweak_design-roadmap-split.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one.

## What & why

`docs/05_design.md` documented features that aren't built (whole **Theme System**, mission timer,
best-times/records, deadline countdown, completed-objective reorder/collapse), so it didn't
describe current state. Verified against code: no theme strings anywhere in `src/`; `useTimerStore`
is scaffolded but wired only to Restart (`startTimer`/`completeRun` never called), so timer,
best-times, and a distinct completion celebration are effectively unbuilt; only per-objective
`colors` exist as "theming". Moved the unbuilt design into `06_roadmap.md` Future and trimmed `05`
to the dashboard as it renders today.

**Scope edges:** docs-only, no code. Owner decisions: _reclassify roadmap to match code_ and _trim
05 to what renders today_. Left out — the unrelated roadmap contradiction that lists
`Authentication` under MVP "Excluded" while an auth gate exists (not part of this move).

## Approach

- **`05_design.md`** — rewritten to describe only the live dashboard (`Dashboard.tsx`): main
  objective list (toggle, ✓, `c-objective--checked` de-emphasis, per-objective color), aside
  (video/clock/menu), footer progress bar (track+fill, generated status message, count), the three
  overlays, and per-objective-color theming. Forward-links the moved design to the roadmap.
- **`06_roadmap.md`** — removed the false MVP `[x]` items (Themes, Mission timer, Best times,
  Completion celebration); added `[x] Per-objective colors` and `[x] Content editing` to reflect
  what's actually shipped; added a **Dashboard design (specced, not yet built)** subsection under
  Future holding all relocated items (theme vocabularies preserved verbatim), each annotated with
  its real current state.
- No layering touched (docs only). Cross-doc links checked: all references to these two files are
  file-level, not anchor-level; the new intra-roadmap anchor link resolves.

## Changes

- `docs/05_design.md` — full rewrite to current state.
- `docs/06_roadmap.md` — MVP "Included" reclassified; new Future subsection with the relocated
  design.

## Verification

- **L0 gate** (`npm run verify` → `npm run ci`): green — tsc + ESLint + Vitest + Prettier `--check`
  all pass (Prettier covers the edited markdown).
- **Internal links:** the new `05 → 06#dashboard-design-specced-not-yet-built` and the MVP-note
  back-link resolve to the new heading; no other doc references the changed `05`/`06` headings.
- **No doc-vs-code contradiction introduced:** every relocated item traces to a code check (no
  theme strings in `src/`; `useTimerStore` callers = Restart only).
- L1/L2/L4 not applicable (docs-only, no runtime surface). No `L5` real-TV items.

## Commit

`<sha> — docs(design): move unbuilt design from 05_design to roadmap Future`.
