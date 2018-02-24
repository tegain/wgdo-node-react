import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AdminRoute } from './AdminRoute';
import DashboardPage from '../pages/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage';
import PostsPage from '../pages/PostsPage';
import AddPostPage from '../pages/AddPostPage';
import EditPostPage from '../pages/EditPostPage';

const AdminRouter = () => (
  <BrowserRouter basename="/admin">
    <Switch>
      <AdminRoute path="/" component={DashboardPage} exact={true}/>
      <AdminRoute path="/posts" component={PostsPage}/>
      <AdminRoute path="/posts/add" component={AddPostPage}/>
      <AdminRoute path="/posts/edit/:id" component={EditPostPage}/>
      <AdminRoute component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

export default AdminRouter;

