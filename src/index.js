import React from 'react';
import PropTypes from 'prop-types';
import './ccpaStyles.scss';
import L from './localization/get-localized-string.js';

function CAPrivacyBanner (props) {
  const {
    team = 'ford',
    language,
    showPrivacy = false,
  } = props;

  const deletePILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=deletemypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=deletemypi';
  const doNotSellPILink = team === 'ford' ? 'https://wwwqa.ford.com/help/privacy/ccpa/?ccpatype=donotsellmypi' : 'https://wwwqa.lincoln.com/help/privacy-terms/ccpa/?ccpatype=donotsellmypi';
  const privacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
  const CAPrivacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/#caPrivacy' : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';

  return (
    <div>
      <div className={`container-${team}`}>
        <h3 className={`header-${team}`}>{L('californiaPrivacyHeader', language)}</h3>
        <h4 className={`content-${team}`}>{L('californiaPrivacyContent', language)}
          <a href={`${deletePILink}`} className={`contentLink-${team}`}>{L('here', language)}</a >.
        </h4>
        <a href={`${doNotSellPILink}`} >
          <button className={`button-${team}`}>
            {L('californiaPrivacyButton', language)}
          </button>
        </a >
      </div>
      {showPrivacy ?
        <div className={`privacyContainer-${team}`}>
          {team === 'lincoln' ? <img src={'https://d2n145t5d2n6zs.cloudfront.net/lincoln_logo_whitesymbol.png'} alt={'Lincoln Logo'} width={20} style={{marginRight: '15px'}}/> : null }
          <a href={`${privacyLink}`} className={`privacyContainerLink-${team}`}>Privacy</a >{team === 'lincoln' ? <span className={`linkDivider-${team}`}>|</span> : null}
          <a href={`${CAPrivacyLink}`} className={`privacyContainerLink-${team}`}>Your CA Privacy Rights</a >
          {team === 'ford' ? <img className={`footer-img-${team}`} src={'https://d2n145t5d2n6zs.cloudfront.net/ford_logo_bluecircle.png'} alt={'Ford Logo'} width={75} /> : null }
        </div>
      : null}
    </div>
  );
}

CAPrivacyBanner.propTypes = {
  team: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  showPrivacy: PropTypes.bool.isRequired
};

export default CAPrivacyBanner;
