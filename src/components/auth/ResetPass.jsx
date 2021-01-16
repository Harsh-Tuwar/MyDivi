/* eslint-disable no-unused-vars */
import {
	// Box,
	// Button,
	Container,
	// CssBaseline,
	// Divider,
	// FormControl,
	// Grid,
	// Input,
	// InputLabel,
	makeStyles,
	Paper,
	// Typography
} from '@material-ui/core';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { RotateLeft } from '@material-ui/icons';
import React from 'react';
// import { auth } from '../../firebase';
// import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
	// Paper: {
	// 	height: '100%',
	// 	width: '100%',
	// 	padding: 26,
	// 	border: '1px solid #eeeeee'
	// },
	// Box: {
	// 	width: '100%',
	// 	maxHeight: 'calc(100vh - 187px)',
	// 	minHeight: 400,
	// },
	// al: {
	// 	textAlign: 'left'
	// },
	// efield: {
	// 	marginTop: theme.spacing(3)
	// },
	// button: {
	// 	marginTop: theme.spacing(2),
	// 	float: 'left',
	// 	background: 'hsla(290,60%,70%,0.3);',
	// },
	// header: {
	// 	alignItems: 'flex-start',
	// 	float: 'left',
	// 	fontWeight: 'bold'
	// },
	// grid: {
	// 	marginTop: theme.spacing(1),
	// }
}));

const ResetPass = () => {
	const classes = useStyles();
	// const [e, setE] = React.useState('');

	// console.log(e, setE('asdasd'));
	return (
		<Container maxWidth="sm">
			<Paper elevation={3} style={{minHeight: '50vh'}}>
				<h1>hellp</h1>
			</Paper>
		</Container>
	);
};

ResetPass.propTypes = {
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps)(ResetPass);