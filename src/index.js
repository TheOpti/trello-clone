import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './store';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './colors.scss';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}

registerServiceWorker();
