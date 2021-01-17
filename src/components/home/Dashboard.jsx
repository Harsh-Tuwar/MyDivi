import { Button, Grid, Paper, Container, makeStyles, CssBaseline, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/modules/auth/authActions';
import * as utils from '../../utils';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({

}));

const Dashboard = (props) => {
	return (
		<Container>
			<CssBaseline />	
			<Grid container component="main">
				<CssBaseline />
				<Grid item>
					{/* <Paper> */}
					<Typography component="h2" variant="h6" gutterBottom>
						Welcome User!
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
	setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});
 
export default connect(
	mapStateToProps,
	{ setCurrentUser }
)(Dashboard);