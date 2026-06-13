# User Auth — Spike

> **Artifact:** `docs-spikes/12_spike_user-auth.md` · **Roles:** Solution Architect / Tech Lead (lead) · Product Owner
> **Status:** terminal record (no lifecycle) · **Verdict:** `viable-with-changes`
> **Owner:** Jakub · **Created:** 2026-06-14
> **Supersedes:** [spike 11](11_spike_user-auth.md) — a deliberate clean-slate re-investigation; **12 is the current verdict**, 11 is kept only as history.
> **Graduated to:** _(fill once/if this idea proceeds)_

## The uncertainty

What is the industry-standard Firebase architecture for **household accounts + per-tenant data/settings**
on a **shared SmartTV (Chrome 87)** — and is it viable on this exact stack, given that the TV is
input-hostile and the family shares one screen?

## Idea as posed

A deliberate fresh start, ignoring the existing auth and prior conclusions:

> "I'm building a web application with a Firebase backend. I want user accounts with user
> data/settings/etc. I want to tackle the auth/user topic. What's the industry-standard architecture
> for such a solution? I bet there are thousands of apps, posts, blogs, docs on this popular stack."

Through the spike this moved a long way from "add user accounts" — see **Suggested scope**.

## Findings

### Product & common sense

- **Firebase Authentication is the identity layer — don't roll your own.** The textbook stack:
  Firebase Auth mints a `uid`, per-user data lives in Firestore keyed by that `uid`, and Security
  Rules enforce ownership. This replaces the app's current **soft `APP_PASSWORD` gate** with real
  access control.
- **The product is a shared, always-on family TV** ("cooperative, optimized for shared screens").
  The owner confirmed the **single-tenant-per-household** model: **one shared credential per family =
  one Firebase user**, with **no per-person login and no per-member attribution**. The `uid` is the
  tenant boundary; family A literally cannot read family B's documents.
- **Goals confirmed:** separate each family's data (multi-tenant), real privacy/security, sync across
  devices. **Per-member attribution was deliberately excluded** — completions are household-level and
  anonymous. If "who did it" is ever wanted, it's a lightweight **in-app profile** concept layered on
  top (just data — **no extra auth**), so the door isn't closed.
- **Self-serve signup** makes this a real public multi-tenant product, not a private gate — which
  pulls in email verification, password reset, abuse/rate-limiting, and account/data deletion.

### UX standards

- **A TV is input-constrained.** Typing email/password with a D-pad / on-screen keyboard is poor UX.
  The TV-industry standard is the **OAuth 2.0 Device Authorization Grant (RFC 8628)**: a second
  device (phone) does the typing and authorizes the TV via a short code / QR — the YouTube/Netflix
  pattern.
- **The TV signs in once and persists effectively forever**, so the ceremony is rare. This lets us
  **move all typing-heavy flows (signup, email verification, password reset) onto a phone/laptop
  surface**, and keep the TV to a single **"pair this TV"** screen.
- **Two surfaces, two UX rules:**
  - **TV surface** stays TV-first: large high-contrast **pairing code + QR scannable at 3–5 m**,
    D-pad-operable, minimal clutter.
  - **Phone/laptop surface** is an explicit **exception** to TV-first — phone-friendly forms for
    signup / verify / reset / "approve this TV."
- Native passkey / hybrid-transport cross-device login needs Android TV 12+ / tvOS 17+ — **not**
  available on a Chrome 87 SmartTV, so the realistic path is a **custom code/QR pairing** backed by
  Firebase custom tokens, not platform passkeys.

### Technical viability

- **Stack fit is strong.** The app already hydrates by `ownerId == currentUserId` and already routes
  content writes through **admin-SDK API routes**. So: documents carry `ownerId == uid`; Security
  Rules become `request.auth.uid == ownerId`; the write routes switch their guard from the HMAC
  session cookie to **`verifyIdToken`** and scope writes to that `uid`. Minimal disruption to the
  existing layering.
- **Device pairing must be custom — Firebase ships no native device-authorization grant.** Recipe:
  TV (unauthenticated) creates a short-lived `pairingSessions/{id}` doc and shows its code/QR while
  listening via `onSnapshot`; the phone (signed in via Firebase Auth) approves through an admin-SDK
  route that verifies the phone's ID token and **mints a Firebase custom token** for the household
  `uid` (`admin.auth().createCustomToken`); the TV reads it and calls
  **`signInWithCustomToken(...)`**.
- **Chrome 87 floor — clears it.** Every TV-side operation is **HTTPS + token + `onSnapshot`**:
  `signInWithCustomToken`, the pairing listener, and persisted session. The genuinely TV-hostile
  Firebase Auth features — `signInWithPopup` / `signInWithRedirect` and phone-auth reCAPTCHA — are
  **avoided entirely**. Social/Google sign-in is therefore out for the TV surface (usable on phones).
- **🔴 The one real risk is session persistence on the actual hardware.** `firebase/auth` persists
  via IndexedDB (`browserLocalPersistence`), which Chrome 87 supports — **but** `firebase-js-sdk`
  v9+ has **documented Auth/IndexedDB breakage on old SmartTV engines** (the
  `firebase-js-sdk#5444` cluster, e.g. webOS-2.x/WebKit-538). Chrome 87 is much newer and the repo
  already ships **Firestore v12** to this TV, so it is _probably_ fine — but **Auth init +
  persistence is unverified on the real TV**. If persistence fails, "stays logged in forever" breaks
  and the household re-pairs constantly. **This gates the approach and must be validated on hardware
  before building the rest.**
- **QR on the TV** needs a generator that is Chrome-87 **syntax and runtime** safe (Vite down-levels
  syntax; `eslint-plugin-compat` flags runtime APIs) — pick a small, dependency-light one.
- **Phone surface** runs a modern browser, so signup / `sendEmailVerification` /
  `sendPasswordResetEmail` are off-floor and trivial — all **Firebase-native**, nothing rolled by
  hand.

## Options & trade-offs

- **Option A — All-Firebase: email/password auth + custom Firestore-backed pairing + custom tokens.**
  ✅ **Recommended.** No new vendor; reuses the existing `onSnapshot` + admin-route patterns; every
  TV-side call clears the Chrome 87 floor; `uid` maps directly onto Rules and `firebase-admin`.
  _Cons:_ the pairing backend is custom code that must be secured (TTL, single-use, unguessable
  session secret); self-serve signup is a real surface to build.
- **Option B — Third-party IAM (Auth0/Okta/…) with built-in RFC 8628 device flow.** Ships the device
  flow for you. _Cons:_ extra vendor + cost, and it does **not** mesh cleanly with `firebase-admin`
  `uid` / Security Rules (you'd bridge identities). Overkill for a private PoC. ✗
- **Option C — Type email/password directly on the TV (no pairing).** Simplest possible build.
  _Cons:_ the D-pad/on-screen-keyboard UX the owner explicitly rejected. **Considered and rejected;
  not carried as a fallback.** ✗

## Verdict & recommendation

**`viable-with-changes`.** Build **Option A**: a **single-tenant-per-household** Firebase Auth model
(`uid` = tenant), with a **phone/laptop surface** for self-serve signup / verification / reset /
TV-approval and a **TV surface** that pairs via code + QR and `signInWithCustomToken`. Replace the
soft `APP_PASSWORD` gate; switch admin write-routes to `verifyIdToken`. **Validate the hardware
persistence risk (R1) first** — it can invalidate the whole approach and should be the spec's first
acceptance check.

## Suggested scope

How the idea changed, for `/spec` to carry:

- **Reshaped:** "user accounts with per-user data" → **"household tenant accounts"** (single shared
  credential, `uid` as the tenant boundary). The auth gate is **replaced**, not extended.
- **Keep:** household-`uid` tenancy + `ownerId == uid` on documents; Rules `request.auth.uid ==
ownerId`; `verifyIdToken` on the admin write-routes; Firebase-native signup / verify / reset on the
  phone surface; custom Firestore-backed device pairing → custom token → `signInWithCustomToken` on
  the TV; TV pairing screen with large code + scannable QR.
- **Cut / defer:** **per-member attribution & in-app profiles** (deferred — addable later with no auth
  cost); **Google/social sign-in** (TV-hostile, off the table for TV); **type-on-TV login**
  (Option C, rejected).

## Open questions & risks

For `/spec` / build to resolve — named, not solved here:

- [ ] **R1 🔴 (gating):** `firebase/auth` v12 init **+ IndexedDB session persistence on the real
      Chrome-87 SmartTV**. Validate on hardware before building anything else; if it fails, the
      "stays signed in" guarantee — and this approach — collapse.
- [ ] **R2 🟠 (pairing security):** pairing codes must be short-TTL, single-use, rate-limited; the
      custom-token delivery channel must be keyed to an **unguessable session secret the TV holds**,
      not the human-readable code, so the token can't be hijacked by guessing.
- [ ] **R3 🟠 (signup surface):** self-serve signup drags in email verification, password reset,
      abuse/rate-limiting, and account/data deletion — scope it as a real product surface.
- [ ] **R4 🟡 (QR on TV):** choose a Chrome-87 syntax+runtime-safe QR generator; ensure the QR is
      scannable at 3–5 m (size/contrast).
- [ ] **R5 🟡 (re-pair / expiry UX):** define behavior when a token is revoked or the TV is offline a
      long time, and the refresh-token longevity expectations.
- [ ] **R6 🟡 (migration):** migrate existing data to a household `uid`; retire `APP_PASSWORD`,
      `SESSION_SECRET`, and `src/pages/api/auth.ts`; reconcile `PUBLIC_SKIP_AUTH` dev-bypass.

## Next step

**`/spec`** (reuse the `<short-name>` **`user-auth`**), making **R1 the first acceptance check**. The
spike stops here — it does not write the spec.

## References

- Firebase JS SDK Auth on old SmartTV engines (persistence/IndexedDB breakage) —
  [firebase-js-sdk #5444](https://github.com/firebase/firebase-js-sdk/issues/5444),
  [Firebase JS SDK release notes](https://firebase.google.com/support/release-notes/js),
  [@firebase/auth (npm)](https://www.npmjs.com/package/@firebase/auth).
- TV / device login standard — OAuth 2.0 Device Authorization Grant (RFC 8628):
  [Auth0 — Device Flow](https://auth0.com/blog/oauth-device-flow-no-hassle-authentication-as-seen-on-tv/),
  [Curity — OAuth Device Flow](https://curity.io/resources/learn/oauth-device-flow/),
  [Descope — Device Authorization Flow](https://www.descope.com/learn/post/device-authorization-flow).
- Cross-device passkey/hybrid transport platform support (why passkeys are out on Chrome-87 TV) —
  [MojoAuth — Multi-device login for streaming](https://mojoauth.com/blog/multi-device-passkey-streaming-ios-android-web-tv).
- Internal: [docs/07_data-architecture.md](../docs/07_data-architecture.md) (`ownerId` hydration,
  admin-SDK write-route path), [CLAUDE.md](../CLAUDE.md) (Chrome 87 floor, environment / current
  auth gate).
