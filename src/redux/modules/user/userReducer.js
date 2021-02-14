import { SHOW_ALERT, TOGGLE_DRAWER_STATE } from "./userTypes";

const initialState = {
	alertObj: {},
	drawerState: true
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				...state,
				alertObj: action.payload
			};
		
		case TOGGLE_DRAWER_STATE:
			return {
				...state,
				drawerState: action.payload
			};
		
		default:
			return { ...state };
	}
};