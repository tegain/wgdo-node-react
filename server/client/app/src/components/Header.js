import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
	const authButton = props.auth ? (
		<a href="/api/logout">Logout</a>
	) : (
		<a href="/api/auth/google">Login</a>
	);

	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo left">React SSR</Link>

				<ul className="right">
					<li><Link to="/posts">Posts</Link></li>
					<li>{authButton}</li>
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


