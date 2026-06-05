import type { PropsWithChildren } from 'react';
import './Icon.css';

type IconProps = {
  onClick?: () => void;
};

export function Icon(props: PropsWithChildren<IconProps>) {
  const { onClick, children } = props;

  return (
    <div
      className={`c-icon ${onClick ? 'c-icon--button' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
