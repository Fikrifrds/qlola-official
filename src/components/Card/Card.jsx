import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import addedLocaleToRoute from '../../utils/addLocaleToRoute';

const Card = ({
  width,
  height,
  shadow,
  title,
  onClick,
  to,
  children,
  className,
}) => {
  const [redirect, setRedirect] = useState(false);

  const cardClassName = ['card', className];
  if (shadow) {
    cardClassName.push(`${cardClassName[0]}-shadow`);
  }

  if (onClick || to) {
    cardClassName.push(`${cardClassName[0]}__pointer`);
  }

  const linkTo = () => {
    setRedirect(true);
  };

  if (redirect && to) {
    return <Redirect push to={addedLocaleToRoute() + to} />;
  }

  return (
    <div
      className={cardClassName.join(' ')}
      style={{ width, height }}
      onClick={to ? linkTo : onClick}
      aria-hidden="true"
    >
      <div className="inner">
        <p className="inner-title">{title}</p>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  width: null,
  height: null,
  shadow: false,
  title: null,
  onClick: undefined,
  to: null,
  className: null,
};

export default Card;
