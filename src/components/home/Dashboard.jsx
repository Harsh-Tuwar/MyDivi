import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/modules/auth/authActions';
import PropTypes from 'prop-types';
import * as utils from '../../utils';

const Dashboard = (props) => {
	return (
		<>
			<h1>Hello User</h1>
			<Button
				variant="outlined"
				color="primary"
				onClick={async () => {
					await utils.removeStorage('mydivi_user');
					props.setCurrentUser();
				}}
			>
				Log out
			</Button>
		</>
	);
};

Dashboard.propTypes = {
	setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});
 
export default connect(
	mapStateToProps,
	{ setCurrentUser }
)(Dashboard);