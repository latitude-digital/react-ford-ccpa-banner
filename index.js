import React from 'react';
import PropTypes from 'prop-types';
import './fordLincolnSpec.css';
import L from './localization/get-localized-string.js';

const defaultStyle = {
  container: {
    marginTop: '5px',
    padding: '30px 20px',
    textAlign: 'center',
    width: '100vw',
    zIndex: '1000',
  },
  header: {
    fontSize: '24px',
    fontFamily: 'inherit',
    marginBottom: '5px',
  },
  content: {
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  contentLink: {
    fontFamily: 'inherit',
    textDecoration: 'underline',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '0',
    fontFamily: 'inherit',
    margin: '15px 0 20px 0',
  },

};
const fordStyle = {
  container: {
    backgroundColor: 'var(--ford-dark-blue)',
    fontFamily: 'FordAntenna-Regular, sans-serif',
  },
  header: {
    color: 'var(--ford-white)',
  },
  content: {
    color: 'var(--ford-white)',
  },
  contentLink: {
    color: 'var(--ford-link-blue)',
  },
  button: {
    backgroundColor: 'var(--ford-light-blue)',
    color: 'var(--ford-white)',
    border: 'var(--ford-light-blue)',
  },
};
const lincolnStyle = {
  container: {
    backgroundColor: 'var(--lincoln-dark-gray)',
    fontFamily: 'LincolnProximaNovaLight, sans-serif',
  },
  header: {
    color: 'var(--lincoln-white)',
    textTransform: 'uppercase',
  },
  content: {
    color: 'var(--lincoln-white)',
  },
  contentLink: {
    color: 'var(--lincoln-white)',
    textDecorationColor: 'var(--lincoln-red)',
    textDecoration: 'underline',
    textTransform: 'uppercase',
    fontFamily: 'LincolnProximaNovaSemibold, sans-serif !important',
  },
  button: {
    backgroundColor: 'var(--lincoln-white)',
    color: 'var(--lincoln-dark-gray)',
    borderTop: 'var(--lincoln-white)',
    borderBottom: '5px solid var(--lincoln-red)',
    borderLeft: 'var(--lincoln-white)',
    borderRight: 'var(--lincoln-white)',
    fontFamily: 'LincolnProximaNovaSemibold, sans-serif !important',
    textTransform: 'uppercase',
  },
};

function CAPrivacyBanner (props) {
  const {
    team = 'ford',
    language,
  } = props;


  let brandStyle = fordStyle;
  if (team === 'lincoln') {
    brandStyle = lincolnStyle;
  }

  const deletePILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  const doNotSellPILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';

  return (
    <div style={{ ...defaultStyle.container, ...brandStyle.container }}>
      {/*  <style dangerouslySetInnerHTML={{ __html: `*/}
      {/*  @import url('https://ld-email-images.s3-us-west-2.amazonaws.com/test.css');*/}
      {/* ` }} />*/}
      <h3 style={{ ...defaultStyle.header, ...brandStyle.header }}>{L('californiaPrivacyHeader', language)}</h3>
      <h4 style={{ ...defaultStyle.content, ...brandStyle.content }}>{L('californiaPrivacyContent', language)}
        <a href={`${deletePILink}`} style={{ ...defaultStyle.contentLink, ...brandStyle.contentLink }}>{L('here', language)}</a >.
      </h4>
      <a href={`${doNotSellPILink}`} >
        <button style={{ ...defaultStyle.button, ...brandStyle.button }}>
          {L('californiaPrivacyButton', language)}
        </button>
      </a >
    </div>
  );
}

CAPrivacyBanner.propTypes = {
  team: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CAPrivacyBanner;
