import { describe, it, expect } from 'vitest';
import { computeProgress } from './missionProgress';
import type { MissionRec } from '@/database/missionRepository';
import type { ObjectiveGroupRec } from '@/database/objectiveGroupRepository';
import type { ObjectiveRec } from '@/database/objectiveRepository';

function mission(objectiveGroupIds: string[]): MissionRec {
  return {
    id: 'm1',
    label: 'M',
    youtubeUrl: '',
    retentionHours: 0,
    objectiveGroupIds,
  };
}

function group(
  id: string,
  objectiveIds: string[],
  isHidden = false
): ObjectiveGroupRec {
  return { id, label: id, isHidden, objectiveIds };
}

function objective(id: string, isHidden = false): ObjectiveRec {
  return { id, label: id, colorId: '', isHidden };
}

const groups = (...g: ObjectiveGroupRec[]) =>
  Object.fromEntries(g.map((x) => [x.id, x]));
const objectives = (...o: ObjectiveRec[]) =>
  Object.fromEntries(o.map((x) => [x.id, x]));

describe('computeProgress', () => {
  it('counts only visible objectives and percent is ceil', () => {
    const result = computeProgress(
      groups(group('g1', ['o1', 'o2', 'o3'])),
      objectives(objective('o1'), objective('o2'), objective('o3')),
      { m1: { o1: true } },
      mission(['g1'])
    );
    expect(result.total).toBe(3);
    expect(result.completed).toBe(1);
    expect(result.percent).toBe(34); // ceil(1/3 * 100)
    expect(result.fillWidth).toBe(`${(1 / 3) * 100}%`);
  });

  it('excludes hidden groups from total and completed', () => {
    const result = computeProgress(
      groups(group('g1', ['o1']), group('g2', ['o2'], true)),
      objectives(objective('o1'), objective('o2')),
      { m1: { o1: true, o2: true } },
      mission(['g1', 'g2'])
    );
    expect(result.total).toBe(1);
    expect(result.completed).toBe(1);
    expect(result.percent).toBe(100);
  });

  it('excludes hidden objectives within a visible group', () => {
    const result = computeProgress(
      groups(group('g1', ['o1', 'o2'])),
      objectives(objective('o1'), objective('o2', true)),
      { m1: {} },
      mission(['g1'])
    );
    expect(result.total).toBe(1);
    expect(result.completed).toBe(0);
  });

  it('reports zero progress with a fully unchecked mission', () => {
    const result = computeProgress(
      groups(group('g1', ['o1', 'o2'])),
      objectives(objective('o1'), objective('o2')),
      {},
      mission(['g1'])
    );
    expect(result).toEqual({
      total: 2,
      completed: 0,
      percent: 0,
      fillWidth: '0%',
    });
  });

  it('returns a safe zero state when there is no mission', () => {
    expect(computeProgress({}, {}, {})).toEqual({
      total: 0,
      completed: 0,
      percent: 0,
      fillWidth: '0%',
    });
  });

  it('ignores ids that are missing from the store (not yet hydrated)', () => {
    const result = computeProgress(
      groups(group('g1', ['o1', 'missing'])),
      objectives(objective('o1')),
      { m1: { o1: true } },
      mission(['g1', 'missingGroup'])
    );
    expect(result.total).toBe(1);
    expect(result.completed).toBe(1);
  });
});
