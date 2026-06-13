# User Auth — Decision Spike (arbitration of 11 vs 12)

> **Artifact:** `docs-spikes/13_spike_user-auth.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub · **Created:** 2026-06-14
> **Supersedes:** [spike 11](11_spike_user-auth.md) and [spike 12](12_spike_user-auth.md) — this is the **single binding decision**. 11 and 12 are kept only as source material; where they conflict, **this spike wins**.
> **Graduated to:** _(fill once/if this idea proceeds)_

A decision spike: vet [spike 12](12_spike_user-auth.md) (industry standard) on its merits, vet
[spike 11](11_spike_user-auth.md) (this app's setup) against it, and record **one** approach — no
alternatives carried forward. Investigation-only; no code, no contracts. Heavy on security and on
whether the foundation survives future growth.

## The uncertainty

Spikes 11 and 12 reached **different shapes** for the same problem (TV-friendly Firebase auth on a
shared family screen). Which model, provider, and access policy is actually right for **this**
product — and what is the minimum security bar before it can ship?

## Idea as posed

> "I've created two spikes about the same topic. Spike 12 describes the industry standard; spike 11
> is based on the existing application. Vet 12, then vet 11 against 12, and produce one clear, blunt
> decision on the best approach. Be very strong on security and future viability. Drop alternatives —
> record only the best approach."

## Findings

### Vetting spike 12 (industry standard) — sound, with one over-stated risk

Spike 12 holds up against industry practice and this repo:

- ✅ **Firebase Auth as the identity layer, `uid` as the tenant boundary, Security Rules enforce
  ownership** — textbook Firebase multi-tenant. Correct.
- ✅ **Single-tenant-per-household** (one shared credential = one Firebase user, no per-person login,
  anonymous household-level completions) — this is the right read of the product. LaunchPad is
  explicitly _cooperative, not competitive_, _optimized for shared screens_ ([01_vision.md](../docs/01_vision.md)),
  and completions are household-level. Per-person identity is a solution to a problem this product
  doesn't have yet.
- ✅ **RFC 8628-style device pairing** (TV shows code + QR; phone does the typing; TV claims via a
  server-minted **custom token** + `signInWithCustomToken`) — the Netflix/YouTube standard, and the
  only credible path on a keyboard-hostile TV. Firebase ships no native device-grant, so the pairing
  bridge is custom code; that is expected, not a red flag.
- ✅ **Chrome 87 floor cleared on the TV side** — every TV call is HTTPS + token + `onSnapshot`;
  `signInWithPopup` / `signInWithRedirect` / phone-auth reCAPTCHA are avoided. Confirmed correct.
- ✅ **"Signs in once, stays signed in effectively forever"** — verified: the custom token expires in
  1 h, but once exchanged by `signInWithCustomToken` the **refresh token persists indefinitely**
  (until logout, account deletion/disable, or a major account change); the SDK auto-refreshes ID
  tokens in the background. The claim is real — **contingent on persistence surviving** (see R1).

**Where 12 is weak:**

- 🔴 **Security is thin.** It names pairing TTL/single-use (R2) and the signup surface (R3) but stops
  there. It has **no OWASP pass, no two-secret pairing design, no device-code-phishing defense, no
  PII-rule lockdown, no `PUBLIC_SKIP_AUTH` prod-guard, no CSP/headers, no deployment gate.** For a
  feature whose entire purpose is access control, that is the biggest gap in either spike.
- 🟠 **R1 is over-stated as potentially fatal.** 12 says Auth + IndexedDB persistence on the real
  Chrome 87 TV "can invalidate the whole approach." It is right to _flag_ it (Firestore `onSnapshot`
  works in-memory and does **not** prove Auth persistence works) — but it missed the mitigation that
  makes it non-fatal (see Technical viability).

### Vetting spike 11 against spike 12 — better security, wrong model

Spike 11's **security analysis is materially stronger** and is the half this decision keeps. But its
**identity model is wrong for this product**, and 12's clean-slate re-read correctly overrode it:

- ❌ **Per-person identity + global content (11).** This is the worst of both worlds: it builds the
  cost and surface of multiple real user accounts (PII in `users/{uid}`, an `accessRequests` inbox of
  everyone's emails) while _every family still reads every other family's data_ because content stays
  global. Real auth on top of a shared dataset is a half-measure — it adds attack surface without
  delivering the privacy it implies. **12's single-tenant isolation (`uid` = tenant) is the correct
  target and must be present from day one**, not deferred.
- ❌ **Google sign-in as the built provider (11).** Unnecessary for a single shared household
  credential, and it drags in social-login surface. **12's email/password is the right floor.**
  Google stays _available_ as a later additive phone-surface provider (Firebase providers are additive
  config), so the door isn't closed — but it is not built now.
- ❌ **Invite allowlist as the permanent access model (11).** 12's **self-serve public signup** is the
  real product. The allowlist survives only **demoted to an interim launch throttle** (bound abuse
  before public launch), not as the end state.
- ✅ **Keep wholesale from 11:** the OWASP Top 10 pass, **two-secret pairing** (short human
  `user_code` + a long ≥128-bit **device secret** the TV holds; the short code alone never yields a
  session), the **pairing doc carries only a status flag, never a token** (the token is released from
  an authenticated endpoint to the device-secret holder), device-code-phishing defense
  (physical-screen QR + explicit `/pair` consent + `frame-ancestors 'none'`), custom-token-mint
  hardening (`verifyIdToken` first, never trust a client `uid`, bound to an approved pairing,
  rate-limited), **PII-rule lockdown + default-deny**, the **`PUBLIC_SKIP_AUTH` boot-time prod
  guard**, Bearer-ID-token write auth, CSP/HSTS/security headers, App Check viability question, and
  the **blocking deployment gate + feature-branch + mandatory `/security-review`** discipline.
- ✅ **Keep from 11:** stamp writes with author `uid`; logout `revokeRefreshTokens` + write-time
  `checkRevoked`; seed the first admin/tenant by hand (no UI for entry #1).

### Technical viability — the R1 mitigation neither spike recorded

Stack fit is strong and unchanged from both spikes: documents carry `ownerId == uid`; Rules become
`request.auth.uid == resource.data.ownerId`; admin write-routes swap their guard from the HMAC
session cookie to `verifyIdToken` and scope writes to that `uid`. Current rules are
**`read: if true` on every collection** ([tools/firestore.rules](../tools/firestore.rules)) — i.e.
world-readable today — so the rules rewrite is also the fix for the largest _current_ exposure.

**R1 (Auth persistence on Chrome 87) is real but not fatal — there is a clean mitigation:**

- The Firebase v9+ modular SDK accepts a **persistence priority array** at init —
  `initializeAuth(app, { persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence] })`
  — and tries each in order until one succeeds. If the TV's Chrome 87 engine has the documented
  IndexedDB/Auth breakage, it **falls back to `browserLocalPersistence` (localStorage)**, which is
  rock-solid on Chrome 87.
- The TV runs the app **first-party (its own origin)**, so the iframe / blocked-third-party-cookie
  failure class behind most reported `signInWithCustomToken` IndexedDB errors **does not apply** here.
- ⚠️ Init detail: configure the array at `initializeAuth`; **do not** call
  `setPersistence(browserLocalPersistence)` repeatedly — it is not idempotent and wipes the existing
  session (firebase-js-sdk #9319).

Net: R1 drops from "may collapse the approach" (12) to **"configure the persistence-fallback array,
then confirm on real hardware as the first build step."** Mitigation in hand; verification still
required.

## The decision (head-to-head — one answer per axis)

| Axis                      | Spike 11                                                   | Spike 12                                         | **Decision & why**                                                                                                                                                             |
| ------------------------- | ---------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Identity model**        | Per-person, content global                                 | Single household tenant; `uid` = tenant boundary | **12.** Matches the cooperative, shared-screen product; anonymous household completions; no surface built for a problem that doesn't exist yet.                                |
| **Tenant data isolation** | Deferred (global)                                          | From day one                                     | **12.** Isolation _is_ the security goal; real auth over a shared dataset leaks every family to every other. Rules: `request.auth.uid == resource.data.ownerId`, default-deny. |
| **Provider**              | Google                                                     | Email/password                                   | **12 (email/password)** as the built floor; Google left as later additive phone-surface config.                                                                                |
| **Access policy**         | Invite allowlist (permanent)                               | Self-serve public signup                         | **12 (self-serve)** is the target; **11's allowlist demoted to an interim launch throttle** to bound abuse pre-public.                                                         |
| **Session substrate**     | TV = real Firebase user (custom token)                     | TV = real Firebase user (custom token)           | **Agreed — keep.** Makes future per-tenant reads native, no read-layer refactor later.                                                                                         |
| **Pairing transport**     | Two-secret; doc carries status only                        | TTL/single-use (under-specified)                 | **11.** Two-secret pairing + status-only doc is the correct, phishing-resistant design.                                                                                        |
| **Security depth**        | Full OWASP + gate                                          | Thin                                             | **11 wholesale.** The single most important thing 12 lacks.                                                                                                                    |
| **R1 persistence**        | Dismissed as low-risk                                      | Gating/possibly fatal                            | **Neither verbatim:** flag it like 12, but ship the persistence-fallback array (above) and **verify on hardware first** — non-fatal with the mitigation.                       |
| **Ship discipline**       | Feature branch + blocking gate + mandatory security-review | —                                                | **11.** Keep the deployment gate, the branch exception, and mandatory `/security-review`.                                                                                      |

**In one line:** build **spike 12's household-tenant model on spike 11's security rigor**, with the
R1 persistence-fallback array as the de-risking move that lets the gating risk be confirmed cheaply
instead of feared.

## Verdict & recommendation

**`viable-with-changes`.** Build a **single-tenant-per-household Firebase Auth** app:

- **Identity:** one shared **email/password** credential per family = one Firebase user; `uid` is the
  tenant boundary. No per-person login, no per-member attribution (deferred to an in-app profile —
  data only, no auth cost).
- **Tenancy from day one:** every document carries `ownerId == uid`; Security Rules
  `request.auth.uid == resource.data.ownerId`, **default-deny**, PII collections owner/admin-only;
  rules shipped via `npm run firebase:push-rules`.
- **Two surfaces:** **TV** = a single "pair this TV" screen with a large, high-contrast **code + QR
  scannable at 3–5 m**, D-pad-operable; **phone/laptop** = an explicit TV-first exception, hosting
  self-serve **signup / email-verify / password-reset / "approve this TV."**
- **Pairing:** TV (unauthenticated) writes a short-lived `pairingSessions/{id}` carrying **only a
  status flag**, shows its `user_code` + QR, and holds a long ≥128-bit **device secret**; the
  signed-in phone approves via an admin route that `verifyIdToken`s the phone, then **mints a custom
  token** released only to the device-secret holder; the TV calls `signInWithCustomToken` and
  persists via the **fallback array**.
- **Writes:** stay admin-SDK; guard swaps from the HMAC cookie to **`verifyIdToken`** (prefer
  `Authorization: Bearer <idToken>`), scoped to the caller's `uid`; stamp writes with author `uid`.
- **Retire:** `APP_PASSWORD`, `SESSION_SECRET`, `src/pages/api/auth.ts`, and the HMAC-cookie path.

**Security is not optional — the deployment gate below is binding.**

> ### 🔴 Deployment gate — BLOCKING
>
> This feature _is_ access control; it cannot ship with the security must-fixes unresolved. The
> items tagged **(blocking)** below must all be resolved during implementation, `/security-review` is
> **mandatory before merge**, and any Firestore-rule change ships with `npm run firebase:push-rules`.

> ### 🌿 Workflow exception — feature branch
>
> As an explicit exception to CLAUDE.md's "commit directly to `main`," the _implementation_ is built
> on a dedicated feature branch and merged to `main` only after testing + explicit PO approval. This
> spike record lands on `main` (it is an investigation doc).

## Suggested scope

For `/spec` to carry:

- **Keep (built now):** household-`uid` tenancy + `ownerId == uid` on every document; Rules
  `request.auth.uid == resource.data.ownerId` + default-deny + PII lockdown; email/password signup,
  `sendEmailVerification`, `sendPasswordResetEmail` on the phone surface; two-secret Firestore device
  pairing → custom token → `signInWithCustomToken` on the TV with the **persistence-fallback array**;
  TV pairing screen (large code + scannable QR); admin write-routes guarded by `verifyIdToken`;
  author-`uid` write stamp; `revokeRefreshTokens` + `checkRevoked` on logout; the full security
  must-fix list; the deployment gate + feature-branch discipline.
- **Interim throttle (built now, removed at public launch):** a signup throttle (invite code or small
  allowlist) to bound abuse before going public — **not** the permanent access model.
- **Cut / defer (additive later, no auth cost):** per-member attribution / in-app profiles; Google &
  Apple providers (phone surface, additive config); a self-service account-management panel beyond
  the minimum; remote "sign out everywhere" UI if it bloats scope.
- **Defer to a separate roadmap item:** the **legal layer** (privacy notice + one-action data
  erasure) — required before the public launch, not for this build. GDPR's household exemption stops
  covering a publicly-shared app; the strictly-necessary session cookie needs no consent banner.

## Open questions & risks

Items tagged **(blocking)** gate deployment per the gate above.

- [ ] **R1 (first build step):** confirm `firebase/auth` v12 init **+ session persistence on the real
      Chrome 87 SmartTV** using the persistence-fallback array. Mitigation is in hand; this is a
      hardware confirmation, not open-ended research. If even localStorage fails on the device, revisit.
- [ ] **(blocking)** Two-secret pairing: short `user_code` + ≥128-bit device secret; short TTL (2–5 min),
      single-use, rate-limited approve/claim; pairing doc carries **no token**, only a status flag.
- [ ] **(blocking)** Custom-token mint hardening: `verifyIdToken` first, never trust a client `uid`,
      bound to an approved pairing, released only to the device-secret holder, rate-limited.
- [ ] **(blocking)** Lock Firestore rules: `request.auth.uid == resource.data.ownerId`, default-deny,
      PII collections owner/admin-only; push via `firebase:push-rules`.
- [ ] **(blocking)** `PUBLIC_SKIP_AUTH` cannot reach prod — add a boot-time guard.
- [ ] **(blocking)** Explicit `/pair` consent screen ("Sign **this TV** into LaunchPad?") +
      anti-clickjacking (`frame-ancestors 'none'`); QR scanned off the physical screen, no out-of-band
      code entry.
- [ ] **(blocking)** Validate/sanitize `youtubeUrl` + mission labels rendered on the TV (XSS).
- [ ] Prefer `Authorization: Bearer <idToken>` write auth (CSRF-free) over a cookie; add CSP + HSTS +
      security headers.
- [ ] Confirm **App Check** (reCAPTCHA v3) viability on SmartTV Chrome 87; restrict the Firebase API key.
- [ ] Logout `revokeRefreshTokens`; writes re-check `checkRevoked` so a disabled tenant loses access.
- [ ] **Migration:** migrate existing global data under a household `uid`; retire `APP_PASSWORD`,
      `SESSION_SECRET`, `src/pages/api/auth.ts`; seed the first tenant/admin by hand (no UI for entry #1).

## Next step

**`/spec`** (reuse `<short-name>` **`user-auth`**), with **R1 as the first acceptance check** and the
**blocking deployment gate + feature-branch merge gate** carried into acceptance criteria. The legal
layer is filed separately into [`docs/06_roadmap.md`](../docs/06_roadmap.md) as a follow-up to land
before public launch. This spike stops here — it does not write the spec.

## References

- Verified for this decision (R1 + session longevity):
  [Firebase — Auth state persistence](https://firebase.google.com/docs/auth/web/auth-state-persistence)
  (persistence types + fallback array),
  [firebase-js-sdk #9319](https://github.com/firebase/firebase-js-sdk/issues/9319) (`setPersistence` not idempotent — wipes session),
  [firebase-js-sdk #9220](https://github.com/firebase/firebase-js-sdk/issues/9220) (`signInWithCustomToken` IndexedDB failure — iframe/3p-cookie class, not first-party),
  [Firebase — Manage user sessions](https://firebase.google.com/docs/auth/admin/manage-sessions) (refresh-token longevity).
- TV/device login standard: [RFC 8628 — OAuth 2.0 Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html) (§5 security),
  [Auth0 — Device Flow](https://auth0.com/blog/oauth-device-flow-no-hassle-authentication-as-seen-on-tv/).
- Device-code phishing (why two-secret + physical-screen QR): [CSA — OAuth Device Code Phishing hits 340+ M365 orgs](https://labs.cloudsecurityalliance.org/research/csa-research-note-oauth-device-code-phishing-m365-20260325-c/).
- Firebase security: [Create custom tokens](https://firebase.google.com/docs/auth/admin/create-custom-tokens),
  [Firestore security rules](https://firebase.google.com/docs/firestore/security/get-started),
  [Rules & Auth](https://firebase.google.com/docs/rules/rules-and-auth),
  [API keys](https://firebase.google.com/docs/projects/api-keys).
- Source spikes: [spike 11](11_spike_user-auth.md) (security rigor — kept), [spike 12](12_spike_user-auth.md) (household-tenant model — kept).
- Internal: [docs/07_data-architecture.md](../docs/07_data-architecture.md) (`ownerId` hydration, admin-route writes),
  [tools/firestore.rules](../tools/firestore.rules) (current `read: if true`), [CLAUDE.md](../CLAUDE.md) (Chrome 87 floor, current auth gate).
