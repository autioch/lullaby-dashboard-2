import { describe, it, expect, vi, afterEach } from 'vitest';
import type { APIContext } from 'astro';
import { setSession, requireSession } from './_utils';

// Minimal cookie jar standing in for Astro's APIContext.cookies. setSession
// writes the signed token; requireSession reads it back.
function makeCtx() {
  const store: Record<string, { value: string }> = {};
  const ctx = {
    cookies: {
      set: (name: string, value: string) => {
        store[name] = { value };
      },
      get: (name: string) => store[name],
    },
  } as unknown as APIContext;
  return { ctx, store };
}

const COOKIE = 'lp_session';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('session token (setSession / requireSession)', () => {
  it('accepts a token it issued', () => {
    const { ctx } = makeCtx();
    setSession(ctx);
    expect(requireSession(ctx)).toBe(true);
  });

  it('rejects a request with no cookie', () => {
    const { ctx } = makeCtx();
    expect(requireSession(ctx)).toBe(false);
  });

  it('rejects a tampered signature', () => {
    const { ctx, store } = makeCtx();
    setSession(ctx);
    const token = store[COOKIE].value;
    // Flip the last character of the signature.
    const flipped = token.at(-1) === 'a' ? 'b' : 'a';
    store[COOKIE] = { value: token.slice(0, -1) + flipped };
    expect(requireSession(ctx)).toBe(false);
  });

  it('rejects a forged payload (re-signed with the wrong key)', () => {
    const { ctx, store } = makeCtx();
    // Attacker picks a payload but cannot produce the right HMAC.
    store[COOKIE] = { value: `${Date.now()}.deadbeef` };
    expect(requireSession(ctx)).toBe(false);
  });

  it('rejects a malformed token with no separator', () => {
    const { ctx, store } = makeCtx();
    store[COOKIE] = { value: 'no-dot-here' };
    expect(requireSession(ctx)).toBe(false);
  });

  it('rejects an empty payload or signature', () => {
    const { ctx, store } = makeCtx();
    store[COOKIE] = { value: '.onlysignature' };
    expect(requireSession(ctx)).toBe(false);
    store[COOKIE] = { value: 'onlypayload.' };
    expect(requireSession(ctx)).toBe(false);
  });

  it('bypasses the cookie when PUBLIC_SKIP_AUTH is true (dev escape hatch)', () => {
    vi.stubEnv('PUBLIC_SKIP_AUTH', 'true');
    const { ctx } = makeCtx();
    expect(requireSession(ctx)).toBe(true);
  });

  it('accepts a token still within the 30-day window', () => {
    vi.useFakeTimers();
    try {
      vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
      const { ctx } = makeCtx();
      setSession(ctx);
      // 14 days later — still inside the 30-day window.
      vi.setSystemTime(new Date('2026-01-15T00:00:00Z'));
      expect(requireSession(ctx)).toBe(true);
    } finally {
      vi.useRealTimers();
    }
  });

  it('rejects a token past the 30-day window even with a valid signature', () => {
    vi.useFakeTimers();
    try {
      vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));
      const { ctx } = makeCtx();
      setSession(ctx);
      // 31 days later — the signature still verifies, but the token has expired.
      vi.setSystemTime(new Date('2026-02-01T00:00:00Z'));
      expect(requireSession(ctx)).toBe(false);
    } finally {
      vi.useRealTimers();
    }
  });
});
