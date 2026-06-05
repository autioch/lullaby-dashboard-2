import './ProgressBar.css';
import { Typography } from '@/components/Typography/Typography';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { useMemo } from 'react';

export function ProgressBar() {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);

  const selectedList = useDashboardStore(
    (state) => state.lists[state.selectedIndex] ?? null
  );

  const total = useMemo(
    () =>
      selectedList?.groups.reduce(
        (sum, group) => sum + (group.items?.length ?? 0),
        0
      ) ?? 0,
    [selectedList]
  );

  const completed = selectedList
    ? selectedList.groups.reduce((sum, group) => {
        return (
          sum +
          group.items.reduce((groupSum, item) => {
            const key = `${selectedList.id}-${group.id}-${item.id}`;
            return groupSum + (checkedKeys[key] ? 1 : 0);
          }, 0)
        );
      }, 0)
    : 0;

  const safeTotal = Math.max(total, 1);

  const percent = Math.round((completed / safeTotal) * 100);

  const fillWidth = `${Math.min(Math.max((completed / safeTotal) * 100, 0), 100)}%`;

  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        <div>
          <div className="progress-bar__eyebrow">
            <Typography textKey="progress.eyebrow" />
          </div>
          <div className="progress-bar__title">
            <Typography textKey="progress.title" />
          </div>
        </div>
        <div className="progress-bar__percent">{percent}%</div>
      </div>

      <div className="progress-bar__track">
        <div className="progress-bar__fill" style={{ width: fillWidth }} />
      </div>

      <div className="progress-bar__footer">
        <div>
          <Typography textKey="progress.done" values={{ completed, total }} />
        </div>
        <div>
          <Typography textKey="progress.keepGoing" />
        </div>
      </div>
    </div>
  );
}
