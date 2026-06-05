import type { APIContext } from 'astro';
import { jsonResponse } from './_utils';

export const prerender = false;

export async function POST(ctx: APIContext) {
  const { request } = ctx;
  const { password } = (await request.json().catch(() => ({}))) as {
    password?: string;
  };

  const expectedPassword = import.meta.env.APP_PASSWORD?.trim() ?? '';
  const enteredPassword = typeof password === 'string' ? password.trim() : '';

  if (!expectedPassword) {
    return jsonResponse(
      { ok: false, error: 'Password is not configured.' },
      500
    );
  }

  // Browsers might auto uppercase the first letter, so we do a case-insensitive comparison
  if (
    enteredPassword.toLocaleLowerCase() !== expectedPassword.toLocaleLowerCase()
  ) {
    return jsonResponse({ ok: false, error: 'Incorrect password.' }, 401);
  }

  return jsonResponse({ ok: true });
}
