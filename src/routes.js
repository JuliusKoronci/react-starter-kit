import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './pages/Layout';
import SecuredLayout from './pages/SecuredLayout';
import HomePage from './pages/public/HomePage';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="/app" component={SecuredLayout}>
      <IndexRoute component={HomePage} />
    </Route>
  </Route>
);
