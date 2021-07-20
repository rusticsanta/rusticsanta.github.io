import React, { useState, FunctionComponent } from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { Container, Button } from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
import background from 'src/images/landing-page.jpg';
import './Header.css';

const Header: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const pageHeader: React.RefObject<any> = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                const windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)';
            };
            window.addEventListener('scroll', updateScroll);
            return function cleanup() {
                window.removeEventListener('scroll', updateScroll);
            };
        }
    });

    return (
        <div className="page-header">
            <div
                className="page-header-image"
                style={{
                    backgroundImage: `url(${background})`,
                }}
                ref={pageHeader}
            ></div>
            <div className="content-center">
                <Container>
                    <h1 className="title">Welcome to Rustic Santas Website</h1>
                    <div className="text-center">Site is currently under construction...</div>
                </Container>
            </div>
        </div>
    );
};

export default Header;
