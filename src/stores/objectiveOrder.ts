// Order a group's objectives for display: unchecked first, completed sunk to the
// bottom — a stable partition that preserves the authored order within each half.
// Pure (no React, no Firestore) so it can be unit-tested and reused. The reorder
// is presentation-only; the stored `objectiveIds` order is never mutated.
export function orderByCompletion(
  objectiveIds: string[],
  checkedForMission: Record<string, boolean> | undefined
): string[] {
  const unchecked = objectiveIds.filter((id) => !checkedForMission?.[id]);
  const checked = objectiveIds.filter((id) => checkedForMission?.[id]);
  return [...unchecked, ...checked];
}
