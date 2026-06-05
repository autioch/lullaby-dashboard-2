import type { PropsWithChildren } from 'react';
import './Overlay.css';

type OverlayProps = {
  className?: string;
};

export function Overlay(props: PropsWithChildren<OverlayProps>) {
  const { className } = props;

  return (
    <div className="c-overlay">
      <div className={`c-overlay__content ${className ?? ''}`}>
        {props.children}
      </div>
    </div>
  );
}
