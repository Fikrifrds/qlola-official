import React from 'react';
import Avatar from '../../components/Avatar';
import { Text } from '../../context/LanguageContext';

export default () => (
  <div className="about">
    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg" />
    <p className="about-name">Qlola</p>
    <p className="about-title"><Text tid="companyFocus" /></p>
    <p className="about-description"><Text tid="companyDescription" /></p>
  </div>
);
