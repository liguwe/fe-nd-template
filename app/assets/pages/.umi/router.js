import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/users/components/UserModel",
        "exact": true,
        "component": require('../users/components/UserModel/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/500",
        "exact": true,
        "component": require('../500/index.js').default
      },
      {
        "path": "/403",
        "exact": true,
        "component": require('../403/index.js').default
      },
      {
        "path": "/users/components/User",
        "exact": true,
        "component": require('../users/components/User/index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404/index.js').default
      },
      {
        "path": "/users",
        "exact": true,
        "component": require('../users/index.js').default
      },
      {
        "path": "/users/index1",
        "exact": true,
        "component": require('../users/index1.js').default
      },
      {
        "path": "/users/models",
        "exact": true,
        "component": require('../users/models/index.js').default
      },
      {
        "path": "/users/services/constants",
        "exact": true,
        "component": require('../users/services/constants.js').default
      },
      {
        "path": "/users/services",
        "exact": true,
        "component": require('../users/services/index.js').default
      },
      {
        "component": () => React.createElement(require('/Users/liguwe/Desktop/newsdog/Code/fe-ndog/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', routes: '[{"path":"/","component":"./layouts/index.js","routes":[{"path":"/users/components/UserModel","exact":true,"component":"./pages/users/components/UserModel/index.js"},{"path":"/","exact":true,"component":"./pages/index.js"},{"path":"/500","exact":true,"component":"./pages/500/index.js"},{"path":"/403","exact":true,"component":"./pages/403/index.js"},{"path":"/users/components/User","exact":true,"component":"./pages/users/components/User/index.js"},{"path":"/404","exact":true,"component":"./pages/404/index.js"},{"path":"/users","exact":true,"component":"./pages/users/index.js"},{"path":"/users/index1","exact":true,"component":"./pages/users/index1.js"},{"path":"/users/models","exact":true,"component":"./pages/users/models/index.js"},{"path":"/users/services/constants","exact":true,"component":"./pages/users/services/constants.js"},{"path":"/users/services","exact":true,"component":"./pages/users/services/index.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
