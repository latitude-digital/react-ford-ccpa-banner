import getLocalizedStrings from './localized-strings';

function getLocalizedString(key: string, lang: string): string {
  const strings = getLocalizedStrings(lang);

  const localized = strings[key];

  if (!localized) return `*!*${key}*!*`;
  return localized;
}

export default getLocalizedString;
