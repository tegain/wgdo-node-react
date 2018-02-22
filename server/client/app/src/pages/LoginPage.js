import React, { Component } from 'react';

class LoginPage extends Component {
  handleLogin = () => {
    window.location.href = "/admin/";
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleLogin}
        >
          Login
        </button>
      </div>
    );
  }
}

export default {
  component: LoginPage
};
