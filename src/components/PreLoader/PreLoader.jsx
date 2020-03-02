import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  if (history) {
    console.log(history);
  }
  return (
    <div className="pre-loader">
      <span className="spinner spinner-large spinner-blue spinner-slow" />
    </div>
  );
};
