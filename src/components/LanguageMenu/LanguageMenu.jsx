import React, { useContext } from 'react';
import { languageOptions } from '../../store/languages';
import { LanguageContext } from '../../context/LanguageContext';
import { DarkModeContext } from '../../context/DarkModeContext';
import setLocalePathName from '../../utils/setLocalePathName';

export default () => {
  const languageContext = useContext(LanguageContext);
  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find((item) => item.id === event.target.value);
    languageContext.changeLanguage(selectedLanguage);
    localStorage.setItem('localeId', event.target.value);
    setLocalePathName(event.target.value);
  };

  const darkModeContext = useContext(DarkModeContext);
  const { isDark } = darkModeContext;
  const className = ['menu-link language-menu'];

  if (isDark) {
    className.push(`${className[1]}__light`);
  }

  return (
    <>
      <select
        id="language-menu"
        onChange={handleLanguageChange}
        value={languageContext.language.id}
        className={className.join(' ')}
      >
        {languageOptions.map((item) => (
          <option
            key={item.id}
            value={item.id}
          >
            {item.id.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};
