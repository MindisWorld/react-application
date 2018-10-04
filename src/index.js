import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './containers/App/App';
import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
