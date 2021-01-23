import React from 'react';
import { Card, makeStyles, IconButton, withStyles, CardContent, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Add } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	paper: {
		height: 120,
		width: 120,
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
		<Link to="/portfolio">
			<Card className={classes.paper} elevation={4}>
				<CardContent style={{ margin: 'auto' }}>
					<CardActions>
						<ColorButton color="primary" size="medium">
							<Add fontSize='small' />
						</ColorButton>
					</CardActions>
				</CardContent>
			</Card>
		</Link>
	);
};
 
export default NewPortofolioCard;