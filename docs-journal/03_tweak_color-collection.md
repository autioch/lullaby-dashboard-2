# Colours as a Firestore collection — Tweak

> **Artifact:** `03_tweak_color-collection.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one.

## What & why

Objective colours were a hardcoded `COLOR_PALETTE` array of hex hashes in the editor, and each
objective stored its colour as a raw hash. Move the palette into a Firestore `color` collection
and have objectives reference a colour **by document id** (`colorId`) instead of a hash — so the
palette is data, edited centrally, with a stable identity per colour.

Scope edges (explicitly out): no in-app colour-management UI — colours are seeded from
`tools/configuration.json` via `db-seed`. Migration of existing objectives is **wipe & reseed**
(the owner reruns the seed), not an in-place data migration.

## Approach

New `color` collection `{ value, label, order }`, referenced by id; the reference threads through
the existing layering (Firestore → repository → store → component → API route).

- **Repository:** `colorRepository.subscribe` (mirrors `objectiveRepository`); `ObjectiveDoc.color`
  (hash) → `ObjectiveDoc.colorId`.
- **Store:** `useMissionStore` gains `colors` (by id) + `colorList` (sorted by `order`), populated
  by a `colorRepository` subscription in `loadConfiguration`.
- **Render:** `Objective.tsx` resolves `colorId → colors[id].value` for the text colour; the
  editor's `ColorField` builds its swatches from `colorList` and emits a `colorId`.
- **Writes:** edit store/repo patches and the `objectives` API route use `colorId`; new objectives
  default to the lowest-`order` colour (queried server-side), replacing the old `#faa` default.
- **Seed:** `configuration.json` gains a `colors` library; `db-seed` now wipes the collections,
  seeds colours, and maps each objective's seed hash → its new `colorId` (throws on an unknown
  hash). Seed objectives still reference colours by hash for readability; the id mapping happens at
  seed time.
- **Rules:** `color` collection added to `firestore.rules` (read-all, admin-only write).

## Changes

- **Data layer:** `src/database/colorRepository.ts` (new), `src/database/objectiveRepository.ts`
  (`color` → `colorId`), `src/database/contentEditRepository.ts`.
- **Store:** `src/stores/useMissionStore.ts` (colours state + subscription), `src/stores/useEditStore.ts`.
- **Components:** `src/components/ObjectiveList/Objective.tsx`,
  `src/components/ContentEditor/fields.tsx` (`ColorField` from store),
  `src/components/ContentEditor/ObjectiveEditor.tsx`, `src/components/ContentEditor/GroupLevel.tsx`.
  Removed `src/components/ContentEditor/constants.ts` (orphaned `COLOR_PALETTE`).
- **API:** `src/pages/api/content/objectives.ts` (`colorId`, lowest-order default).
- **Tools:** `tools/configuration.json` (`colors` library), `tools/db-seed.cjs` (wipe + seed
  colours + map), `tools/firestore.rules` (`color` match).
- **Docs:** `docs/07_data-architecture.md` (entity resolution + folder structure),
  `docs/development.md` (entity types list).

## Verification

`npm run verify` (tsc + lint incl. `compat/compat` + format) — green. `npm run build` — green.

Not verified in a running browser: the live Firestore still holds the old `color` field and no
`color` collection, so colours only render **after the owner runs the wipe & reseed**
(`db-seed`). Until then objectives fall back to the default text colour and the swatch picker is
empty — expected, not a regression. **Needs real-TV confirmation after reseed:** swatch picker
shows the palette, picking recolours the objective, and saved objectives render their colour.

## Commit

`<sha> — feat(colors): move colour palette to a Firestore collection referenced by id`.
