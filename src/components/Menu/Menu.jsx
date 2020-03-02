import React from 'react';
import { NavLink } from '../Link';
import menu from '../../store/menu';
import { Text } from '../../context/LanguageContext';
import LanguageMenu from '../LanguageMenu';

const Nav = ({ item }) => (
  <NavLink to={item.route} className="menu-link" activeClassName="selected"><Text tid={item.id} /></NavLink>
);

export default () => (
  <nav className="menu">
    {menu.map((item) => <Nav item={item} key={item.route} />)}
    <LanguageMenu />
  </nav>
);
