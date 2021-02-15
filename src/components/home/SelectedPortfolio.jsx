import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import { PortfolioHeader } from "../misc";

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: "futura-pt,system-ui,Helvetica Neue,sans-serif"
	}
}));

const SelectedPortfolio = ({ portfolio }) => {
	const classes = useStyles();
	const { label, id } = portfolio.currentPortfolio;

	return (
		<Container className={classes.root}>
			<CssBaseline />
			<PortfolioHeader label={label} docID={id} />
		</Container>
	);
};

SelectedPortfolio.propTypes = {
	portfolio: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	portfolio: state.portfolio	
});

export default connect(
	mapStateToProps
)(SelectedPortfolio);