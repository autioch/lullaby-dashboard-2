import { Typography } from '@/components/Typography/Typography';
import './Button.css';

type ButtonProps = {
  isLoading?: boolean;
  onClick: (ev: React.FormEvent<HTMLButtonElement | HTMLDivElement>) => void;
  textKey: string;
  variant?: 'button' | 'text';
};

export function Button(props: ButtonProps) {
  const { isLoading = false, onClick, textKey, variant } = props;

  if (variant === 'text') {
    return (
      <div onClick={onClick} className="c-button--text">
        <Typography textKey={textKey} size="small" />
      </div>
    );
  }

  return (
    <button className="c-button" disabled={isLoading} onClick={onClick}>
      <Typography textKey={textKey} />
    </button>
  );
}
