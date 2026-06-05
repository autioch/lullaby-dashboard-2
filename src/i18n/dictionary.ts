import { authGateTranslations } from '@/components/AuthGate/translations';
import { startupTranslations } from '@/components/Startup/translations';
import { appOptionsTranslations } from '@/components/AppOptions/translations';

export const translations = {
  en: {
    progress: {
      eyebrow: 'Mission progress',
      title: 'You’re doing great!',
      done: '{completed} of {total} tasks done',
      keepGoing: 'Keep going!',
    },
    pageTitle: 'Lullaby dashboard',
    authGate: authGateTranslations.en,
    startup: startupTranslations.en,
    appOptions: appOptionsTranslations.en,
  },
  pl: {
    progress: {
      eyebrow: 'Postęp misji',
      title: 'Świetnie sobie radzisz!',
      done: 'Ukończono {completed} z {total} zadań',
      keepGoing: 'Jeszcze tylko trochę!',
    },
    pageTitle: 'Pulpit Lullaby',
    authGate: authGateTranslations.pl,
    startup: startupTranslations.pl,
    appOptions: appOptionsTranslations.pl,
  },
} as const;
