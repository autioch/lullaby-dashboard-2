# Reset best time in the mission editor — Tweak

> **Artifact:** `21_tweak_reset-best-in-editor.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-13

## What & why

The best-time reset shipped in [best-run](20_spec_best-run.md) lived in the **Settings** panel,
scoped to the **currently selected** mission. Moved it to the **content editor's mission edit
screen**, scoped to the **edited** mission — so any mission's record can be cleared from its own
edit screen, not just the active one. Shown only when that mission has a best (unchanged conditional).

## Approach

Component layer only — the reset is a local `useTimerStore.resetBest(missionId)` call (no Firestore,
no edit-store/write-API involvement), so it didn't touch the editor's save/pending machinery.

- Removed the reset button + its `missionId`/`hasBest`/`resetBest` wiring from `AppOptions`.
- Added a `resetBest` `ActionButton` (`variant="danger"`, native `confirm()` like Menu Restart) to
  `MissionLevel`, after the mission's Save bar, scoped to the edited `mission.id`, rendered only when
  `bestByMission[missionId]` is set.
- Moved the i18n key `resetBest` from `appOptions` → `contentEditor` (en/pl).

## Changes

- `src/components/AppOptions/AppOptions.tsx` — removed the reset button and timer/mission store wiring.
- `src/components/AppOptions/translations.ts` — removed `resetBest`.
- `src/components/ContentEditor/MissionLevel.tsx` — added the per-mission reset `ActionButton`.
- `src/components/ContentEditor/translations.ts` — added `resetBest` (en/pl).
- `docs/05_design.md` — Settings no longer lists the reset; the content editor's mission screen does.

## Verification

- **L0 gate** — `npm run ci` green (tsc + lint + 67 tests + format). One transient libuv crash on
  Windows on the first run; clean on re-run.
- **L4 knip** — clean.
- **L2 behavior drive** (dev preview): Settings now shows language only (no reset). Opening a
  mission's edit screen ("Rano", which had a seeded best) shows the danger "Wyczyść najlepszy czas"
  button after the Save bar; clicking it (confirm) cleared that mission's best — button vanished,
  `bestByMission` emptied in localStorage, and the dashboard's `Best` line disappeared. No console
  errors.
- **L5 real-TV** — not run; display-only relocation, no expected hardware risk.

## Commit

`93fef41` — feat(content-editor): move reset-best from Settings to each mission's edit screen
