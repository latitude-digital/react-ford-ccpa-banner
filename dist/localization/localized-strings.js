import LocalizedStrings from 'react-localization';
import FormattedJson from './locale-formatted.json';
function getLocalizedStrings(lang) {
    const strings = new LocalizedStrings(FormattedJson);
    strings.setLanguage(lang || 'en');
    return strings;
}
export default getLocalizedStrings;
//# sourceMappingURL=localized-strings.js.map