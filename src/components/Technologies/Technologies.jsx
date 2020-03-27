import React, { useContext } from 'react';
import Img from 'react-image';
import DarkModeContext from '../../DarkModeContext';
import Loading, { UnLoader } from '../Loading';
import technologies from '../../store/technologies';

export default () => {
  const context = useContext(DarkModeContext);
  const { isDark } = context;

  return (
    <div className="technologies">
      {technologies(isDark).map((tech) => (
        <Img
          title={tech.label}
          src={tech.img}
          key={tech.label}
          alt={tech.label}
          loader={<Loading />}
          unloader={<UnLoader />}
        />
      ))}
    </div>
  );
};
