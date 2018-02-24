import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import PostsList from '../components/PostsList';

export default class PostsPage extends Component {

  head = () => (
    <Helmet>
      <title>Page title</title>
      <meta property="og:title" content="Page title"/>
    </Helmet>
  );

  render() {
    return (
      <div>
        {this.head()}

        <PostsList/>
      </div>
    );
  }

}

PostsPage.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};
