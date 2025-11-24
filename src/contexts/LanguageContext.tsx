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
  const [language, setLanguageState] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  // Detect browser language on mount
  useEffect(() => {
    setMounted(true);
    const browserLang = navigator.language.toLowerCase();
    const savedLang = localStorage.getItem('openli-language') as Language | null;
    
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    } else if (browserLang.startsWith('en')) {
      setLanguageState('en');
    } else {
      setLanguageState('fr'); // Default to French
    }
  }, []);

  // Update localStorage and HTML lang attribute when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('openli-language', lang);
      document.documentElement.lang = lang;
    }
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
