import React, { useContext } from 'react';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';
import DarkModeContext from '../../DarkModeContext';

const DarkModeToggle = () => {
  const className = ['toggle-button'];
  const context = useContext(DarkModeContext);
  const { isDark, toogleDarkMode } = context;

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  return (
    <div
      className="dark-mode-toggle"
      onClick={toogleDarkMode}
      aria-hidden="true"
    >
      <img className="dark-mode-icon moon" src={Moon} alt="moon" />
      <img className="dark-mode-icon" src={Sun} alt="moon" />
      <div className={className.join(' ')} />
    </div>
  );
};

export default DarkModeToggle;
