import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import background from 'src/images/landing-page.jpg';
import pageBackground from 'src/images/page-background.jpg';
import './Header.css';

const Header = withRouter((props) => <MyHeader {...props} />);

function GetCenterText(pathName: string) {
    switch (pathName) {
        case '/':
            return 'Create a Holiday Memory';
        case '/about':
            return 'About Page';
        case '/services':
            return 'Services Page';
        case '/gallery':
            return 'Gallery Page';
        case '/contact':
            return 'Contact Page';
    }

    return pathName;
}

function MyHeader(props: RouteComponentProps): JSX.Element {
    const pageHeader: React.RefObject<any> = React.createRef();
    const isHomePage = props.location.pathname === '/';

    const backgroundImg = isHomePage ? background : pageBackground;
    const centerText = GetCenterText(props.location.pathname);

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
        <div className={'page-header' + (isHomePage ? '' : ' page-header-small')}>
            <div
                className="page-header-image"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                }}
                ref={pageHeader}
            ></div>
            <div className="content-center">
                <Container>
                    <h1 className="title">
                        <i>Rustic Santa</i>
                    </h1>
                    <div className="text-center">{centerText}</div>
                </Container>
            </div>
        </div>
    );
}

export default Header;
