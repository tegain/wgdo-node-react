import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Post = (props) => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <Link to={`/posts/edit/${props.id}`}>Edit</Link>
  </div>
);

Post.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string
};

export default Post;
