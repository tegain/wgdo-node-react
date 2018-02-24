import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS';

/**
 * Use the `api` function argument (from thunk middleware) to make requests,
 * which will automatically prepend the '/api' to the url
 * (and the Express server proxy middleware will catch it and redirect to the correct api url)
 *
 * @returns {function(*, *, *)}
 */
export const fetchPosts = () => {
	return async (dispatch) => {
		const res = await axios.get('/api/posts');

		dispatch({
			type: FETCH_POSTS,
			payload: res
		});
	}
};
