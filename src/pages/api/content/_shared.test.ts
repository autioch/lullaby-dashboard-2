import { describe, it, expect } from 'vitest';
import {
  readString,
  readNumber,
  readBoolean,
  readDirection,
  readIdList,
  reorderById,
} from './_shared';

describe('body readers', () => {
  it('readString accepts strings only', () => {
    expect(readString('hi')).toBe('hi');
    expect(readString('')).toBe('');
    expect(readString(1)).toBeUndefined();
    expect(readString(undefined)).toBeUndefined();
  });

  it('readNumber accepts finite numbers only', () => {
    expect(readNumber(0)).toBe(0);
    expect(readNumber(3.5)).toBe(3.5);
    expect(readNumber(Number.NaN)).toBeUndefined();
    expect(readNumber(Number.POSITIVE_INFINITY)).toBeUndefined();
    expect(readNumber('3')).toBeUndefined();
  });

  it('readBoolean accepts booleans only', () => {
    expect(readBoolean(true)).toBe(true);
    expect(readBoolean(false)).toBe(false);
    expect(readBoolean('true')).toBeUndefined();
    expect(readBoolean(1)).toBeUndefined();
  });

  it('readDirection accepts only up/down', () => {
    expect(readDirection('up')).toBe('up');
    expect(readDirection('down')).toBe('down');
    expect(readDirection('sideways')).toBeUndefined();
    expect(readDirection(undefined)).toBeUndefined();
  });
});

describe('readIdList', () => {
  it('reads a string array off a document field', () => {
    expect(readIdList({ ids: ['a', 'b'] }, 'ids')).toEqual(['a', 'b']);
  });

  it('defaults to an empty array for a missing or non-array field', () => {
    expect(readIdList({ ids: 'nope' }, 'ids')).toEqual([]);
    expect(readIdList({}, 'ids')).toEqual([]);
    expect(readIdList(undefined, 'ids')).toEqual([]);
  });
});

describe('reorderById', () => {
  it('moves an id up', () => {
    expect(reorderById(['a', 'b', 'c'], 'b', 'up')).toEqual(['b', 'a', 'c']);
  });

  it('moves an id down', () => {
    expect(reorderById(['a', 'b', 'c'], 'b', 'down')).toEqual(['a', 'c', 'b']);
  });

  it('is a no-op at the top edge', () => {
    expect(reorderById(['a', 'b', 'c'], 'a', 'up')).toEqual(['a', 'b', 'c']);
  });

  it('is a no-op at the bottom edge', () => {
    expect(reorderById(['a', 'b', 'c'], 'c', 'down')).toEqual(['a', 'b', 'c']);
  });

  it('returns the original list when the id is absent', () => {
    expect(reorderById(['a', 'b'], 'z', 'up')).toEqual(['a', 'b']);
  });

  it('does not mutate the input array', () => {
    const ids = ['a', 'b', 'c'];
    reorderById(ids, 'b', 'up');
    expect(ids).toEqual(['a', 'b', 'c']);
  });
});
