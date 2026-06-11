import { type TranslationMap } from '@/i18n/translations';

type ContentEditorTranslationKeys =
  | 'editMenu'
  | 'missionsTitle'
  | 'missionTitle'
  | 'groupTitle'
  | 'objectiveTitle'
  | 'back'
  | 'edit'
  | 'delete'
  | 'remove'
  | 'moveUp'
  | 'moveDown'
  | 'save'
  | 'cancel'
  | 'confirm'
  | 'confirmDeletePrompt'
  | 'addMission'
  | 'addGroup'
  | 'addObjective'
  | 'createNew'
  | 'attachExisting'
  | 'attachLibraryEmpty'
  | 'attach'
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
  | 'errorGeneric'
  | 'errorSessionExpired';

export const contentEditorTranslations: TranslationMap<ContentEditorTranslationKeys> =
  {
    en: {
      editMenu: 'Edit',
      missionsTitle: 'Missions',
      missionTitle: 'Mission',
      groupTitle: 'Group',
      objectiveTitle: 'Objective',
      back: 'Back',
      edit: 'Edit',
      delete: 'Delete',
      remove: 'Remove',
      moveUp: 'Move up',
      moveDown: 'Move down',
      save: 'Save',
      cancel: 'Cancel',
      confirm: 'Confirm',
      confirmDeletePrompt: 'Delete this permanently?',
      addMission: 'Add mission',
      addGroup: 'Add group',
      addObjective: 'Add objective',
      createNew: 'Create new',
      attachExisting: 'Attach existing',
      attachLibraryEmpty: 'Nothing left to attach.',
      attach: 'Attach',
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
      errorGeneric: 'Something went wrong. Try again.',
      errorSessionExpired: 'Session expired — re-enter the password.',
    },
    pl: {
      editMenu: 'Edycja',
      missionsTitle: 'Misje',
      missionTitle: 'Misja',
      groupTitle: 'Grupa',
      objectiveTitle: 'Zadanie',
      back: 'Wstecz',
      edit: 'Edytuj',
      delete: 'Usuń',
      remove: 'Odłącz',
      moveUp: 'W górę',
      moveDown: 'W dół',
      save: 'Zapisz',
      cancel: 'Anuluj',
      confirm: 'Potwierdź',
      confirmDeletePrompt: 'Usunąć trwale?',
      addMission: 'Dodaj misję',
      addGroup: 'Dodaj grupę',
      addObjective: 'Dodaj zadanie',
      createNew: 'Utwórz nową',
      attachExisting: 'Dołącz istniejącą',
      attachLibraryEmpty: 'Nie ma nic do dołączenia.',
      attach: 'Dołącz',
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
      errorGeneric: 'Coś poszło nie tak. Spróbuj ponownie.',
      errorSessionExpired: 'Sesja wygasła — wpisz hasło ponownie.',
    },
  };
