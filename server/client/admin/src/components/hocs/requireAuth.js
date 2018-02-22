import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/"/>;
        case null:
          return <div>Loading...</div>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  RequireAuth.propTypes = {
    auth: PropTypes.any
  };

  const mapStateToProps = (state) => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(RequireAuth);
}
