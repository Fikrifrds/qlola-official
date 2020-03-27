import defaultLocale from './config';

export default () => {
  const localeId = localStorage.getItem('localeId');
  let addedLocale = '';
  if (localeId !== defaultLocale) {
    addedLocale = `/${localeId}`;
  }
  return addedLocale;
};
