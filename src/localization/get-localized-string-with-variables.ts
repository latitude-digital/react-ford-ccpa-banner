import { vsprintf } from 'sprintf-js';
import getLocalizedString from './get-localized-string';

function getLocalizedStringWithVariables(key: string, variables: any[], lang: string): string {
  return vsprintf(getLocalizedString(key, lang), variables);
}

export default getLocalizedStringWithVariables;
