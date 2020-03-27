import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import DarkModeToggle from '../DarkModeToggle';
import DarkModeContext from '../../DarkModeContext';
import BurgerMenu from '../BurgerMenu';
import Menu from '../Menu';

const Header = ({ light }) => {
  const context = useContext(DarkModeContext);
  const { isDark, isMenuOpen, toggleMenu } = context;
  const className = ['header'];
  if (light) {
    className.push(`${className[0]}-light`);
  }

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  return (
    <div className="headerContainer">
      <div className={className.join(' ')}>
        <Logo text="Qlola" />
        <div className="menu-container">
          <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} isDark={isDark} />
          <Menu />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  light: PropTypes.bool,
};

Header.defaultProps = {
  light: false,
};

export default Header;
