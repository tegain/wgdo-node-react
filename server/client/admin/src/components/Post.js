import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => (
	<div>
		<h3>{props.title}</h3>
		<p>{props.text}</p>
	</div>
);

Post.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default Post;
