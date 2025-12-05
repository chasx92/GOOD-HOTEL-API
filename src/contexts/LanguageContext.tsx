'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SAFE_DEFAULT_LANGUAGE: Language = 'fr';

function getInitialLanguage(): Language {
  // Use lazy initialization so the function only runs on first render
  try {
    if (typeof window === 'undefined') {
      return SAFE_DEFAULT_LANGUAGE;
    }

    const savedLang = localStorage.getItem('unlocky-language') as Language | null;
    if (savedLang === 'fr' || savedLang === 'en') {
      return savedLang;
    }

    const browserLang = window.navigator?.language?.toLowerCase();
    if (browserLang?.startsWith('en')) {
      return 'en';
    }

    return SAFE_DEFAULT_LANGUAGE;
  } catch {
    return SAFE_DEFAULT_LANGUAGE;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync preferred language when the component is mounted in the browser
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('unlocky-language') as Language | null;
      const browserLang = window.navigator?.language?.toLowerCase();

      if (savedLang === 'fr' || savedLang === 'en') {
        setLanguageState(savedLang);
      } else if (browserLang?.startsWith('en')) {
        setLanguageState('en');
      }
    } catch {
      // Ignore storage or navigator errors to avoid crashing the app
    }
  }, []);

  // Keep the <html lang> attribute in sync with the active language
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
    } catch {
      // Ignore DOM errors to avoid blocking the UI
    }
  }, [language]);

  // Update localStorage and HTML lang attribute when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);

    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('unlocky-language', lang);
        document.documentElement.lang = lang;
      }
    } catch {
      // Ignore storage errors to avoid crashing the app when persisting the language
    }
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
