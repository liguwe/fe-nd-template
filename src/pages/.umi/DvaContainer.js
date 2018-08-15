import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('/Users/liguwe/Desktop/newsdog/Code/fe-nd-template/node_modules/dva-immer/lib/index.js').default());
app.model({ namespace: 'global', ...(require('/Users/liguwe/Desktop/newsdog/Code/fe-nd-template/src/models/global.js').default) });
app.model({ namespace: 'index', ...(require('/Users/liguwe/Desktop/newsdog/Code/fe-nd-template/src/pages/users/models/index.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
