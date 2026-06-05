import { type AppLanguage, DEFAULT_LANGUAGE } from '@/i18n/translations';
import { create } from 'zustand';
import { lsWrapper } from '@/utils/ls';

type DashboardState = {
  language: AppLanguage;
  setLanguage(language: AppLanguage): void;
};

const ls = lsWrapper<AppLanguage>('language');

export const useLanguageStore = create<DashboardState>((set) => ({
  language: ls.load() ?? DEFAULT_LANGUAGE,

  setLanguage(language: AppLanguage) {
    set({
      language,
    });
    ls.save(language);
  },
}));
