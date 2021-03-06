import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { fetchPosts } from "../actions";

class PostsList extends Component {
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
          <Post key={post._id} title={post.title} text={post.text} id={post._id}/>
        ))}

        <Link to="/posts/add">Add post</Link>
      </div>
    );
  }
}

PostsList.propTypes = {
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

export default connect(mapStateToProps, {fetchPosts})(PostsList);
