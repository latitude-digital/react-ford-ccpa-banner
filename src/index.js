import React from 'react';
import PropTypes from 'prop-types';
import './ccpaStyles.scss';
import L from './localization/get-localized-string.js';

function CAPrivacyBanner (props) {
  const {
    team = 'ford',
    language = 'en',
    showPrivacy = false,
    containerStyle = null,
    privacyContainerStyle = null,
    otherLinks = [],
    dtgTermsLink = null,
    guidelinesLink = null,
    imgStyle = null
  } = props;

  const deletePILink = team === 'ford' ? 'https://www.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://www.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  const doNotSellPILink = team === 'ford' ? 'https://www.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://www.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';
  const privacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
  const CAPrivacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/#caPrivacy' : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';
  const privacyText = L('privacy', language);
  const CAprivacyText = L('CAPrivacyRights', language);
  const cookieSettingsText = L('cookieSettings', language);

  function openCookieSettings() {
    const { Optanon } = window;
    Optanon && Optanon.ToggleInfoDisplay && Optanon.ToggleInfoDisplay();
  }
  const addDivider = (field) => {
      if (!field) return null;
      return <span className={`linkDivider-${team}`}>|</span>
  }

  return (
    <div className={`${team}`}>
    <div className={`ca-banner`}>
      <div className={`container-${team}`} style={containerStyle && containerStyle}>
        <p className={`header-${team}`}>{L('californiaPrivacyHeader', language)}</p>
        <p className={`content-${team}`}>{L('californiaPrivacyContent', language)}
          <a href={`${deletePILink}`} className={`contentLink-${team}`} target='_blank'>{L('here', language)}</a >.
        </p>
        <a href={`${doNotSellPILink}`} target='_blank' >
          <button className={`${team}-primary-button`}>
            {L('californiaPrivacyButton', language)}
          </button>
        </a >
      </div>
      {showPrivacy ?
        <div className={`privacyContainer-${team}`} style={privacyContainerStyle && privacyContainerStyle}>
          {team === 'lincoln' ? <img src={'https://d2n145t5d2n6zs.cloudfront.net/lincoln_logo_whitesymbol.png'} alt={'Lincoln Logo'} width={20} style={{marginRight: '15px', verticalAlign: 'middle', ...imgStyle}}/> : null }
          <a href={`${privacyLink}`} className={`privacyContainerLink-${team}`} target='_blank'>{privacyText}</a >
          {addDivider(team === 'lincoln')}
          <span style={{ cursor: 'pointer' }} className={`privacyContainerLink-${team}`} onClick={openCookieSettings}>{cookieSettingsText}</span >
          {addDivider(team === 'lincoln')}
          <a href={`${CAPrivacyLink}`} className={`privacyContainerLink-${team}`} target='_blank'>{CAprivacyText}</a >
          {
            otherLinks.map((link) => {
              return (
                <>
                  {addDivider(team === 'lincoln')}
                  <a href={link.url} className={`privacyContainerLink-${team}`} target={link.target}>{link.text}</a >
                </>
              )
            })
          }
          {team === 'ford' ? <img className={`footer-img-${team}`} src={'https://d2n145t5d2n6zs.cloudfront.net/ford_logo_bluecircle.png'} alt={'Ford Logo'} width={75} style={{verticalAlign: 'middle'}}/> : null }
        </div>
      : null}
    </div>
    </div>
  );
}

CAPrivacyBanner.propTypes = {
  team: PropTypes.oneOf(['ford', 'lincoln']),
  language: PropTypes.oneOf(['en', 'es']),
  showPrivacy: PropTypes.bool.isRequired,
};

export default CAPrivacyBanner;
