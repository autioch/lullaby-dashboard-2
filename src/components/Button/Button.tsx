import { Typography } from '@/components/Typography/Typography';
import './Button.css';

type ButtonProps = {
  isLoading?: boolean;
  onClick: (ev: React.FormEvent<HTMLButtonElement | HTMLDivElement>) => void;
  textKey: string;
  raw?: boolean;
};

export function Button(props: ButtonProps) {
  const { isLoading = false, onClick, textKey, raw = false } = props;

  return (
    <button className="c-button" disabled={isLoading} onClick={onClick}>
      {raw ? textKey : <Typography textKey={textKey} />}
    </button>
  );
}
