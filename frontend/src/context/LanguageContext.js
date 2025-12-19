import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import { extendedTranslations } from '../i18n/extendedTranslations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Deep merge function to combine translations with fallback
const deepMerge = (target, source) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
};

const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('smh-language');
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem('smh-language', lang);
    }
  };

  // Merge selected language with English as fallback
  // Merge both main translations and extended translations
  const englishBase = {
    ...translations.en
  };
  
  // Get extended translations for English
  const englishExtNav = extendedTranslations.en?.nav || {};
  const englishExtPages = extendedTranslations.en?.pages || {};
  
  if (language === 'en') {
    var t = {
      ...englishBase,
      nav: deepMerge(englishBase.nav || {}, englishExtNav),
      pages: englishExtPages
    };
  } else {
    // Deep merge language translations with English base
    const langBase = translations[language] || translations.en;
    const langNav = extendedTranslations[language]?.nav || {};
    const langPages = extendedTranslations[language]?.pages || {};
    
    // First merge with English base
    var t = deepMerge(englishBase, langBase);
    
    // Then merge nav (prioritize extended translations)
    t.nav = deepMerge(t.nav || {}, langNav);
    
    // Add pages from extended translations
    t.pages = langPages;
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};