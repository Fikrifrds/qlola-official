import React from 'react';
import PropTypes from 'prop-types';

const BurgerMenu = ({ toggleMenu, isDark }) => {
  const BurgerMenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="burger-icon">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill={isDark ? 'white' : 'black'} />
    </svg>
  );

  return (
    <div onClick={toggleMenu} className="menu-icon" aria-hidden="true">
      <BurgerMenuIcon />
    </div>
  );
};

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
  isDark: PropTypes.bool.isRequired,
};

BurgerMenu.defaultProps = {
  toggleMenu: undefined,
};

export default BurgerMenu;
