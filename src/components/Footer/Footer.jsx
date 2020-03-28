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
        <li>
          <a href="/">&copy; Qlola 2020</a>
        </li>
      </ul>
    </div>
  </footer>
);
