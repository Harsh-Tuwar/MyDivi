import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { SignIn, ResetPass, SignUp } from "../auth";
import { Dashboard, Portofolio } from "../home";
import PrivateRoute from "../private-route/PrivateRoute";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Route exact path="/" component={SignIn} />
				<Route exact path="/reset" component={ResetPass} />
				<Route exact path="/signup" component={SignUp} />
				<Switch>
					<PrivateRoute exact path="/dash" component={Dashboard}></PrivateRoute>
					<PrivateRoute exact path="/portfolio" component={Portofolio}></PrivateRoute>
				</Switch>
			</Router>
		</>
	);
};
 
export default AppRoutes;