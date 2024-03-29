import React, { ReactNode, FunctionComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './Header/Header';
import NavigationBar from './NavigationBar/NavigationBar';
import Footer from './UI/Footer';
import './HomepageLayout.css';

interface ILayoutProps {
    children: ReactNode;
}

const HomepageLayout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => (
    <>
        <NavigationBar />
        <div className="wrapper">
            <Header />
            <Container className="MainContainer">
                <Row>
                    <Col>{props.children}</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    </>
);

export default HomepageLayout;
