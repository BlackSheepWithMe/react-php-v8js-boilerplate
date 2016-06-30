import Root from './containers/Root';
import Home from './containers/Home';
import Test from './containers/Test';

export default {
    path: '/',
    component: Root,
    indexRoute: {
        component: Home,
    },
    childRoutes: [
        {
            path: '/test',
            component: Test,
        },
    ],
};
