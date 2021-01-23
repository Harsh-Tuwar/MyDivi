import { Grid, Container, makeStyles, CssBaseline, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';
import { auth } from '../../firebase';
import clsx from 'clsx';
import { NewPortofolioCard } from '../misc';

const useStyles = makeStyles((theme) => ({
	dashFont: {
		fontFamily: 'futura-pt,system-ui,Helvetica Neue,sans-serif',
	},
	boldFont: {
		fontWeight: 'bold'
	},
	greetings: {
		fontSize: '33px',
	},
	caption: {
		color: 'RGB(119, 129, 138)',
		fontSize: 14
	},
	gridItem: {
		marginTop: 20
	},
	portcards: {
		height: 150,
		overflow: 'auto',
	}
}));

const Dashboard = (props) => {
	const me = auth.currentUser;
	let uname = 'User';
	const classes = useStyles();

	const getGreetings = () => {
		const today = new Date();
		const currHr = today.getHours();

		if (currHr < 12) {
			return 'Good Morning';
		} else if (currHr < 18) {
			return 'Good Afternoon';
		} else {
			return 'Good Evening';
		}
	};

	if (me && me.displayName && me.displayName != '') { uname = me.displayName; }

	return (
		<Container>
			<CssBaseline />
			<Grid container component="main" direction='column' spacing={4}>
				<CssBaseline />
				<Grid item >
					<Typography component="h4" className={clsx(classes.greetings, classes.dashFont, classes.boldFont)} variant="h4" gutterBottom paragraph>
						{getGreetings()},  {uname}!
					</Typography>
					<Typography component="p" variant="caption" gutterBottom paragraph className={clsx(classes.dashFont, classes.boldFont, classes.caption)}>
						Here is what is happening with your MyDivi account today. 
					</Typography>
				</Grid>
				<Grid item className={clsx(classes.gridItem)}>
					<Typography component="h6" className={clsx(classes.dashFont, classes.boldFont)} variant="button" gutterBottom paragraph>
						Your Portfolios
					</Typography>
					<Grid container spacing={5} className={classes.portcards}>
						<Grid item>
							<NewPortofolioCard />
						</Grid>
					</Grid>
				</Grid>
				<Grid item className={classes.gridItem}>
					<Typography component="h6" className={clsx(classes.dashFont, classes.boldFont)} variant="button" gutterBottom paragraph>
						Your Cashflow
					</Typography>
					<Typography component="p" variant="caption" align="center" gutterBottom paragraph className={clsx(classes.dashFont, classes.boldFont, classes.caption)}>
						Nothing to show at this time.
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});
 
export default connect(
	mapStateToProps
)(Dashboard);