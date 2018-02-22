import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo left">React SSR</Link>

				<ul className="right">
					<li><a href="/">View website</a></li>
				</ul>
			</div>
		</nav>
	)
};

Header.propTypes = {
  auth: PropTypes.bool
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Header);


