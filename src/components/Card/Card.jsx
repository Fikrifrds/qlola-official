import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import addedLocaleToRoute from '../../utils/addLocaleToRoute';

export default ({
  width, height, shadow, title, onClick, to, children, className,
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
    >
      <div className="inner">
        <p className="inner-title">{title}</p>
        {children}
      </div>
    </div>
  );
};
