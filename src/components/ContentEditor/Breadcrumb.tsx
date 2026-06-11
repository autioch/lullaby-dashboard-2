import { Typography } from '@/components/Typography/Typography';

// One segment of the trail. `onClick` makes it a focusable jump target; the
// current (last) segment is rendered as plain text regardless.
export type Crumb = { textKey?: string; raw?: string; onClick?: () => void };

function CrumbLabel(props: { crumb: Crumb }) {
  const { crumb } = props;
  if (crumb.raw !== undefined) {
    return <>{crumb.raw || '—'}</>;
  }
  return <Typography as="span" textKey={crumb.textKey ?? ''} />;
}

// Shows where the user is in the drill-down (Missions › Mission › Group).
// Ancestor segments jump straight to that level; the current one is inert.
export function Breadcrumb(props: { trail: Crumb[] }) {
  const { trail } = props;

  return (
    <nav className="c-content-editor__breadcrumb" aria-label="breadcrumb">
      {trail.map((crumb, index) => {
        const isLast = index === trail.length - 1;
        return (
          <span className="c-content-editor__crumb-wrap" key={index}>
            {index > 0 ? (
              <span className="c-content-editor__crumb-sep" aria-hidden="true">
                ›
              </span>
            ) : null}
            {crumb.onClick && !isLast ? (
              <button
                type="button"
                className="c-content-editor__crumb"
                onClick={crumb.onClick}
              >
                <CrumbLabel crumb={crumb} />
              </button>
            ) : (
              <span className="c-content-editor__crumb-current">
                <CrumbLabel crumb={crumb} />
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
