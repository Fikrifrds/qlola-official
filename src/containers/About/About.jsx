import React from 'react';
import Avatar from '../../components/Avatar';
import { Text } from '../../context/LanguageContext';
import fikriAvatar from '../../assets/images/fikri-avatar.png';

export default () => (
  <div className="about">
    <Avatar src={fikriAvatar} />
    <p className="about-name">Qlola</p>
    <p className="about-title"><Text tid="companyFocus" /></p>
    <p className="about-subtitle">Surabaya, Indonesia</p>
    <p>
      Email :
      {' '}
      <a href="mailto:fikri@qlola.com?subject=Hello Fikri, Founder of Qlola" className="link link-bold">fikri@qlola.com</a>
    </p>
    <p className="about-description"><Text tid="companyDescription" /></p>
  </div>
);
