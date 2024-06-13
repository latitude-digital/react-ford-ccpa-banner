"use strict";
const fs = require('fs');
const filesToFormat = [
    {
        // Global
        data: require('./src/localization/locale-unformatted.json'),
        saveAs: './src/localization/locale-formatted.json',
    },
];
function generateFormattedLocaleForFile(localeDataUnformatted, pathToSave) {
    const localeDataFormatted = {};
    const localeTypes = localeDataUnformatted['Primary Language Code'];
    const ignoredLocaleKeys = ['Key', 'Alternate Keys'];
    ignoredLocaleKeys.forEach(ignore => {
        delete localeTypes[ignore];
    });
    Object.keys(localeDataUnformatted).forEach(key => {
        Object.keys(localeTypes).forEach(localeName => {
            // format locale code for react-native-localization use
            const localeCode = localeTypes[localeName].toLowerCase();
            const localeVal = localeDataUnformatted[key][localeName].split(/\\n/).join('\n');
            if (!ignoredLocaleKeys.includes(localeName)) {
                if (localeDataFormatted[localeCode] === undefined) {
                    localeDataFormatted[localeCode] = {
                        [key]: localeVal,
                    };
                }
                else {
                    localeDataFormatted[localeCode][key] = localeVal;
                }
            }
        });
    });
    fs.writeFileSync(pathToSave, JSON.stringify(localeDataFormatted, null, 0));
}
filesToFormat.forEach(file => generateFormattedLocaleForFile(file.data, file.saveAs));
//# sourceMappingURL=locale-gen.js.map