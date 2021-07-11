import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
// import { Image, Transformation } from 'cloudinary-react';
import './About.css';

const ScreensAbout: FunctionComponent = () => {
    return (
        <div className="About">
            <Helmet>
                <title>Rustic Santa - About Us</title>
                <meta name="description" content="About Page for Rustic Santa." />
                <meta name="subject" content="About" />
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h1>About Us</h1>
                        <br />
                        <h3>What sets Rustic Santa apart</h3>
                        <p>
                            TBD.
                        </p>
                        <h4>Our Services</h4>
                        <p>
                            TBD.
                        </p>
                        <h4>Our Goal</h4>
                        <p>
                            TBD.
                        </p>
                        <h4>Our Values</h4>
                        <p>
                            TBD.
                        </p>
                        <br />
                        <h3>Meet Rustic Santa</h3>
                        <br />
                        <p>
                            <i>TBD. </i>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ScreensAbout;
