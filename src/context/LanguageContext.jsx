import { createContext, useState, useContext } from 'react';
import fr from '../data/fr';
import en from '../data/en';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Check local storage for saved language, default to 'fr'
  const savedLang = localStorage.getItem('language') || 'fr';
  const [language, setLanguage] = useState(savedLang);

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = language === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
