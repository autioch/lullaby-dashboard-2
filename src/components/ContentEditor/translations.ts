import { type TranslationMap } from '@/i18n/translations';

type ContentEditorTranslationKeys =
  | 'editMenu'
  | 'missionsTitle'
  | 'missionTitle'
  | 'groupTitle'
  | 'back'
  | 'close'
  | 'edit'
  | 'delete'
  | 'moveUp'
  | 'moveDown'
  | 'save'
  | 'cancel'
  | 'confirm'
  | 'confirmDeletePrompt'
  | 'addMission'
  | 'addGroup'
  | 'addObjective'
  | 'groupsHeading'
  | 'objectivesHeading'
  | 'fieldLabel'
  | 'fieldYoutubeUrl'
  | 'fieldRetentionHours'
  | 'fieldColor'
  | 'fieldHidden'
  | 'toggleOn'
  | 'toggleOff'
  | 'noMissions'
  | 'noGroups'
  | 'noObjectives'
  | 'pending'
  | 'reauthSubmit'
  | 'errorGeneric'
  | 'errorSessionExpired';

export const contentEditorTranslations: TranslationMap<ContentEditorTranslationKeys> =
  {
    en: {
      editMenu: 'Edit',
      missionsTitle: 'Missions',
      missionTitle: 'Mission',
      groupTitle: 'Group',
      back: 'Back',
      close: 'Close',
      edit: 'Edit',
      delete: 'Delete',
      moveUp: 'Move up',
      moveDown: 'Move down',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      confirmDeletePrompt: 'Delete this permanently?',
      addMission: 'Add mission',
      addGroup: 'Add group',
      addObjective: 'Add objective',
      groupsHeading: 'Groups',
      objectivesHeading: 'Objectives',
      fieldLabel: 'Label',
      fieldYoutubeUrl: 'YouTube URL',
      fieldRetentionHours: 'Retention (hours)',
      fieldColor: 'Color',
      fieldHidden: 'Hidden',
      toggleOn: 'On',
      toggleOff: 'Off',
      noMissions: 'No missions yet.',
      noGroups: 'No groups yet.',
      noObjectives: 'No objectives yet.',
      pending: 'Saving…',
      reauthSubmit: 'Log in',
      errorGeneric: 'Something went wrong. Try again.',
      errorSessionExpired: 'Session expired — re-enter the password.',
    },
    pl: {
      editMenu: 'Edycja',
      missionsTitle: 'Misje',
      missionTitle: 'Misja',
      groupTitle: 'Grupa',
      back: 'Wstecz',
      close: 'Zamknij',
      edit: 'Edytuj',
      delete: 'Usuń',
      moveUp: 'W górę',
      moveDown: 'W dół',
      save: 'Zapisz',
      cancel: 'Anuluj',
      confirm: 'Potwierdź',
      confirmDeletePrompt: 'Usunąć trwale?',
      addMission: 'Dodaj misję',
      addGroup: 'Dodaj grupę',
      addObjective: 'Dodaj zadanie',
      groupsHeading: 'Grupy',
      objectivesHeading: 'Zadania',
      fieldLabel: 'Etykieta',
      fieldYoutubeUrl: 'Adres YouTube',
      fieldRetentionHours: 'Ważność (godziny)',
      fieldColor: 'Kolor',
      fieldHidden: 'Ukryte',
      toggleOn: 'Tak',
      toggleOff: 'Nie',
      noMissions: 'Brak misji.',
      noGroups: 'Brak grup.',
      noObjectives: 'Brak zadań.',
      pending: 'Zapisywanie…',
      reauthSubmit: 'Zaloguj',
      errorGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
      errorSessionExpired: 'Sesja wygasła — wpisz hasło ponownie.',
    },
  };
