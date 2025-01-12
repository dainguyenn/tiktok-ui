import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import { HeaderOnly } from '~/layouts';
import Profile from '~/pages/Profile';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: '/upload2', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
