import { SHOW_ALERT } from './userTypes';

export const showAlert = (alertData) => dispach => {
	if (alertData) {
		dispatchEvent({
			type: SHOW_ALERT,
			payload: alertData
		});
	}
};