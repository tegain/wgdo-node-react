require('@Root/config/config');
import 'babel-polyfill'; // Avoid `regeneratorRuntime is not defined`
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';

import Routes from './client/app/src/router/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const port = process.env.APP_PORT;
const app = express();

// Tell express to proxy all routes matching `/api` to the defined url
app.use(
	'/api',
	proxy('http://localhost:3000')
);

// Tell Express to treat the public directory as the public one on front end
app.use(express.static('server/client/app/public'));

// Tell Express to watch for any route,
// and let React Router deal with actual router
app.get('*', (req, res) => {
	// Create redux store before actually rendering the component,
	// in order to add some logic to this store
	const store = createStore(req);

	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	}).map((promise) => {
		/**
		 * Force resolving all promises even if there is an error in one of them,
		 * thus making the `Promise.all()` always go into the `then()` statement.
		 * We can then manually set error messages while rendering the app.
		 */
		if (promise) {
			return new Promise((resolve) => {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	Promise.all(promises)
		.then(() => {
			const context = {};
			const content = renderer(req, store, context);

			/**
			 * Send the stringified html with react component
			 * Pass the request param and the redux store to the renderer function to get the request url
			 *
			 * if `context` contains the `notFound` property defined in NotFoundPage component,
			 * return a 404 status.
			 */
			if (context.notFound) {
				res.status(404);
			}
			if (context.url) {
				return res.redirect(302, context.url); // 302 instead of 301, to prevent browser to cache the redirect (then redirecting everytime, even when logged in...)
			}

			res.send(content);
		});
		// .catch(/* also render the app */); // Even if there is a problem, render the app. Not recommended though.
		// .catch((err) => res.send(err.response.data.error)); // Not recommended: it's like throwing up all the SSR with this generic message
});

/* eslint no-console: "off" */
app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
	console.log(`Open http://localhost:${port}`);
});
