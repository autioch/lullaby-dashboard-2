import { type TranslationMap } from '@/i18n/translations';

type AppOptionsTranslationKeys =
  | 'languageMenu'
  | 'english'
  | 'polish'
  | 'buildInfo'
  | 'resetBest';

export const appOptionsTranslations: TranslationMap<AppOptionsTranslationKeys> =
  {
    en: {
      languageMenu: 'Language',
      english: 'English',
      polish: 'Polish',
      buildInfo: 'Build {commit} · {time}',
      resetBest: 'Reset best time',
    },
    pl: {
      languageMenu: 'Język',
      english: 'Angielski',
      polish: 'Polski',
      buildInfo: 'Wersja {commit} · {time}',
      resetBest: 'Wyczyść najlepszy czas',
    },
  };
