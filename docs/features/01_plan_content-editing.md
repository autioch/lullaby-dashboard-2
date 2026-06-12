# Content editing (missions, groups, objectives) — Plan

> **Artifact:** `01_plan_content-editing.md` · **Roles:** Product Owner · Solution Architect / Tech Lead
> **Status:** `in-progress`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-11 · **Last updated:** 2026-06-11
> **Related:** [spec](01_spec_content-editing.md) · [implement](01_implement_content-editing.md) · adjust [r1](01_adjust_content-editing-r1.md), [r2](01_adjust_content-editing-r2.md), [r3](01_adjust_content-editing-r3.md) · [retro](01_retro_content-editing.md)

## Goal

Let a parent create, edit, delete, reorder, attach, and remove missions, objective groups, and
objectives from inside the app — TV/keyboard operable — with all writes going through
admin-SDK API routes guarded by an HttpOnly session cookie, and changes flowing back via the
existing `onSnapshot` subscriptions.

## Approach

Strict bottom-up so the tree never breaks: **server auth/session first** (cookie issue +
verify), then the **admin-SDK write routes** (with referential cleanup), then the **client edit
repository** (fetch transport), then **store state** (`useControlsStore` flag + new
`useEditStore` orchestration), then the **`ContentEditor` component tree** (overlay, rows,
swatch picker, i18n), then **wiring** (menu entry + Dashboard mount), then **end-to-end
validation** on the TV user agent. Reads are untouched — only the write half of the
data-architecture flow is added (client → edit repo → API → admin → Firestore → snapshot →
`useMissionStore` → re-render). No manual Zustand mutation after writes (principle 9). Every
client step keeps `compat/compat` green for the Chrome 87 floor; server (API route) code is not
subject to that floor and uses Node `crypto` for cookie signing.

## Read before starting

Context every step assumes — keep open while implementing:

- [CLAUDE.md](../../CLAUDE.md) — house rules, stack, TV / Chrome 87 floor, Environment
- [docs/development.md](../development.md) — architecture, conventions, command table
- [docs/07_data-architecture.md](../07_data-architecture.md) — layering authority (esp. principles 4, 5, 7, 9; write-flow)
- [docs/features/01_spec_content-editing.md](01_spec_content-editing.md) — the spec (the contract)

## Steps

Ordered and **self-contained** — each leaves the tree green (`npm run ci` passes) and is
independently committable. Phases: **Prep/refactor → Build → Wire → Validate.**

### Step 1 — Issue & verify an HttpOnly session cookie · phase: `build` ✅

- **Goal:** Stand up the auth primitive every write route depends on, before any route exists.
  Successful login sets a signed HttpOnly cookie; routes can later require it.
- **Read:** spec §Behavior "Write flow and feedback" + §Impact "API routes"; spec §Open
  questions (cookie secret); `src/pages/api/_utils.ts`, `src/pages/api/auth.ts`;
  `tools/check-firebase-env.mjs`; Astro `APIContext.cookies` API
  (`ctx.cookies.set/get/delete`).
- **Change:**
  - `src/pages/api/_utils.ts`: add `setSession(ctx)`, `clearSession(ctx)`, and
    `requireSession(ctx): boolean` (or a small `{ ok, status }` result). Token = HMAC-SHA256
    over a payload (e.g. `issuedAt`) keyed by `import.meta.env.SESSION_SECRET`, signed/verified
    with Node `crypto` (`createHmac`, `timingSafeEqual`). Cookie name e.g. `lp_session`,
    options `{ httpOnly: true, sameSite: 'lax', path: '/', secure: <prod>, maxAge: <e.g. 30d> }`.
    Verification must be constant-time and reject missing/invalid/garbled tokens.
  - `src/pages/api/auth.ts`: on the success branch call `setSession(ctx)` **before** returning
    `{ ok: true }` (handler already receives `ctx`).
  - `tools/check-firebase-env.mjs`: add `SESSION_SECRET` to `requiredServerKeys`.
- **Done-check:** `npm run ci` green. (`requireSession` is unused until Step 2 — exported, so no
  lint error.)

### Step 2 — Admin-SDK content write API routes (with referential cleanup) · phase: `build` ✅

- **Goal:** Server endpoints for every mutation in the spec, each guarded by `requireSession`,
  performing referential cleanup in batched admin writes. No Firestore rules change.
- **Read:** spec §Behavior "Membership and ordering", "Delete", "Write flow"; §Impact "API
  routes" + "Security rules"; `docs/07_data-architecture.md` write-flow + query constraints;
  `src/pages/api/_utils.ts` (`getFirestoreDb`, `jsonResponse`, `requireSession` from Step 1);
  record shapes in `src/database/missionRepository.ts`, `objectiveGroupRepository.ts`,
  `objectiveRepository.ts`.
- **Change:** Add POST routes (`export const prerender = false`), recommended split by
  collection under `src/pages/api/content/`: `missions.ts`, `groups.ts`, `objectives.ts`. Each
  starts with `requireSession(ctx)` → `401` `jsonResponse` when invalid, then dispatches on an
  `action` field in the JSON body. Use `getFirestoreDb()`; use a `WriteBatch` whenever more
  than one doc changes. Actions:
  - **missions.ts:** `create` (new `mission` doc, empty `objectiveGroupIds`); `update`
    (`label` | `youtubeUrl` | `retentionHours`); `delete` (delete mission doc **only**);
    `attachGroup` / `removeGroup` (mutate this mission's `objectiveGroupIds`);
    `moveGroup` (reorder `objectiveGroupIds` by ±1 — array clone, no `Array.prototype.at`).
  - **groups.ts:** `create` (new `objectiveGroup` doc + append id to the given mission's
    `objectiveGroupIds`); `update` (`label` | `isHidden`); `delete` (delete group doc **and**
    strip its id from **every** mission's `objectiveGroupIds`; member objectives untouched —
    batched); `attachObjective` / `removeObjective` (mutate this group's `objectiveIds`);
    `moveObjective` (reorder `objectiveIds` by ±1).
  - **objectives.ts:** `create` (new `objective` doc + append id to the given group's
    `objectiveIds`); `update` (`label` | `color` | `isHidden`); `delete` (delete objective doc
    **and** strip its id from **every** group's `objectiveIds` — batched).
  - Validate inputs server-side (known action, id exists where required, field whitelist);
    return `jsonResponse({ ok, ... }, status)` consistently. Reads stay unchanged.
- **Done-check:** `npm run ci` green; `npm run build` succeeds. Confirm `tools/firestore.rules` is
  **unchanged**.

### Step 3 — Client edit repository (fetch transport) · phase: `build` ✅

- **Goal:** A single client module that wraps `fetch` to the Step 2 routes, keeping transport
  out of the store and surfacing a typed `401` (session expired).
- **Read:** spec §Impact "Repository"; `docs/07` Repository layer rules (no Zustand/React dep);
  `src/database/missionRepository.ts` (style); `src/stores/useAuthStore.ts` (existing `fetch`
  shape).
- **Change:** `src/database/contentEditRepository.ts` — one async function per action
  (`createMission`, `updateMission`, `deleteMission`, `attachGroup`, `removeGroup`,
  `moveGroup`, `createGroup`, `updateGroup`, `deleteGroup`, `attachObjective`,
  `removeObjective`, `moveObjective`, `createObjective`, `updateObjective`,
  `deleteObjective`). Each `POST`s `{ action, ...payload }` to the right
  `/api/content/*` route with `{ method, headers: { 'content-type': 'application/json' },
credentials: 'same-origin', body }`. On `response.status === 401` throw/return a
  distinguishable `SessionExpiredError` (or sentinel); on other non-ok throw a generic edit
  error. No Firestore SDK, no Zustand, no React imports. Keep APIs Chrome-87-safe.
- **Done-check:** `npm run ci` green (incl. `compat/compat` — `fetch` is in-floor).

### Step 4 — Controls flag + `useEditStore` orchestration · phase: `build` ✅

- **Goal:** Open/close the editor and hold all transient editor state + mutation actions, with
  no manual store mutation after writes and a `401` path that re-gates auth.
- **Read:** spec §Behavior "Navigation model", "Write flow and feedback"; §Impact "Zustand
  store"; `docs/07` principles 6 & 9; `src/stores/useControlsStore.ts`,
  `src/stores/useMissionStore.ts` (read current entities via `getState()`),
  `src/stores/useAuthStore.ts` (how to drop to unauthenticated), `src/database/contentEditRepository.ts`.
- **Change:**
  - `src/stores/useControlsStore.ts`: add `isContentEditor: boolean` + `openContentEditor()` /
    `closeContentEditor()`, mirroring the existing options/mission-select flags.
  - `src/stores/useEditStore.ts`: state for drill-down `level`
    (`'missions' | 'mission' | 'group' | 'objective'`), `selectedMissionId` / `selectedGroupId`
    / `selectedObjectiveId`, per-action `pending`/`error` (e.g. keyed by a control id), and a
    confirm-delete flag. Navigation actions (`openMission`, `openGroup`, `openObjective`,
    `back`). Mutation actions wrap `contentEditRepository`, setting pending → calling repo →
    clearing pending; **do not** write `useMissionStore` (snapshot does it). On the
    `SessionExpiredError`/`401` path: set an inline session-expired error **and** flip
    `useAuthStore` to unauthenticated (clear its `auth` ls flag) so `Shell` shows `AuthGate`.
    Read live entities from `useMissionStore.getState()` (`missions`, `objectiveGroups`,
    `objectives`). Clone arrays manually (Chrome 87).
- **Done-check:** `npm run ci` green.

### Step 5 — `ContentEditor` overlay, rows, swatch picker, i18n · phase: `build` ✅

- **Goal:** The full presentation-only editor tree, every control focusable and remote/keyboard
  operable, reusing `Overlay` / `Panel` / `Layout`.
- **Read:** spec §Behavior (all), §UI & TV constraints, §i18n; `src/components/AppOptions/`
  (overlay pattern + `translations.ts`), `src/components/MissionSelect/MissionSelect.tsx`,
  `src/components/Button/Button.tsx`, `src/components/Overlay|Panel|Layout`,
  `src/components/Typography/Typography.tsx`, `src/i18n/translations.ts` (registration pattern),
  `src/stores/useEditStore.ts`.
- **Change:**
  - `src/components/ContentEditor/ContentEditor.tsx` (+ `ContentEditor.css`, BEM `c-content-editor`)
    rendering the four drill-down levels from `useEditStore` (one level visible at a time):
    missions list, mission detail (fields + groups list), group detail (fields + objectives
    list), objective edit. Fields: mission `label`/`youtubeUrl` (text) + `retentionHours`
    (numeric **stepper**, ±1, not free typing); group `label` (text) + `isHidden` (toggle);
    objective `label` (text) + `color` (**preset swatch picker**) + `isHidden` (toggle). Row
    actions: Edit, Delete (with in-overlay **confirm step**), Move ↑/↓, Remove-from-parent,
    plus ＋Add (create-new or attach-existing-from-library) and Back. Pending control disabled +
    pending state; inline error area incl. session-expired message. Keep components
    representation-only — all logic via `useEditStore` actions.
  - Small focusable sub-components (mission/group/objective row, swatch picker) as needed —
    every actionable element is a real focusable control with a visible focus ring (CSS
    `:focus-visible`).
  - `src/components/ContentEditor/translations.ts` (`pl`, `en`) for every UI string in spec
    §i18n; register it in `src/i18n/translations.ts` (both `en` and `pl` maps), mirroring
    `appOptionsTranslations`.
- **Done-check:** `npm run ci` green (**`compat/compat` matters here — client code**);
  `npm run build` succeeds.

### Step 6 — Menu entry + Dashboard mount · phase: `wire` ✅

- **Goal:** Surface the editor: an **Edit** action in the menu opens it; the overlay renders
  from the controls flag.
- **Read:** spec §Behavior "Entry point and shell", §Acceptance criteria #1;
  `src/components/Menu/Menu.tsx`, `src/components/Dashboard/Dashboard.tsx`, `src/icons/`
  (only `restart`, `mission`, `settings` exist — add an edit/pencil SVG).
- **Change:**
  - `src/icons/edit.svg` — a simple pencil/edit glyph (imported via `?react`, like the others).
  - `src/components/Menu/Menu.tsx`: add an `Icon` for Edit → `openContentEditor()` from
    `useControlsStore`, alongside the existing mission/restart/settings icons.
  - `src/components/Dashboard/Dashboard.tsx`: read `isContentEditor` from `useControlsStore` and
    render `<ContentEditor />` when true (mirroring `isAppOptions` → `<AppOptions />`).
- **Done-check:** `npm run build` succeeds + `npm run ci` green; `npm run dev` with the **TV
  user agent** (`Chrome/87 … SmartTV`) in Chrome dev tools — Edit opens the overlay, Esc/Back
  closes it, and every control is reachable and visibly focused with **keyboard/D-pad only**.

### Step 7 — End-to-end validation · phase: `validate`

- **Goal:** Prove every acceptance criterion against the running app.
- **Read:** spec §Acceptance criteria; `docs/07` write-flow.
- **Change:** none under `src/` beyond fixes surfaced by testing. Walk every acceptance
  criterion on the TV UA (create/rename/delete mission+group+objective and watch the dashboard
  update with no reload / no manual store mutation; reorder via Move ↑/↓; attach vs remove
  semantics; delete referential cleanup + confirm; `401` re-login prompt). Verify
  `tools/firestore.rules` still `write: false`.
- **Done-check:** see **Final verification** below.

## Final verification

- [ ] `npm run ci` green (tsc + lint incl. `compat/compat` + format)
- [ ] `npm run build` succeeds
- [ ] Behavior matches every item in the spec's **Acceptance criteria**, verified on the TV
      user agent / preview (not just unit-level) — including realtime reflection on the
      dashboard with no reload and no manual Zustand mutation
- [ ] Client writes still denied: `tools/firestore.rules` unchanged (`write: false`); all
      mutations go through the admin-SDK routes
- [ ] Tree internally consistent

## Risks & assumptions

- **Open question — cookie secret (resolved to default):** plan adds a dedicated
  `SESSION_SECRET` env var (Step 1) rather than deriving from `APP_PASSWORD`. Recorded here; the
  spec lists it as non-blocking. If reversed, drop the env addition and derive the HMAC key from
  `APP_PASSWORD` instead.
- **Open question — swatch palette (resolved to default):** a small fixed palette defined inside
  `ContentEditor` (Step 5). Can be promoted to a shared constant later without API change.
- **Auth-gate cookie/ls drift:** the client `auth` ls flag can be `true` while the cookie has
  expired → a write returns `401`. Handled by the Step 4 `401` path (flip `useAuthStore` to
  unauthenticated + clear ls), so `Shell` re-shows `AuthGate`. Re-login re-issues the cookie via
  `auth.ts`.
- **`PUBLIC_SKIP_AUTH=true`** bypasses the gate so no cookie is set; content writes will `401`.
  Expected (dev-only escape hatch); document if it confuses testing.
- **Sequencing:** Step 1's `requireSession` is exported-but-unused until Step 2 — acceptable
  (no lint error on unused exports). Every prior step still passes `npm run ci`.
- **Chrome 87:** avoid `structuredClone` / `Array.prototype.at` / top-level await in client code
  (Steps 3–6); clone arrays manually. Server route code (Steps 1–2) is off-floor and may use
  Node `crypto`.
- **Firestore `in`/batch limits:** referential-cleanup deletes scan their parent collection;
  collections are small here, but if a query/batch ever exceeds limits, chunk per the data-arch
  doc (30-id cap).
