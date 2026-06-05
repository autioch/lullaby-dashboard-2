import './Typography.css';
import { t } from '@/i18n/translations';
import { useDashboardStore } from '@/stores/useDashboardStore';

export type TypographyVariant = 'body' | 'eyebrow' | 'heading';

type TypographyProps = {
  textKey: string;
  values?: Record<string, string | number>;
  size?: 'small' | 'medium' | 'large';
};

export function Typography({
  textKey,
  values,
  size = 'medium',
}: TypographyProps) {
  const language = useDashboardStore((state) => state.language);

  return (
    <span className={`c-typography c-typography--${size}`}>
      {t(textKey, language, values)}
    </span>
  );
}
