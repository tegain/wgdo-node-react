import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { fetchPosts } from "../actions";

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

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

        <h1>Liste des posts</h1>

        {this.props.posts.map(post => (
          <Post key={post._id} title={post.title} text={post.text}/>
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

const mapStateToProps = ({posts}) => ({
  posts
});

export const loadData = (store) => {
  // Return a promise
  return store.dispatch(fetchPosts());
};

export default {
  loadData,
  component: connect(mapStateToProps, {fetchPosts})(Posts),
};
