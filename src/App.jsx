import React, {
  useEffect, useContext,
} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import './App.css';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import Footer from './components/Footer';
import { DarkModeContext } from './context/DarkModeContext';
import setLocalePathName from './utils/setLocalePathName';
import { defaultLocale } from './utils/config';
import ScrollToTop from './ScrollToTop';
import { languageIds } from './store/languages';
import { Text } from './context/LanguageContext';
import AppRouter from './AppRouter';

function App() {
  const darkModeContext = useContext(DarkModeContext);
  const { isDark, toggleMenuFiredClosed, isMenuOpen } = darkModeContext;
  const className = ['App'];

  useEffect(() => {
    const pathName = window.location.pathname;
    const locale = pathName.split('/')[1];
    if (languageIds.includes(locale)) {
      localStorage.setItem('localeId', locale);
      setLocalePathName(locale);
    } else {
      const localeFromStorage = localStorage.getItem('localeId');
      if (localeFromStorage && localeFromStorage !== defaultLocale) {
        setLocalePathName(localeFromStorage);
      }
    }
  }, []);

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  return (
    <div className={className.join(' ')}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Qlola -
          {Text({ tid: 'homeTitle' })}
        </title>
        <meta name="description" content={Text({ tid: 'homeTitle' })} />
        <link rel="canonical" href="https://qlola.com" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Header light />
        { isMenuOpen && <MenuDrawer toggleMenuFiredClosed={toggleMenuFiredClosed} />}
        <AppRouter />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
