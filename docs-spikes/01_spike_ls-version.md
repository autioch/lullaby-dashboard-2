# localStorage version token — bind to package version, or manage separately? — Spike

> **Artifact:** `docs-spikes/01_spike_ls-version.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-12
> **Graduated to:** [tweak](../docs-journal/07_tweak_ls-version.md) _(small/bounded — took the `/tweak` lane, not `/spec`)_

A time-boxed, investigation-only record that de-risks an idea **before** any spec — feasibility,
UX, and product sense. No app code, no acceptance criteria or data contracts (those belong to
`/spec`). The point is a clear **verdict** and a de-risked approach, or a cheap, recorded "no".

## The uncertainty

Should the `VERSION` token in `src/utils/ls.ts` be tied to `package.json`'s `version`, or managed
on its own — and what is the rule for bumping each?

## Idea as posed

> the local storage util tracks own version; should it be bound with the package version or
> managed differently? When the package version should be updated then?

## Findings

### Product & common sense

`VERSION = 2` in [`src/utils/ls.ts`](../src/utils/ls.ts) is baked into every key hash
(`launchpad_2_mission`). It is a **storage-schema / cache-bust token**, not an app version: bump
it and every old key is orphaned, so all stores read `undefined` and fall back to defaults. Four
stores share it — `auth` (boolean), `language` (`AppLanguage`), `mission` (`MissionLSState`),
`timer` (`TimerState`).

`package.json`'s `version` is `0.0.1` — an untouched placeholder. This is a private, single-dev,
commit-to-`main`, **no-release** project (per CLAUDE.md): nothing publishes the package, nothing
reads its version, and no process bumps it. So there is no maintained app version to bind to in
the first place.

The two tokens also change for **different reasons and at different cadences**:

- Package version (by convention) moves on _any_ release — dependency bumps, features, fixes.
- The storage token should move _only_ when a persisted shape changes incompatibly.

Binding them couples those cadences and produces a lose-lose:

- Bump package version on an unrelated change → silently wipes every user's persisted UX state
  (language pick, auth flag, today's mission progress, timer) for no reason.
- Forget to bump it on a real shape change → stores read stale data in the wrong shape → corrupt
  reads.

This is the classic "don't overload one version number with two meanings" antipattern. The
industry norm is an **independent storage-schema version**, decoupled from the app/package version
— e.g. `redux-persist` keeps a per-slice `version` plus an optional `migrate` function, never the
app version.

### UX standards

No 10-foot-UI surface here — this is internal persistence plumbing, invisible to the TV user.
The only user-facing consequence is **what they lose** when the token bumps. Owner decision
(confirmed): a bump should **discard and reset** old data. That is the right call — everything
persisted is ephemeral UX state that's cheap to re-establish (re-pick language, re-enter password,
lose an in-progress day), so migration machinery isn't warranted.

### Technical viability

Trivial on the stack and the **Chrome 87 floor** — plain `window.localStorage` + a string key,
already in use and unit-tested ([`src/utils/ls.test.ts`](../src/utils/ls.test.ts)). No new API,
no compat risk. The only change vector is the function signature and call sites:

- Per-key versioning means `lsWrapper(key, version)` — each of the four store call sites
  (`useAuthStore`, `useLanguageStore`, `useMissionStore`, `useTimerStore`) passes its own number.
- The hash becomes `launchpad_<key>_<version>` (or similar), so each store invalidates
  independently.
- Discard-on-change needs no envelope and no migration code — a changed key hash simply misses
  the old entry, exactly as today.

`redux-persist` docs confirm the comparable pattern (per-store `version` + `migrate`), validating
"independent version" as the norm; we deliberately take the lighter half of it (version yes,
migrate no).

## Options & trade-offs

- **Option A — Bind storage token to `package.json` version.** ❌ Rejected. Couples two
  different cadences; package version is an unmaintained `0.0.1` with no release process; causes
  either needless wipes or stale-shape corruption.
- **Option B — Single global storage version, decoupled (status quo, documented).** Keep one
  shared constant; rename to signal intent (e.g. `STORAGE_SCHEMA_VERSION`); document the bump
  rule. Cheapest. Con: any one shape change wipes _all_ persisted state.
- **Option C — Per-key storage version, decoupled. ✅ Recommended.** Each store owns its version
  via `lsWrapper(key, version)`. Scoped, surgical invalidation — changing the mission shape
  resets only mission. Small, mechanical change; discard-on-change keeps it migration-free.
- **Option D — `{version, data}` envelope + `migrate()` (redux-persist style).** Most robust;
  preserves user state across shape changes. ❌ Overkill — the persisted data is ephemeral UX
  state; the owner chose discard over migrate.

## Verdict & recommendation

**`viable-with-changes`.** The direct answer to the posed question: **do not bind the storage
token to the package version** — they mean different things and change on different schedules, and
the package version is an inert placeholder here anyway. Manage the storage token independently.

Recommended approach (**Option C**): a **per-key storage-schema version**, decoupled from the
package version, with **discard-on-change** semantics (no migration). Each store passes its own
version to `lsWrapper`; bump that store's number only when its persisted shape changes
incompatibly. Leave `package.json`'s `version` as-is — it stays decoupled and inert.

**The bump rule (to capture in the spec / dev guide):**

- **Storage version (per key):** bump _only_ when that store's persisted shape changes in a way
  old data can't satisfy (field rename/removal, type change, semantics change). Adding an optional
  field that tolerates `undefined` does **not** require a bump.
- **Package version:** no rule — it is not maintained and not bound to anything. (If the owner
  ever wants a human changelog marker, that's a separate, orthogonal decision.)

## Suggested scope

- **Keep:** the `lsWrapper` shape (`save`/`load`/`clear`), namespacing, browser guard, discard
  semantics, existing tests.
- **Change:** add a per-key `version` parameter; update the four store call sites to pass their
  current version (preserving today's effective values so existing users aren't reset on rollout);
  fold the version into the key hash.
- **Cut:** any notion of reading `package.json` version into the util. No migration envelope.
- **Document:** the bump rule above, in the dev guide (and/or a short comment in `ls.ts`).

This is small and well-bounded — a strong **`/tweak`** candidate rather than a full
`/spec → /plan → /implement` cycle.

## Open questions & risks

- [ ] **Rollout continuity:** to avoid resetting current users on the day this ships, the initial
      per-key versions should reproduce today's effective hashes (global `VERSION = 2`). Confirm
      the exact per-key starting numbers during the tweak/spec.
- [ ] **Key format:** decide the final hash format (`launchpad_<key>_<version>`) and whether to
      keep the `launchpad` namespace prefix (recommended: yes).
- [ ] **Where the bump rule lives:** dev guide section vs. an `ls.ts` doc-comment vs. both.

## Next step

**`/tweak`** (reuse `<short-name>` `ls-version`). The change is mechanical and bounded — a
signature tweak plus four call-site updates and a documented bump rule — below the threshold for
the full spec/plan pipeline. Escalate to `/spec` only if rollout-continuity or key-format
questions turn out larger than expected.

## References

- [`src/utils/ls.ts`](../src/utils/ls.ts) · [`src/utils/ls.test.ts`](../src/utils/ls.test.ts) —
  the util and its tests.
- Store call sites: `src/stores/useAuthStore.ts`, `useLanguageStore.ts`, `useMissionStore.ts`,
  `useTimerStore.ts`.
- `redux-persist` — per-store `version` + `migrate` pattern (independent of app version):
  https://github.com/rt2zz/redux-persist#migrations
- [docs/07_data-architecture.md](../docs/07_data-architecture.md) — layering authority.
