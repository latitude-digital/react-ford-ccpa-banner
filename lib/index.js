function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import './fordLincolnSpec.css';
import L from './localization/get-localized-string.js';
var defaultStyle = {
  container: {
    marginTop: '5px',
    padding: '30px 20px',
    textAlign: 'center',
    width: '100vw',
    zIndex: '1000'
  },
  header: {
    fontSize: '24px',
    fontFamily: 'inherit',
    marginBottom: '5px'
  },
  content: {
    fontSize: '16px',
    fontFamily: 'inherit'
  },
  contentLink: {
    fontFamily: 'inherit',
    textDecoration: 'underline'
  },
  button: {
    padding: '10px 20px',
    borderRadius: '0',
    fontFamily: 'inherit',
    margin: '15px 0 20px 0'
  }
};
var fordStyle = {
  container: {
    backgroundColor: 'var(--ford-dark-blue)',
    fontFamily: 'FordAntenna-Regular, sans-serif'
  },
  header: {
    color: 'var(--ford-white)'
  },
  content: {
    color: 'var(--ford-white)'
  },
  contentLink: {
    color: 'var(--ford-link-blue)'
  },
  button: {
    backgroundColor: 'var(--ford-light-blue)',
    color: 'var(--ford-white)',
    border: 'var(--ford-light-blue)'
  }
};
var lincolnStyle = {
  container: {
    backgroundColor: 'var(--lincoln-dark-gray)',
    fontFamily: 'LincolnProximaNovaLight, sans-serif'
  },
  header: {
    color: 'var(--lincoln-white)',
    textTransform: 'uppercase'
  },
  content: {
    color: 'var(--lincoln-white)'
  },
  contentLink: {
    color: 'var(--lincoln-white)',
    textDecorationColor: 'var(--lincoln-red)',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontFamily: 'LincolnProximaNovaSemibold, sans-serif !important'
  },
  button: {
    backgroundColor: 'var(--lincoln-white)',
    color: 'var(--lincoln-dark-gray)',
    borderTop: 'var(--lincoln-white)',
    borderBottom: '5px solid var(--lincoln-red)',
    borderLeft: 'var(--lincoln-white)',
    borderRight: 'var(--lincoln-white)',
    fontFamily: 'LincolnProximaNovaSemibold, sans-serif !important',
    textTransform: 'uppercase'
  }
};

function CAPrivacyBanner(props) {
  var _props$team = props.team,
      team = _props$team === void 0 ? 'ford' : _props$team,
      language = props.language;
  var brandStyle = fordStyle;

  if (team === 'lincoln') {
    brandStyle = lincolnStyle;
  }

  var deletePILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  var doNotSellPILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';
  return React.createElement("div", {
    style: _objectSpread({}, defaultStyle.container, {}, brandStyle.container)
  }, React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n            @import url('https://ld-email-images.s3-us-west-2.amazonaws.com/test.css');\n        "
    }
  }), React.createElement("h3", {
    style: _objectSpread({}, defaultStyle.header, {}, brandStyle.header)
  }, L('californiaPrivacyHeader', language)), React.createElement("h4", {
    style: _objectSpread({}, defaultStyle.content, {}, brandStyle.content)
  }, L('californiaPrivacyContent', language), React.createElement("a", {
    href: "".concat(deletePILink),
    style: _objectSpread({}, defaultStyle.contentLink, {}, brandStyle.contentLink)
  }, L('here', language)), "."), React.createElement("a", {
    href: "".concat(doNotSellPILink)
  }, React.createElement("button", {
    style: _objectSpread({}, defaultStyle.button, {}, brandStyle.button)
  }, L('californiaPrivacyButton', language))));
}

CAPrivacyBanner.propTypes = {
  team: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
};
export default CAPrivacyBanner;