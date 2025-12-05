'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Safely determine the initial language preference so the UI can render immediately
function getInitialLanguage(): Language {
  try {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('unlocky-language') as Language | null;
      if (savedLang === 'fr' || savedLang === 'en') return savedLang;

      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) return 'en';
    }
  } catch {
    // Fallback to default if storage or navigator access fails
  }

  return 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

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

  // Ensure the html lang attribute stays in sync on initial render
  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }
    } catch {
      // Ignore DOM access errors
    }
  }, [language]);

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
