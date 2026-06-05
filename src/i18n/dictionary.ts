import { authGateTranslations } from '@/components/AuthGate/translations';
import { startupTranslations } from '@/components/Startup/translations';

export const translations = {
  en: {
    app: {
      noLists: 'No lists',
      reset: 'Reset',
      options: 'Options',
      language: 'Language',
      english: 'English',
      polish: 'Polish',
    },
    progress: {
      eyebrow: 'Mission progress',
      title: 'You’re doing great!',
      done: '{completed} of {total} tasks done',
      keepGoing: 'Keep going!',
    },
    pageTitle: 'Lullaby dashboard',
    authGate: authGateTranslations.en,
    startup: startupTranslations.en,
  },
  pl: {
    app: {
      noLists: 'Brak list',
      reset: 'Resetuj',
      options: 'Opcje',
      language: 'Język',
      english: 'Angielski',
      polish: 'Polski',
    },
    progress: {
      eyebrow: 'Postęp misji',
      title: 'Świetnie sobie radzisz!',
      done: 'Ukończono {completed} z {total} zadań',
      keepGoing: 'Jeszcze tylko trochę!',
    },
    pageTitle: 'Pulpit Lullaby',
    authGate: authGateTranslations.pl,
    startup: startupTranslations.pl,
  },
} as const;
