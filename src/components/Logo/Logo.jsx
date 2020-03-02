import React, { useContext } from 'react';
import { Link } from '../Link';
import DarkModeContext from '../../DarkModeContext';

export default ({
  src, alt = 'Logo', width = 100, text,
}) => {
  const context = useContext(DarkModeContext);
  const { isDark } = context;
  const className = ['logo-text'];

  if (isDark) {
    className.push(`${className[0]}__dark`);
  }

  return (
    <div className="logo">
      <Link to="/" className={className.join(' ')}>
        {src ? <img {...{ src, alt, width }} /> : text}
      </Link>
    </div>
  );
};
