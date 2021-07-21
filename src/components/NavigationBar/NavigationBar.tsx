import React, { useState, FunctionComponent } from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarText,
} from 'reactstrap';
import { Image, Transformation } from 'cloudinary-react';
// import background from 'src/images/landing-page.jpg';
import './NavigationBar.css';

const NavigationBar: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 399 || document.body.scrollTop > 399) {
                setNavbarColor('');
            } else if (document.documentElement.scrollTop < 400 || document.body.scrollTop < 400) {
                setNavbarColor('navbar-transparent');
            }
        };
        window.addEventListener('scroll', updateNavbarColor);
        return function cleanup() {
            window.removeEventListener('scroll', updateNavbarColor);
        };
    });

    return (
        <Navbar className={'navbar-santa fixed-top ' + navbarColor} expand="md" dark>
            <Container>
                <NavbarBrand href="/" id="navbar-brand">
                    <div>
                        <Image cloudName="rusticsanta" secure={true} publicId="IMG_0072_sfu1ip.webp">
                            <Transformation quality="auto" radius="20" width="80" crop="scale" />
                        </Image>
                    </div>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar style={{ marginRight: 'auto' }}>
                        <NavItem>
                            <NavLink tag={ReactRouterNavLink} to="/" exact={true} name="home" activeClassName="active">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactRouterNavLink} to="/about" name="about" activeClassName="active">
                                About Rustic Santa
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactRouterNavLink} to="/services" name="services" activeClassName="active">
                                Services
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactRouterNavLink} to="/gallery" name="gallery" activeClassName="active">
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactRouterNavLink} to="/contact" name="contact" activeClassName="active">
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <a href="https://www.facebook.com/rustic.santa.9">
                            <FaFacebook size={36} color={'#fff'} />
                        </a>
                    </NavbarText>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
