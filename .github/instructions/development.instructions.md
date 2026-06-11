---
applyTo: 'src/**,tools/**,astro.config.mjs,tsconfig.json,eslint.config.ts'
---

# Development Guide

Deep guidance for **writing or changing code** in lullaby-dashboard-2. The always-loaded
[copilot-instructions.md](../copilot-instructions.md) holds the high-level rules; this file
holds the detail you need only while implementing. Read it before touching `src/` or `tools/`.

## Architecture

[`docs/07_data-architecture.md`](../../docs/07_data-architecture.md) is the **authority** on
the layering and each layer's responsibilities — read it before non-trivial data work. In short:

```text
Firestore → Repository (src/database/) → Zustand store (src/stores/) → React component
```

Repositories are the only code that touches the Firestore SDK; stores hold state + business
logic; components are presentation-only. Beyond that doc, the operational rules specific to
this repo:

- **Two Firebase paths:** client SDK (`src/database/db.ts`, `PUBLIC_FIREBASE_*`) for realtime
  data; `firebase-admin` in `src/pages/api/` for server-only work — API routes set
  `export const prerender = false`.
- **Security rules** are version-controlled in `tools/firestore.rules` and deployed with
  `npm run firebase:push-rules` (edit there, not in the console). Adding a client-side
  collection read? Add a matching `match` block or it's denied. `firebase-admin` bypasses rules.
- **Don't mutate Zustand after a write** — let the `onSnapshot` subscription flow the change
  back in (realtime snapshots are the source of truth).

## Source layout

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
└─ icons/                    # SVGs (imported as React components via vite-plugin-svgr)
```

> Entity types are defined per-repository in `src/database/*` (`MissionRec`,
> `ObjectiveGroupRec`, `ObjectiveRec`) — there is no central `types.ts`.

**Entry flow:** `index.astro` → `Shell` → `AuthGate` (if unauthenticated) → `Startup`
(until ready) → `Dashboard`, which conditionally renders panels (`AppOptions`,
`MissionSelect`) from `useControlsStore` flags.

**`tools/`** — standalone Node scripts run against the repo's root `node_modules` (no separate
workspace/lockfile): `check-firebase-env.mjs` (env guard), `db-seed.js` (idempotent seed,
reads `tools/configuration.json`), `firestore.rules` (security rules). `firebase.json` and
`.firebaserc` stay at the repo root so the Firebase CLI / MCP server auto-discover them.

## Conventions

- **Component folder:** `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, and
  `translations.ts` when it has user-facing text.
- **CSS:** BEM with a `c-` block prefix (e.g. `c-dashboard__aside`); import the component's
  CSS at the top of its `.tsx`.
- **Path alias:** use `@/*` (→ `./src/*`) instead of long relative imports.
- **State naming:** Zustand stores are `use<Name>Store`; some expose a selector hook (e.g.
  `useMission()`). Shared UI flags live in the controls store, not in components.
- **Persistence:** use the `lsWrapper` helper in `src/utils/ls.ts` for localStorage.
- **i18n:** add strings to the component's `translations.ts` (or `src/i18n/translations.ts`);
  read the active language via `useLanguageStore`.

## Adding a feature

1. Component folder under `src/components/` (`.tsx` + `.css`, plus `translations.ts` if it has
   text). Keep components small and representational.
2. Shared/persisted state → add or extend a Zustand store; logic goes in actions, not components.
3. Data → add/extend a repository (`src/database/`, client) or an API route
   (`src/pages/api/`, admin SDK). Never call Firestore from a component or store.
4. Mount the component where it belongs (often `Dashboard.tsx`).
5. Prefer the existing stack — avoid new dependencies; don't pile logic into existing files.
6. Commit to `main`; the hooks validate.

New features start with no design: derive the spec through Q&A first. Run `/spec`, or: ground
in `docs/01_vision.md`, `04_design-principles.md`, `05_design.md`, `07_data-architecture.md`
and the actual code → ask focused multiple-choice questions → write the spec from
[`docs/features/_TEMPLATE.md`](../../docs/features/_TEMPLATE.md) to
`docs/features/NN-kebab-name.md` (`Status: agreed` only when no open questions remain) → plan,
then implement. Keep the spec in sync if the build deviates.

## Full command reference

npm only, with `package-lock.json` (don't switch package managers).

| Command                       | Purpose                                                                    |
| ----------------------------- | -------------------------------------------------------------------------- |
| `npm install`                 | Bootstrap; run first on a clean checkout, or if deps changed.              |
| `npm run dev`                 | Dev server at http://localhost:4321/                                       |
| `npm run build`               | Production build (Netlify adapter). Confirms the app compiles.             |
| `npm run preview`             | Preview the built app.                                                     |
| `npm run ci:ts`               | `tsc --noEmit` — type check.                                               |
| `npm run ci:lint`             | ESLint over `./src` — check only.                                          |
| `npm run ci:format`           | Prettier `--check` over the repo — check only.                             |
| `npm run ci`                  | `ci:ts` → `ci:lint` → `ci:format`. Read-only gate; pre-push and CI run it. |
| `npm run fix:lint`            | ESLint `--fix` over `./src`.                                               |
| `npm run fix:format`          | Prettier `--write` over the repo.                                          |
| `npm run fix`                 | `fix:lint` → `fix:format`; auto-fix during development.                    |
| `npm run verify`              | `fix` → `ci`: auto-fix then verify. One-shot local pre-flight.             |
| `npm run firebase:push-rules` | Deploy `tools/firestore.rules` (`firebase deploy --only firestore:rules`). |
| `npm run db:seed`             | Idempotent Firestore seed (`tools/db-seed.js`).                            |

`ci:*` only **check** — they can't repair type errors or non-auto-fixable lint; resolve those
by hand. `dev`/`build`/`preview` aren't in the gate (build needs `PUBLIC_FIREBASE_*`); run
`build` after non-trivial changes, and for UI work run `dev` with the TV user agent in Chrome
dev tools.

## MCP servers

`.mcp.json` defines project-scoped servers (`github`, `firebase`, `context7`,
`chrome-devtools`). No secrets in the file; fully restart the client after editing.

- **firebase** — `npm i -g firebase-tools` then `firebase login`. Default project pinned in
  `.firebaserc` (`lullaby-dashboard`). Don't pass `--project` to `experimental:mcp`.
- **github** — set `GITHUB_PAT` (a personal access token); referenced as `${GITHUB_PAT}`.
- **context7 / chrome-devtools** — auto-installed via `npx`; `chrome-devtools` needs Chrome.

## Keeping docs in sync

Docs are part of the change. When you touch X, review Y **in the same commit**:

| You changed…                               | Review / update…                                          |
| ------------------------------------------ | --------------------------------------------------------- |
| `package.json` scripts                     | Command reference above                                   |
| `.env` / env vars, auth gate               | Environment (copilot-instructions.md)                     |
| `.mcp.json`                                | MCP servers above                                         |
| `src/` structure, store/component patterns | Source layout + Conventions above                         |
| Data flow, layering, Firestore access      | Architecture above **and** `docs/07_data-architecture.md` |
| Dependencies / stack                       | "What this is" in copilot-instructions.md                 |
| User-facing product behavior               | `README.md`, relevant `docs/`                             |
| A feature's behavior vs. its spec          | the matching `docs/features/NN-*.md`                      |

When unsure, grep the doc for the symbol/script/path you changed. If a doc is now wrong but
out of scope to fix, say so explicitly rather than leaving it silently stale.
