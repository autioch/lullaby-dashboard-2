import './Typography.css';
import { t } from '@/i18n/translations';
import { useLanguageStore } from '@/stores/useLanguageStore';
import type { ElementType } from 'react';

export type TypographyVariant = 'body' | 'eyebrow' | 'heading';

type TypographyProps = {
  textKey: string;
  values?: Record<string, string | number>;
  size?: 'small' | 'medium' | 'large';
  as?: ElementType;
  className?: string;
};

export function Typography(props: TypographyProps) {
  const language = useLanguageStore((state) => state.language);
  const { textKey, values, size = 'medium', as = 'span', className } = props;
  const Component = as ?? 'span';

  return (
    <Component
      className={`c-typography c-typography--${size} ${className || ''}`}
    >
      {t(textKey, language, values)}
    </Component>
  );
}
