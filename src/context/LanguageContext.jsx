import React, {
  useState, createContext, useContext, useEffect,
} from 'react';
import { defaultLocale } from '../utils/config';

import { languageOptions, dictionaryList } from '../store/languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  language: languageOptions.find((lang) => lang.id === defaultLocale),
  dictionary: dictionaryList[defaultLocale],
});

// it provides the language context to app
export default function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);
  const [addedLocale, setAddedLocale] = useState('');

  useEffect(() => {
    const localeId = localStorage.getItem('localeId');
    const currentLanguage = languageOptions.find((lang) => lang.id === localeId);
    if (currentLanguage) {
      setLanguage(currentLanguage);
      setDictionary(dictionaryList[currentLanguage.id]);
      if (currentLanguage.id !== defaultLocale) {
        setAddedLocale(`/${currentLanguage.id}`);
      } else {
        setAddedLocale('');
      }
    }
  }, []);

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setDictionary(dictionaryList[selectedLanguage.id]);
    if (selectedLanguage.id !== defaultLocale) {
      setAddedLocale(`/${selectedLanguage.id}`);
    } else {
      setAddedLocale('');
    }
  };

  const provider = {
    language,
    dictionary,
    changeLanguage,
    addedLocale,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
}
