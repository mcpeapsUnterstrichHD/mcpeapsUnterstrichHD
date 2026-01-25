// Proper i18n hook using react-i18next
import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // Initialize i18n

export function useTranslations() {
  const { t } = useTranslation();

  // Return a function that works like the Next.js useTranslations
  // Supports nested keys like "Aboutme.name"
  return (key: string): string => {
    return t(key);
  };
}

export function useLocale(): string {
  const { i18n } = useTranslation();
  return i18n.language;
}

// Re-export for convenience
export { useTranslation } from "react-i18next";
export { changeLanguage } from "@/lib/i18n";
