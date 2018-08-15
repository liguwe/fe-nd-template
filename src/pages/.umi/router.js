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
        "path": "/users/create",
        "exact": true,
        "component": require('../users/create/index.js').default
      },
      {
        "path": "/403",
        "exact": true,
        "component": require('../403/index.js').default
      },
      {
        "path": "/500",
        "exact": true,
        "component": require('../500/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/users/components/User",
        "exact": true,
        "component": require('../users/components/User/index.js').default
      },
      {
        "path": "/users/components/UserModel",
        "exact": true,
        "component": require('../users/components/UserModel/index.js').default
      },
      {
        "path": "/404",
        "exact": true,
        "component": require('../404/index.js').default
      },
      {
        "path": "/users/create/list",
        "exact": true,
        "component": require('../users/create/list.js').default
      },
      {
        "path": "/users",
        "exact": true,
        "component": require('../users/index.js').default
      },
      {
        "path": "/users/list",
        "exact": true,
        "component": require('../users/list.js').default
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
        "component": () => React.createElement(require('/Users/liguwe/Desktop/newsdog/Code/fe-nd-template/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.js","routes":[{"path":"/users/create","exact":true,"component":"./src/pages/users/create/index.js"},{"path":"/403","exact":true,"component":"./src/pages/403/index.js"},{"path":"/500","exact":true,"component":"./src/pages/500/index.js"},{"path":"/","exact":true,"component":"./src/pages/index/index.js"},{"path":"/users/components/User","exact":true,"component":"./src/pages/users/components/User/index.js"},{"path":"/users/components/UserModel","exact":true,"component":"./src/pages/users/components/UserModel/index.js"},{"path":"/404","exact":true,"component":"./src/pages/404/index.js"},{"path":"/users/create/list","exact":true,"component":"./src/pages/users/create/list.js"},{"path":"/users","exact":true,"component":"./src/pages/users/index.js"},{"path":"/users/list","exact":true,"component":"./src/pages/users/list.js"},{"path":"/users/models","exact":true,"component":"./src/pages/users/models/index.js"},{"path":"/users/services/constants","exact":true,"component":"./src/pages/users/services/constants.js"},{"path":"/users/services","exact":true,"component":"./src/pages/users/services/index.js"}]}]' })
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
