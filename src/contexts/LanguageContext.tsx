import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, Translations } from "../translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const STORAGE_KEY = "unlocky-language";
const DEFAULT_LANGUAGE: Language = "fr";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function resolveInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (saved === "fr" || saved === "en") return saved;

  const browserLang = navigator.language?.toLowerCase() ?? "";
  if (browserLang.startsWith("en")) return "en";

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => resolveInitialLanguage());

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore storage errors
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
