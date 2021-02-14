import axios from "axios";
import lf from "localforage";
import { auth } from "../firebase";
import { SET_CURRENT_USER } from "../redux/modules/auth/authTypes";

export const drawerWidth = 240;
const apiURL = "http://localhost:5000";

export const checkAuthToken = async (store) => {
	auth.onAuthStateChanged(async (u) => {
		if (u) {
			store.dispatch({
				type: SET_CURRENT_USER,
				payload: u
			});
			
			const token = await auth.currentUser.getIdTokenResult();
			
			console.log(token);
			setAuthToken(token);
		} else {
			await auth.signOut();
		}
	});
};

export const setStorage = async (key, val) => {
	return await lf.setItem(key, val);
};

export const getStorage = async (key) => {
	return await lf.getItem(key);
};

export const removeStorage = async (key) => {
	return await lf.removeItem(key);
};

export const setAuthToken = (token) => {
	if (token) {
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const axiosPost = async (url, dataObject) => {
	if (!dataObject) dataObject = {};

	const result = await axios.post(`${apiURL}/${url}`, dataObject);

	return {
		ok: (result.status === 200),
		payload: result.data
	};
};