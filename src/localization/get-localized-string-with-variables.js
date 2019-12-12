import { vsprintf } from 'sprintf-js';
import getLocalizedString from './get-localized-string';

function getLocalizedStringWithVariables(key, variables, lang) {
  return vsprintf(getLocalizedString(key, lang), variables);
}

export default getLocalizedStringWithVariables;
