'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return 'fr';

    const savedLang = localStorage.getItem('unlocky-language') as Language | null;
    const browserLang = navigator.language.toLowerCase();

    if (savedLang === 'fr' || savedLang === 'en') {
      return savedLang;
    }

    return browserLang.startsWith('en') ? 'en' : 'fr';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Sync language to DOM and storage when it changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('unlocky-language', language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
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
