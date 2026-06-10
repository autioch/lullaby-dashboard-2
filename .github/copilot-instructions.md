# Agent Instructions for lullaby-dashboard-2

Single source of truth for AI coding agents. GitHub Copilot reads this directly; Claude Code
imports it from the root `CLAUDE.md`. Edit here, not in two places.

**Before writing or changing code under `src/` or `tools/`, read
[`.github/instructions/development.instructions.md`](instructions/development.instructions.md)** —
architecture, source layout, conventions, the full command reference, and the doc-sync map
live there so they don't load on every chat.

## Working style

- Short, concise, direct. Cut filler; don't sugar-coat.
- Trust these instructions: when a detail is missing, search **narrowly** for just that one
  thing — don't re-explore the whole repo. Saves tokens and time.
- After git actions (commit/push), report the result in **one line** — no summaries, file
  lists, or next-step suggestions unless asked.
- Docs are part of the change: when code or config changes, update affected prose in the
  **same commit**. Never ship a tree where docs contradict the code. (Map of which docs to
  check is in the development guide.)

## What this is

**LaunchPad** — a cooperative family dashboard that turns recurring household routines
("missions") into shared, TV-friendly checklists. Stack: **Astro 6** (`output: 'server'`,
Netlify adapter) · **React 19** (mounted `client:only`) · **Zustand 5** (state + business
logic) · **Firebase/Firestore** (client SDK + `firebase-admin`) · **BEM CSS** (`c-` prefix).
Product/architecture context: [README.md](../README.md) and [`docs/`](../docs/).

## TV browser floor — Chrome 87 (enforced)

The app runs on a SmartTV browser
(`...Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0...`). **Don't use JS/CSS features newer
than Chrome 87.** Enforced, not just documented:

- `browserslist` (`["chrome 87"]` in `package.json`) is the source of truth for the target.
- Vite `build.target: ['chrome87']` down-levels client JS/CSS **syntax** at build time.
- `eslint-plugin-compat` (`compat/compat`, via `npm run ci:lint`) flags unsupported runtime
  **APIs** in client code. A `compat/compat` error = not TV-safe → replace it or guard with a
  fallback.

## Commands

npm only. The gate is `npm run ci` (tsc + lint + format; the hooks and CI run it);
`npm run verify` auto-fixes then runs it. Dev server is `npm run dev`
(http://localhost:4321/). `dev`/`build`/`preview` fail fast if `.env` is missing required
vars. **Full command table is in the development guide.**

## Git & workflow

- Private, single-developer project: **commit directly to `main`** — no branches or PRs.
- **Lean on the git hooks; commit and push often.** pre-commit auto-fixes staged files;
  pre-push runs `npm run ci` and blocks on failure; CI re-runs `ci` as a backstop. Bypass in
  an emergency with `--no-verify`.
- Commit when a unit of work is done, message saying what & why; don't leave the tree broken.

## Environment

`.env` (via `dotenv`):

- **Client (required for dev/build):** `PUBLIC_FIREBASE_API_KEY`, `_AUTH_DOMAIN`,
  `_PROJECT_ID`, `_STORAGE_BUCKET`, `_MESSAGING_SENDER_ID`, `_APP_ID`.
- **Server:** `FIREBASE_SERVICE_ACCOUNT_KEY` (JSON for `firebase-admin`), `APP_PASSWORD`
  (auth-gate password, checked by `src/pages/api/auth.ts`).
- **Optional (dev only):** `PUBLIC_SKIP_AUTH=true` bypasses the auth gate — keep out of prod.
  The gate is a soft client-side barrier, not real access control.

Node/npm pinned via `.nvmrc` + `engines` + `netlify.toml` (Node 24.11.1, npm 11.6.2).

## Gotchas

- **PowerShell** is the default shell — use `$env:VAR`, `$null`.
- **Firestore `in` queries cap at 30 IDs** — batch objective hydration (see
  `docs/07_data-architecture.md`).
- **Chrome 87 floor** — see above.
- **`tools/` scripts use the root `node_modules`** — run them from the repo root.

## Features

New features start with no design — derive a spec through Q&A first. Run `/spec`, write it to
`docs/features/NN-name.md`, then plan and implement. Details in the development guide.

## MCP servers

`.mcp.json` defines project-scoped MCP servers for agents; the list, setup, and prerequisites
live in the development guide. No secrets in the file — restart the client after editing it.
