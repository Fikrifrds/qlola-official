import React, { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import DarkMenuContext from '../../DarkModeContext';
import menu from '../../store/menu';

export default () => {
  const context = useContext(DarkMenuContext);
  const { isMenuOpen, toggleMenu, isDark } = context;

  const ref = useRef();

  React.useEffect(() => {
    const clickOutSideHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', clickOutSideHandler);
      return () => {
        document.removeEventListener(
          'click',
          clickOutSideHandler,
        );
      };
    }
  }, [isMenuOpen, toggleMenu]);

  const Nav = ({ item }) => (
    <NavLink to={item.route} className="menu-drawer-link" activeClassName="selected">{item.label}</NavLink>
  );

  const className = ['menu-drawer'];

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  const CloseMenuButton = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="close-icon" onClick={toggleMenu}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill={isDark ? 'black' : 'white'} />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );

  return (
    <>
      <div className="back-drop" onClick={toggleMenu} />
      <div ref={ref} className={className.join(' ')}>
        <CloseMenuButton />
        <nav className="menu-link-container">
          {menu.map((item) => <Nav item={item} key={item.route} />)}
        </nav>
      </div>
    </>
  );
};
