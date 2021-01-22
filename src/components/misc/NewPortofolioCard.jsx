import React from 'react';
import { Paper, makeStyles, IconButton, withStyles, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	paper: {
		height: 200,
		width: 200,
		borderRadius: 15,
		display: 'flex'
	}
}));

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText('#003fbf'),
		backgroundColor: '#003fbf',
		'&:hover': {
			backgroundColor: '#003fbf'
		}
	}
}))(IconButton);

const NewPortofolioCard = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={4}>
			<div style={{ margin: 'auto' }}>
				<ColorButton color="primary" size="medium">
					<Add fontSize='small' />
				</ColorButton>
			</div>
		</Paper>
	);
};
 
export default NewPortofolioCard;