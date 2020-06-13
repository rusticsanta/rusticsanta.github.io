// utils/GoogleAnalytics.js
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

interface ILocation {
    pathname: string;
    search: string;
}

interface IGAProps {
    location: ILocation;
    options: any;
}

class GoogleAnalytics extends Component<IGAProps> {
    componentDidMount(): void {
        this.logPageChange(this.props.location.pathname, this.props.location.search);
    }

    componentDidUpdate({ location: prevLocation }: any): void {
        const {
            location: { pathname, search },
        } = this.props;
        const isDifferentPathname = pathname !== prevLocation.pathname;
        const isDifferentSearch = search !== prevLocation.search;

        if (isDifferentPathname || isDifferentSearch) {
            this.logPageChange(pathname, search);
        }
    }

    logPageChange(pathname: any, search = ''): void {
        const page = pathname + search;
        const { location } = window;
        ReactGA.set({
            page,
            location: `${location.origin}${page}`,
            ...this.props.options,
        });
        ReactGA.pageview(page);
    }

    render() {
        return null;
    }
}

const RouteTracker = () => <Route component={GoogleAnalytics} />;

const init = (options = {}) => {
    const isGAEnabled = process.env.NODE_ENV === 'production';

    if (isGAEnabled) {
        ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    }

    return isGAEnabled;
};

export default {
    GoogleAnalytics,
    RouteTracker,
    init,
};
