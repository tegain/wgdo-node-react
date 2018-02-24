import React from 'react';
import PropTypes from 'prop-types';

const PostForm = (props) => (
	<div>
		<h3>{props.title}</h3>
		<p>{props.text}</p>
	</div>
);

PostForm.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

export default PostForm;
