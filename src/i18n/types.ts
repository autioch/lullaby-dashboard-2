export type AppLanguage = 'en' | 'pl';

export type TranslationMap<T extends string> = Record<
  AppLanguage,
  Record<T, string>
>;
