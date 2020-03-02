import React from 'react';
import Button from '../../components/Button';
import { Text } from '../../context/LanguageContext';
import Features from '../../components/Features';
import Technologies from '../../components/Technologies';

export default () => (
  <>
    <div className="hero">
      <div className="flex-item hero-text">
        <p className="hero-title"><Text tid="heroTitle" /></p>
        <p className="hero-sub-title"><Text tid="heroSubTitle" /></p>
        <Button outlined to="/contact-us"><Text tid="contactUs" /></Button>
        <Button to="/projects"><Text tid="projects" /></Button>
      </div>
      {/* <img className="flex-item image-home" src={HomeBanner} alt="Home" /> */}
    </div>
    <Technologies />
    <Features />
  </>
);
