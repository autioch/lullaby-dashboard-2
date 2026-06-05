import { Typography } from '@/components/Typography/Typography';
import './Button.css';

type ButtonProps = {
  isLoading?: boolean;
  onClick: (ev: React.FormEvent<HTMLButtonElement>) => void;
  textKey: string;
};

export function Button(props: ButtonProps) {
  const { isLoading = false, onClick, textKey } = props;

  return (
    <button className="c-button" disabled={isLoading} onClick={onClick}>
      <Typography textKey={textKey} />
    </button>
  );
}
