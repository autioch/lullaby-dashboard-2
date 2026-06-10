# Agent Instructions for lullaby-dashboard-2

Shared guidance for AI coding agents working in this repository. This file is the **single
source of truth**: GitHub Copilot reads it directly, and Claude Code imports it from the
root `CLAUDE.md` (`@.github/copilot-instructions.md`). Edit guidance here, not in two places.

## Working Style

Be short, concise, and direct. Cut unnecessary words; don't pad or sugar-coat. After git
actions (commit/push), report the result in one line — no summaries, file lists, or
next-step suggestions unless asked.

## Keeping Docs in Sync

Docs are part of the change, not an afterthought. Whenever you change code or config, check
whether any prose needs to follow — and update it **in the same change**, before committing.
Don't let the tree ship with docs that contradict the code.

This file is the **single source of truth** for agent guidance — edit it here, never
duplicate into `CLAUDE.md`. Use this map of "if you touch X, review Y":

| You changed…                                   | Review / update…                                                                                      |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `package.json` scripts                         | [Build & Validation Commands](#build--validation-commands) table                                      |
| `.env` / env vars, auth gate                   | [Environment](#environment)                                                                           |
| `.mcp.json`                                    | [MCP Servers](#mcp-servers-agent-tooling)                                                             |
| `src/` structure, new store/component patterns | [Repository Layout](#repository-layout), [Source layout](#source-layout), [Conventions](#conventions) |
| Data flow, layering, Firestore access          | [Architecture](#architecture) **and** `docs/07_data-architecture.md`                                  |
| Dependencies / stack                           | [Summary](#summary), [Project Type and Technology](#project-type-and-technology)                      |
| User-facing product behavior                   | `README.md`, relevant `docs/` (vision, design, roadmap)                                               |
| A feature's behavior vs. its spec              | the matching `docs/features/NN-*.md` (keep status/behavior current)                                   |

When unsure whether a doc is affected, grep it for the symbol/script/path you changed. If a
doc is now wrong but out of scope to fix, say so explicitly rather than leaving it silently
stale.

## Summary

This repository is **LaunchPad**, a cooperative family dashboard that turns recurring
household routines ("missions") into shared, TV-friendly checklists. It uses:

- Astro 6 for the app shell, server-rendered (`output: 'server'`)
- React 19 for client-side components
- Zustand 5 for state management and business logic
- Firebase / Firestore for data (client SDK + `firebase-admin` on the server)
- BEM-style CSS for styling
- Netlify adapter for deployment at the site root

## Supported browsers

The app must support the browser from a TV with user agent:
`Mozilla/5.0 (Linux; NetCast; U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0 Colt/2.0`

Avoid JS/CSS features unsupported by Chrome 87; prefer widely supported syntax.

## Project Type and Technology

- Project type: server-rendered web app (Astro `output: 'server'` + Netlify adapter)
- Languages: TypeScript, JavaScript, Astro, CSS
- Frameworks: Astro, React
- Runtime/build: Node.js, npm
- Key configs:
  - `package.json` for scripts and dependencies
  - `astro.config.mjs` for Astro settings (Netlify adapter, React, `vite-plugin-svgr`)
  - `tsconfig.json` for TypeScript (`astro/tsconfigs/strict`, `@/*` → `./src/*` alias)

## Build & Validation Commands

Use **npm** with `package-lock.json` (don't switch package managers).

| Command                       | Purpose                                                                                        |
| ----------------------------- | ---------------------------------------------------------------------------------------------- |
| `npm install`                 | Bootstrap; run first on a clean checkout.                                                      |
| `npm run dev`                 | Dev server at http://localhost:4321/                                                           |
| `npm run build`               | Production build (Netlify adapter).                                                            |
| `npm run preview`             | Preview the built app.                                                                         |
| `npm run ci:ts`               | `tsc --noEmit` — type check.                                                                   |
| `npm run ci:check`            | `astro check`.                                                                                 |
| `npm run ci:lint`             | ESLint over `./src` — **check only**, no `--fix`.                                              |
| `npm run ci:format`           | Prettier `--check` over the repo — **check only**, no writes.                                  |
| `npm run ci`                  | Runs `ci:ts` → `ci:check` → `ci:lint` → `ci:format` in one shot. Read-only; safe as a CI gate. |
| `npm run fix:lint`            | ESLint `--fix` over `./src` — dev counterpart to `ci:lint`.                                    |
| `npm run fix:format`          | Prettier `--write` over the repo — dev counterpart to `ci:format`.                             |
| `npm run fix`                 | Runs `fix:lint` → `fix:format`; auto-fixes what it can during development.                     |
| `npm run verify`              | Runs `fix` → `ci`: auto-fix, then verify. The one-shot local gate before pushing.              |
| `npm run firebase:push-rules` | Deploy `firestore.rules` to Firebase (`firebase deploy --only firestore:rules`).               |

`ci:*` and `ci` only **verify** — they never modify files, so they can gate commits/CI without
masking failures. Use `fix` (or `fix:lint` / `fix:format`) while developing to apply
auto-fixes, then run `ci` to confirm the tree is clean.

`dev`, `build`, and `preview` run a `check-firebase-env` pre-step that fails fast if the
required `PUBLIC_FIREBASE_*` variables are missing — configure `.env` first (see
[Environment](#environment)).

## Environment

`.env` (loaded via `dotenv`):

- **Client (required for dev/build):** `PUBLIC_FIREBASE_API_KEY`,
  `PUBLIC_FIREBASE_AUTH_DOMAIN`, `PUBLIC_FIREBASE_PROJECT_ID`,
  `PUBLIC_FIREBASE_STORAGE_BUCKET`, `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`,
  `PUBLIC_FIREBASE_APP_ID`.
- **Server:** `FIREBASE_SERVICE_ACCOUNT_KEY` (JSON for `firebase-admin`),
  `APP_PASSWORD` (gate password checked by `src/pages/api/auth.ts`).
- **Optional (local dev only):** `PUBLIC_SKIP_AUTH=true` bypasses the `AuthGate` password
  prompt (read in `src/stores/useAuthStore.ts`). Off/absent by default — keep it out of
  production. Note the gate is a soft, client-side barrier, not real access control.

Node/npm are pinned: `.nvmrc` (`24.11.1`), `engines` in `package.json` (floor `>=24.11.1` /
`>=11.6.2`), and `netlify.toml` `NODE_VERSION`/`NPM_VERSION` for builds. Verified working with
Node.js `v24.11.1` and npm `11.6.2`.

## MCP Servers (agent tooling)

`.mcp.json` defines **project-scoped** MCP servers for AI agents — it's local to this repo,
not global config. Currently: `github`, `firebase`, `context7`, `chrome-devtools`. No
secrets live in the file; after editing it, fully restart the client to reconnect.
Prerequisites:

- **firebase** — install the Firebase CLI globally (`npm i -g firebase-tools`) and run
  `firebase login`. The default project is pinned in `.firebaserc` (`lullaby-dashboard`).
  Don't pass `--project` to `experimental:mcp` (that subcommand rejects the flag).
- **github** — set a `GITHUB_PAT` env var (a GitHub personal access token); `.mcp.json`
  references it via `${GITHUB_PAT}`, so no token is committed.
- **context7 / chrome-devtools** — auto-installed via `npx`; `chrome-devtools` needs a
  Chrome/Chromium available.

## Git & Workflow

- This is a **private, single-developer project** for now. **Commit directly to `main`** —
  feature branches and pull requests are **not** required.
- Commit when a unit of work is complete, with a message describing what changed and why.
  Group related changes; don't leave the tree in a broken state.
- Run the validation set (below) before committing.
- **CI:** `.github/workflows/ci.yml` runs `npm run ci` (the read-only `ci:*` suite) on every
  push to `main`, on pull requests, and on manual dispatch. It type-checks, runs `astro
check`, lints, and checks formatting — no build (that needs `PUBLIC_FIREBASE_*`) and no
  secrets. Keep it green: run `npm run verify` (auto-fix, then verify) before pushing.
- **Git hooks (husky):** installed automatically by the `prepare` script on `npm install`.
  Two stages, each scoped to what's cheap at that moment:
  - **pre-commit** (`.husky/pre-commit`) → `npx lint-staged`: on the **staged files only**, runs
    `eslint --fix` + `prettier --write` (JS/TS) and `prettier --write` (css/json/md/yaml), then
    re-stages. Fast and mechanical, so every commit lands already linted/formatted. It does
    **not** type-check or run `astro check` (too slow per commit) — those run at push.
  - **pre-push** (`.husky/pre-push`) → `npm run ci`: the full read-only gate (tsc, astro check,
    lint, format). A failure **blocks the push**.
  - Bypass either in an emergency with `git commit --no-verify` / `git push --no-verify`.
  - The hooks mean you rarely need to think about `fix`/`ci` manually, but `npm run verify` is
    still the explicit one-shot pre-flight (and matches what pre-push enforces).

## Repository Layout

### Root files

- `package.json` — scripts and dependencies
- `package-lock.json` — npm lockfile
- `astro.config.mjs` — Astro config (server output, Netlify adapter, React, svgr)
- `netlify.toml` — Netlify build config (build command, publish dir, pinned `NODE_VERSION`/`NPM_VERSION`)
- `.nvmrc` — pinned Node version for local dev / `nvm use`
- `tsconfig.json` — TypeScript config (strict; `@/*` path alias)
- `.mcp.json` — project-scoped MCP servers for AI agents (see [MCP Servers](#mcp-servers-agent-tooling))
- `.firebaserc` — Firebase default project (`lullaby-dashboard`)
- `firebase.json` — Firebase CLI config; points at `firestore.rules` (Firestore rules only — the
  app deploys via Netlify, not Firebase Hosting)
- `firestore.rules` — Firestore security rules, version-controlled here and deployed with
  `npm run firebase:push-rules`. **Source of truth** — edit here, then push; don't edit rules in
  the console (console edits drift from the repo)
- `.github/workflows/ci.yml` — GitHub Actions CI: runs `npm run ci` on push/PR/dispatch
- `.husky/pre-commit` — git pre-commit hook (husky): runs `npx lint-staged` on staged files
- `.husky/pre-push` — git pre-push hook (husky): runs `npm run ci`, blocks the push on failure
- `CLAUDE.md` — thin entry point that imports this file for Claude Code
- `README.md` — project description
- `public/` — static assets
- `src/` — app source code
- `tools/` — standalone Node scripts (own `node_modules`); env checks, DB seed
- `docs/` — product and architecture docs; `docs/features/` holds per-feature specs (see
  [Planning a Feature](#planning-a-feature))

### Source layout

```text
src/
├─ pages/
│  ├─ index.astro            # HTML shell; mounts <Shell client:only />
│  ├─ debug.astro
│  └─ api/                   # server routes (firebase-admin); auth.ts, _utils.ts
├─ components/<Name>/        # one folder per component (see Conventions)
├─ database/                 # repositories + db.ts (client Firestore access)
├─ stores/                   # Zustand: useAuthStore, useStartupStore, useMissionStore,
│                            #          useControlsStore, useLanguageStore, useTimerStore
├─ i18n/translations.ts      # shared translation strings
├─ styles/main.css           # global styles
├─ utils/                    # ls.ts (localStorage wrapper), object.ts
├─ icons/                    # SVGs (imported as React components via vite-plugin-svgr)
└─ types.ts                  # shared data types
```

**Entry flow:** `index.astro` → `Shell` → `AuthGate` (if unauthenticated) → `Startup`
(until ready) → `Dashboard`. `Dashboard` conditionally renders panels (`AppOptions`,
`MissionSelect`) based on `useControlsStore` flags.

## Architecture

Strict layering (see `docs/07_data-architecture.md`):

```text
Firestore → Repository (src/database/) → Zustand store (src/stores/) → React component
```

- Astro renders the page shell in `src/pages/index.astro`; React handles all interactivity,
  mounted `client:only`.
- **React components are presentation-only** — read Zustand state, call Zustand actions, and
  hold only local UI state (modal open, hover, focus). No business logic, no app state, no
  Firestore calls.
- **Zustand stores** hold application state and business logic and orchestrate repositories.
  They must not import the Firestore SDK or know collection names.
- **Repositories** (`src/database/`) are the only place that touches the Firestore SDK. They
  read, subscribe (`onSnapshot`), run CRUD, and map docs to models. Realtime snapshots are
  the source of truth — writes go to Firestore and flow back into Zustand via subscriptions;
  avoid manually mutating Zustand after a write.
- **Two Firebase paths:** the client SDK (`src/database/db.ts`, `PUBLIC_FIREBASE_*`) for the
  main realtime data flow, and `firebase-admin` in `src/pages/api/` for server-only work.
  API routes set `export const prerender = false`.
- **Security rules** live in `firestore.rules` (version-controlled) and are deployed with
  `npm run firebase:push-rules`. The client SDK is subject to these rules; `firebase-admin`
  bypasses them. When you add a collection read client-side via a repository, add a matching
  `match` block in `firestore.rules` or the read is denied by default. Keep the rules in sync
  with the collections in `src/database/`.

## Conventions

- **Component folder:** `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, and
  `translations.ts` when the component has user-facing text.
- **CSS:** BEM with a `c-` block prefix (e.g. `c-dashboard__aside`); import the component's
  CSS at the top of its `.tsx`.
- **Path alias:** use `@/*` (→ `./src/*`) instead of long relative imports.
- **State naming:** Zustand stores are `use<Name>Store`; some expose a small selector hook
  (e.g. `useMission()`). Shared UI flags belong in a controls store, not in components.
- **Persistence:** use the `lsWrapper` helper in `src/utils/ls.ts` for localStorage.
- **i18n:** add strings to the component's `translations.ts` (or `src/i18n/translations.ts`)
  and read the active language via `useLanguageStore`.

## Planning a Feature

New features start with no design — derive the spec through Q&A, then build. Run the `/spec`
command, or follow this loop manually:

1. **Ground first.** Read `docs/01_vision.md`, `docs/04_design-principles.md`,
   `docs/05_design.md`, `docs/07_data-architecture.md`, and the Architecture section above.
   Read the actual code (`src/types.ts`, relevant stores/repos/components) before assuming.
2. **Ask, don't guess.** Use focused, multiple-choice questions (recommended option first)
   to pin down problem, behavior, scope, data model, UI placement, TV constraints, i18n, and
   acceptance criteria. Propose grounded defaults; let the user confirm or redirect.
3. **Write the spec.** Copy `docs/features/_TEMPLATE.md` to `docs/features/NN-kebab-name.md`
   and fill it. Status `agreed` only when no open questions remain.
4. **Plan, then implement.** Use plan mode for non-trivial work, get approval, then build per
   "Adding a Feature" below. Keep the spec in sync if the build deviates.

Specs live in `docs/features/` — see its [README](../docs/features/README.md).

## Adding a Feature

1. Create a component folder under `src/components/` (`.tsx` + `.css`, plus `translations.ts`
   if it has text). Keep components small and representational.
2. If it needs shared/persisted state, add or extend a Zustand store; put logic in actions,
   not components.
3. If it needs data, add/extend a repository in `src/database/` (client) or an API route in
   `src/pages/api/` (server, admin SDK) — never call Firestore from a component or store.
4. Mount the component where it belongs (often `src/components/Dashboard/Dashboard.tsx`).
5. Avoid adding new dependencies; prefer the existing stack. Don't pile complex logic into
   existing files.
6. Run the validation set and commit to `main`.

## Gotchas

- **Windows / PowerShell** is the default shell — use PowerShell syntax (`$env:VAR`, `$null`).
- **Firestore `in` queries are capped at 30 IDs** — batch objective hydration (see the
  hydration strategy in `docs/07_data-architecture.md`).
- **TV browser support** — don't rely on features unsupported by Chrome 87.
- **`tools/` has its own `node_modules`** — it's a separate script workspace.

## Validation Guidance

When making changes:

1. Run `npm install` if dependencies changed or the workspace was cleaned.
2. **Always run `npm run fix` first** to auto-fix what ESLint/Prettier can (`fix:lint` →
   `fix:format`). Do this before `ci` so the read-only gate isn't tripped by mechanical
   lint/format issues.
3. Run `npm run ci` to verify everything read-only (`ci:ts` → `ci:check` → `ci:lint` →
   `ci:format`). `fix` can't repair type errors, `astro check` failures, or non-auto-fixable
   lint — resolve those by hand, then re-run `ci` until clean.
   Steps 2–3 together are `npm run verify` — prefer it as the one-shot local gate.
4. Run `npm run build` to verify the app compiles.
5. If the change is UI-related, run `npm run dev` and inspect locally — ideally with the TV
   user agent in Chrome dev tools.

Husky hooks back this up automatically: **pre-commit** auto-fixes staged files (lint-staged),
and **pre-push** runs `npm run ci` and blocks the push if it fails — so an unverified tree can't
reach `main`. Run `verify` before pushing so the hook passes first try. See
[Git & Workflow](#git--workflow) for details.

If anything here appears incorrect or incomplete, perform a narrow search only for the
missing part. Otherwise, trust these instructions and minimize additional repo exploration.
