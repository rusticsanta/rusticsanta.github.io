import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import './Contact.css';

const ScreensContact: FunctionComponent = () => (
    <div>
        {/* Defining the Page title, meta, description */}
        <Helmet>
            <title>Rustic Santa - Contact</title>
            <meta name="description" content="Contact Page for Rustic Santa." />
            {/* TODO: Add subject to your SEO */}
            <meta name="subject" content="Contact" />
        </Helmet>
        <Container>
            <Row>
                <Col width={16}>
                    <h1>Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col width={16} className="Contact-contactinfo">
                    <blockquote>
                        <p>
                            Feel free to reach out with any questions or inquiries. Please do not send spam or try to
                            advertise any services to me.
                        </p>
                    </blockquote>
                    <h3>Email</h3>
                    <p>
                        <a href="mailto:rusticsanta@hotmail.com">rusticsanta@hotmail.com</a>
                    </p>
                    <h3>LinkedIn</h3>
                    <p>
                        <a href="https://www.linkedin.com/in/MattJonesCreation/">linkedin.com/in/MattJonesCreation</a>
                    </p>
                    <h3>Github</h3>
                    <p>
                        <a href="https://github.com/MattJonesCreation">github.com/MattJonesCreation</a>
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ScreensContact;
