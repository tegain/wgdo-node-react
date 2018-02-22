import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import Posts from '../pages/Posts';

const AdminRouter = () => (
  <BrowserRouter basename="/admin">
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AdminRouter;

