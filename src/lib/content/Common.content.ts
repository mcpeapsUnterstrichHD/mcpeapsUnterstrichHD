/**
 * @module Common.content
 *
 * @description
 * Intlayer content dictionary providing common, reusable UI label translations
 * shared across the portfolio application. Contains generic action and status
 * strings (loading, error, success, cancel, save, delete, edit, view, submit,
 * close) in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"common"`
 *
 * @see No direct `useIntlayer("common")` consumer found -- strings are available
 *   as a shared utility dictionary for any component that needs generic labels.
 */
import { Locales, t, type Dictionary } from "intlayer";

const commonContent = {
  key: "common",
  content: {
    loading: t({
      [Locales.ENGLISH_UNITED_STATES]: "Loading...",
      [Locales.GERMAN_GERMANY]: "Laden..."
    }),
    error: t({
      [Locales.ENGLISH_UNITED_STATES]: "Error",
      [Locales.GERMAN_GERMANY]: "Fehler"
    }),
    success: t({
      [Locales.ENGLISH_UNITED_STATES]: "Success",
      [Locales.GERMAN_GERMANY]: "Erfolg"
    }),
    cancel: t({
      [Locales.ENGLISH_UNITED_STATES]: "Cancel",
      [Locales.GERMAN_GERMANY]: "Abbrechen"
    }),
    save: t({
      [Locales.ENGLISH_UNITED_STATES]: "Save",
      [Locales.GERMAN_GERMANY]: "Speichern"
    }),
    delete: t({
      [Locales.ENGLISH_UNITED_STATES]: "Delete",
      [Locales.GERMAN_GERMANY]: "Löschen"
    }),
    edit: t({
      [Locales.ENGLISH_UNITED_STATES]: "Edit",
      [Locales.GERMAN_GERMANY]: "Bearbeiten"
    }),
    view: t({
      [Locales.ENGLISH_UNITED_STATES]: "View",
      [Locales.GERMAN_GERMANY]: "Ansehen"
    }),
    submit: t({
      [Locales.ENGLISH_UNITED_STATES]: "Submit",
      [Locales.GERMAN_GERMANY]: "Absenden"
    }),
    close: t({
      [Locales.ENGLISH_UNITED_STATES]: "Close",
      [Locales.GERMAN_GERMANY]: "Schließen"
    }),
  }
} satisfies Dictionary;

export default commonContent;
