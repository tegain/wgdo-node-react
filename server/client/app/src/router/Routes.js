import App from '../App';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Posts from '../pages/Posts';

/**
 * Need to define routes as an array of routes objects (with a App root component)
 *
 * It is needed in order to figure out which component to render
 * depending on the url
 *
 * @doc https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
 */
export default [
	{
		...App, // no path property will make it displayed on every page
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...Posts,
				path: '/posts'
			},
			{
				...NotFoundPage
			}
		]
	}
];
