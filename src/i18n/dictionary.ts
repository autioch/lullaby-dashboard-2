import { authGateTranslations } from '@/components/AuthGate/translations';
import { startupTranslations } from '@/components/Startup/translations';
import { appOptionsTranslations } from '@/components/AppOptions/translations';
import { progressBarTranslations } from '@/components/ProgressBar/translations';

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
