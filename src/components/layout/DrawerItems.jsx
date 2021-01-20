import React from 'react';
import { makeStyles, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Inbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar
}));

const DrawerItems = () => {
	const classes = useStyles();

	return (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
};
 
export default DrawerItems;