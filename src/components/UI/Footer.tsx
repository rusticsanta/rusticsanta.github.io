import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaFacebook, FaCaretRight } from 'react-icons/fa';
import './Footer.css';

const Footer: FunctionComponent = () => {
    return (
        <div className="Footer">
            <Container>
                <Row className="GoodSpacing">
                    <Col>
                        <h5>FOLLOW Rustic Santa</h5>
                        <div className="FooterIcons">
                            <FaCaretRight size={36} />
                            <a href="https://www.facebook.com/rustic.santa.9">                            
                                <FaFacebook size={36} />
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="Border">
                    <Col>
                        <i>All content is copyright © {new Date().getFullYear()} RusticSanta.com</i>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
