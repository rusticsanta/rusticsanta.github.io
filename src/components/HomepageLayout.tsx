import React, { ReactNode, FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import Header from './UI/Header';
import NavigationBar from './UI/NavigationBar';
import Footer from './UI/Footer';
import './HomepageLayout.css';

interface ILayoutProps {
    children: ReactNode;
}

const HomepageLayout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => (
    <div>
        {/* <Header /> */}
        <NavigationBar />
        <Container className="MainContainer">
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
        <Footer />
    </div>
);

export default HomepageLayout;
