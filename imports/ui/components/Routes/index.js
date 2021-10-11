import React from 'react';

const Settings = React.lazy(() => import('../../pages/Settings'));

const routes = [
  { path: '/settings', exact: true, name: 'Settings', component: Settings },
];

export default routes;