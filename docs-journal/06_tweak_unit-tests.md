# Vitest unit-test layer (Phase 1) — Tweak

> **Artifact:** `06_tweak_unit-tests.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

## What & why

The project had **no automated tests** — the gate (`tsc`/lint/format) proved nothing about logic, and
the content-editing retro showed logic bugs (e.g. random-logout-on-save) slipping through to manual
testing. This adds a **Phase-1 Vitest unit layer over logic only** — store actions, server helpers,
utils — wired into the gate as a new step, making the gate a clear sequence:
`ci:ts → ci:lint → ci:test → ci:format`.

**Explicitly out of scope** (deferred, owner's call): component tests (jsdom/RTL) and Playwright E2E
over the user scenarios `S1`–`S8` (the latter needs a Firestore emulator + auth). Two non-tests were
**not** written because the behaviour they'd assert does not exist in the code: server-side session
**expiry** (`isValidSessionToken` only verifies the HMAC; expiry is the cookie `maxAge`) and **30-ID
hydration batching** (repositories subscribe to whole collections — no `in`-query chunking).

## Approach

- **Runner:** Vitest 4 (reuses the Vite/Astro toolchain). Tests run in **Node**, so they're off the
  Chrome 87 floor — same as the API routes. `vitest.config.ts` maps the `@/*` alias and sets dummy
  `PUBLIC_FIREBASE_*` + `SESSION_SECRET` so module-load side effects (`db.ts`, session helpers) don't
  throw.
- **Layering:** to test the progress math without React, extracted the pure `computeProgress()` from
  `ProgressBar`'s in-component hook into `src/stores/missionProgress.ts`; the component now calls it
  inside `useMemo` (behaviour-preserving, and logic moves out of the component per the layering rule).
- **Isolation:** store tests `vi.mock` the four repositories and `@/utils/ls`, so importing the store
  never pulls in Firebase; the localStorage test stubs `window` (no jsdom dependency).
- **Gate:** `ci:test` (`vitest run`) added to `npm run ci`; `test` / `test:watch` for development.
  Test files excluded from `compat/compat` (Node, not the browser). Co-located `*.test.ts`.

## Changes

- **Added — config:** `vitest.config.ts`; `vitest` devDependency.
- **Added — tests (`*.test.ts`, 42 cases / 6 files):** `src/utils/object`, `src/utils/ls`,
  `src/pages/api/_utils` (session sign/verify/tamper/malformed/skip-auth), `src/pages/api/content/_shared`
  (readers, `readIdList`, `reorderById`), `src/stores/missionProgress`, `src/stores/useMissionStore`
  (toggle/hydrate/reset/select/setColors).
- **Added — logic:** `src/stores/missionProgress.ts` (pure `computeProgress`).
- **Changed — code:** `src/components/ProgressBar/ProgressBar.tsx` (uses `computeProgress`; dead
  in-component hook removed).
- **Changed — config:** `package.json` (`ci:test`/`test`/`test:watch` scripts, `ci` chain);
  `eslint.config.ts` (`*.test.ts` off `compat/compat`).
- **Changed — docs (doc-sync):** `qa.md` (unit tests folded into `L0`, step-by-step gate, status of
  deferred test tiers); `development.md` (command table + tests convention); `CLAUDE.md` (gate story).

## Verification

- `npm run ci` — green: `ci:ts` (astro sync + tsc), `ci:lint`, **`ci:test` (42 passed / 6 files)**,
  `ci:format`.
- `npm run knip` — clean (no dead code).
- **L2 not run:** the only UI-touching change is the `ProgressBar` refactor, which is
  behaviour-preserving and fully covered by `missionProgress` tests + types — no rendered-output
  change to drive. Nothing flagged for real-TV (`L5`).

## Commit

`<ship commit>` — feat(test): add Phase-1 Vitest unit-test layer and ci:test gate step
