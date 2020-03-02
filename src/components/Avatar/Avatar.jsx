import React from 'react';
import Img from 'react-image';
import Loading from '../Loading';

export default ({ src }) => (
  <div className="avatar avatar-large">
    <Img src={src} loader={<Loading alt="Qlola" />} />
  </div>
);
