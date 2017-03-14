import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// mock API
import mockFetch from 'igsem-mock-fetch-api';
import mockData from './mock/index';

import routes from './routes';
import configureStore from './store/configureStore';

// load mock API
global.fetch = window.fetch = mockFetch(mockData);


window.mock_fetch_timeout = 400;

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
