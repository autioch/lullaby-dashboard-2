import { describe, it, expect } from 'vitest';
import { filterObject } from './object';

describe('filterObject', () => {
  it('keeps only entries the predicate accepts', () => {
    const result = filterObject(
      { a: 1, b: 2, c: 3 },
      ([, value]) => value !== 2
    );
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('can filter on the key', () => {
    const result = filterObject({ keep_x: 1, drop_y: 2 }, ([key]) =>
      key.startsWith('keep')
    );
    expect(result).toEqual({ keep_x: 1 });
  });

  it('returns an empty object when nothing matches', () => {
    expect(filterObject({ a: 1 }, () => false)).toEqual({});
  });

  it('does not mutate the source object', () => {
    const source = { a: 1, b: 2 };
    filterObject(source, ([, value]) => value === 1);
    expect(source).toEqual({ a: 1, b: 2 });
  });
});
