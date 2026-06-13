import { describe, it, expect } from 'vitest';
import { orderByCompletion } from './objectiveOrder';

describe('orderByCompletion', () => {
  it('moves completed ids to the bottom, preserving order within each partition', () => {
    expect(
      orderByCompletion(['a', 'b', 'c', 'd'], { b: true, d: true })
    ).toEqual(['a', 'c', 'b', 'd']);
  });

  it('keeps order when nothing is checked', () => {
    expect(orderByCompletion(['a', 'b', 'c'], {})).toEqual(['a', 'b', 'c']);
  });

  it('moves all to the bottom (order preserved) when everything is checked', () => {
    expect(
      orderByCompletion(['a', 'b', 'c'], { a: true, b: true, c: true })
    ).toEqual(['a', 'b', 'c']);
  });

  it('treats a missing checked map as all unchecked', () => {
    expect(orderByCompletion(['a', 'b'], undefined)).toEqual(['a', 'b']);
  });

  it('treats ids absent from the checked map as unchecked', () => {
    expect(orderByCompletion(['a', 'b', 'c'], { b: true })).toEqual([
      'a',
      'c',
      'b',
    ]);
  });

  it('treats a falsy checked value as unchecked', () => {
    expect(orderByCompletion(['a', 'b'], { a: false, b: true })).toEqual([
      'a',
      'b',
    ]);
  });

  it('returns an empty array unchanged', () => {
    expect(orderByCompletion([], { a: true })).toEqual([]);
  });
});
