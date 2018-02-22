import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import reducers from '../client/app/src/reducers';

/**
 * Create server store
 * @param req
 * @returns {Store<any>}
 */
export default (req) => {
	const axiosInstance = axios.create({
		baseURL: 'http://localhost:3000',
		headers: {
			cookie: req.get('cookie') || ''
		}
	});

	const store = createStore(
		reducers,
		{},
		applyMiddleware(thunk.withExtraArgument(axiosInstance))
	);

	return store;
}
