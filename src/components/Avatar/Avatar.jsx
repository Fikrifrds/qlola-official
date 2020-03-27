import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import Loading from '../Loading';

const Avatar = ({ src }) => (
  <div className="avatar avatar-large">
    <Img src={src} loader={<Loading alt="Qlola" />} />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
