import React from "react";
import { Card, CardContent, CardActions, makeStyles, Typography, CardActionArea } from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	infoDiv: {
		borderRadius: "50%",
		height: 44,
		width: 44,
		backgroundColor: "#003FBF",
		textAlign: "center",
		color: "white"
	},
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

const PortfolioCard = ({ p, index }) => {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.paper} elevation={4}>
				<CardActionArea>
					<CardContent style={{ margin: "auto" }}>
						<CardActions style={{ justifyContent: "center" }}>
							<div className={classes.infoDiv}>
								<Typography variant="button" paragraph align="center" gutterBottom style={{ paddingTop: 8 }}>{index + 1}</Typography>
							</div>
						</CardActions>
					</CardContent>
				</CardActionArea>
			</Card>
			<Typography variant="subtitle2" className={classes.label} noWrap={true} paragraph gutterBottom align="justify">{p.label}</Typography>
		</>
	);
};

PortfolioCard.propTypes = {
	p: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
	portfolio: state.portfolio
});
 
export default connect(mapStateToProps)(PortfolioCard);