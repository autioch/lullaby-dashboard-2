import Typography from "../Typography/Typography";

type ProgressBarProps = {
  completed: number;
  total: number;
};

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const safeTotal = Math.max(total, 1);
  const percent = Math.round((completed / safeTotal) * 100);
  const fillWidth = `${Math.min(Math.max((completed / safeTotal) * 100, 0), 100)}%`;

  return (
    <section className="progress-bar" aria-label="Task progress">
      <header className="progress-bar__header">
        <div>
          <p className="progress-bar__eyebrow">
            <Typography
              textKey="progress.eyebrow"
              variant="eyebrow"
              size="small"
            />
          </p>
          <h2 className="progress-bar__title">
            <Typography
              textKey="progress.title"
              variant="heading"
              size="large"
            />
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
          <Typography
            textKey="progress.done"
            variant="label"
            values={{ completed, total }}
          />
        </span>
        <span>
          <Typography textKey="progress.keepGoing" variant="label" />
        </span>
      </footer>
    </section>
  );
}
