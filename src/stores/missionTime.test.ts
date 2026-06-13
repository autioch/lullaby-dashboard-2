import { describe, it, expect } from 'vitest';
import { getDeadlineRemainingMs, parseHhMm, formatHhMm } from './missionTime';

// A fixed local instant to anchor the signed-remaining assertions.
const now = new Date(2026, 5, 13, 12, 0, 0, 0).getTime(); // local 12:00

describe('getDeadlineRemainingMs', () => {
  it('is positive (counting down) before the deadline', () => {
    expect(getDeadlineRemainingMs('12:05', now)).toBe(5 * 60 * 1000);
  });

  it('is negative (overtime) after the deadline', () => {
    expect(getDeadlineRemainingMs('11:56', now)).toBe(-4 * 60 * 1000);
  });

  it('is ~0 at the exact deadline minute', () => {
    expect(getDeadlineRemainingMs('12:00', now)).toBe(0);
  });

  it('handles an hours-range remaining', () => {
    expect(getDeadlineRemainingMs('14:30', now)).toBe(
      (2 * 60 + 30) * 60 * 1000
    );
  });

  it('returns 0 for a malformed time', () => {
    expect(getDeadlineRemainingMs('nope', now)).toBe(0);
  });
});

describe('parseHhMm', () => {
  it('parses a valid time', () => {
    expect(parseHhMm('07:05')).toEqual({ hour: 7, minute: 5 });
  });

  it('rejects out-of-range values', () => {
    expect(parseHhMm('24:00')).toBeNull();
    expect(parseHhMm('12:60')).toBeNull();
    expect(parseHhMm('garbage')).toBeNull();
  });

  it('round-trips with formatHhMm', () => {
    const parsed = parseHhMm('09:35');
    expect(parsed).not.toBeNull();
    expect(formatHhMm(parsed!.hour, parsed!.minute)).toBe('09:35');
  });
});
