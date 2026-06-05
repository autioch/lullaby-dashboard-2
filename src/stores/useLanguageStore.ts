import { type AppLanguage, DEFAULT_LANGUAGE } from '@/i18n/translations';
import { create } from 'zustand';
import { lsLoad, lsSave } from '@/utils/ls';

export type DashboardState = {
  language: AppLanguage;
  setLanguage(language: AppLanguage): void;
};

export const useLanguageStore = create<DashboardState>((set) => ({
  language: lsLoad('language') ?? DEFAULT_LANGUAGE,

  setLanguage(language: AppLanguage) {
    set({
      language,
    });
    lsSave('language', language);
  },
}));
