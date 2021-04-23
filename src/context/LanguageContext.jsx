import React, {
  useState, createContext, useContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { defaultLocale } from '../utils/config';
import { languageOptions, dictionaryList } from '../store/languages';

export const LanguageContext = createContext({
  language: languageOptions.find((lang) => lang.id === defaultLocale),
  dictionary: dictionaryList[defaultLocale],
});

const LanguageProvider = (props) => {
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

  const { children } = props;
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid] || props.tid;
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
