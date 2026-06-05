import { type TranslationMap } from '@/i18n/translations';

type AppOptionsTranslationKeys = 'languageMenu' | 'english' | 'polish';

export const appOptionsTranslations: TranslationMap<AppOptionsTranslationKeys> =
  {
    en: {
      languageMenu: 'Language',
      english: 'English',
      polish: 'Polish',
    },
    pl: {
      languageMenu: 'Język',
      english: 'Angielski',
      polish: 'Polski',
    },
  };
