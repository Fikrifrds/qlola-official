import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../Link';
import DarkMenuContext from '../../DarkModeContext';
import menu from '../../store/menu';
import { Text } from '../../context/LanguageContext';
import LanguageMenu from '../LanguageMenu';

const Nav = ({ item }) => {
  const context = useContext(DarkMenuContext);
  const { toggleMenu } = context;
  return (
    <NavLink to={item.route} className="menu-drawer-link" activeClassName="selected" onClick={toggleMenu}>
      <Text tid={item.id} />
    </NavLink>
  );
};

const MenuDrawer = ({ toggleMenuFiredClosed }) => {
  const context = useContext(DarkMenuContext);
  const { toggleMenu, isDark } = context;

  const className = ['menu-drawer'];
  const backDrop = ['back-drop'];

  if (isDark) {
    className.push(`${className[0]}__dark`);
    backDrop.push(`${backDrop[0]}__dark`);
  }

  if (toggleMenuFiredClosed === false) {
    className.push(`${className[0]}__closed`);
    backDrop.push(`${backDrop[0]}__closed`);
  }

  const CloseMenuButton = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="close-icon" onClick={toggleMenu}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill={isDark ? 'black' : 'white'} />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return (
    <>
      <div
        className={backDrop.join(' ')}
        onClick={toggleMenu}
        aria-hidden="true"
      />
      <div className={className.join(' ')}>
        <CloseMenuButton />
        <nav className="menu-link-container">
          {menu.map((item) => <Nav item={item} key={item.route} />)}
          <LanguageMenu />
        </nav>
      </div>
    </>
  );
};

MenuDrawer.propTypes = {
  toggleMenuFiredClosed: PropTypes.bool.isRequired,
};

Nav.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MenuDrawer;
