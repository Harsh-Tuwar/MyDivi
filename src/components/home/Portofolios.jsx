// import { CssBaseline, Container, Grid, Typography, makeStyles, Stepper, Step, StepLabel, StepContent, Paper, Button } from "@material-ui/core";
// import React from "react";
// import clsx from "clsx";
// import PropTypes from "prop-types";

// const useStyles = makeStyles((theme) => ({
// 	myFont: {
// 		fontFamily: "futura-pt,system-ui,Helvetica Neue,sans-serif"
// 	},
// 	boldFont: {
// 		fontWeight: "bold"
// 	},
// 	header: {
// 		fontSize: 33
// 	},
// 	root: {
// 		width: "100%",
// 	},
// 	button: {
// 		marginTop: theme.spacing(1),
// 		marginRight: theme.spacing(1),
// 	},
// 	actionsContainer: {
// 		marginBottom: theme.spacing(2),
// 	},
// 	resetContainer: {
// 		padding: theme.spacing(3),
// 	}
// }));

// const getSteps = () => {
// 	return ["Select campaign settings", "Create an ad group", "Create an ad"];
// };

// const getStepContent = (step) => {
// 	switch (step) {
// 		case 0:
// 			return `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`;
// 		case 1:
// 			return "An ad group contains one or more ads which target a shared set of keywords.";
// 		case 2:
// 			return `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`;
// 		default:
// 			return "Unknown step";
// 	}
// };

// const PortfolioStepper = ({ handleBack, handleNext, handleReset, activeStep }) => {
// 	const classes = useStyles();
// 	const steps = getSteps();

// 	return (
// 		<div className={classes.root}>
// 			<Stepper activeStep={activeStep} orientation="vertical">
// 				{steps.map((label, index) => (
// 					<Step key={label}>
// 						<StepLabel>{label}</StepLabel>
// 						<StepContent>
// 							<Typography>{getStepContent(index)}</Typography>
// 							<div className={classes.actionsContainer}>
// 								<div>
// 									<Button
// 										disabled={activeStep === 0}
// 										onClick={handleBack}
// 										className={classes.button}
// 									>
// 										Back
//                   					</Button>
// 									<Button
// 										variant="contained"
// 										color="primary"
// 										onClick={handleNext}
// 										className={classes.button}
// 									>
// 										{activeStep === steps.length - 1 ? "Finish" : "Next"}
// 									</Button>
// 								</div>
// 							</div>
// 						</StepContent>
// 					</Step>
// 				))}
// 			</Stepper>
// 			{activeStep === steps.length && (
// 				<Paper square elevation={0} className={classes.resetContainer}>
// 					<Typography>All steps completed - you&apos;re finished</Typography>
// 					<Button onClick={handleReset} className={classes.button}>
// 						Reset
//          			</Button>
// 				</Paper>
// 			)}
// 		</div>
// 	);
// };

// const Portofolio = () => {
// 	const classes = useStyles();
// 	const [activeStep, setActiveStep] = React.useState(0);
// 	const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
// 	const handleBack = () => setActiveStep((prevStep) => prevStep- 1);
// 	const handleReset = () => setActiveStep(0);

// 	return (
// 		<Container>
// 			<CssBaseline />
// 			<Grid container component="main" direction="column" spacing={4}>
// 				<CssBaseline />
// 				<Grid item>
// 					<Typography component="h4" className={clsx(classes.header, classes.myFont, classes.boldFont)} variant="h4" gutterBottom paragraph>
// 						Lets set up your portfolio...
// 					</Typography>
// 				</Grid>
// 				<Grid item>
// 					<PortfolioStepper handleNext={handleNext} handleBack={handleBack} handleReset={handleReset} activeStep={activeStep}/>
// 				</Grid>
// 			</Grid>
// 		</Container>
// 	);
// };

// PortfolioStepper.propTypes = {
// 	handleNext: PropTypes.func.isRequired,
// 	handleBack: PropTypes.func.isRequired,
// 	handleReset: PropTypes.func.isRequired,
// 	activeStep: PropTypes.number.isRequired
// };
 
// export default Portofolio;

import React from "react";
import PropTypes from "prop-types";
import { auth, firestore } from "../../firebase";

const Portfolios = (props) => {
	// const me = auth.currentUser;

	// firestore
	// 	.collection("Portfolio")
	// 	.where("cid", "==", me.uid)
	// 	.onSnapshot((doc) => {
	// 		if (doc) 
	// 		console.log("Current data: ", doc.data());
	// 	});
	
	return (
		<h1>Yes!!</h1>
	);
};
 
export default Portfolios;