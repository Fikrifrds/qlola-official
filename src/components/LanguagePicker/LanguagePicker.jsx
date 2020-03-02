import React, { useContext } from 'react';
import { languageOptions } from '../../store/languages';
import { LanguageContext } from '../../context/LanguageContext';
import setLocalePathName from '../../utils/setLocalePathName';

export default () => {
  const languageContext = useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find((item) => item.id === event.target.value);
    // set selected language by calling context method
    languageContext.changeLanguage(selectedLanguage);
    localStorage.setItem('localeId', event.target.value);
    setLocalePathName(event.target.value);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={languageContext.language.id}
    >
      {languageOptions.map((item) => (
        <option
          key={item.id}
          value={item.id}
        >
          {item.text}
        </option>
      ))}
    </select>
  );
};
