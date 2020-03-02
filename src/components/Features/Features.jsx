import React from 'react';
import features from '../../store/features';
import Feature from './Feature';
import { Text } from '../../context/LanguageContext';

export default () => (
  <div className="features">
    <p className="features-title"><Text tid="features" /></p>
    <hr className="underline" />
    {features.map((feature, index) => (
      <Feature
        title={feature.title}
        description={feature.description}
        img={feature.img}
        index={index}
        key={feature.img}
      />
    ))}
  </div>
);
