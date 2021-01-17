import { SHOW_ALERT } from './userTypes';

const initialState = {
	alertObj: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				...state,
				alertObj: action.payload
			};
		
		default:
			return { ...state };
	}
};