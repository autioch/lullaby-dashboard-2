import { translations } from './dictionary';

export type AppLanguage = 'en' | 'pl';

export const DEFAULT_LANGUAGE: AppLanguage = 'en';

export function t(
  key: string,
  language: AppLanguage = DEFAULT_LANGUAGE,
  replacements?: Record<string, string | number>
) {
  const parts = key.split('.');
  const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];

  let value: unknown = dictionary;

  for (const part of parts) {
    if (typeof value !== 'object' || value === null || !(part in value)) {
      return `<MISSING#${key}>`;
    }
    value = (value as Record<string, unknown>)[part];
  }

  if (typeof value !== 'string') {
    return `<MISSING#${key}>`;
  }

  return replacements
    ? value.replace(/\{(\w+)\}/g, (_, placeholder) => {
        const replacement = replacements[placeholder];
        return replacement === undefined
          ? `{${placeholder}}`
          : String(replacement);
      })
    : value;
}
