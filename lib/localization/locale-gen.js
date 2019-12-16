function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require('fs');

var filesToFormat = [{
  // Global
  data: require('./locale-unformatted.json'),
  saveAs: './src/localization/locale-formatted.json'
}];

function generateFormattedLocaleForFile(localeDataUnformatted, pathToSave) {
  var localeDataFormatted = {};
  var localeTypes = localeDataUnformatted['Primary Language Code'];
  var ignoredLocaleKeys = ['Key', 'Alternate Keys'];
  ignoredLocaleKeys.forEach(function (ignore) {
    delete localeTypes[ignore];
  });
  Object.keys(localeDataUnformatted).forEach(function (key) {
    Object.keys(localeTypes).forEach(function (localeName) {
      // format locale code for react-native-localization use
      var localeCode = localeTypes[localeName].toLowerCase();
      var localeVal = localeDataUnformatted[key][localeName].split(/\\n/).join('\n');

      if (!ignoredLocaleKeys.includes(localeName)) {
        if (localeDataFormatted[localeCode] === undefined) {
          localeDataFormatted[localeCode] = _defineProperty({}, key, localeVal);
        } else {
          localeDataFormatted[localeCode][key] = localeVal;
        }
      }
    });
  });
  fs.writeFileSync(pathToSave, JSON.stringify(localeDataFormatted, null, 0));
}

filesToFormat.forEach(function (file) {
  return generateFormattedLocaleForFile(file.data, file.saveAs);
});