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
import './Header.css';

const Header: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Row>
                <Col>
                    <Navbar color="fixed" light expand="md">
                        <NavbarBrand href="/">
                            <div>
                                <Image
                                    cloudName="rusticsanta"
                                    publicId="IMG_0072_sfu1ip"
                                    secure={true}
                                    quality="auto"
                                    fetchFormat="auto"
                                    alt="Rustic Santa Logo"
                                >
                                    <Transformation quality="auto" radius="30" width="110" crop="thumb" />
                                    <Transformation angle="0" />
                                </Image>{' '}
                            </div>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar style={{ marginRight: 'auto' }}>
                                <NavItem>
                                    <NavLink
                                        tag={ReactRouterNavLink}
                                        to="/"
                                        exact={true}
                                        name="home"
                                        activeClassName="active"
                                    >
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={ReactRouterNavLink} to="/about" name="about" activeClassName="active">
                                        About Rustic Santa
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        tag={ReactRouterNavLink}
                                        to="/services"
                                        name="services"
                                        activeClassName="active"
                                    >
                                        Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        tag={ReactRouterNavLink}
                                        to="/gallery"
                                        name="gallery"
                                        activeClassName="active"
                                    >
                                        Gallery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        tag={ReactRouterNavLink}
                                        to="/contact"
                                        name="contact"
                                        activeClassName="active"
                                    >
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>
                                <a href="https://www.facebook.com/rustic.santa.9">
                                    <FaFacebook size={36} color={'#4267B2'} />
                                </a>
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
