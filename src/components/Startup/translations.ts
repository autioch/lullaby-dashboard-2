import { type TranslationMap } from '@/i18n/types';

type StartupTranslationKeys =
  | 'header'
  | 'description'
  | 'loadingConfiguration'
  | 'restoringState'
  | 'errorHeader'
  | 'errorStep'
  | 'errorMessage'
  | 'errorNoStack';

export const startupTranslations: TranslationMap<StartupTranslationKeys> = {
  en: {
    header: 'Creating universe',
    description: 'Please wait while we create stars and planets...',
    loadingConfiguration: 'Loading constellations',
    restoringState: 'Finding the last travel',
    errorHeader: 'Simulation error!',
    errorStep: 'Error for step:',
    errorMessage: 'Message:',
    errorNoStack: 'No stack available',
  },
  pl: {
    header: 'Tworzenie wszechświata',
    description: 'Poczekaj chwilę, tworzymy gwiazdy i planety...',
    loadingConfiguration: 'Ładowanie gwiazdozbiorów',
    restoringState: 'Odnajdowanie ostatniej podróży',
    errorHeader: 'Błąd symulacji!',
    errorStep: 'Błąd dla kroku:',
    errorMessage: 'Treść: ',
    errorNoStack: 'Brak stacku',
  },
};
