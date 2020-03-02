import { defaultLocale } from './config';
import { languageIds } from '../store/languages';

export default (value) => {
  const localeId = localStorage.getItem('localeId');
  const { pathname } = window.location;
  const locale = pathname.split('/')[1];
  let newPathName = pathname;
  console.log(value, defaultLocale);
  if (languageIds.includes(locale)) {
    if (value === defaultLocale) {
      newPathName = pathname.slice(3);
      console.log('new', newPathName);
    } else if (value !== localeId) {
      console.log('fire', newPathName);

      newPathName = value + pathname.slice(3);
    }
  } else if (value !== defaultLocale) {
    newPathName = value + pathname;
  }
  window.history.replaceState('object or string', 'Page Title', `${newPathName}`);
};
