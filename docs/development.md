# Development Guide

Deep guidance for **writing or changing code** in lullaby-dashboard-2. The always-loaded
[CLAUDE.md](../CLAUDE.md) holds the high-level rules; this file holds the detail you need only
while implementing. Read it before touching `src/` or `tools/`.

## Architecture

[`docs/07_data-architecture.md`](07_data-architecture.md) is the **authority** on the layering
and each layer's responsibilities — read it before non-trivial data work. In short:

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
│                            #          useControlsStore, useEditStore, useLanguageStore,
│                            #          useTimerStore
├─ i18n/translations.ts      # shared translation strings
├─ styles/main.css           # global styles
├─ utils/                    # ls.ts (localStorage wrapper), object.ts
└─ icons/                    # SVGs (imported as React components via vite-plugin-svgr)
```

> Entity types are defined per-repository in `src/database/*` (`MissionRec`,
> `ObjectiveGroupRec`, `ObjectiveRec`, `ColorRec`) — there is no central `types.ts`.

**Entry flow:** `index.astro` → `Shell` → `AuthGate` (if unauthenticated) → `Startup`
(until ready) → `Dashboard`, which conditionally renders panels (`AppOptions`,
`MissionSelect`) from `useControlsStore` flags.

**`tools/`** — standalone Node scripts run against the repo's root `node_modules` (no separate
workspace/lockfile): `check-firebase-env.mjs` (env guard), `db-seed.cjs` (idempotent seed,
reads `tools/configuration.json`), `firestore.rules` (security rules). `firebase.json` and
`.firebaserc` stay at the repo root so the Firebase CLI / MCP server auto-discover them.

## Conventions

- **Component folder:** `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, and
  `translations.ts` when it has user-facing text.
- **Keep files small:** split a large component into focused files co-located in its folder —
  a thin shell plus per-section/level sub-components and shared `controls`/`fields` — instead of
  one oversized `.tsx`. `ContentEditor/` is the worked example.
- **Reuse shared components:** prefer the existing shared UI (`Button`, `Typography`,
  `Overlay`/`Panel`/`Layout`) over hand-rolling equivalents; extend the shared component (with
  optional props) when it's close rather than duplicating it.
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

**Copy from** — the canonical example for each layer (open the file, mirror the pattern;
pointers, so they can't go stale the way prose would):

| Building…                  | Copy the pattern from                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------- |
| Overlay panel / menu UI    | `src/components/AppOptions/` (`Overlay`+`Panel`+`Layout`, module-top `getState()`, `Button`/`Typography`) |
| UI flag (open/close)       | `src/stores/useControlsStore.ts`                                                                          |
| Orchestration / data store | `src/stores/useMissionStore.ts`                                                                           |
| Client repository (read)   | `src/database/missionRepository.ts`                                                                       |
| Server write / API route   | `src/pages/api/auth.ts` + `_utils.ts` (`prerender = false`, `jsonResponse`, `getFirestoreDb`)             |
| Component i18n             | a component's `translations.ts` → **register it in** `src/i18n/translations.ts`                           |

New features start with no design — derive the spec through Q&A first, then run the pipeline:
`/spec` → `/plan` → `/implement`, with `/adjust` for post-review change requests and `/retro` to
close the iteration. An unproven idea can first go through the optional `/spike` — an
investigation-only feasibility & discovery pass that records a verdict under `docs-spikes/`
and feeds `/spec`. For a change too small to justify the full pipeline,
`/tweak` does the Q&A, plan, and code in one pass and records a single artifact. The full
pipeline guide — chain, roles, artifact convention, grounding reads, and shared rules — is
[docs/feature-workflow.md](feature-workflow.md). Artifacts land in `docs-journal/`. Every pipeline
command delegates its commit+push to `/ship` — the single, canonical commit+push action (leans on
the husky hooks for validation; writes no artifact) — which is also the **required** path for ad-hoc
commits ("stage-all, commit, push"); never hand-roll git for a real commit.

## Keeping docs in sync

Two doc classes, two rules:

- **Durable docs** — CLAUDE.md, README.md, every `docs/*.md`, and the command files in
  `.claude/commands/` — describe the **current** state. They must never contradict the code.
- **Feature artifacts** — `docs-journal/NN_*` — are **frozen** point-in-time records. They live
  in their own sibling folder (kept out of `docs/`), capture the drift from the original spec,
  and are never rewritten to chase the code.

Durable docs stay current two ways. **Per commit (scoped):** when a commit changes code or
config, the _same commit_ updates the durable docs that change affects — use the map below to
know which. This is cheap and local: update only what the change touches, not every doc.
**Per iteration (full):** `/retro` runs one repo-wide **reconcile** that audits all durable
docs against the actual code and fixes anything the per-commit passes missed. The per-commit
sync is primary; the retro reconcile is the backstop.

**Doc-sync map** — when you change… update these:

| Change                                            | Sync these durable docs                                                             |
| ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Data layer / repository / store / Firestore shape | `07_data-architecture.md`; this guide (Architecture, Source layout, Copy-from)      |
| New component folder or changed convention        | this guide (Source layout, Conventions, Copy-from)                                  |
| New / renamed / removed npm script                | this guide (Full command reference); CLAUDE.md (Commands) if the gate story changes |
| New / changed env var                             | CLAUDE.md (Environment); this guide if it gates `dev`/`build`                       |
| New / changed MCP server                          | `.mcp.json`; this guide (MCP servers); CLAUDE.md (MCP servers)                      |
| Firestore security rule                           | `tools/firestore.rules`; `07_data-architecture.md`; this guide (Architecture)       |
| Browser-floor / Chrome 87 change                  | CLAUDE.md (TV browser floor); `package.json` `browserslist` + `build.target`        |
| Auth / session / API route                        | CLAUDE.md (Environment); this guide (Architecture); `07_data-architecture.md`       |
| Product behavior / UX / scope                     | the relevant `docs/01`–`06`; README.md if user-facing                               |
| Workflow / command / pipeline change              | `.claude/commands/*`; `feature-workflow.md`; CLAUDE.md (Features, Git & workflow)   |

The map is the single lookup both the per-commit sync and the retro reconcile use — keep it
current when you add a new doc or code area.

## Full command reference

npm only, with `package-lock.json` (don't switch package managers).

| Command                       | Purpose                                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `npm install`                 | Bootstrap; run first on a clean checkout, or if deps changed.                                                                        |
| `npm run dev`                 | Dev server at http://localhost:4321/                                                                                                 |
| `npm run build`               | Production build (Netlify adapter). Confirms the app compiles.                                                                       |
| `npm run preview`             | Preview the built app.                                                                                                               |
| `npm run ci:ts`               | `astro sync && tsc --noEmit` — sync generated types, then type check.                                                                |
| `npm run ci:lint`             | ESLint over `./src` — check only.                                                                                                    |
| `npm run ci:format`           | Prettier `--check` over the repo — check only.                                                                                       |
| `npm run ci`                  | `ci:ts` → `ci:lint` → `ci:format`. Read-only gate; pre-push and CI run it.                                                           |
| `npm run fix:lint`            | ESLint `--fix` over `./src`.                                                                                                         |
| `npm run fix:format`          | Prettier `--write` over the repo.                                                                                                    |
| `npm run fix`                 | `fix:lint` → `fix:format`; auto-fix during development.                                                                              |
| `npm run verify`              | `fix` → `ci`: auto-fix then verify. One-shot local pre-flight.                                                                       |
| `npm run knip`                | Dead-code scan: unused files, exports, types, enum/namespace members, deps. Run by the code-writing pipeline commands, not the gate. |
| `npm run knip:fix`            | knip `--fix --allow-remove-files` then `verify`: auto-remove all dead code (incl. files), reformat, re-gate. Review the diff.        |
| `npm run firebase:push-rules` | Deploy `tools/firestore.rules` (`firebase deploy --only firestore:rules`).                                                           |
| `npm run db:seed`             | Idempotent Firestore seed (`tools/db-seed.cjs`).                                                                                     |

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
