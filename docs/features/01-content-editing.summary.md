# Content editing (missions, groups, objectives) — Implementation Summary

> Spec: [01-content-editing.md](01-content-editing.md) · Plan: [01-content-editing.plan.md](01-content-editing.plan.md)
> Owner: Jakub Szczepaniak · Completed: 2026-06-11 (partial — Step 7 deferred, see Skipped)

## Outcome

A parent can create, edit, delete, reorder, attach, and remove missions, objective groups, and
objectives from an in-app **Edit** overlay, TV/keyboard-operable. All writes go through
admin-SDK API routes guarded by an HttpOnly session cookie; changes flow back via the existing
`onSnapshot` subscriptions (no manual Zustand mutation). Steps 1–6 of the plan are built; the
end-to-end validation/close-out step is not yet done.

## Added

- **Server auth/session** — HMAC-SHA256 session helpers (`setSession` / `clearSession` /
  `requireSession`) in `src/pages/api/_utils.ts`; `SESSION_SECRET` wired into
  `tools/check-firebase-env.mjs`.
- **Write API routes** under `src/pages/api/content/` — `missions.ts`, `groups.ts`,
  `objectives.ts`, plus a shared helper `_shared.ts` (action dispatch, validation, referential
  cleanup in batched admin writes; each guarded by `requireSession`).
- **Client edit repository** — `src/database/contentEditRepository.ts` (one `fetch` function per
  action; typed `401` / session-expired surfacing; no Firestore/Zustand/React deps).
- **Store** — `src/stores/useEditStore.ts` (drill-down level, selected ids, per-action
  pending/error, confirm-delete, navigation + mutation actions).
- **Component** — `src/components/ContentEditor/` (`ContentEditor.tsx`, `ContentEditor.css`,
  `translations.ts`) — the four-level overlay (missions → mission → group → objective) with
  stepper, swatch picker, toggles, Move ↑/↓, confirm-delete, inline/session-expired errors.
- **Icon** — `src/icons/edit.svg` (pencil glyph for the menu entry).

## Changed

- **API / auth** — `src/pages/api/auth.ts` sets the session cookie on successful login.
- **Stores** — `src/stores/useControlsStore.ts` gains `isContentEditor` +
  `openContentEditor` / `closeContentEditor`; `src/stores/useAuthStore.ts` gains a
  drop-to-unauthenticated path for the `401` flow.
- **Wiring** — `src/components/Menu/Menu.tsx` adds the Edit entry; `src/components/Dashboard/Dashboard.tsx`
  mounts `<ContentEditor />` from the controls flag; `src/i18n/translations.ts` registers the
  ContentEditor strings (`en`, `pl`).
- **Docs (in-step sync)** — `CLAUDE.md` (Environment: `SESSION_SECRET`);
  `docs/development.md` and `docs/07_data-architecture.md`
  (`useEditStore` + admin-SDK content-write route path); `01-content-editing.md` (missions list
  has no Move ↑/↓ — top-level collection is unordered).

## Skipped / deferred

- **Step 7 — end-to-end validation & docs close-out (not done).** Acceptance criteria not yet
  walked on the TV user agent; review skills (`/code-review`, `/security-review`) not yet run;
  README product mention not added.
- **Statuses not flipped** — plan remains `Status: in-progress`, spec remains `Status: agreed`
  (not `implemented`).
- **`.env.example`** carries an uncommitted change (`SESSION_SECRET`), not yet committed.
- **Real-TV hardware** — keyboard/D-pad reachability was implemented to spec but final
  confirmation on actual TV hardware remains outstanding.

## Verification

Per-step `npm run ci` (tsc + lint incl. `compat/compat` + format) passed at commit time via the
pre-push hook for Steps 1–6. Full acceptance verification on the TV user agent and the review
gate (`/verify`, `/code-review`, `/security-review`) are **pending** — they belong to the
deferred Step 7. `tools/firestore.rules` was left unchanged (`write: false`); all mutations go
through the admin-SDK routes.

## Commits

- `5923230` — feat(auth): issue HmacSHA256 HttpOnly session cookie on login (Step 1)
- `b5bb3d0` — feat(api): add admin-SDK content write routes with referential cleanup (Step 2)
- `285409f` — feat(db): add client content-edit repository (fetch transport) (Step 3)
- `513887f` — feat(store): add content-editor controls flag + useEditStore orchestration (Step 4)
- `9f8524f` — feat(editor): add ContentEditor overlay tree with i18n (Step 5)
- `fce2687` — feat(menu): add Edit entry that opens the content editor overlay (Step 6)
