import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const MyAlert = (props) => {
	const severity = props.severity;
	const title = props.title;
	const msg = props.msg;

	return (
		<Alert severity={severity}>
			<AlertTitle>{title}</AlertTitle>
			{msg}
		</Alert>
	);
};
 
MyAlert.propTypes = {
	severity: PropTypes.string,
	title: PropTypes.string,
	msg: PropTypes.string
};

const mapStateToProps = state => ({
	user: state.user
}); 

export default connect(mapStateToProps)(MyAlert);