import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {

  constructor (props) {
    super (props);

    this.state = {
      title: props.post ? props.post.title : '',
      text: props.post ? props.post.text : ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  };

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Add title for the post"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Add content for the post"
              value={this.state.text}
              onChange={this.onTextChange}
            >
            </textarea>
          </div>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  post: PropTypes.object
};
