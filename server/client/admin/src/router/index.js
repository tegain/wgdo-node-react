import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { AdminRoute } from './AdminRoute';

import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import Posts from '../pages/Posts';

const AdminRouter = () => (
  <BrowserRouter basename="/admin">
    <Switch>
      <AdminRoute path="/" component={DashboardPage} exact={true}/>
      <AdminRoute path="/posts" component={Posts}/>
      <AdminRoute component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

export default AdminRouter;

