import type { PropsWithChildren } from 'react';
import './Layout.css';

export function Layout(props: PropsWithChildren) {
  return <div className="c-layout">{props.children}</div>;
}
