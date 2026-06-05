import { type TranslationMap } from '@/i18n/types';

type AuthGateTranslationKeys =
  | 'header'
  | 'description'
  | 'submitButton'
  | 'loading'
  | 'errorEmptyPassword'
  | 'errorInvalidPassword'
  | 'errorUnknown';

export const authGateTranslations: TranslationMap<AuthGateTranslationKeys> = {
  en: {
    header: 'Security check!',
    description: 'Enter the password to start the adventure!',
    submitButton: "Let's go!",
    loading: 'Asking the game master...',
    errorEmptyPassword: 'No adventure without a password!',
    errorInvalidPassword: 'Wrong guess, try again!',
    errorUnknown: 'Unable to verify the password right now.',
  },
  pl: {
    header: 'Sprawdzanie bezpieczeństwa!',
    description: 'Wprowadź hasło, aby rozpocząć przygodę!',
    submitButton: 'Zaczynajmy!',
    loading: 'Pytanie mistrza gry...',
    errorEmptyPassword: 'Nie ma przygody bez hasła!',
    errorInvalidPassword: 'Niezła próba, ale błędna!',
    errorUnknown: 'Nie można teraz sprawdzić hasła',
  },
};
