import { type TranslationMap } from '@/i18n/translations';

type AppOptionsTranslationKeys =
  | 'languageMenu'
  | 'english'
  | 'polish'
  | 'buildInfo';

export const appOptionsTranslations: TranslationMap<AppOptionsTranslationKeys> =
  {
    en: {
      languageMenu: 'Language',
      english: 'English',
      polish: 'Polish',
      buildInfo: 'Build {commit} · {time}',
    },
    pl: {
      languageMenu: 'Język',
      english: 'Angielski',
      polish: 'Polski',
      buildInfo: 'Wersja {commit} · {time}',
    },
  };
