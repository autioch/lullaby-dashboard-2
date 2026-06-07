import type { PropsWithChildren } from 'react';
import './Panel.css';

export function Panel(props: PropsWithChildren) {
  return <div className="c-panel">{props.children}</div>;
}
