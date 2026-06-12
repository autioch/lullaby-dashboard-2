import type { APIContext } from 'astro';
import type { DocumentData } from 'firebase-admin/firestore';
import { jsonResponse, requireSession } from '../_utils';

// Shared helpers for the content-write API routes. Underscore-prefixed, so
// Astro does not expose it as a route. Server-only (off the Chrome 87 floor).
type JsonBody = Record<string, unknown>;

type GuardResult =
  | { ok: true; body: JsonBody }
  | { ok: false; response: Response };

// Reject anyone without a valid session cookie, then parse the JSON body.
export async function guardRequest(ctx: APIContext): Promise<GuardResult> {
  if (!requireSession(ctx)) {
    return {
      ok: false,
      response: jsonResponse({ ok: false, error: 'Session expired.' }, 401),
    };
  }

  const body = (await ctx.request.json().catch(() => ({}))) as JsonBody;
  return { ok: true, body };
}

export function readString(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}

export function readNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value)
    ? value
    : undefined;
}

export function readBoolean(value: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

export function readDirection(value: unknown): 'up' | 'down' | undefined {
  return value === 'up' || value === 'down' ? value : undefined;
}

// Read an id array off a Firestore document's data, defaulting to empty.
export function readIdList(
  data: DocumentData | undefined,
  field: string
): string[] {
  const value = data?.[field];
  return Array.isArray(value) ? (value as string[]) : [];
}

// Swap an id one slot up or down in a cloned array (no Array.prototype.at).
// Returns the original array when the move would fall off either end.
export function reorderById(
  ids: string[],
  id: string,
  direction: 'up' | 'down'
): string[] {
  const index = ids.indexOf(id);
  if (index === -1) {
    return ids;
  }

  const target = direction === 'up' ? index - 1 : index + 1;
  if (target < 0 || target >= ids.length) {
    return ids;
  }

  const next = ids.slice();
  next[index] = ids[target];
  next[target] = id;
  return next;
}
