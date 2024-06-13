import LocalizedStrings from 'react-localization';
import UnformattedJson from './locale-unformatted.json';
import FormattedJson from './locale-formatted.json';

function getLocalizedStrings(lang: string | undefined): any {
  const strings = new LocalizedStrings(FormattedJson);
  strings.setLanguage(lang || 'en');
  return strings;
}

export default getLocalizedStrings;
