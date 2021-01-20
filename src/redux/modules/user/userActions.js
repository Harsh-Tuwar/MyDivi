import { SHOW_ALERT, TOGGLE_DRAWER_STATE } from './userTypes';

export const showAlert = (alertData) => dispach => {
	if (alertData) {
		dispatchEvent({
			type: SHOW_ALERT,
			payload: alertData
		});
	}
};

export const toggleDrawerState = (state) => dispatch => {
	dispatch({
		type: TOGGLE_DRAWER_STATE,
		payload: state
	});
};