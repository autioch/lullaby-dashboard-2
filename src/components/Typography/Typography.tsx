import './Typography.css';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { t } from '../../i18n/translations';
import { useDashboardStore } from '../../stores/useDashboardStore';

export type TypographyVariant = 'body' | 'eyebrow' | 'heading' | 'label';

type TypographyOwnProps = {
  textKey: string;
  values?: Record<string, string | number>;
  size?: 'small' | 'medium' | 'large';
  variant?: TypographyVariant;
  as?: ElementType;
  className?: string;
};

type TypographyProps<C extends ElementType = 'span'> = TypographyOwnProps &
  Omit<ComponentPropsWithoutRef<C>, keyof TypographyOwnProps>;

export default function Typography<C extends ElementType = 'span'>({
  textKey,
  values,
  size = 'medium',
  variant = 'body',
  as,
  className,
  ...props
}: TypographyProps<C>) {
  const language = useDashboardStore((state) => state.language);
  const Component = as ?? 'span';

  const classes = [
    className,
    `typography typography--${variant}`,
    `typography--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...props}>
      {t(textKey, language, values)}
    </Component>
  );
}
