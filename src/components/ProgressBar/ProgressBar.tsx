import './ProgressBar.css';
import Typography from '@/components/Typography/Typography';
import { useDashboardStore } from '@/stores/useDashboardStore';
import { useMemo } from 'react';

export default function ProgressBar() {
  const checkedKeys = useDashboardStore((state) => state.checkedKeys);

  const selectedList = useDashboardStore((state) => {
    const list = state.lists[state.selectedIndex];
    return list ?? null;
  });

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
    <section className="progress-bar" aria-label="Task progress">
      <header className="progress-bar__header">
        <div>
          <p className="progress-bar__eyebrow">
            <Typography textKey="progress.eyebrow" size="small" />
          </p>
          <h2 className="progress-bar__title">
            <Typography textKey="progress.title" size="large" />
          </h2>
        </div>
        <strong className="progress-bar__percent">{percent}%</strong>
      </header>

      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <span className="progress-bar__fill" style={{ width: fillWidth }} />
      </div>

      <footer className="progress-bar__footer">
        <span>
          <Typography textKey="progress.done" values={{ completed, total }} />
        </span>
        <span>
          <Typography textKey="progress.keepGoing" />
        </span>
      </footer>
    </section>
  );
}
