import type { PropsWithChildren } from 'react';
import './Layout.css';

type LayoutProps = {
  className?: string;
};

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className={`c-layout ${props.className ?? ''}`}>{props.children}</div>
  );
}
