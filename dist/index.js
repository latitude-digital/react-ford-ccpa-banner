import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ccpaStyles.scss';
import L from './localization/get-localized-string';
const FordFooter = props => {
    const { team = 'ford', language = 'en', oneTrustEnabled = false, containerStyle = {}, otherLinks = [], imgStyle = {}, } = props;
    const privacyLink = team === 'ford' ? 'https://www.ford.com/help/privacy/' : 'https://www.lincoln.com/help/privacy-terms/#privacy';
    const CAPrivacyLink = team === 'ford'
        ? 'https://www.ford.com/help/privacy/ccpa/'
        : 'https://www.lincoln.com/help/privacy-terms/#caPrivacy';
    const interestBasedAdsLink = team === 'ford'
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
    return (_jsx("div", { className: `ford-footer-${team}`, children: _jsx("div", { className: "footer-container", children: _jsx("nav", { className: "nav-container", children: _jsxs("div", { className: "nav-padding", children: [team === 'lincoln' && (_jsx("img", { className: `footer-img-${team} top`, src: 'https://cdn.latitudewebservices.com/headers/images/LincolnStar_White.png', alt: 'Lincoln Logo' })), _jsxs("ul", { className: "navbar-nav", children: [_jsx("li", { children: _jsx("a", { href: `${privacyLink}`, target: "_blank", children: _jsx("span", { className: "text", children: privacyText }) }) }), oneTrustEnabled && (_jsx("li", { children: _jsxs("a", { onClick: openCookieSettings, children: [_jsx("div", { className: "lincoln-footer-pipe", "aria-hidden": "true", children: "|" }), _jsx("span", { className: "text", children: cookieSettingsText })] }) })), _jsx("li", { children: _jsxs("a", { href: `${CAPrivacyLink}`, target: "_blank", children: [_jsx("div", { className: "lincoln-footer-pipe", "aria-hidden": "true", children: "|" }), _jsx("span", { className: "text", children: privacyRightsText }), _jsx("img", { src: "https://cdn.latitudewebservices.com/icons/ccpa-icon-ford.png", alt: "opt out icon", className: "ccpa-icon" })] }) }), _jsx("li", { children: _jsxs("a", { href: `${interestBasedAdsLink}`, target: "_blank", children: [_jsx("div", { className: "lincoln-footer-pipe", "aria-hidden": "true", children: "|" }), _jsx("span", { className: "text", children: interestBasedAdsText })] }) }), otherLinks.map(link => {
                                    return (_jsxs("li", { children: [_jsx("div", { className: "lincoln-footer-pipe", "aria-hidden": "true", children: "|" }), _jsx("a", { href: link.url, target: link.target || '_self', children: _jsx("span", { className: "text", children: link.text }) })] }, link.id));
                                })] }), team === 'lincoln' && (_jsx("img", { className: `footer-img-${team} bottom`, src: 'https://cdn.latitudewebservices.com/headers/images/LincolnStar_White.png', alt: 'Lincoln Logo' })), team === 'ford' && (_jsx("img", { className: `footer-img-${team}`, src: 'https://cdn.latitudewebservices.com/headers/images/ford_script.png', alt: 'Ford Logo', width: 63 }))] }) }) }) }));
};
export default FordFooter;
//# sourceMappingURL=index.js.map