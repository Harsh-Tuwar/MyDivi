import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { SideDrawer } from "../layout";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
	return (
		<Route {...rest} render={props => auth.loggedIn ? (<SideDrawer component={Component} properties={props} />) : (<Redirect to="/" />)} />
	);
};

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
	component: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.object
	])
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps
)(PrivateRoute);