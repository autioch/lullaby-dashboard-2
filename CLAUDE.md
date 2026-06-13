# CLAUDE.md — Agent Instructions for lullaby-dashboard-2

Always-loaded guidance for AI coding agents working in this repo.

**Before writing or changing code under `src/` or `tools/`, read
[docs/development.md](docs/development.md)** — architecture, source layout, conventions, and the
full command reference live there so they don't load on every chat. **Before verifying a change,
read [docs/qa.md](docs/qa.md)** — the testing source of truth (levels, test-by-scope, masking
traps, regression checklist).

## Working style

- Short, concise, direct. Cut filler; don't sugar-coat.
- **Vet every new feature or change request against industry standards and common sense.**
  The owner has limited knowledge of development steps and relies on this check. If you
  disagree or see a better approach, say so and **wait** for their response before acting.
  Otherwise, proceed with the request.
- Trust these instructions: when a detail is missing, search **narrowly** for just that one
  thing — don't re-explore the whole repo. Saves tokens and time.
- After git actions (commit/push), report the result in **one line** — no summaries, file
  lists, or next-step suggestions unless asked.
- Docs are part of the change: when code or config changes, update affected prose in the
  **same commit**. Never ship a tree where docs contradict the code. (The doc-sync map — which
  docs to check for a given change — is in the development guide.)
- Tests are part of the change: when a change adds or alters **logic** (a store action, a
  server/API helper, a util, a pure derivation), add or update its co-located unit test in the
  **same commit**. Not 100% coverage, and not presentational React, thin repositories, or config —
  scope and exemptions in [docs/qa.md](docs/qa.md#tests-are-part-of-the-change).
- **Interim UI — minimize polish.** The UI is a proof-of-concept pending a ground-up rework (see
  "What this is" below). Spend effort on API/feature correctness, not visual polish: keep styling
  minimal and functional, default new visual work to **instant / no-motion**, and add animation only
  when the owner explicitly asks. The functional **TV-first baseline** (large, high-contrast,
  readable at 3–5 m, D-pad-operable) is **not** "polish" — it stays the floor.

## What this is

**LaunchPad** — a cooperative family dashboard that turns recurring household routines
("missions") into shared, TV-friendly checklists. Stack: **Astro 6** (`output: 'server'`,
Netlify adapter) · **React 19** (mounted `client:only`) · **Zustand 5** (state + business
logic) · **Firebase/Firestore** (client SDK + `firebase-admin`) · **BEM CSS** (`c-` prefix).
Product/architecture context: [README.md](README.md) and [`docs/`](docs/).

**Status — interim UI (PoC).** The current UI is a **proof-of-concept**: it exists to exercise the
API and feature set, and **once the feature set stabilizes it will be reworked from the ground up**
(the roadmap's Theme system redoes presentation). Treat the present screens as a test harness, not
the final product — hence the "minimize polish" working-style rule above.

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

npm only. The gate is `npm run ci` (tsc + lint + unit tests + format; the hooks and CI run it);
dead-code (`npm run knip`) runs as the final check inside `/implement`·`/adjust`·`/tweak`, not the
gate; `npm run verify` auto-fixes then runs it. Unit tests are Vitest (`npm run test`), logic only. Dev server is `npm run dev`
(http://localhost:4321/). `dev`/`build`/`preview` fail fast if `.env` is missing required
vars. **Full command table is in the development guide.**

## Git & workflow

- Private, single-developer project: **commit directly to `main`** — no branches or PRs.
- **Always commit via `/ship`** — the one canonical commit+push path: it batches stage→commit→push
  into a single Bash call with a Conventional-Commits message + `Co-Authored-By` trailer and leans on
  the hooks. Never hand-roll `git add`/`commit`/`push` for a real commit, pipeline or ad-hoc.
- **Lean on the git hooks; commit and push often.** pre-commit auto-fixes staged files;
  pre-push runs `npm run ci` and blocks on failure; CI re-runs `ci` as a backstop. Bypass in
  an emergency with `--no-verify`.
- Commit when a unit of work is done, message saying what & why; don't leave the tree broken.

## Environment

`.env` (via `dotenv`):

- **Client (required for dev/build):** `PUBLIC_FIREBASE_API_KEY`, `_AUTH_DOMAIN`,
  `_PROJECT_ID`, `_STORAGE_BUCKET`, `_MESSAGING_SENDER_ID`, `_APP_ID`.
- **Server:** `FIREBASE_SERVICE_ACCOUNT_KEY` (JSON for `firebase-admin`), `APP_PASSWORD`
  (auth-gate password, checked by `src/pages/api/auth.ts`), `SESSION_SECRET` (HMAC key signing
  the HttpOnly session cookie that gates the content-edit write API routes).
- **Optional (dev only):** `PUBLIC_SKIP_AUTH=true` bypasses the client auth gate **and** makes
  the content-write API routes skip the session check (so local writes work without logging in) —
  keep out of prod, where it would leave writes unauthenticated. The gate is a soft client-side
  barrier, not real access control.

Node/npm pinned via `.nvmrc` + `engines` + `netlify.toml` (Node 24.11.1, npm 11.6.2).

## Gotchas

- **Shell:** run **git and npm/npx through the Bash tool**, not PowerShell — PowerShell 5.1 wraps
  native-command stderr as error records and can report false failures (`tsc`/`eslint`/`astro`/`git`
  all write to stderr). Read, search, and edit files with the dedicated tools, never `cat`/`Get-Content`.
  Use PowerShell only for genuinely Windows-specific needs; there, `$env:VAR` and `$null`.
- **Firestore `in` queries cap at 30 IDs** — batch objective hydration (see
  `docs/07_data-architecture.md`).
- **Chrome 87 floor** — see above.
- **`tools/` scripts use the root `node_modules`** — run them from the repo root.

## Features

Not sure what to build next? `/steer` sits at the top of the loop — as product owner it **reads** the
roadmap backlog (`docs/06_roadmap.md`) and picks the single highest-value next item, then routes it
into the pipeline below (it writes no journal artifact; its only write is reprioritizing the roadmap,
which `/retro` and `/tweak` keep current by closing their own item and filing follow-ups). New features start
with no design — derive a spec through Q&A first. When an idea is unproven, an
optional `/spike` runs an investigation-only feasibility & discovery pass (TV / Chrome 87 viability,
UX, product sense), records a verdict under `docs-spikes/`, and feeds `/spec`. Then run
`/spec`, then `/plan` and `/implement`. Each pipeline command forces the role(s) that own its step
and emits one artifact in `docs-journal/` on the `NN_<command>_<short-name>.md` scheme (`/steer` is
the exception — it reprioritizes the roadmap instead). For a change too small for that,
`/tweak` runs the Q&A, plan, and code in one pass and records a single `NN_tweak_<short-name>.md`
artifact (escalating to `/spec` if it grows). Full pipeline guide:
[docs/feature-workflow.md](docs/feature-workflow.md).

## MCP servers

`.mcp.json` defines project-scoped MCP servers for agents; the list, setup, and prerequisites
live in the development guide. No secrets in the file — restart the client after editing it.

---

For deeper product and architecture context, see [README.md](README.md) and the
[`docs/`](docs/) folder — especially [docs/07_data-architecture.md](docs/07_data-architecture.md).
