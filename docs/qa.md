# QA & Testing Guide

The single source of truth for **how to test a change** in lullaby-dashboard-2. Read it before
verifying any work; the pipeline commands (`/implement`, `/tweak`, `/adjust`, `/verify`) and the
plan/spec templates point here instead of restating it.

It answers three questions: **what** gets tested, **how** for this stack, and **how much** for a
given change. Sits beside the [doc-sync map](development.md#keeping-docs-in-sync) in the dev guide —
same change-type rows: that map says _which docs to update_, the [test-by-scope](#test-by-scope)
table here says _what to test_.

## Reality of testing here

Automated coverage is a **Vitest unit layer over logic only** — store actions, server helpers, and
utils (runs inside the gate, see `L0`). There are **no component or end-to-end tests**, so all UI and
behaviour is still confirmed by a **manual drive** under the TV browser, backed by the review skills.
The discipline below is the safety net for everything the unit tests can't reach. Two consequences:

- A green gate proves the code **compiles, lints (incl. Chrome 87), passes unit tests, and is
  formatted** — but those tests cover **logic, not the rendered UI**. On-screen behaviour is only
  ever confirmed by driving the running app.
- Anything that can only be confirmed on **real TV hardware** or against **live authenticated
  Firestore** must be **explicitly flagged** in the artifact's `Verification` section, never assumed.

> **Status & deferred gaps:** the Phase-1 Vitest unit layer (logic) is in place and runs in the gate.
> Still open, if/when wanted: **component tests** (jsdom/RTL) and **end-to-end** coverage of the user
> scenarios (`S1`–`S8`, which needs a Firestore emulator + auth). Both are deliberately deferred —
> named here so they aren't lost.

## Testing levels

Run top-down; stop adding levels when the change can't reach the next one (a docs-only change stops
at L0). The pipeline's review gate (`/implement` step 5) is L2–L4.

| Level                  | What                                                                                             | Tooling                                                  | When                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------------------------------------------------- |
| **L0 Gate** _(always)_ | `tsc --noEmit`, ESLint incl. `compat/compat`, **Vitest unit tests**, Prettier `--check`          | `npm run ci` (`verify` to auto-fix first)                | every commit (pre-push hook enforces)              |
| **L1 Build**           | App compiles for production (Netlify adapter)                                                    | `npm run build`                                          | any non-trivial code change                        |
| **L2 Behavior drive**  | Acceptance criteria walked in the **running app, TV user agent**                                 | `npm run dev` + chrome-devtools MCP / preview; `/verify` | any change observable in the browser               |
| **L3 Review**          | Correctness, simplification; security when auth / an API route / `tools/firestore.rules` changed | `/code-review`, `/simplify`, `/security-review`          | code-writing commands, over the feature diff       |
| **L4 Dead code**       | No unused files/exports/types/deps left behind                                                   | `npm run knip` (`knip:fix` to remove)                    | final check in `/implement` · `/adjust` · `/tweak` |
| **L5 Real-hardware**   | D-pad behavior, perf, live auth/Firestore — what dev can't prove                                 | manual, on the TV; **flag it, don't fake it**            | when the change touches those paths                |

**`L0`, step by step.** The gate is one command, `npm run ci`, run in order — each step only checks,
so fix failures by hand (`npm run verify` auto-fixes lint/format first):

1. `ci:ts` — `astro sync && tsc --noEmit` (types)
2. `ci:lint` — ESLint over `./src`, incl. `compat/compat` (lint + Chrome 87 API floor)
3. `ci:test` — `vitest run` (unit tests: logic)
4. `ci:format` — Prettier `--check` (formatting)

During development, `npm run test` runs the unit tests once and `npm run test:watch` re-runs them on
change. The pre-push hook runs the full `npm run ci`.

**The TV user agent is mandatory for any UI drive.** Set Chrome dev tools / chrome-devtools MCP to
`…Chrome/87.0.3945.79 Safari/537.36 SmartTV/10.0…` — the real client. Testing in a modern UA hides
both Chrome 87 breakage and TV layout problems.

## Always-on checks (every code change)

Independent of scope, every code change confirms:

- **Gate green** — `npm run ci` (L0).
- **Unit-test new logic** — store actions, server helpers, and utils get a co-located Vitest test
  (`*.test.ts`, runs in Node). Test the **logic**, not React rendering. Run `npm run test`.
- **Chrome 87 floor** — `compat/compat` clean **and**, for client code, the behavior driven once in
  the SmartTV UA (lint catches APIs, only a runtime drive catches layout/behavior). No
  `structuredClone` / `Array.prototype.at` / top-level await in client code.
- **Both languages** — anything with user-facing text renders in **en _and_ pl**; switch language
  live, confirm no missing key and no overflow at TV type sizes. Strings registered in
  `src/i18n/translations.ts`.
- **Layering intact** — components stay presentation-only, logic in stores, Firestore only in
  repositories/admin routes, and **no manual Zustand mutation after a write** (the `onSnapshot`
  round-trip must flow it back).

## Test-by-scope

Match the change to the layer(s) it touches and run those checks **on top of** the always-on set.
Rows mirror the [doc-sync map](development.md#keeping-docs-in-sync).

| Change                                                 | What to test                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data layer / repository / Firestore shape**          | Write → `onSnapshot` → store → re-render round-trip works with **no manual mutation**. Entity hydration & reference resolution (mission→group→objective→color) produce hydrated objects. `in` queries stay **batched ≤ 30 IDs**. Inspect real docs with the **firebase MCP**. Note any **seed dependency** (does it need `db:seed` / reseed to render?). |
| **Zustand store / business logic**                     | Derived state and action outputs are correct; selectors return what components expect; state survives the snapshot round-trip; no Firestore SDK / collection names leaked into the store.                                                                                                                                                                |
| **Component / UI**                                     | L2 drive on the TV UA: behavior matches acceptance criteria; **readable at 3–5 m**, high contrast, large targets, minimal clutter; **D-pad / keyboard reachable with visible focus**; both languages; honors the "square, minimalist" look (BEM `c-`, reuse shared `Button`/`Typography`/`Overlay`). Capture a screenshot/snapshot as proof.             |
| **API route / auth / session**                         | **Turn `PUBLIC_SKIP_AUTH` off** — it masks 401s in dev (see [traps](#masking-traps)). Confirm the route is denied without a valid session cookie (401), login issues the cookie, and the **session-expiry / `ReauthPrompt`** path fires. Run **`/security-review`**.                                                                                     |
| **Firestore security rules** (`tools/firestore.rules`) | Validate rules (`firebase_validate_security_rules` MCP); confirm client reads are allowed only where a `match` block intends and **writes stay denied** (`write: false`). Deploy with `npm run firebase:push-rules`, then re-confirm against live. Run **`/security-review`**.                                                                           |
| **i18n strings**                                       | Both `en` and `pl` keys present and registered in `src/i18n/translations.ts`; switch language live; no missing key, no overflow.                                                                                                                                                                                                                         |
| **Browser-floor / Chrome 87 config**                   | `compat/compat` clean; `build.target: ['chrome87']` intact; runtime drive in the SmartTV UA.                                                                                                                                                                                                                                                             |
| **Workflow / command / docs only**                     | No runtime test. Gate green, internal links resolve, no doc contradicts the code.                                                                                                                                                                                                                                                                        |

## Masking traps

Dev convenience hides real behavior. Each trap below silently passed a check that wasn't actually
exercised (all surfaced in `01_retro_content-editing`):

- **`PUBLIC_SKIP_AUTH=true` masks the auth/session paths.** It bypasses the client gate **and** makes
  write routes skip the session check. Local writes "work" while the 401 / re-auth flow is never run.
  **Disable it to test anything auth-related.**
- **Seed dependency.** Data shaped by a schema change (e.g. the `color` collection) only renders
  **after `npm run db:seed`** reseeds Firestore. Pre-reseed fallback rendering is expected, not a
  regression — but say so.
- **Dev timestamp ≠ build timestamp.** Build-time `define` values (e.g. build info) show the
  dev-server start time in `dev`; the real value only appears in the Netlify build.
- **Desktop UA ≠ TV.** A modern user agent hides Chrome 87 breakage and TV-scale layout issues — see
  the mandatory TV-UA rule above.
- **Real-TV hardware (L5).** D-pad navigation feel and performance can't be fully confirmed in
  desktop Chrome even with the UA string. Flag these for the owner to confirm on the TV.

## User-story regression

The common flows are the regression script, and they live in
[03_user-scenarios.md](03_user-scenarios.md) as scenarios `S1`–`S8` — not duplicated here. After a
behaviour-affecting change:

- **Walk the scenarios the change could plausibly touch** (all of them for a broad change) in the
  running app on the **TV user agent**, confirming each scenario's **Expected** outcome.
- Apply the [always-on checks](#always-on-checks-every-code-change) and the
  [test-by-scope](#test-by-scope) rows for the layers touched.
- Flag anything dev masks — auth paths (`PUBLIC_SKIP_AUTH`), real-TV behaviour — as pending (`L5`).

## Recording QA

Every artifact has a **`Verification`** section (`_TEMPLATE_implement`, `_TEMPLATE_tweak`,
`_TEMPLATE_adjust`). Record there, plainly:

- which levels ran and their result (`npm run ci` / `build` outcome, what the L2 drive showed —
  cite concrete evidence like row counts or rendered text, which review skills ran);
- what is **pending or unverifiable** (real-TV items, live-auth items dev masked) — never claim work
  that wasn't done.

Claims must trace to a commit or to observed app behavior. A green gate alone is **not** "verified".
