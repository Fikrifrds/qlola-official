import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import DarkModeContext from './DarkModeContext';
import MenuDrawer from './components/MenuDrawer';
import Footer from './components/Footer';
import LanguageProvider from './context/LanguageContext';
import setLocalePathName from './utils/setLocalePathName';
import defaultLocale from './utils/config';
import ScrollToTop from './ScrollToTop';
import { languageIds } from './store/languages';
import AppRouter from './AppRouter';

function App() {
  const dark = localStorage.getItem('dark') || false;
  const [isDark, setIsDark] = useState(JSON.parse(dark));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleMenuFiredClosed, setToggleMenuFiredClosed] = useState(null);

  const className = ['App'];

  const firstRender = useRef(true);

  useEffect(() => {
    const pathName = window.location.pathname;
    const locale = pathName.split('/')[1];
    if (languageIds.includes(locale)) {
      console.log(locale, languageIds);
      localStorage.setItem('localeId', locale);
      setLocalePathName(locale);
    } else {
      const localeFromStorage = localStorage.getItem('localeId');
      if (localeFromStorage && localeFromStorage !== defaultLocale) {
        setLocalePathName(localeFromStorage);
      }
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem('dark', isDark);
  }, [isDark]);

  const toogleDarkMode = () => {
    setIsDark(!isDark);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setToggleMenuFiredClosed(false);
      return setTimeout(() => {
        setToggleMenuFiredClosed(true);
        setIsMenuOpen(false);
      }, 500);
    }
    setIsMenuOpen(true);
  };

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  return (
    <LanguageProvider>
      <DarkModeContext.Provider value={{
        isDark,
        toogleDarkMode,
        isMenuOpen,
        toggleMenu,
      }}
      >
        <div className={className.join(' ')}>
          <Router>
            <ScrollToTop />
            <Header light />
            { isMenuOpen && <MenuDrawer toggleMenuFiredClosed={toggleMenuFiredClosed} />}
            <AppRouter />
          </Router>
        </div>
        <Footer />
      </DarkModeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
