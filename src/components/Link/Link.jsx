import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';

export const NewLink = ({
  to, children, className, onClick,
}) => {
  const context = useContext(LanguageContext);
  const { addedLocale } = context;
  return (
    <Link
      to={addedLocale + to}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const NewNavLink = ({
  to, children, className, activeClassName, onClick,
}) => {
  const context = useContext(LanguageContext);
  const { addedLocale } = context;

  return (
    <NavLink
      to={addedLocale + to}
      className={className}
      activeClassName={activeClassName}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};
