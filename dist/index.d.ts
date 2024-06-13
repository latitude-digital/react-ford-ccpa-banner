import React from 'react';
import './ccpaStyles.scss';
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
declare const FordFooter: React.FC<FordFooterProps>;
export default FordFooter;
