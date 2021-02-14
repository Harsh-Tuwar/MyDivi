import React from "react";
import { Card, makeStyles, IconButton, Typography, withStyles, CardContent, CardActions, FormControl, InputLabel, Input } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Add } from "@material-ui/icons";
import { MyDialog } from "../misc";

const useStyles = makeStyles((theme) => ({
	paper: {
		height: 120,
		width: 120,
		borderRadius: 15,
		display: "flex"
	}
}));

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText("#003fbf"),
		backgroundColor: "#003fbf",
		"&:hover": {
			backgroundColor: "#003fbf"
		}
	}
}))(IconButton);

const NewPortofolioCard = () => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = React.useState(false);

	const handleSuccessClose = async () => {
		
	};

	return (
		<>
			<Card className={classes.paper} elevation={4} onClick={() => setIsOpen(true)}>
				<CardContent style={{ margin: "auto" }}>
					<CardActions>
						<ColorButton color="primary" size="medium">
							<Add fontSize='small' />
						</ColorButton>
					</CardActions>
				</CardContent>
			</Card>
			<MyDialog
				isOpen={isOpen}
				handleClose={() => setIsOpen(false)}
				title="New Portfolio"
				subtitle="Let's Create a portfolio for you!"
				handleSuccessClose={handleSuccessClose}
			>
				<>
					<FormControl className={classes.frmCtrl} fullWidth>
						<InputLabel>Portfolio Name</InputLabel>
						<Input
							color="primary"
							fullWidth
							type="email"
							placeholder="Enter name"
							required
							onChange={(e) => setName(e.currentTarget.value)}
						></Input>
					</FormControl>
				</>
			</MyDialog>
		</>
	);
};
 
export default NewPortofolioCard;