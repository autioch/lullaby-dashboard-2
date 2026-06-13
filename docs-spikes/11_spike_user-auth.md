# User identity & TV-friendly auth — Spike

> **Artifact:** `docs-spikes/11_spike_user-auth.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub Szczepaniak · **Created:** 2026-06-14
> **Graduated to:** _(fill once/if this idea proceeds)_

A time-boxed, investigation-only record that de-risks the move from the shared-password gate to real
per-person identity with a TV-friendly login, on a foundation that survives the eventual public,
per-user-content app. No app code, no acceptance criteria or data contracts (those belong to `/spec`).

## The uncertainty

How does a user authenticate on a keyboard-hostile SmartTV without typing credentials, what identity
model fits a single-family-now / public-later app whose content stays global, and does the approach
hold up on the Chrome 87 floor **and** under a complete security review?

## Idea as posed

> The current auth is a plain password. I'd like the full auth/user setup for the auth. All users
> have still the same content (that's a different feature to implement). How can user easily auth on a
> screen? Can he first auth on mobile/desktop or defer the auth to other device? Some QR code,
> anything else? Can I use Firebase auth? Do I need users to setup login/password or can I use some
> auth provider (Google/Apple)? There's so many options to consider, I need some information about the
> industry standards for my case.

The idea reshaped substantially through the spike (see **Suggested scope**): from "full auth/user
setup" to **real identity (Firebase Auth + Google) + a QR device-pairing login**, with per-user
_content_ explicitly deferred and a hard security gate on deployment.

## Findings

### Product & common sense

- **Typing credentials on a TV is the industry anti-pattern.** The shared password works but is
  painful on a D-pad. The established answer for input-constrained devices is the **OAuth 2.0 Device
  Authorization Grant (RFC 8628)** — the "device flow" used by Netflix, YouTube, Spotify, Disney+:
  the TV shows a short code / QR, the user authorizes on their phone, the TV inherits the session.
- **The 30-day HMAC session cookie already means the TV is typed into ~once a month**, so today's
  pain is bounded — but the owner intends to (a) share with friends soon and (b) go fully public with
  per-user content later, which makes _real identity_ (not a shared secret) worth building now.
- **Google sign-in removes the whole credential-management burden:** no signup form, no password
  storage, no reset flow. The first Google sign-in _is_ the account; Firebase Auth auto-creates the
  user record. Additional providers (email/password, Apple) are later config, not a migration.
- Per-user _identity_ delivers value now (know/​admit friends, attribution, foundation) even though
  per-user _content_ is deferred — a coherent, common progression (shared library, individual logins).

### UX standards

- **Two entry paths converging on one end state** (an allowlisted Firebase user):
  - **Keyboard devices (mobile / laptop / desktop): direct Google sign-in** on the device itself
    (`signInWithPopup` / `signInWithRedirect`). No QR, no second device — the simpler subset.
  - **TV / input-constrained: QR device-pairing handoff** — the TV shows a QR, the phone opens
    `/pair`, signs in with Google, the TV (watching a Firestore pairing doc via `onSnapshot`) claims
    its session. The keyboard-heavy step happens on the phone, never on the TV.
- **TV-first reality holds:** the QR + short code are large/high-contrast on the 10-foot screen; the
  TV side is D-pad-trivial ("Start pairing" → show QR → wait). The `/pair` consent screen must be
  unambiguous ("Sign **this TV** into LaunchPad?") — this is also a security control (see below).
- Realtime pairing via Firestore `onSnapshot` (infra already in use) — no polling loop needed.

### Technical viability

Stack: Astro 6 · React 19 · Zustand 5 · Firebase **client v12** + **firebase-admin v13** (both already
in `package.json`). Rules at [`tools/firestore.rules`](../tools/firestore.rules); deploy via
`npm run firebase:push-rules` (`firebase deploy --only firestore:rules`).

- **Firebase Auth fits, with one gap:** Firebase has **no built-in device flow**. It is built via
  **custom tokens** — `firebase-admin` mints a JWT for the verified user, the TV calls
  `signInWithCustomToken`. The pairing bridge is custom code (small), riding on existing Firestore
  realtime + the existing session infra.
- **Chrome 87 floor is essentially a non-issue for auth:** the Google login runs on the _phone_ (no
  floor). On the TV, `signInWithCustomToken` is a plain network call (no popup) and the app already
  ships the Firebase v12 SDK on the TV for Firestore — so Auth rides the same proven baseline.
- **Substrate chosen: Firebase-Auth-native (B)** — the TV becomes a _real Firebase user_ via custom
  token. Rationale: the app's heart is **client-direct realtime reads** (`onSnapshot`); per-user
  reads later must be scoped by Firestore rules using `request.auth.uid`, which requires the client
  (incl. the TV) to be a Firebase user. Choosing B now makes future per-user content **additive** (add
  rules + scope data) instead of a forced read-layer refactor. Writes stay server-mediated (admin SDK,
  rules `write:false`), with the guard swapped from the HMAC cookie to a verified ID token; the
  existing editor routes (`src/pages/api/content/*`) are otherwise unchanged.
- **Current edit path** (`ContentEditor` → `POST /api/content/*` → `guardRequest`/`requireSession` →
  admin-SDK write) survives; only the guard and a `updatedBy: uid` stamp change.

#### Security review (the core de-risking — see Deployment gate)

Reviewed against OWASP Top 10 (2021), RFC 8628 §5, and the Firebase/Google security checklist.
Device-code phishing is an **active, exploited** attack class (340+ M365 orgs), and the **#1 Firebase
production failure is `read/write: if true`** rules — both directly relevant here.

- **Device-pairing flow (sharpest edge):** require **two separate values** — a short human
  `user_code` _and_ a long (≥128-bit) **device secret** held only by the TV and required to claim;
  the short code alone must never yield a session. Short TTL (2–5 min), single-use, rate-limited
  approve/claim. **Remote-phishing defense:** QR scanned off the physical TV screen only (avoid
  out-of-band code entry) + explicit consent screen + `frame-ancestors 'none'` on `/pair`
  (anti-clickjacking). The **pairing doc is client-readable → it carries only a status flag**, never a
  token; the custom token is returned from an authenticated endpoint to the holder of the device
  secret.
- **Firestore data exposure (biggest _current_ risk):** new collections hold PII — `users/{uid}`
  (email/name/photo), `accessRequests` (emails of everyone who tried). With today's `read:if true`
  pattern they would be **world-readable → email scrape**. Rules must be `users` owner/admin-only,
  `accessRequests`/`allowlist` admin-only, default-deny — and **pushed via `firebase:push-rules`**.
- **Custom-token mint = crown jewel:** mint only for the uid inside a freshly `verifyIdToken`-ed
  Google token, bound to an approved pairing, released only to the device-secret holder, rate-limited,
  never trusting a client-supplied `uid`.
- **OWASP highlights:** A01 broken access control (server-side allowlist + owner checks when
  per-user; admin-only allowlist edits) · A05 **`PUBLIC_SKIP_AUTH` must never reach prod** (add a boot
  guard) + default-deny rules + same-origin API · A03 validate/sanitize `youtubeUrl` & labels rendered
  on the TV (XSS) · A07 no passwords (no credential stuffing; MFA delegated to Google) + logout must
  `revokeRefreshTokens` with `checkRevoked` · A09 log auth events, never tokens/secrets.
- **Transport/session:** prefer gating writes by `Authorization: Bearer <idToken>` (CSRF-free) over a
  cookie; HTTPS/HSTS (Netlify) + CSP (XSS backstop for the TV's IndexedDB token) + security headers.
- **Firebase config:** the public API key is _meant_ public — security is rules + **App Check**
  (verify reCAPTCHA-v3 works on Chrome 87 — open question); restrict the API key; protect/rotate the
  service-account key (server-only, never logged).
- **"Only the human is the weak point":** achievable at this scale — residual human risks are
  phishing the approval (mitigated by physical-screen QR + consent), adding a bad friend to the
  allowlist (low blast radius while content is global), physical access to a logged-in shared TV
  (per-device logout; no sensitive per-user data on the always-on screen), and Google-account
  security (**recommend owner + friends enable 2FA** — the true root of trust).

## Options & trade-offs

- **Session substrate A — app-managed cookie** (keep HMAC cookie + stateful sessions, stamp uid):
  smallest diff now; per-user _writes_ stay fine server-side, but per-user realtime _reads_ later force
  a read-layer rework (the TV must become a Firebase user then anyway). **Rejected.**
- **Session substrate B — Firebase-Auth-native** (TV is a real Firebase user via custom token):
  slightly more now (Auth bootstrap + token refresh on the TV); per-user content later is purely
  additive. **Recommended — chosen.**
- **Identity provider:** Google now (chosen); email/password & Apple are later additive config.
- **Access policy:** **invite allowlist** (chosen) — a hand-editable Firestore doc; denied attempts
  logged to `accessRequests` (doubles as the request-access inbox). Removed/opened when public.
- **Session model:** **stateful** (chosen) — realized via Firebase `revokeRefreshTokens` +
  a `users/{uid}/devices` registry → enables "who's logged in" + per-device/remote revoke. Sliding
  expiry; per-device logout.

## Verdict & recommendation

**`viable-with-changes`.** Build **Firebase Auth (Google) + a QR device-pairing handoff** on
**substrate B** (TV becomes a real Firebase user via server-minted custom token). Keyboard devices
sign in directly; the TV uses the QR handoff. Keep content global; defer per-user content. Fold in the
three forward-compat anchors. The reshaped idea is smaller and safer than "full auth/user setup," and
sits on the same foundation the eventual public app needs.

> ### 🔴 Deployment gate — BLOCKING (per PO directive)
>
> This feature is **rigged with security-critical surface**. The security must-fixes below are **not
> optional**: they must be resolved during implementation, or the feature **cannot be deployed**. The
> `/security-review` pass is mandatory before merge, and any Firestore rule change must be shipped with
> `npm run firebase:push-rules`.

> ### 🌿 Workflow exception — feature branch (per PO directive)
>
> As an explicit exception to the CLAUDE.md "commit directly to `main`" rule, this feature is built on
> a **dedicated feature branch** and merged into `main` **only after testing and explicit PO
> approval**. The spike record itself lands on `main` (it is an investigation doc); the _implementation_
> stays on the branch until approved.

## Suggested scope

How the idea changed through the spike:

- **Keep:** Firebase Auth + Google · QR device-pairing handoff (TV) · direct sign-in (keyboard
  devices) · invite allowlist + `accessRequests` inbox · stateful sessions (token revocation + device
  registry) · sliding session · per-device logout.
- **Add (forward-compat anchors, low cost):** `users/{uid}` profile doc on first login · stamp writes
  with author `uid` · treat the pairing handoff as permanent (build it properly).
- **Cut / defer:** per-user **content** separation (the "different feature") · email/password & Apple
  providers · self-service user panel beyond what's needed · remote "sign out everywhere" UI if it
  bloats scope.
- **Defer to a follow-up roadmap item:** the **legal layer** (privacy notice + one-action user
  erasure) — required before the public friends launch, not for this build. GDPR's household exemption
  stops covering a publicly-shared app; the strictly-necessary session cookie needs no consent banner;
  CCPA thresholds don't apply at PoC scale.

## Open questions & risks

Security items tagged **(blocking)** gate deployment per the Deployment gate above.

- [ ] **(blocking)** Lock Firestore read rules off PII (`users`, `accessRequests`, `allowlist`);
      default-deny; push via `firebase:push-rules`.
- [ ] **(blocking)** Two-secret pairing (short `user_code` + ≥128-bit device secret), short TTL,
      single-use, rate-limited; pairing doc carries no token.
- [ ] **(blocking)** Custom-token mint hardening (verified Google token only, no client `uid`, bound
      to approved pairing + device secret).
- [ ] **(blocking)** `PUBLIC_SKIP_AUTH` cannot reach prod — add a boot-time guard.
- [ ] **(blocking)** Explicit `/pair` consent screen + anti-clickjacking headers; physical-screen QR
      (no out-of-band code entry).
- [ ] **(blocking)** Validate/sanitize `youtubeUrl` + mission labels rendered on the TV (XSS).
- [ ] Logout revokes refresh tokens and writes re-check `checkRevoked` (a removed friend loses access).
- [ ] Prefer Bearer-ID-token API auth (CSRF-free) over the cookie; add CSP + security headers + HSTS.
- [ ] Confirm **App Check** (reCAPTCHA v3) viability on SmartTV **Chrome 87**; restrict the Firebase
      API key.
- [ ] Confirm `signInWithCustomToken` + token persistence behaves on Chrome 87 (low risk — same SDK
      already runs Firestore on the TV).
- [ ] Bootstrap the first allowlist/admin entry securely (hand-seeded; no UI for entry #1).
- [ ] Decide whether the legacy `APP_PASSWORD`/HMAC-cookie path is removed or kept during migration.

## Next step

**`/spec`** — reuse the `<short-name>` **`user-auth`**. The spec reads this spike as grounding,
carries the blocking security gate into acceptance criteria, and honors the feature-branch +
PO-approval merge gate. The legal layer is filed separately into
[`docs/06_roadmap.md`](../docs/06_roadmap.md) by the owner as a follow-up to land before public launch.

## References

- [RFC 8628 — OAuth 2.0 Device Authorization Grant](https://www.rfc-editor.org/rfc/rfc8628.html) (§5 security considerations)
- [CSA — OAuth Device Code Phishing hits 340+ M365 orgs](https://labs.cloudsecurityalliance.org/research/csa-research-note-oauth-device-code-phishing-m365-20260325-c/)
- [Firebase — Create Custom Tokens](https://firebase.google.com/docs/auth/admin/create-custom-tokens) · [Auth with custom system (web)](https://firebase.google.com/docs/auth/web/custom-auth)
- [Firebase — API keys](https://firebase.google.com/docs/projects/api-keys) · [Firestore Security Rules get-started](https://firebase.google.com/docs/firestore/security/get-started) · [Rules & Auth](https://firebase.google.com/docs/rules/rules-and-auth)
- [Firebase Security Checklist (2026)](https://vibeappscanner.com/firebase-security-checklist)
- GDPR household exemption — [gdprhub Art. 2](https://gdprhub.eu/Article_2_GDPR) · strictly-necessary cookie consent exemption — [CookieYes](https://www.cookieyes.com/blog/cookie-consent-exemption-for-strictly-necessary-cookies/)
- Comparable products: Netflix / YouTube / Spotify / Disney+ TV sign-in (device flow)
- Internal: [`src/pages/api/_utils.ts`](../src/pages/api/_utils.ts) (session/cookie), [`src/pages/api/content/*`](../src/pages/api/content/missions.ts) (write routes), [`tools/firestore.rules`](../tools/firestore.rules)
