import en from './en';
import id from './id';

export const dictionaryList = {
  id,
  en,
};

export const languageOptions = [
  { id: 'id', text: 'Bahasa (Indonesia)' },
  { id: 'en', text: 'English (United States)' },
];

export const languageIds = languageOptions.map((lang) => lang.id);
