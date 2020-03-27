import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import Loading, { UnLoader } from '../Loading';
import { LanguageContext } from '../../context/LanguageContext';

const Feature = ({
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

Feature.propTypes = {
  title: PropTypes.objectOf(PropTypes.string).isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Feature;
