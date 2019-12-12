import getLocalizedStrings from './localized-strings';

function getLocalizedString(key, lang) {
  var strings = getLocalizedStrings(lang);
  var localized = strings[key];
  if (!localized) return "*!*".concat(key, "*!*");
  return localized;
}

export default getLocalizedString;