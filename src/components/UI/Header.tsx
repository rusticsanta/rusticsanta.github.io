import React, { FunctionComponent } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaFacebook, FaCaretRight } from 'react-icons/fa';
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

const Header: FunctionComponent = () => {
    const days = DaysToChristmas();

    return (
        <Container className="Header">
            <Row>
                <Col md={{ size: 8 }} sm={{ size: 12 }} className="RightText">
                    There are {<span className="Countdown">{days} Days</span>} remaining until Christmas
                </Col>
                <Col md={{ size: 4 }} sm={{ size: 12 }} className="Social">
                    <div>
                        <FaCaretRight size={36} />{' '}
                        <a href="https://www.facebook.com/rustic.santa.9">
                            <FaFacebook size={36} />
                        </a>{' '}
                        <Button color="success">Book Rustic Santa!</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
