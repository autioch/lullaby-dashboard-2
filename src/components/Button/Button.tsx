import { Typography } from '@/components/Typography/Typography';
import './Button.css';

type ButtonProps = {
  isLoading?: boolean;
  disabled?: boolean;
  onClick: (ev: React.FormEvent<HTMLButtonElement | HTMLDivElement>) => void;
  textKey: string;
  raw?: boolean;
  variant?: 'danger';
  className?: string;
};

export function Button(props: ButtonProps) {
  const {
    isLoading = false,
    disabled = false,
    onClick,
    textKey,
    raw = false,
    variant,
    className,
  } = props;

  const classes = [
    'c-button',
    variant === 'danger' ? 'c-button--danger' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {raw ? textKey : <Typography textKey={textKey} />}
    </button>
  );
}
