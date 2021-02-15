import React from "react";
import { Card, makeStyles, IconButton, withStyles, CardContent, CardActions, FormControl, InputLabel, Input, Typography } from "@material-ui/core";
import * as utils from "../../utils";
import { Add } from "@material-ui/icons";
import { MyDialog } from "../misc";
import { auth, firestore } from "../../firebase";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPortfolios } from "../../redux/modules/portfolio/portfolioAction";

const useStyles = makeStyles((theme) => ({
	paper: {
		height: 120,
		width: 120,
		borderRadius: 15,
		display: "flex"
	},
	label: {
		paddingLeft: 5,
		paddingTop: 10
	}
}));

const ColorButton = withStyles((theme) => ({
	root: {
		fontFamily: "futura-pt,system-ui,Helvetica Neue,sans-serif",
		color: theme.palette.getContrastText("#003fbf"),
		backgroundColor: "#003fbf",
		"&:hover": {
			backgroundColor: "#003fbf"
		}
	}
}))(IconButton);

const NewPortofolioCard = ({ setPortfolios }) => {
	const classes = useStyles();
	const me = auth.currentUser;
	const [label, setLable] = React.useState("");
	const [isOpen, setIsOpen] = React.useState(false);

	React.useEffect(() => {
		firestore
			.collection("Portfolio")
			.where("uid", "==", me.uid)
			.onSnapshot((doc) => {
				const test = doc.docs.map((item) => item.data());
				setPortfolios(test);
			});
	}, [isOpen]);
	
	const handleSuccessClose = async () => {
		const res = await utils.axiosPost("SavePortfolio", { l: label });

		if (res.ok) {
			console.log("saved");
		} else {
			console.log("Error");
		}
		
		setIsOpen(false);
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
			<Typography variant="subtitle2" className={classes.label} noWrap={true} paragraph gutterBottom align="justify">Create New</Typography>
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
							onChange={(e) => setLable(e.currentTarget.value)}
						></Input>
					</FormControl>
				</>
			</MyDialog>
		</>
	);
};

NewPortofolioCard.propTypes = {
	setPortfolios: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	portfolio: state.portfolio
});
 
export default connect(mapStateToProps, { setPortfolios })(NewPortofolioCard);