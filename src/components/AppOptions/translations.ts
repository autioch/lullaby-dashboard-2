import { type TranslationMap } from '@/i18n/translations';

type AppOptionsTranslationKeys =
  | 'languageMenu'
  | 'english'
  | 'polish'
  | 'missionMenu'
  | 'options'
  | 'resetData'
  | 'close'
  | 'open';

export const appOptionsTranslations: TranslationMap<AppOptionsTranslationKeys> =
  {
    en: {
      languageMenu: 'Language',
      english: 'English',
      polish: 'Polish',
      missionMenu: 'Mission select',
      options: 'Options',
      resetData: 'Reset progress',
      close: 'Close menu',
      open: '⚙ Menu',
    },
    pl: {
      languageMenu: 'Język',
      english: 'Angielski',
      polish: 'Polski',
      missionMenu: 'Wybór misji',
      options: 'Opcje',
      resetData: 'Zresetuj postęp',
      close: 'Zamknij menu',
      open: '⚙ Menu',
    },
  };
