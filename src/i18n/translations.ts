export type AppLanguage = "en" | "pl";

export const DEFAULT_LANGUAGE: AppLanguage = "en";

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

export function getTranslation(language: AppLanguage = DEFAULT_LANGUAGE) {
  return translations[language] ?? translations[DEFAULT_LANGUAGE];
}

export function t(
  key: string,
  language: AppLanguage = DEFAULT_LANGUAGE,
  replacements?: Record<string, string | number>,
) {
  const parts = key.split(".");
  const dictionary = getTranslation(language) as Record<string, unknown>;
  let value: unknown = dictionary;

  for (const part of parts) {
    if (typeof value !== "object" || value === null || !(part in value)) {
      return key;
    }
    value = (value as Record<string, unknown>)[part];
  }

  if (typeof value !== "string") {
    return key;
  }

  return replacements
    ? value.replace(/\{(\w+)\}/g, (_, placeholder) => {
        const replacement = replacements[placeholder];
        return replacement === undefined
          ? `{${placeholder}}`
          : String(replacement);
      })
    : value;
}
