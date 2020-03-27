import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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

NewLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

NewLink.defaultProps = {
  className: '',
  onClick: undefined,
};

NewNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  onClick: PropTypes.func,
};

NewNavLink.defaultProps = {
  className: '',
  activeClassName: '',
  onClick: undefined,
};
