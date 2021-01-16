import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { SignIn, ResetPass } from '../auth';
import { Dashboard } from '../home';
import PrivateRoute from '../private-route/PrivateRoute';

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Route exact path="/" component={SignIn} />
				<Route exact path="/reset" component={ResetPass} />
				<Switch>
					<PrivateRoute exact path="/dash" component={Dashboard}></PrivateRoute>
				</Switch>
			</Router>
		</>
	);
};
 
export default AppRoutes;