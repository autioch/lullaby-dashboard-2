export const translations = {
  en: {
    app: {
      noLists: "No lists",
      reset: "Reset",
      options: "Options",
      language: "Language",
      english: "English",
      polish: "Polish",
    },
    progress: {
      eyebrow: "Mission progress",
      title: "You’re doing great!",
      done: "{completed} of {total} tasks done",
      keepGoing: "Keep going!",
    },
    loader: {
      heading: "Starting dashboard",
      message:
        "Please wait while we load your configuration and restore saved progress.",
      accessHeading: "Access required",
      accessMessage: "Enter the password to open the dashboard on this TV.",
      passwordLabel: "Password",
      openDashboard: "Open dashboard",
      checkingPassword: "Checking...",
      passwordRequired: "Please enter the password.",
      passwordIncorrect: "Incorrect password.",
      passwordUnavailable: "Unable to verify the password right now.",
      errorHeading: "Unable to load the dashboard",
      errorMessage:
        "The application could not complete startup. Please refresh the page and try again.",
      debugHeading: "Debug details",
      loadingConfiguration: "Loading configuration",
      restoringState: "Restoring saved state",
    },
    pageTitle: "Lullaby dashboard",
  },
  pl: {
    app: {
      noLists: "Brak list",
      reset: "Resetuj",
      options: "Opcje",
      language: "Język",
      english: "Angielski",
      polish: "Polski",
    },
    progress: {
      eyebrow: "Postęp misji",
      title: "Świetnie sobie radzisz!",
      done: "Ukończono {completed} z {total} zadań",
      keepGoing: "Jeszcze tylko trochę!",
    },
    loader: {
      heading: "Uruchamianie pulpitu",
      message:
        "Poczekaj, aż załadujemy konfigurację i przywrócimy zapisany stan.",
      accessHeading: "Wymagane hasło",
      accessMessage: "Wpisz hasło, aby otworzyć pulpit na tym telewizorze.",
      passwordLabel: "Hasło",
      openDashboard: "Otwórz pulpit",
      checkingPassword: "Sprawdzanie...",
      passwordRequired: "Wpisz hasło.",
      passwordIncorrect: "Nieprawidłowe hasło.",
      passwordUnavailable: "Nie można teraz zweryfikować hasła.",
      errorHeading: "Nie można załadować pulpitu",
      errorMessage:
        "Aplikacja nie mogła ukończyć uruchamiania. Odśwież stronę i spróbuj ponownie.",
      debugHeading: "Szczegóły debugowania",
      loadingConfiguration: "Ładowanie konfiguracji",
      restoringState: "Przywracanie zapisanych danych",
    },
    pageTitle: "Pulpit Lullaby",
  },
} as const;
