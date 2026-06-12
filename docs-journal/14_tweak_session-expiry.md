# Session-token server-side expiry — Tweak

> **Artifact:** `14_tweak_session-expiry.md` · **Roles:** Product Owner · Tech Lead · Senior Fullstack Developer
> **Status:** terminal record (no lifecycle)
> **Owner:** Jakub Szczepaniak · **Completed:** 2026-06-12

A single durable record of a small change made through the `/tweak` lane — spec, plan, and
implementation collapsed into one. Written at close-out; keep it terse and factual. Claims must
trace to the commit. For anything bigger, the full `/spec` → `/plan` → `/implement` pipeline and
its artifacts apply instead.

## What & why

Finding 1 of the auth/session security review: `isValidSessionToken` embedded an `issuedAt`
timestamp in the token (`<issuedAt>.<HMAC(issuedAt)>`) but **never validated it** — it only checked
the HMAC. The 30-day lifetime existed solely as the cookie's `maxAge` attribute, a client-side hint
a replayed token can ignore, so a minted token was valid **forever** server-side. This fix enforces
expiry against the same window in `requireSession`.

Scope edge (PO call): **expiry only**. Revocation / logout (Finding 1's second half) was
deliberately deferred — there is no logout UI today and the existing `401 → deauthenticate` path
already re-gates an expired session, so a server-side cookie-clear has no current consumer.

## Approach

API-route layer only; server-side, off the Chrome 87 floor.

- After the constant-time HMAC check passes (so the embedded timestamp is now trustworthy), parse
  `issuedAt` and reject the token when `Date.now() - issuedAt > SESSION_MAX_AGE_SECONDS * 1000`
  (the same 30-day window the cookie `maxAge` uses) or when the payload is not a finite number.
- Expiry is checked **after** signature verification, never before — an unauthenticated caller can't
  probe it.

## Changes

- `src/pages/api/_utils.ts` — `isValidSessionToken` now enforces the session window after the HMAC
  check; header comment updated to note server-side expiry.
- `src/pages/api/_utils.test.ts` — two tests added: a token still inside the window is accepted; a
  token past 30 days is rejected despite a valid signature (Vitest fake timers).

## Verification

- **`L0` gate** (`npm run ci` — tsc + eslint + vitest + prettier): **pass**, 45 tests (was 43; +2).
- **`L4` dead-code** (`npm run knip`): **clean**.
- No `L1` build / `L2` TV-UA drive — server-side auth logic with no rendered surface; qa.md verifies
  this scope via the session unit tests (test-by-scope: API route / auth / session) and the now-real
  expiry path.
- **`L5` (real-TV):** not required — no UI change. The live authenticated-persistence walk remains a
  separate open roadmap item (retro 01).

## Commit

`<sha> — fix(auth): enforce server-side session-token expiry`.
