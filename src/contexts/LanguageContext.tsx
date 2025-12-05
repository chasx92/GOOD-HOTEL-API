'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DEFAULT_LANGUAGE, Language, translations, Translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  const updateLanguageState = (lang: Language) => {
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

  // Detect browser language on mount
  useEffect(() => {
    try {
      const browserLang = navigator.language.toLowerCase();
      const savedLang = localStorage.getItem('unlocky-language') as Language | null;

      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        updateLanguageState(savedLang);
      } else if (browserLang.startsWith('en')) {
        updateLanguageState('en');
      } else {
        updateLanguageState(DEFAULT_LANGUAGE); // Default to French
      }
    } catch {
      // If storage or navigator access fails, keep the safe default
      updateLanguageState(DEFAULT_LANGUAGE);
    } finally {
      setMounted(true);
    }
  }, []);

  // Update localStorage and HTML lang attribute when language changes
  const setLanguage = (lang: Language) => {
    updateLanguageState(lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  if (!mounted) {
    return null;
  }

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
