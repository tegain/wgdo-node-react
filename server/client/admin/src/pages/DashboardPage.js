import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard page</h1>

        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
        </ul>
      </div>
    );
  }
}

DashboardPage.propTypes = {};

export default DashboardPage;
