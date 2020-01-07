import React from 'react';
import PropTypes from 'prop-types';
import './ccpaStyles.scss';
import L from './localization/get-localized-string.js';

function CAPrivacyBanner (props) {
  const {
    team = 'ford',
    language = 'en',
    showPrivacy = false,
  } = props;

  const deletePILink = team === 'ford' ? 'https://www.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://www.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  const doNotSellPILink = team === 'ford' ? 'https://www.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://www.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';
  const privacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
  const CAPrivacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/#caPrivacy' : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';
  const privacyText = L('privacy', language);
  const CAprivacyText = L('CAPrivacyRights', language);

  return (
    <div className={`${team}`}>
    <div className={`ca-banner`}>
      <div className={`container-${team}`}>
        <h3 className={`header-${team}`}>{L('californiaPrivacyHeader', language)}</h3>
        <h4 className={`content-${team}`}>{L('californiaPrivacyContent', language)}
          <a href={`${deletePILink}`} className={`contentLink-${team}`} target='_blank'>{L('here', language)}</a >.
        </h4>
        <a href={`${doNotSellPILink}`} target='_blank' >
          <button className={`${team}-primary-button`}>
            {L('californiaPrivacyButton', language)}
          </button>
        </a >
      </div>
      {showPrivacy ?
        <div className={`privacyContainer-${team}`}>
          {team === 'lincoln' ? <img src={'https://d2n145t5d2n6zs.cloudfront.net/lincoln_logo_whitesymbol.png'} alt={'Lincoln Logo'} width={20} style={{marginRight: '15px', verticalAlign: 'middle'}}/> : null }
          <a href={`${privacyLink}`} className={`privacyContainerLink-${team}`} target='_blank'>{privacyText}</a >{team === 'lincoln' ? <span className={`linkDivider-${team}`}>|</span> : null}
          <a href={`${CAPrivacyLink}`} className={`privacyContainerLink-${team}`} target='_blank'>{CAprivacyText}</a >
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
