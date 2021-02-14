import {
	Box,
	Button,
	CssBaseline,
	Divider,
	FormControl,
	Grid,
	Input,
	InputLabel,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import { auth } from "../../firebase";
import { connect } from "react-redux";
import { MyAlert } from "../misc";
import { RotateLeft } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {},
	pHeader: {
		fontWeight: "bold",
		marginLeft: 5,
		[theme.breakpoints.up("sm")]: {
			width: "40vw"
		},
		width: "80vw"
	},
	iph: {
		textAlign: "center"
	},
	paperContainer: {
		[theme.breakpoints.up("sm")]: {
			width: "40vw"
		},
		width: "80vw"
	},
	frmCtrl: {
		marginTop: theme.spacing(3)
	},
	sendBtn: {
		marginTop: theme.spacing(3),
		float: "left",
		background: "hsla(290,60%,70%,0.3);",
	},
	linkToHome: {
		marginTop: theme.spacing(1),
	}
}));

const ResetPass = (props) => {
	const classes = useStyles();
	const [email, setE] = React.useState("");
	const [showAlert, setShowAlert] = React.useState(false);
	const [alertMsg, setAlertMsg] = React.useState("");
	const [alertSeverity, setAlertSeverity] = React.useState("");
	const [title, setTitle] = React.useState("");

	const handleSubmit = async (e) => {
		if (email.length > 0) {
			auth
				.sendPasswordResetEmail(email)
				.then(() => {
					setAlertMsg("Email has been sent! You will be redirected to the sign-in page now!");
					setAlertSeverity("success");
					setTitle("Email Sent!");

					setTimeout(() => {
						props.history.push("/");
					}, 3000);
				}).catch(() => {
					setAlertMsg("We can't seem to find your email address! Mind confirming it and trying again?");
					setAlertSeverity("error");
					setTitle("Error Sending Email!");
				}).finally(() => {
					setShowAlert(true);
				});

		}
		
		e.preventDefault();
	};

	return (
		<Grid container component="main" spacing={4} direction="column" className={classes.root} alignItems="center" justify="center">
			<CssBaseline />
			<Grid item xs={false} className={classes.iph}>
				<img src="/images/forgot-password.svg" height="250px" width="250px"></img>
			</Grid>
			{
				(showAlert) ? 
					<Grid item className={classes.pHeader}>
						<MyAlert
							severity={alertSeverity}
							title={title}
							// ""Email has been sent! You will be redirected to the sign-in page now!""
							msg={alertMsg} />
					</Grid>
					: null
			}
			<Typography align="left" gutterBottom paragraph variant='h4' className={classes.pHeader}>Password Reset</Typography>
			<Grid item xs={12} component={Paper} elevation={5} square className={classes.paperContainer}>
				<Box style={{minHeight: 400}}>
					<Typography align="left" gutterBottom paragraph variant="body2" component="p">
						Yo! It Seems like you forgot your password for MyDivi. If this is true, enter your email address below and we will send you
						a Password Reset Email (as they call).
					</Typography>
					<FormControl className={classes.frmCtrl} fullWidth>
						<InputLabel htmlFor="reset-pass-field">Email Address</InputLabel>
						<Input
							color="primary"
							fullWidth
							type="email"
							placeholder="john@doe.com"
							required
							onChange={(e) => setE(e.currentTarget.value)}
						></Input>
					</FormControl>
					<Button
						color="primary"
						size="medium"
						className={classes.sendBtn}
						startIcon={<RotateLeft />}
						fullWidth
						onClick={(e) => handleSubmit(e)}
					>
						Reset Password
					</Button>
				</Box>
				<Divider />
				<Button size="small" color="primary" className={classes.linkToHome}
					onClick={() => props.history.push("/")}
				> Sign in?</Button>
			</Grid>
		</Grid>
	);
};

ResetPass.propTypes = {
	history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(ResetPass);