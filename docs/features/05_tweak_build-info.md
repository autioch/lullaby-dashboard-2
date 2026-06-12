# Build info in settings — Tweak

> **Artifact:** `05_tweak_build-info.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one.

## What & why

Show build provenance (commit + build datetime) in the settings panel (`AppOptions`), so it's
possible to tell which build is running on the TV. Scope edge: commit + build time only — no
branch or package version, no client-side date logic.

## Approach

- Capture the stamp in `astro.config.mjs` at config load: short commit (prefers Netlify's
  `COMMIT_REF`, falls back to `git rev-parse --short HEAD`, then `'unknown'`) and a pre-formatted
  UTC build time string. Inject both as `__BUILD_COMMIT__` / `__BUILD_TIME__` via Vite `define` so
  they're baked into the client bundle — no env-var setup, no PUBLIC\_ prefix.
- Known trade-off of the `define` approach: in dev the timestamp is the dev-server start, not a
  real build; on Netlify the build runs once so both values are accurate.
- Declare the two globals in a new `src/env.d.ts` (also brings in `astro/client` types).
- Render a dimmed, small, centered line at the bottom of the `AppOptions` panel via `Typography`
  with a new interpolated `appOptions.buildInfo` key (en/pl). No store/repo/Firestore involved.

## Changes

- `astro.config.mjs` — compute commit + build time; add `vite.define` for `__BUILD_COMMIT__` /
  `__BUILD_TIME__`.
- `src/env.d.ts` — new; declares the two injected globals.
- `src/components/AppOptions/AppOptions.tsx` — render the build-info `Typography` line.
- `src/components/AppOptions/translations.ts` — add `buildInfo` key (en/pl) with `{commit}` /
  `{time}` placeholders.
- `src/components/AppOptions/AppOptions.css` — new; `.c-app-options__build` dimmed/spaced style.

## Verification

- `npm run ci` (astro sync + tsc + eslint incl. `compat/compat` + prettier) — green.
- Preview (SmartTV path): opened the settings panel; the line rendered
  `Wersja e8c79ec · 2026-06-11 23:57 UTC` — commit matched HEAD, color `#888`, small, centered.
  Timestamp was the dev-server start, as expected for the `define` approach; real build time will
  appear on the Netlify build.

## Commit

`<sha> — feat(info): show build commit and time in settings`.
