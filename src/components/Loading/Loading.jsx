import React from 'react';

export default () => (
  <div className="loading">
    <span className="spinner spinner-large spinner-blue spinner-slow" />
  </div>
);

export const UnLoader = () => (
  <div className="loading">
    <p>Can not load image</p>
  </div>
);
