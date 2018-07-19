import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
