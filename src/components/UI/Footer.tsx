import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';

const Footer: FunctionComponent = () => {
    return (
        <div className="Footer">
            <Container>
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
