# Content editing (missions, groups, objectives) — Adjustments (Round 1)

> **Artifact:** `01_adjust_content-editing-r1.md` · **Roles:** Product Owner · Solution Architect / Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Date:** 2026-06-11 · **Base ref:** `b3b0dfd` (pre-adjustment HEAD)
> **Related:** [spec](01_spec_content-editing.md) · [plan](01_plan_content-editing.md) · [implement](01_implement_content-editing.md) · adjust [r2](01_adjust_content-editing-r2.md), [r3](01_adjust_content-editing-r3.md) · [retro](01_retro_content-editing.md)

Record of one post-review adjustment round: the change requests raised after the feature was
implemented, how each was handled, and the result. The spec, plan, and implementation record are **frozen** —
this file is the only record of these changes until `/reconcile` re-syncs the spec. Every claim
traces to a commit.

## Change requests

Classification is one of: **requirement change** · **refactor** · **design change**.

### CR-1 — Hide the reference/library model

- **Source:** Product owner — Jakub Szczepaniak
- **Request:** The editor is too complex. Remove "Attach existing", stop exposing the fact that
  groups/objectives are shared references, and offer only add / edit / delete of
  missions/groups/objectives.
- **Why:** The reference/library concept (attach an existing group, "Remove" = detach without
  deleting) confused users on a TV; the editor should present a plain owned tree.
- **Classification:** requirement change (removes the attach/detach behavior defined in the spec
  §Behavior "Membership and ordering").
- **How handled:** Client-only. In the new `ContentEditor` tree, dropped the `AddSection`
  attach-existing library and the per-row "Remove (detach)" action; group rows (in
  `MissionLevel.tsx`) and objective rows (in `GroupLevel.tsx`) now expose Edit / Move ↑↓ / **Delete**
  on the row itself (mirroring the missions list), and the per-detail Delete buttons were removed.
  Add is create-only (`AddButton` in `controls.tsx`). Delete still hard-deletes with the existing
  server-side referential cleanup, so a deleted group/objective leaves its parent. Per the user's
  decision, the now-unused server endpoints (`attachGroup`/`removeGroup`/`attachObjective`/
  `removeObjective`) and their `contentEditRepository` / `useEditStore` methods were **left in
  place** (dead but harmless) rather than removed. Dead i18n keys (`attach`, `attachExisting`,
  `attachLibraryEmpty`, `createNew`, `remove`) pruned.
- **Acceptance check:** No attach/detach UI anywhere; each group/objective row shows
  Edit / Move / Delete; delete removes the entity from its parent.
- **Result:** Implemented — verified on the SmartTV UA (Chrome 87, 1920×1080): missions, mission,
  group, and objective levels show no "Attach existing"/"Remove"; group/objective rows carry
  Edit / Move ↑↓ / Delete; inline delete-confirm ("Usunąć trwale?") fires. Commit `3483f3f`.

### CR-2 — Make every field edit explicit (Save / Cancel)

- **Source:** Product owner / Design — Jakub Szczepaniak
- **Request:** Saving is inconsistent — the retention stepper persisted immediately while labels
  needed a Save press, which lags the UI or silently drops edits. Make every edit explicit with
  Save / Cancel.
- **Why:** Mixed immediate vs. manual saving is confusing and loses changes when the user navigates
  away without pressing a per-field save.
- **Classification:** requirement + design change (the spec had per-field saves and immediate
  stepper/toggle/swatch writes).
- **How handled:** Each entity detail screen (`MissionLevel`, `GroupLevel`, `ObjectiveLevel`) now
  holds a local draft seeded from the live entity and commits the whole form with one **Save** /
  **Cancel** (`SaveBar` in `fields.tsx`). All fields are drafts — label, youtubeUrl, retention
  stepper, colour swatch, hidden toggle. Save is enabled only when the draft differs from the
  entity and issues a single `update*` write; Cancel reverts the draft in place. Structural actions
  (Add / Delete / Move-reorder) stay immediate — they are one-click actions, not field edits.
  Levels are keyed by their selected id in the shell so drafts re-seed when a different entity is
  opened. No manual Zustand mutation after writes (snapshot still flows changes back).
- **Acceptance check:** Editing any field (incl. retention/colour/hidden) does not persist until
  Save; Cancel reverts; Save disabled when unchanged.
- **Result:** Implemented — verified live: bumping the retention stepper changed the value locally
  and enabled Save/Cancel with no write; Cancel reverted it and re-disabled both; clicking Save
  issued exactly one `POST /api/content/objectives`. Commit `3483f3f`.

### CR-3 — Split the oversized editor file (general rule)

- **Source:** Development — Jakub Szczepaniak
- **Request:** `ContentEditor.tsx` is far too large; split it into smaller files, and make this a
  general implementation rule.
- **Why:** A 768-line component is hard to read and maintain.
- **Classification:** refactor.
- **How handled:** Split into focused files co-located in `src/components/ContentEditor/`: shell
  `ContentEditor.tsx` (~70 lines), four level components (`MissionsLevel`, `MissionLevel`,
  `GroupLevel`, `ObjectiveLevel`), shared `controls.tsx` (Header / ActionButton / DeleteControl /
  AddButton / RowLabel / RowSwatch / EmptyNote), `fields.tsx` (TextField / Stepper / Toggle /
  SwatchPicker / SaveBar), and `constants.ts` (palette). Codified the rule in the development guide
  Conventions ("keep files small").
- **Acceptance check:** `ContentEditor.tsx` no longer monolithic; behavior preserved; convention
  documented.
- **Result:** Implemented — `ContentEditor.tsx` 768 → ~70 lines, seven focused files; the gate
  (`npm run ci`) and `npm run build` are green; full UI re-verified on the TV UA. Commits
  `3483f3f`, `2b675a1` (docs).

### CR-4 — Reuse the shared Button (general rule)

- **Source:** Development — Jakub Szczepaniak
- **Request:** The editor hand-rolls buttons while a shared `Button` component exists; reuse
  existing components where possible.
- **Why:** Duplicated button markup/behavior; inconsistent components.
- **Classification:** refactor.
- **How handled:** Extended the shared `Button` with optional, backward-compatible `disabled`,
  `variant: 'danger'`, and `className` props (`Button.tsx` + `.c-button--danger` in `Button.css`).
  All editor **text** actions (back, edit, move, delete, confirm, add, save, cancel) now render via
  `Button`; the raw `c-content-editor__btn` styles were removed and replaced by a contextual
  `.c-content-editor .c-button` TV size-up. Glyph stepper buttons keep their own `__icon-btn` style
  (not text Buttons). Codified the rule in the development guide Conventions ("reuse shared
  components").
- **Acceptance check:** Editor text buttons render through `Button`; existing `Button` call sites
  unaffected; convention documented.
- **Result:** Implemented — AuthGate / AppOptions / MissionSelect render unchanged (only-optional
  props); editor buttons render via `Button` (verified on TV UA, incl. rounded styling and the
  yellow focus ring). Commits `941d926`, `3483f3f`, `2b675a1` (docs).

### CR-5 — Fix env example and documentation

- **Source:** Development — Jakub Szczepaniak
- **Request:** Make sure `.env.example` and the docs are properly adjusted.
- **Why:** `SESSION_SECRET` was added without explanation; the README never mentioned in-app
  editing (deferred from the original Step 7).
- **Classification:** refactor / docs.
- **How handled:** `.env.example` — documented `SESSION_SECRET` (signs the content-edit session
  cookie) and removed stray blank lines. `README.md` — added a "Managing Content" section.
  `docs/development.md` — added the "keep files small" and "reuse shared components"
  conventions (CR-3/CR-4). No data-architecture change, so `docs/07` untouched.
- **Acceptance check:** `SESSION_SECRET` documented in `.env.example`; README mentions in-app
  editing.
- **Result:** Implemented. Commit `2b675a1`.

## Verification

- **Gate:** `npm run ci` (tsc + ESLint incl. `compat/compat` + Prettier) green; `npm run build`
  succeeds.
- **Original acceptance criteria (no regression):** re-walked on the SmartTV UA — Edit menu entry
  opens/closes the editor; create/rename/delete reachable per entity; all editable fields present;
  Move ↑/↓ ordering controls with correct end-disabling; delete confirm step; admin-SDK routes with
  `tools/firestore.rules` unchanged (`write: false`); 401 → re-login (AuthGate) confirmed;
  keyboard/D-pad operable with a visible 4px focus ring. **Exceptions:** the spec's attach/remove
  criterion is intentionally dropped (CR-1); live authenticated **persistence reflecting on the
  dashboard** was not walked because dev runs `PUBLIC_SKIP_AUTH=true` (no session cookie → writes 401) — the server write path is unchanged frozen code and the client wiring + 401 handling are
  proven. Flagged for real-TV/authenticated confirmation.
- **New acceptance checks:** CR-1…CR-5 each confirmed (see Result lines above).
- **Review skills:** `/code-review` (no surviving correctness findings) and `/simplify` (already
  clean) run over the adjustment diff. `/security-review` **not triggered** — no auth, API route,
  or `tools/firestore.rules` change this round. The original implementation's session-cookie /
  admin-write security review (deferred Step 7) remains outstanding.

## Commits

- `941d926` — refactor(button): add disabled, danger variant, className props
- `3483f3f` — refactor(editor): simplify content editor, explicit save, split files
- `2b675a1` — docs: document SESSION_SECRET and in-app content editing

## Drift — spec/plan to re-sync

The spec, plan, and implementation record were intentionally left unchanged and now lag the code. Run
`/reconcile content-editing` to fold these changes back into the spec. Requirement deltas the
spec does not yet reflect:

- **Attach/remove removed (CR-1):** spec §Behavior "Membership and ordering" and §Acceptance
  ("Attaching/removing … updates only the parent's id array; removed items remain in the library")
  no longer match — the UI exposes only add/edit/delete; "Remove (detach)" and "Attach existing"
  are gone. Delete is now the on-row affordance for groups/objectives.
- **Explicit Save/Cancel (CR-2):** spec §Behavior describes per-field saves and an immediate
  retention stepper; the editor now commits each entity form atomically via Save/Cancel and never
  auto-saves a field.
- **Editor structure (CR-3/CR-4):** spec §Impact "Components" describes one `ContentEditor`
  component; it is now a shell + level/controls/fields split, and text buttons reuse the shared
  `Button`. (Non-behavioral, but the Impact section is stale.)
- **Server dead code (CR-1):** the attach/remove API actions + repository/store methods are
  retained but unused; reconcile should either re-justify or schedule their removal.
- **Outstanding:** the deferred Step-7 close-out (live authenticated persistence walk on real TV;
  original auth/API security review; flip spec `Status` → `implemented`) is still open.
