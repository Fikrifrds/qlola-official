import React from 'react';
import Language from '../../assets/icons/language.svg';
import LanguagePicker from '../LanguagePicker';

export default () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <img src={Language} alt="Language" />
        {' '}
        <LanguagePicker />
      </div>

      <ul>
        <li><a href="/">Sitemap</a></li>
        <li><a href="/">Contact Microsoft</a></li>
        <li><a href="/">Privacy & cookies</a></li>
        <li><a href="/">Terms of use</a></li>
        <li><a href="/">Trademarks</a></li>
        <li><a href="/">Safety & eco</a></li>
        <li><a href="/">About our ads</a></li>
        <li><a href="/">&copy; Qlola 2020</a></li>
      </ul>
    </div>
  </footer>
);
