import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PropTypes from 'prop-types';

export const DarkModeContext = React.createContext({
  isDark: JSON.parse(localStorage.getItem('dark') || false),
  isMenuOpen: false,
  toggleMenuFiredClosed: null,
});

const DarkModeProvider = ({ children }) => {
  const darkModeContext = useContext(DarkModeContext);
  const [isDark, setIsDark] = useState(darkModeContext.isDark);
  const [isMenuOpen, setIsMenuOpen] = useState(darkModeContext.isMenuOpen);
  const [toggleMenuFiredClosed, setToggleMenuFiredClosed] = useState(
    darkModeContext.toggleMenuFiredClosed,
  );

  const firstRender = useRef(true);

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

  const provider = {
    isDark,
    toogleDarkMode,
    isMenuOpen,
    toggleMenu,
    toggleMenuFiredClosed,
  };

  return (
    <DarkModeContext.Provider value={provider}>
      {children}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkModeProvider;
