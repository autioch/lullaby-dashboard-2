# Agent Instructions for lullaby-dashboard-2

Shared guidance for AI coding agents working in this repository. This file is the **single
source of truth**: GitHub Copilot reads it directly, and Claude Code imports it from the
root `CLAUDE.md` (`@.github/copilot-instructions.md`). Edit guidance here, not in two places.

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

| Command | Purpose |
| --- | --- |
| `npm install` | Bootstrap; run first on a clean checkout. |
| `npm run dev` | Dev server at http://localhost:4321/ |
| `npm run build` | Production build (Netlify adapter). |
| `npm run preview` | Preview the built app. |
| `npm run ci:ts` | `tsc --noEmit` — type check. |
| `npm run ci:check` | `astro check`. |
| `npm run ci:lint` | ESLint with `--fix` over `./src`. |
| `npm run ci:format` | Prettier `--write` over the repo. |
| `npm run firebase:push-config` | Push config to Firestore via `tools/push-config.mjs`. |

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

Verified working with Node.js `v24.11.1` and npm `11.6.2`.

## MCP Servers (agent tooling)

`.mcp.json` defines **project-scoped** MCP servers for AI agents — it's local to this repo,
not global config. Currently: `github`, `firebase`, `context7`, `chrome-devtools`,
`playwright`. No secrets live in the file; after editing it, fully restart the client to
reconnect. Prerequisites:

- **firebase** — install the Firebase CLI globally (`npm i -g firebase-tools`) and run
  `firebase login`. The default project is pinned in `.firebaserc` (`lullaby-dashboard`).
  Don't pass `--project` to `experimental:mcp` (that subcommand rejects the flag).
- **github** — set a `GITHUB_PAT` env var (a GitHub personal access token); `.mcp.json`
  references it via `${GITHUB_PAT}`, so no token is committed.
- **context7 / chrome-devtools / playwright** — auto-installed via `npx`; the two browser
  servers need a Chrome/Chromium available.

## Git & Workflow

- This is a **private, single-developer project** for now. **Commit directly to `main`** —
  feature branches and pull requests are **not** required.
- Commit when a unit of work is complete, with a message describing what changed and why.
  Group related changes; don't leave the tree in a broken state.
- Run the validation set (below) before committing.

## Repository Layout

### Root files

- `package.json` — scripts and dependencies
- `package-lock.json` — npm lockfile
- `astro.config.mjs` — Astro config (server output, Netlify adapter, React, svgr)
- `tsconfig.json` — TypeScript config (strict; `@/*` path alias)
- `.mcp.json` — project-scoped MCP servers for AI agents (see [MCP Servers](#mcp-servers-agent-tooling))
- `.firebaserc` — Firebase default project (`lullaby-dashboard`)
- `CLAUDE.md` — thin entry point that imports this file for Claude Code
- `README.md` — project description
- `public/` — static assets
- `src/` — app source code
- `tools/` — standalone Node scripts (own `node_modules`); env checks, config push
- `docs/` — product and architecture docs

### Source layout

```text
src/
├─ pages/
│  ├─ index.astro            # HTML shell; mounts <Shell client:only />
│  ├─ debug.astro
│  └─ api/                   # server routes (firebase-admin); auth.ts, _configuration.ts, _utils.ts
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
2. Run `npm run ci:ts` to verify TypeScript.
3. Run `npm run ci:check` to verify Astro.
4. Run `npm run ci:lint` to verify ESLint.
5. Run `npm run ci:format` to verify Prettier.
6. Run `npm run build` to verify the app compiles.
7. If the change is UI-related, run `npm run dev` and inspect locally — ideally with the TV
   user agent in Chrome dev tools.

If anything here appears incorrect or incomplete, perform a narrow search only for the
missing part. Otherwise, trust these instructions and minimize additional repo exploration.
