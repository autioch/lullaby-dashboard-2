import { type TranslationMap } from '@/i18n/translations';

type ProgressBarTranslationKeys =
  | 'header'
  | 'count'
  | 'progressNone'
  | 'progressBegin'
  | 'progressMiddle'
  | 'progressMost'
  | 'progressAlmost'
  | 'progressDone';

export const progressBarTranslations: TranslationMap<ProgressBarTranslationKeys> =
  {
    en: {
      header: 'You’re doing great!',
      count: '{completed} / {total} done ({percent}%)',
      progressNone: "Let' start it!",
      progressBegin: 'Nice start!',
      progressMiddle: "You're doing great",
      progressMost: 'Getting things done!',
      progressAlmost: 'Almost there!',
      progressDone: 'Success!',
    },
    pl: {
      header: 'Świetnie sobie radzisz!',
      count: '{completed} / {total} zadań ({percent}%)',
      progressNone: 'Zaczynajmy!',
      progressBegin: 'Niezły początek!',
      progressMiddle: 'Świetny postęp!',
      progressMost: 'Ale się dzieje!',
      progressAlmost: 'Jeszcze tylko trochę!',
      progressDone: 'Sukces!',
    },
  };
