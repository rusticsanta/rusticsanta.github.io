import React, { FunctionComponent } from 'react';
import './Header.css';

/**
 * Simple function to get the number of days to christmas
 */
function DaysToChristmas() {
    const today = new Date();
    const cmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }

    const one_day = 1000 * 60 * 60 * 24;
    return Math.ceil((cmas.getTime() - today.getTime()) / one_day);
}

const RemainingUntilChristmas: FunctionComponent = () => {
    const days = DaysToChristmas();

    return (
        <div className="Header">
            <div className="parallax"></div>
            <div className="test"></div>
            <div className="CenterContainer container">
                <div className="center">
                    <p>RusticSanta.com</p>
                </div>
            </div>
        </div>
    );
};

export default RemainingUntilChristmas;
