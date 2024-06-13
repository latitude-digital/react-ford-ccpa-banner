import getLocalizedStrings from './localized-strings';
function getLocalizedString(key, lang) {
    const strings = getLocalizedStrings(lang);
    const localized = strings[key];
    if (!localized)
        return `*!*${key}*!*`;
    return localized;
}
export default getLocalizedString;
//# sourceMappingURL=get-localized-string.js.map