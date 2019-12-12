import LocalizedStrings from 'react-localization';
import FormattedJson from './locale-formatted.json';

function getLocalizedStrings(lang) {
  var strings = new LocalizedStrings(FormattedJson); // .setLanguage(lang || 'en');

  strings.setLanguage(lang || 'en');
  return strings;
}

export default getLocalizedStrings;