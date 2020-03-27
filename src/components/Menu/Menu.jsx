import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../Link';
import menu from '../../store/menu';
import { Text } from '../../context/LanguageContext';
import LanguageMenu from '../LanguageMenu';

const Nav = ({ item }) => (
  <NavLink to={item.route} className="menu-link" activeClassName="selected">
    <Text tid={item.id} />
  </NavLink>
);

const Menu = () => (
  <nav className="menu">
    {menu.map((item) => <Nav item={item} key={item.route} />)}
    <LanguageMenu />
  </nav>
);


Nav.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Menu;
