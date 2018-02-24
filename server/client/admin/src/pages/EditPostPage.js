import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';

class EditPostPage extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <h1>Edit a post</h1>
        <PostForm post={this.props.post}/>
      </div>
    );
  }
}

EditPostPage.propTypes = {
  post: PropTypes.object
};

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find((post) => post._id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditPostPage);
