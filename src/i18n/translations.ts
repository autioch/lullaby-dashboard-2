import { authGateTranslations } from '@/components/AuthGate/translations';
import { startupTranslations } from '@/components/Startup/translations';
import { appOptionsTranslations } from '@/components/AppOptions/translations';
import { progressBarTranslations } from '@/components/ProgressBar/translations';

export type AppLanguage = 'en' | 'pl';

export type TranslationMap<T extends string = string> = Record<
  AppLanguage,
  Record<T, string>
>;

export const translations = {
  en: {
    authGate: authGateTranslations.en,
    startup: startupTranslations.en,
    appOptions: appOptionsTranslations.en,
    progressBar: progressBarTranslations.en,
  },
  pl: {
    authGate: authGateTranslations.pl,
    startup: startupTranslations.pl,
    appOptions: appOptionsTranslations.pl,
    progressBar: progressBarTranslations.pl,
  },
} as const;

export const DEFAULT_LANGUAGE: AppLanguage = 'pl';

export function t(
  key: string,
  language: AppLanguage = DEFAULT_LANGUAGE,
  replacements?: Record<string, string | number>
) {
  const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];
  const [group, item] = key.split('.');
  const missing = `<MISSING#${key}>`;

  if (!(group in dictionary)) {
    return missing;
  }

  const groupMap = (dictionary as Record<string, unknown>)[group];

  if (
    typeof groupMap !== 'object' ||
    groupMap === null ||
    !(item in groupMap)
  ) {
    return missing;
  }

  const labelValue = (groupMap as Record<string, unknown>)[item];

  if (typeof labelValue !== 'string') {
    return missing;
  }

  if (!replacements) {
    return labelValue;
  }

  return labelValue.replace(/\{(\w+)\}/g, (_, placeholder) => {
    const replacement = replacements[placeholder];
    return replacement === undefined ? `{${placeholder}}` : String(replacement);
  });
}
