export default (text) => text
  .toLowerCase()
  .replace(/ /g, '-')
  .replace(/[^\w-]+/g, '');
