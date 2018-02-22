import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

export const AdminRoute = ({
    component: Component,
    ...rest
  }) => (
  <Route {...rest} component={(props) => (
    <div>
      <Header/>
      <Component {...props} />
    </div>
  )}/>
);

AdminRoute.propTypes = {
  component: PropTypes.element
};
