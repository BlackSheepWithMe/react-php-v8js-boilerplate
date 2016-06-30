import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Router, match, RoutingContext, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import routes from './routes';

(function load() {

    if (typeof document !== 'undefined') {

        const history = useRouterHistory(createHistory)({
            basename: document.getElementsByTagName('base')[0].href.replace(location.origin, ''),
            queryKey: false,
        });

        // We're on the client, nothing new here
        ReactDOM.render(
            <Router routes={routes} history={history} />,
            document.getElementById('app')
        );
    } else {
        // We're on the server, this will be executed by v8js
        match(
            {
                routes,
                location: uri,
            },
            (error, redirectLocation, renderProps) => {
                print(error
                    ? error.message
                    : ReactDOMServer.renderToString(<RoutingContext {...renderProps} />)
                );
            }
        );
    }
})();
