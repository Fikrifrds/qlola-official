import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LanguageProvider from './context/LanguageContext';
import DarkModeProvider from './context/DarkModeContext';

ReactDOM.render(
  <LanguageProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </LanguageProvider>,
  document.getElementById('root'),
);
