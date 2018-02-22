import React from 'react';
import PropTypes from 'prop-types';

// staticContext doesn't exist inside of the browser,
// because it comes from the StaticRouter. So we default it to an empty object
const NotFoundPage = ({ staticContext = {} }) => {
	// Set staticContext new 'notFound' property to TRUE,
	// so we can check it inside of the Express server before rendering the app
	staticContext.notFound = true;

	return (
		<h1>Oops, route not found.</h1>
	)
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object
};

export default {
	component: NotFoundPage
}
