# Content editing (missions, groups, objectives) — Adjustments (Round 2)

> **Artifact:** `01_adjust_content-editing-r2.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-11 · **Base ref:** `b8473ff` (pre-adjustment HEAD)
> **Related:** [spec](01_spec_content-editing.md) · [plan](01_plan_content-editing.md) · [implement](01_implement_content-editing.md) · adjust [r1](01_adjust_content-editing-r1.md), [r3](01_adjust_content-editing-r3.md) · [retro](01_retro_content-editing.md)

Record of the second post-review adjustment round. The spec, plan, and implementation record are
**frozen** — this file plus [round 1](01_adjust_content-editing-r1.md) are the only record of
post-review changes. Every claim traces to a commit.

## Change requests

Classification is one of: **requirement change** · **refactor** · **design change**.

### CR-1 — Breadcrumb trail

- **Source:** Design / Product owner — Jakub Szczepaniak
- **Request:** The drill-down goes too deep to tell where you are; add breadcrumbs showing the
  current location.
- **Why:** Orientation — on a TV the single-level view gave no sense of place.
- **Classification:** design change (navigation aid).
- **How handled:** New `Breadcrumb` component; `Header` now renders Back + the trail instead of a
  title. Each level builds its trail (`Misje › Mission › Group`); ancestor segments are focusable
  and jump straight to that level (`useEditStore.goMissions()` for root, `openMission` for the
  mission), the current segment is plain text. Decision: clickable ancestors (discard unsaved
  drafts like Back).
- **Acceptance check:** Every level shows the path; ancestor crumbs navigate to that level.
- **Result:** Implemented — verified on the SmartTV UA: root shows `Misje`; mission shows
  `Misje(link) › Wieczorem`; group shows `Misje(link) › Wieczorem(link) › Asia`; clicking `Misje`
  from the group jumped two levels to the root. Commit `2cf6911`.

### CR-2 — Edit objectives in place

- **Source:** Product owner / Design — Jakub Szczepaniak
- **Request:** Still too complex. Drop the per-objective Edit drill-down; edit each objective
  inline in the group's list (label input, colour selector, hidden switch). Move Save/Cancel to one
  control for the whole group that saves everything together; the group content scrolls while
  Save/Cancel stay pinned at the bottom.
- **Why:** One fewer level and a single explicit save for the group is simpler to operate.
- **Classification:** requirement + design change (removes the objective level from the spec's
  navigation model; changes the per-entity save to a group-level batched save).
- **How handled:** Removed the `objective` drill-down level entirely (`ObjectiveLevel` deleted;
  `useEditStore` drops `openObjective` / `selectedObjectiveId` / the `back()` objective branch;
  `deleteObjective` no longer navigates). New `ObjectiveEditor` inline card. `GroupLevel` rewritten
  to hold a combined draft (group fields + per-objective drafts keyed by id) and commit it through
  a new batched `saveGroup(groupPatch, objectivePatches)` action (one `updateGroup` + one
  `updateObjective` per edited objective; snapshot flows changes back). Add / Move / Delete on
  objectives stay immediate structural actions (per decision). The SaveBar sits in a
  `position: sticky; bottom: 0` footer so it stays visible while the objectives list scrolls.
- **Acceptance check:** No objective drill-down; objectives edited inline; one Save/Cancel commits
  the group and all edited objectives; Save/Cancel pinned while the list scrolls.
- **Result:** Implemented — verified on the SmartTV UA: group screen shows inline objective
  editors and a pinned Save/Cancel over scrolling content; toggling the group's Hidden **and** an
  objective's Hidden enabled one Save that issued `POST /api/content/groups [200]` **and**
  `POST /api/content/objectives [200]`, both reflected via snapshot. Test edits reverted. Commit
  `e9f470b`.

### CR-3 — Square button corners

- **Source:** Design — Jakub Szczepaniak
- **Request:** The app is square/minimalistic but the editor buttons are rounded (round 1 added the
  radius); unify them.
- **Why:** Visual consistency with the rest of the app.
- **Classification:** design change.
- **How handled:** Removed the `border-radius` from the shared `.c-button` (the round-1 addition)
  and from the editor's glyph buttons (`__icon-btn`) and toggle, so all buttons are square. This
  also re-squares AppOptions / AuthGate / MissionSelect buttons (they share `.c-button`).
- **Acceptance check:** Editor and app buttons share square corners.
- **Result:** Implemented — verified on the SmartTV UA (screenshot): Back / Move / Delete / Save /
  Cancel and the toggle are square. Commit `ded81d2`.

### CR-4 — Stop the "random logout on save"

- **Source:** Development / Product owner — Jakub Szczepaniak
- **Request:** While testing, a save randomly drops to the password screen (possibly after a
  redeploy); fix it.
- **Why:** The client auth flag and the server session cookie were decoupled. In dev
  (`PUBLIC_SKIP_AUTH=true`) the flag is always set but no cookie is minted, so every write 401s; on
  a real 401 the editor called `deauthenticate()`, dumping the whole app to the auth gate and
  losing drafts.
- **Classification:** requirement + refactor (auth behaviour; touches an API route).
- **How handled:** Two fixes (per decision "both"). **Server:** `requireSession` honors
  `PUBLIC_SKIP_AUTH`, so local writes no longer 401 (documented in the Environment notes —
  keep out of prod). **Client:** a 401 now sets a `needsReauth` flag and shows an in-place
  re-login prompt (`ReauthPrompt`) inside the editor instead of `deauthenticate`, so drafts and the
  drill-down position survive; `useAuthStore.authenticate` returns success so the editor clears the
  flag and the user retries the save. A follow-up surfaces the auth error on a wrong-password
  retry.
- **Acceptance check:** Local saves don't 401/logout; a real 401 re-prompts in place keeping the
  editor + drafts.
- **Result:** Implemented — verified on the SmartTV UA: the batched group save returned `200`
  (not `401`) and the app stayed in the editor (no logout). The in-place `ReauthPrompt` is
  code-reviewed and wired but **not live-exercised**, because dev skip-auth removes 401s — flagged
  for confirmation on the deployed app. Commits `986f952`, `baf3bea` (docs), `61bf841` (auth-error
  follow-up).

## Verification

- **Gate:** `npm run ci` (tsc + ESLint incl. `compat/compat` + Prettier) green; `npm run build`
  succeeds.
- **Original acceptance criteria (no regression):** re-walked on the SmartTV UA — Edit entry opens
  the editor; create/rename/delete reachable per entity; editable fields work (now via drafts);
  Move ↑/↓ ordering with correct end-disabling; delete confirm step (objectives now confirm inline
  in their card); admin-SDK routes with `tools/firestore.rules` unchanged (`write: false`);
  keyboard/D-pad operable with the 4px focus ring (breadcrumb crumbs focusable). **Intentional
  deltas:** the spec's objective-edit screen and per-entity save are replaced by in-place editing +
  a group-batched save (CR-2); the spec's `401 → auth gate` becomes `401 → in-place re-login`
  (CR-4); attach/remove remain gone from round 1.
- **New acceptance checks:** CR-1…CR-4 each confirmed (see Result lines).
- **Review skills:** `/code-review` (no surviving correctness findings), `/simplify` (clean), and
  `/security-review` (**required** — CR-4 changed `requireSession`): the skip-auth bypass is gated
  by the same build-time flag that already opens the client gate, defaults safe when unset, adds no
  exposure beyond the documented dev-only flag, and the prod implication is now in the Environment
  notes. No security findings requiring code change.

## Commits

- `ded81d2` — style(button): square corners to match the app
- `986f952` — fix(auth): stop random logout on save; re-login in place
- `e9f470b` — feat(editor): edit objectives in place within their group
- `2cf6911` — feat(editor): add a navigable breadcrumb trail
- `baf3bea` — docs(env): note PUBLIC_SKIP_AUTH now bypasses the server write gate
- `61bf841` — fix(editor): show auth error on failed in-place re-login
