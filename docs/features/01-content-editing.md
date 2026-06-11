# Content editing (missions, groups, objectives)

> Status: `agreed`
> Owner: Jakub Szczepaniak · Created: 2026-06-11 · Last updated: 2026-06-11

## Problem / motivation

The dashboard now reads missions, objective groups, and objectives live from Firestore, but
they can only be changed by editing the database directly (console or `db-seed`). A household
should be able to manage its own content — rename a mission, recolor an objective, add a new
group — from inside the app, on the same shared TV/tablet they already use, without touching
Firebase tooling.

## User story

As a **parent managing the household**, I want **to create, edit, delete, reorder, and
re-link missions, objective groups, and objectives from inside the app**, so that **I can keep
the family's routines current without going into the Firebase console**.

## Behavior

Entry point and shell:

- A new **Edit** entry sits alongside the existing menu actions (next to App Options / Mission
  Select). Selecting it opens a full-screen **content editor overlay** (reusing
  `Overlay` + `Panel` + `Layout`), toggled by a flag in `useControlsStore`
  (`isContentEditor`), mirroring `isAppOptions` / `isMissionSelect`.
- The overlay is navigable end-to-end by **D-pad/remote and keyboard** — every actionable
  element is focusable with a visible focus ring; no interaction requires a pointer.

Navigation model (drill-down, one level visible at a time to stay TV-readable):

1. **Missions list** — all missions. Each row: label + actions (Edit, Delete, Move ↑/↓).
   A **＋ Add mission** action appends a new mission.
2. **Mission detail** — the mission's editable fields plus its ordered list of **groups**
   (each: Edit, Remove-from-mission, Move ↑/↓), an **＋ Add group** action (create new group
   _or_ attach an existing group from the library), and a Back action.
3. **Group detail** — the group's editable fields plus its ordered list of **objectives**
   (each: Edit, Remove-from-group, Move ↑/↓), an **＋ Add objective** action (create new
   objective _or_ attach an existing one from the library), and a Back action.
4. **Objective edit** — the objective's editable fields.

Editable fields per entity:

- **Mission**: `label` (text), `youtubeUrl` (text), `retentionHours` (numeric stepper, not
  free typing).
- **Objective group**: `label` (text), `isHidden` (toggle).
- **Objective**: `label` (text), `color` (choose from a fixed **preset swatch palette** — no
  hex typing), `isHidden` (toggle).

Membership and ordering:

- **Order** is the array order of `mission.objectiveGroupIds` and `group.objectiveIds`.
  Reordering is done with **Move ↑ / Move ↓** buttons (no drag-and-drop).
- **Attach** adds an existing id to the parent's array; **Remove-from-parent** removes the id
  from the parent array **but does not delete** the underlying group/objective (they are a
  shared, reusable library).
- **Create** makes a new document and immediately attaches it to the current parent (a new
  group is appended to the current mission; a new objective to the current group). A
  top-level new mission is attached to nothing.

Delete (hard delete of the document, with referential cleanup):

- Deleting an **objective** removes its document and strips its id from **every** group's
  `objectiveIds`.
- Deleting a **group** removes its document and strips its id from **every** mission's
  `objectiveGroupIds`. Member objectives are **not** deleted.
- Deleting a **mission** removes only the mission document.
- Every Delete requires an in-overlay **confirm step** before it fires.

Write flow and feedback:

- Each mutating action calls a **server API route** (`firebase-admin`); the client never
  writes Firestore directly. While a request is in flight the triggering control shows a
  pending state and is disabled.
- On success the change is **not** applied to Zustand by hand. The existing realtime
  `onSnapshot` subscriptions flow the new state back into `useMissionStore`, which re-renders
  the editor — honoring data-architecture principle 9.
- On failure the editor surfaces an inline error. A `401` (expired/missing session) surfaces a
  "session expired — re-enter password" message routed back through the auth gate.

## Scope

**In scope**

- Full management (create / edit / delete / reorder / attach / remove) of missions, objective
  groups, and objectives, per the behavior above.
- One menu entry + one editor overlay component, fully remote/keyboard operable.
- Server-side write API (admin SDK) for all mutations, authorized by a session cookie.
- Upgrading the auth gate to issue an **HttpOnly session cookie** that the write API verifies.

**Out of scope** (explicitly not doing now)

- Real per-user identity / multi-account auth — the gate stays a single shared password.
- Undo / edit history / audit trail.
- Drag-and-drop reordering (buttons only).
- Free-form color picker / hex entry (preset swatches only).
- Editing themes, videos, or any entity beyond the three collections.
- Offline editing or optimistic local mutation.
- Bulk import/export (that remains `db-seed`).

## Impact on the codebase

Reads stay on the existing realtime client path; only writes are added (client → API →
admin → Firestore → snapshot → store).

- **Data model / Firestore** (`src/database/*` record types, collections): No shape changes to
  `mission`, `objectiveGroup`, `objective`. The canonical id-based types live in
  `src/database/*`: `MissionRec` (`objectiveGroupIds`), `ObjectiveGroupRec` (`objectiveIds`,
  `isHidden`), `ObjectiveRec` (`color`, `isHidden`).
- **Repository** (`src/database/`): Add a **client-side edit repository** (e.g.
  `contentEditRepository.ts`) that wraps `fetch` to the new API routes — keeps transport out
  of the store, consistent with "repositories encapsulate data access." Existing read repos
  unchanged.
- **Zustand store** (`src/stores/`): `useControlsStore` gains `isContentEditor` +
  `openContentEditor` / `closeContentEditor`. A new `useEditStore` holds transient editor
  state (current drill-down level / selected ids, draft values, pending + error per action)
  and the mutation actions, which orchestrate the edit repository and read current entities
  from `useMissionStore`. No manual Zustand mutation after writes.
- **Components** (`src/components/<Name>/`): New `ContentEditor/` overlay (with
  `ContentEditor.css` + `translations.ts`), plus small focusable sub-rows for
  mission/group/objective and a swatch picker. New menu entry wired where `AppOptions` /
  `MissionSelect` are launched.
- **API routes** (`src/pages/api/`, admin SDK): New write endpoints using
  `getFirestoreDb()` from `_utils.ts`, every one guarded by a `requireSession` check. Each
  performs the referential cleanup described above inside an admin operation (batched write
  where multiple docs change). `auth.ts` is upgraded to **set** the session cookie on success;
  `_utils.ts` gains `setSession` / `requireSession` helpers (HMAC-signed token using a
  `SESSION_SECRET`).
- **Security rules** (`tools/firestore.rules`): **No change** — stays `write: false`. All
  writes go through the admin SDK, which bypasses rules. (If touched, redeploy via
  `npm run firebase:push-rules`.)

## UI & TV constraints

- **Layout / where it appears**: Full-screen overlay launched from the main menu, same
  `Overlay`/`Panel`/`Layout` chrome as App Options. One drill-down level visible at a time to
  avoid clutter on a 3–5 m screen.
- **TV-first checks**: large type and targets; high contrast; visible focus ring on every
  control; D-pad/keyboard reachable in a sensible tab order; Move ↑/↓ buttons instead of drag;
  numeric stepper for retention; preset swatches instead of hex typing; toggles for hidden.
  Free-text fields (label, youtubeUrl) rely on the platform on-screen keyboard and are kept to
  a minimum.
- **Chrome 87 compatibility**: avoid APIs newer than Chrome 87 (e.g. `structuredClone`,
  `Array.prototype.at`, top-level await) — `eslint-plugin-compat` must stay green. Clone arrays
  manually; use Node `crypto` for cookie signing on the server (not subject to the browser
  floor).

## i18n

Strings live in `ContentEditor/translations.ts`, read via `useLanguageStore`. Languages:
**pl, en** (matching App Options). New strings include: edit menu entry; section/back/add
labels; field labels (label, youtube URL, retention hours, color, hidden); actions (edit,
delete, move up, move down, remove, attach, save, cancel); delete-confirm prompt; pending and
error messages (incl. session-expired). Stored content (mission/objective labels) is free user
text, not translated.

## Acceptance criteria

- [ ] An **Edit** entry appears in the menu next to App Options / Mission Select and opens the
      content editor overlay; closing it returns to the dashboard.
- [ ] From the overlay a user can **create, rename, and delete** a mission, a group, and an
      objective, and see each change reflected on the dashboard via the realtime subscription
      (no page reload, no manual store mutation).
- [ ] Editable fields work: mission `label`/`youtubeUrl`/`retentionHours`; group
      `label`/`isHidden`; objective `label`/`color` (swatch)/`isHidden`.
- [ ] Groups can be reordered within a mission and objectives within a group via Move ↑/↓, and
      the new order persists and shows on the dashboard.
- [ ] Attaching/removing a group to/from a mission (and an objective to/from a group) updates
      only the parent's id array; removed items remain in the library.
- [ ] Deleting an objective strips it from all groups; deleting a group strips it from all
      missions and leaves member objectives intact; deleting a mission removes only that
      mission. Each delete is confirmed first.
- [ ] All mutations go through admin-SDK API routes; `tools/firestore.rules` still denies
      client writes (`write: false`).
- [ ] Successful login sets an **HttpOnly** session cookie; write API routes reject requests
      without a valid cookie with `401`, and the editor surfaces a re-login prompt on `401`.
- [ ] The entire editor is operable with keyboard/D-pad only, with visible focus, and
      `npm run ci` passes (incl. `compat/compat`).

## Open questions

- [ ] **Cookie signing secret**: default plan adds a `SESSION_SECRET` env var; acceptable
      alternative is deriving the signing key from `APP_PASSWORD`. Pick at implementation —
      non-blocking. (Update Environment docs / `check-firebase-env.mjs` if a new var is added.)
- [ ] **Swatch palette source**: a small fixed palette defined in the editor vs. a shared
      constant. Non-blocking; decide during build.
