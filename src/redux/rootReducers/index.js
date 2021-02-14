import { combineReducers } from "redux";
import authReducer from "../modules/auth/authReducer";
import userReducer from "../modules/user/userReducer";

/**
 * Root Reducer which will hold list of app reducers
 * @see https://redux.js.org/api/combinereducers
 * @type {Reducer<unknown>}
 */
const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer
});

export default rootReducer;