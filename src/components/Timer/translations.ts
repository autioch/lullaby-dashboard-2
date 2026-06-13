import { type TranslationMap } from '@/i18n/translations';

type TimerTranslationKeys = 'best' | 'pauseLabel' | 'resumeLabel' | 'over';

export const timerTranslations: TranslationMap<TimerTranslationKeys> = {
  en: {
    best: 'Best {time}',
    pauseLabel: 'Pause timer',
    resumeLabel: 'Resume timer',
    over: '{time} over',
  },
  pl: {
    best: 'Najlepszy {time}',
    pauseLabel: 'Wstrzymaj licznik',
    resumeLabel: 'Wznów licznik',
    over: '{time} po czasie',
  },
};
