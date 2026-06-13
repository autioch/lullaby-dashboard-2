// Pure time logic for mission `deadline` mode — no React, no Firestore, no store
// imports, so it can be unit-tested and read each tick by the display.

// Signed ms of TODAY's `HH:MM` (local) minus `now`. Positive before the time
// (counting down), negative after it (overtime). No rolling next-occurrence —
// the deadline resets at local midnight because `now`'s own date is used.
export function getDeadlineRemainingMs(time: string, now: number): number {
  const parsed = parseHhMm(time);
  if (!parsed) {
    return 0;
  }
  const target = new Date(now);
  target.setHours(parsed.hour, parsed.minute, 0, 0);
  return target.getTime() - now;
}

// Parse an `HH:MM` string into hour (0–23) / minute (0–59); null if malformed.
export function parseHhMm(
  time: string
): { hour: number; minute: number } | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time);
  if (!match) {
    return null;
  }
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return null;
  }
  return { hour, minute };
}

// Format hour/minute as a zero-padded `HH:MM` string.
export function formatHhMm(hour: number, minute: number): string {
  return `${pad(hour)}:${pad(minute)}`;
}

function pad(num: number): string {
  return num.toString().padStart(2, '0');
}
