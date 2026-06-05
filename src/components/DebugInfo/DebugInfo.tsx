import './DebugInfo.css';

type DebugItem = {
  label: string;
  value: string;
};

export function DebugInfo() {
  const debugItems: { label: string; value: string }[] = [
    { label: 'Origin', value: window.location.origin },
    { label: 'Pathname', value: window.location.pathname },
    { label: 'User Agent', value: window.navigator.userAgent },
    ...Array.from(document.querySelectorAll('link[rel=stylesheet]')).map(
      (link, index) => ({
        label: `Link ${index + 1}`,
        value:
          link.getAttribute('href') ||
          link.getAttribute('data-vite-dev-id') ||
          '?',
      })
    ),
    ...Array.from(document.querySelectorAll('style')).map((link, index) => ({
      label: `Style ${index + 1}`,
      value:
        link.getAttribute('href') ||
        link.getAttribute('data-vite-dev-id') ||
        '?',
    })),
  ];

  return (
    <div className="debug-info">
      <DebugSection items={debugItems} />
      <DebugSection items={debugItems} />
      <DebugSection items={debugItems} />
      <DebugSection items={debugItems} />
    </div>
  );
}

function DebugSection({ items }: { items: DebugItem[] }) {
  return (
    <div className="debug-section">
      {items.map((item) => (
        <>
          <span>{item.label}:</span>
          <span>{item.value}</span>
        </>
      ))}
    </div>
  );
}
