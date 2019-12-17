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
    fontFamily: 'inherit',
    marginBottom: '5px'
  },
  content: {
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
  },
  privacyContainer: {
    backgroundColor: 'var(--ford-white)',
    fontFamily: 'FordAntenna-Regular, sans-serif',
    textAlign: 'left',
    width: '100vw',
    zIndex: '1000',
    padding: '50px'
  },
  privacyContainerLink: {
    color: 'var(--ford-dark-grey)',
    textDecoration: 'none',
    paddingRight: '30px'
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
  },
  privacyContainer: {
    backgroundColor: 'var(--lincoln-dark-gray)',
    fontFamily: 'LincolnProximaNovaLight, sans-serif',
    textAlign: 'left',
    width: '100vw',
    zIndex: '1000',
    padding: '50px'
  },
  privacyContainerLink: {
    color: 'var(--lincoln-white)',
    textTransform: 'uppercase',
    paddingRight: '15px',
    fontSize: '12px'
  },
  linkDivider: {
    color: 'var(--lincoln-white)',
    paddingRight: '15px'
  }
};

function CAPrivacyBanner(props) {
  var _props$team = props.team,
      team = _props$team === void 0 ? 'ford' : _props$team,
      language = props.language,
      _props$showPrivacy = props.showPrivacy,
      showPrivacy = _props$showPrivacy === void 0 ? false : _props$showPrivacy;
  var brandStyle = fordStyle;

  if (team === 'lincoln') {
    brandStyle = lincolnStyle;
  }

  var deletePILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  var doNotSellPILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';
  var privacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
  var CAPrivacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/#caPrivacy' : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';
  return React.createElement("div", null, React.createElement("div", {
    className: 'ld_content',
    style: _objectSpread({}, defaultStyle.container, {}, brandStyle.container)
  }, React.createElement("h3", {
    className: 'ld_header',
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
  }, L('californiaPrivacyButton', language)))), showPrivacy ? React.createElement("div", {
    className: 'ld_content',
    style: _objectSpread({}, brandStyle.privacyContainer)
  }, team === 'lincoln' ? React.createElement("img", {
    src: 'https://d2n145t5d2n6zs.cloudfront.net/lincoln_logo_whitesymbol.png',
    alt: 'Lincoln Logo',
    width: 20,
    style: {
      marginRight: '15px'
    }
  }) : null, React.createElement("a", {
    href: "".concat(privacyLink),
    style: _objectSpread({}, brandStyle.privacyContainerLink)
  }, "Privacy"), team === 'lincoln' ? React.createElement("span", {
    style: _objectSpread({}, brandStyle.linkDivider)
  }, "|") : null, React.createElement("a", {
    href: "".concat(CAPrivacyLink),
    style: _objectSpread({}, brandStyle.privacyContainerLink)
  }, "Your CA Privacy Rights"), team === 'ford' ? React.createElement("img", {
    className: 'ld_footer_img',
    src: 'https://d2n145t5d2n6zs.cloudfront.net/ford_logo_bluecircle.png',
    alt: 'Ford Logo',
    width: 75
  }) : null) : null);
}

CAPrivacyBanner.propTypes = {
  team: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  showPrivacy: PropTypes.bool.isRequired
};
export default CAPrivacyBanner;