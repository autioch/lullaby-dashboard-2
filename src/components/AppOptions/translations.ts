import { type TranslationMap } from '@/i18n/types';

type AppOptionsTranslationKeys =
  | 'languageMenu'
  | 'english'
  | 'polish'
  | 'resetData'
  | 'close'
  | 'open';

export const appOptionsTranslations: TranslationMap<AppOptionsTranslationKeys> =
  {
    en: {
      languageMenu: 'Language',
      english: 'English',
      polish: 'Polish',
      resetData: 'Reset progress',
      close: 'Close menu',
      open: '⚙',
    },
    pl: {
      languageMenu: 'Język',
      english: 'Angielski',
      polish: 'Polski',
      resetData: 'Zresetuj postęp',
      close: 'Zamknij menu',
      open: '⚙',
    },
  };
