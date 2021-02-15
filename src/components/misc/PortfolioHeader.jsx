import React from "react";
import { makeStyles, Typography, IconButton, FormControl, InputLabel, Input } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import PropTypes from "prop-types";
import { MyDialog } from "../misc";
import { firestore } from "../../firebase";

const useStyles = makeStyles((theme) => ({
	root: {
		fontFamily: "futura-pt,system-ui,Helvetica Neue,sans-serif",
		display: "flex"
	},
	margin: {
		margin: theme.spacing(1)
	},
	labelContainer: {
		flexGrow: 1,
		margin: "auto 0"
	},
	label: {
		fontWeight: "bold",
		margin: "auto 0"
	}
}));

const PortfolioHeader = ({ label, docID }) => {
	const classes = useStyles();
	const [isOpen, setIsOpen] = React.useState(false);
	const [l, setLable] = React.useState(label);

	const handleSuccessClose = async () => {
		await firestore.collection("Portfolio").doc(docID).update({
			label: l
		}).then(() => {
			console.log("Updated");
		}).catch((err) => {
			console.log("err", err);
			setLable(label);
		});

		setIsOpen(false);
	};

	return (
		<>
			<div className={classes.root}>
				<div className={classes.labelContainer}>
					<Typography variant="h4" component="p" paragraph gutterBottom className={classes.label}>{l}</Typography>
				</div>
				<div>
					<IconButton aria-label="delete" className={classes.margin} onClick={() => setIsOpen(true)}>
						<Edit fontSize="large" />
					</IconButton>
				</div>
			</div>
			<MyDialog
				isOpen={isOpen}
				handleClose={() => setIsOpen(false)}
				title="Update Portfolio"
				subtitle="Let's rename this portfolio for you!"
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
							value={l}
							onChange={(e) => setLable(e.currentTarget.value)}
						></Input>
					</FormControl>
				</>
			</MyDialog>
		</>
	);
};

PortfolioHeader.propTypes = {
	label: PropTypes.string.isRequired,
	docID: PropTypes.string.isRequired
};
 
export default PortfolioHeader;