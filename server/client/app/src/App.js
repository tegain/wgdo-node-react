import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';

const App = ({ route }) => (
	<div>
		<Header/>
		{renderRoutes(route.routes)}
	</div>
);

App.propTypes = {
  route: PropTypes.object
};

export default {
	component: App
};
