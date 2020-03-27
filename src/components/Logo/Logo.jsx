import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
import DarkModeContext from '../../DarkModeContext';

const Logo = ({
  src, alt, width, text,
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
        {src ? <img src={src} alt={alt} width={width} /> : text}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  text: PropTypes.string,
};

Logo.defaultProps = {
  src: '',
  alt: 'Logo',
  width: 100,
  text: 'Qlola',
};

export default Logo;
