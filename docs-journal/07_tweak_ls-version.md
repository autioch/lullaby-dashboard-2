# localStorage version — per-key, decoupled from package version — Tweak

> **Artifact:** `07_tweak_ls-version.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12
> **From spike:** [01_spike_ls-version](../docs-spikes/01_spike_ls-version.md) (`viable-with-changes`)

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one.

## What & why

The `lsWrapper` util held a single global `VERSION = 2` constant shared by all four persisted
stores. The spike concluded it is a **storage-schema / cache-bust token**, not an app version, and
must **not** be bound to `package.json`'s `version` (different meaning, different cadence; the
package version is an unmaintained `0.0.1` placeholder anyway). This tweak makes the token a
**per-key parameter**, decoupled from the package version, with **discard-on-change** semantics (no
migration). Left out: any `{version, data}` migration envelope; any change to `package.json`'s
`version` (stays inert by design).

## Approach

- Replaced the module-level `VERSION` constant with a required `version: number` parameter on
  `lsWrapper(key, version)`. The key hash stays `launchpad_<version>_<key>`, so passing `2` at every
  call site reproduces today's exact keys — **no existing user is reset on rollout**.
- Each store now owns its version and bumps independently: changing the `mission` shape to `3`
  invalidates only `mission`, leaving `auth` / `language` / `timer` intact.
- Documented the bump rule in the helper's doc-comment (single source) and referenced it from the
  dev guide's persistence note. Removed the resolved open item from the roadmap.
- Layer touched: store-support util + its four store call sites. No repository / component / API
  changes.

## Changes

- **Util:** `src/utils/ls.ts` — `version` param, key hash, bump-rule doc-comment.
- **Stores:** `useAuthStore.ts`, `useLanguageStore.ts`, `useMissionStore.ts`, `useTimerStore.ts` —
  pass `2`.
- **Tests:** `src/utils/ls.test.ts` — thread `version` through the harness; new test asserting a
  version bump invalidates the old key without collision.
- **Docs:** `docs/development.md` (persistence note), `docs/06_roadmap.md` (removed resolved item).
- **Artifacts:** this record; spike pointer updated.

## Verification

- **L0 gate** (`npm run ci`: tsc + eslint + vitest + prettier) — **passed**; 43 tests (+1 new).
- **L1 build** — covered by `astro sync` + `tsc` in the gate; no runtime build risk in this change.
- **L4 dead-code** (`npm run knip`) — **clean**.
- **L2 TV-UA drive** — N/A: internal persistence plumbing, no browser-observable surface.
- **L5 real-TV** — nothing to confirm; the key format is byte-identical to the prior version for
  existing users.

## Commit

`<sha> — refactor(ls): make localStorage version a per-key param, decoupled from package version`.
