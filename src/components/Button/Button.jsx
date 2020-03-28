import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import addedLocaleToRoute from '../../utils/addLocaleToRoute';

const Button = ({
  children, onClick, outlined, disabled, to, small,
}) => {
  const [redirect, setRedirect] = useState(false);
  const className = ['button'];
  const context = useContext(DarkModeContext);
  const { isDark } = context;

  if (outlined) {
    className.push(`${className[0]}__outlined`);
    if (isDark) {
      className.push(`${className[1]}__dark`);
    }
  }

  if (disabled) {
    className.push(`${className[0]}__disabled`);
  }

  if (small) {
    className.push(`${className[0]}__small`);
  }
  const linkTo = () => {
    setRedirect(true);
  };

  if (redirect && to) {
    return <Redirect push to={addedLocaleToRoute() + to} />;
  }

  return (
    <button
      className={className.join(' ')}
      onClick={to ? linkTo : onClick}
      disabled={disabled}
    >
      <div className="children">
        {children}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  small: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  outlined: false,
  disabled: false,
  to: null,
  small: false,
};

export default Button;
