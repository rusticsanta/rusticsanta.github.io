import React, { FunctionComponent } from 'react';
import './Header.css';

const Header: FunctionComponent = () => {
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

export default Header;
