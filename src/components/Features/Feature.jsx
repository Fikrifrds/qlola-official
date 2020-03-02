import React, { useContext } from 'react';
import Img from 'react-image';
import Loading, { UnLoader } from '../Loading';
import { LanguageContext } from '../../context/LanguageContext';

export default ({
  title, description, img, index,
}) => {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;

  const featureItem = ['feature-item'];
  if (index % 2 !== 0) {
    featureItem.push(`${featureItem[0]}__reverse`);
  }
  return (
    <div className="feature">
      <div className={featureItem.join(' ')}>
        <div className="feature-text">
          <p className="feature-title">{title[language.id]}</p>
          <p className="feature-description">{description[language.id]}</p>
        </div>
        <Img
          src={img}
          loader={<Loading />}
          unloader={<UnLoader />}
          className="feature-image"
          alt={title[language.id]}
        />
      </div>
    </div>
  );
};
