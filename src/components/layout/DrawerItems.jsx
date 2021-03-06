import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../redux/modules/auth/authActions";
import * as utils from "../../utils";
import React from "react";
import {
	ExitToApp,
	Home,
	ListAlt
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar
}));

const DrawerItems = (props) => {
	const classes = useStyles();
	const itemsTop = [
		{ label: "Dashboard", route: "/dash" ,icon: <Home /> }
	];

	const itemsBottom = [
		{ label: "Log Out", id: "logOut", icon: <ExitToApp /> },
		{ label: "Changelog", id: "clog", icon: <ListAlt /> }
	];

	const handleItemClick = async (e) => {
		const id = e.currentTarget.id;
		
		if (id === "logOut") {
			await utils.removeStorage("mydivi_user");
			props.setCurrentUser();
		}
	};

	return (
		<>
			<div style={{flexGrow: 1}}>
				<div className={classes.toolbar} />
				<List>
					{itemsTop.map((item, index) => (
						<Link to={item.route} key={index} style={{color: "black"}}>
							<ListItem button>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItem>
						</Link>
					))}
				</List>
			</div>
			<div>
				<Divider />
				<List>
					{itemsBottom.map((item, index) => (
						<ListItem button key={index} id={item.id} onClick={(e) => handleItemClick(e)}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.label} />
						</ListItem>
					))}
				</List>
				<Divider />
			</div>
		</>
	);
};

DrawerItems.propTypes = {
	setCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});
 
export default connect(
	mapStateToProps,
	{ setCurrentUser }
)(DrawerItems);