import { type TranslationMap } from '@/i18n/translations';

type CompletionCelebrationTranslationKeys = 'newBest' | 'toSpare';

export const completionCelebrationTranslations: TranslationMap<CompletionCelebrationTranslationKeys> =
  {
    en: {
      newBest: 'New best!',
      toSpare: '{time} to spare',
    },
    pl: {
      newBest: 'Nowy rekord!',
      toSpare: 'Zostało {time}',
    },
  };
