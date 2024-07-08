import React from 'react';
import './ccpaStyles.scss';
import L from './localization/get-localized-string';

interface FordFooterProps {
  team?: 'ford' | 'lincoln';
  language?: string;
  oneTrustEnabled?: boolean;
  containerStyle?: React.CSSProperties;
  otherLinks?: OtherLink[];
  imgStyle?: React.CSSProperties;
}

interface OtherLink {
  id: string;
  text: string;
  url: string;
  target?: string;
}

declare global {
  interface Window {
    Optanon: any;
  }
}

const FordFooter: React.FC<FordFooterProps> = props => {
  const {
    team = 'ford',
    language = 'en',
    oneTrustEnabled = false,
    containerStyle = {},
    otherLinks = [],
    imgStyle = {},
  } = props;

  const privacyLink =
    team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
  const CAPrivacyLink =
    team === 'ford'
      ? 'https://www.ford.com/help/privacy/ccpa/'
      : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';
  const interestBasedAdsLink =
    team === 'ford'
      ? 'https://www.ford.com/help/privacy/#USprivacypolicy'
      : 'https://www.lincol.com/help/privacy/#USprivacypolicy';

  const privacyText = L('privacy', language);
  const privacyRightsText = L('privacyRights', language);
  const cookieSettingsText = L('cookieSettings', language);
  const interestBasedAdsText = L('interestBasedAds', language);

  const openCookieSettings = () => {
    const { Optanon } = window;
    Optanon && Optanon.ToggleInfoDisplay && Optanon.ToggleInfoDisplay();
  };

  return (
    <div className={`ford-footer-${team}`}>
      <div className="footer-container">
        <nav className="nav-container">
          <div className="nav-padding">
            {team === 'lincoln' && (
              <img
                className={`footer-img-${team} top`}
                src={'https://cdn.latitudewebservices.com/headers/images/LincolnStar_White.png'}
                alt={'Lincoln Logo'}
              />
            )}
            <ul className="navbar-nav">
              <li>
                <a href={`${privacyLink}`} target="_blank">
                  <span className="text">{privacyText}</span>
                </a>
              </li>
              {oneTrustEnabled && (
                <li>
                  <a onClick={openCookieSettings}>
                    <div className="lincoln-footer-pipe" aria-hidden="true">
                      |
                    </div>
                    <span className="text">{cookieSettingsText}</span>
                  </a>
                </li>
              )}
              <li>
                <a href={`${CAPrivacyLink}`} target="_blank">
                  <div className="lincoln-footer-pipe" aria-hidden="true">
                    |
                  </div>
                  <span className="text">{privacyRightsText}</span>
                  <img
                    src="https://cdn.latitudewebservices.com/icons/ccpa-icon-ford.png"
                    alt="opt out icon"
                    className="ccpa-icon"
                  />
                </a>
              </li>
              <li>
                <a href={`${interestBasedAdsLink}`} target="_blank">
                  <div className="lincoln-footer-pipe" aria-hidden="true">
                    |
                  </div>
                  <span className="text">{interestBasedAdsText}</span>
                </a>
              </li>
              {otherLinks.map(link => {
                return (
                  <li key={link.id}>
                    <div className="lincoln-footer-pipe" aria-hidden="true">
                      |
                    </div>
                    <a href={link.url} target={link.target || '_self'}>
                      <span className="text">{link.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            {team === 'lincoln' && (
              <img
                className={`footer-img-${team} bottom-nav`}
                src={'https://cdn.latitudewebservices.com/headers/images/LincolnStar_White.png'}
                alt={'Lincoln Logo'}
              />
            )}
            {team === 'ford' && (
              <img
                className={`footer-img-${team}`}
                src={'https://cdn.latitudewebservices.com/headers/images/ford_script.png'}
                alt={'Ford Logo'}
                width={63}
              />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FordFooter;
