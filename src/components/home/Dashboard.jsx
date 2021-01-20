import { Button, Grid, Paper, Container, makeStyles, CssBaseline, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/modules/auth/authActions';
import * as utils from '../../utils';
import PropTypes from 'prop-types';
import React from 'react';
import { auth } from '../../firebase';
import { SideDrawer } from '../layout';

const useStyles = makeStyles((theme) => ({

}));

const Dashboard = (props) => {
	const me = auth.currentUser;
	let uname = 'User';

	console.log(props.test);

	if (me && me.displayName && me.displayName != '') { uname = me.displayName; }

	return (
		<Container>
			<CssBaseline />
			<Grid container component="main">
				<CssBaseline />
				<Grid item>
					{/* <Paper> */}
					<Typography component="h2" variant="h6" gutterBottom>
						Welcome {uname}!
					</Typography>
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
					{/* </Paper> */}
				</Grid>
			</Grid>
		</Container>
	);
};

Dashboard.propTypes = {
	setCurrentUser: PropTypes.func.isRequired,
	test: PropTypes.string
};

const mapStateToProps = state => ({
	auth: state.auth,
	user: state.user
});
 
export default connect(
	mapStateToProps,
	{ setCurrentUser }
)(Dashboard);