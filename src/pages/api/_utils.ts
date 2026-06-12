import { createHmac, timingSafeEqual } from 'node:crypto';
import type { APIContext } from 'astro';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export function jsonResponse(data: unknown, status: number = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

// --- Session cookie -------------------------------------------------------
// A signed HttpOnly cookie issued on successful login and required by every
// content-write API route. The token is `<issuedAt>.<HMAC-SHA256(issuedAt)>`
// keyed by SESSION_SECRET, verified in constant time and expired server-side
// against the same window as the cookie maxAge. Server-only code, so Node
// `crypto` is fine (not subject to the Chrome 87 browser floor).
const SESSION_COOKIE = 'lp_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

function getSessionSecret(): string {
  const secret = import.meta.env.SESSION_SECRET?.trim() ?? '';
  if (!secret) {
    throw new Error('SESSION_SECRET is not configured');
  }
  return secret;
}

function signPayload(payload: string): string {
  return createHmac('sha256', getSessionSecret()).update(payload).digest('hex');
}

function createSessionToken(): string {
  const payload = String(Date.now());
  return `${payload}.${signPayload(payload)}`;
}

function isValidSessionToken(token: string): boolean {
  const separator = token.indexOf('.');
  if (separator <= 0) {
    return false;
  }

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  if (!payload || !signature) {
    return false;
  }

  const expected = signPayload(payload);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (signatureBuffer.length !== expectedBuffer.length) {
    return false;
  }
  if (!timingSafeEqual(signatureBuffer, expectedBuffer)) {
    return false;
  }

  // Signature is authentic, so the embedded issue time is trustworthy. Enforce
  // expiry here: the cookie maxAge is only a client hint a replayed token can
  // ignore, so the server must reject anything past the session window.
  const issuedAt = Number(payload);
  if (!Number.isFinite(issuedAt)) {
    return false;
  }
  return Date.now() - issuedAt <= SESSION_MAX_AGE_SECONDS * 1000;
}

export function setSession(ctx: APIContext): void {
  ctx.cookies.set(SESSION_COOKIE, createSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: import.meta.env.PROD,
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export function requireSession(ctx: APIContext): boolean {
  // Dev-only escape hatch: PUBLIC_SKIP_AUTH bypasses the client auth gate but
  // never mints a session cookie, so content writes would 401. Honor the same
  // flag here so local testing can write. Must stay false in production — the
  // gate is already open when it is true, so this grants nothing extra there.
  if (import.meta.env.PUBLIC_SKIP_AUTH === 'true') {
    return true;
  }

  const token = ctx.cookies.get(SESSION_COOKIE)?.value;
  if (!token) {
    return false;
  }

  try {
    return isValidSessionToken(token);
  } catch {
    return false;
  }
}

function getServiceAccountKey() {
  const key = import.meta.env.FIREBASE_SERVICE_ACCOUNT_KEY?.trim() ?? '';
  const serviceAccount = JSON.parse(key);

  if (!serviceAccount || typeof serviceAccount !== 'object') {
    throw new Error('Firebase service account is invalid');
  }

  return serviceAccount;
}

export async function getFirestoreDb() {
  if (!getApps().length) {
    const serviceAccount = getServiceAccountKey();

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
}
