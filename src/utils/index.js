import lf from 'localforage';
import { auth } from '../firebase';
import { SET_CURRENT_USER } from '../redux/modules/auth/authTypes';

export const checkAuthToken = async (store) => {
	const userData = await getStorage('mydivi_user');

	if (userData) {
		const now = Date.now();
		const exp = new Date(userData.expireOn);

		if (exp < now) {
			auth.signOut()
				.then((u) => {
					console.log('done', u);
					removeStorage('mydivi_user');
				});
		} else {
			store.dispatch({
				type: SET_CURRENT_USER,
				payload: userData
			});
		}
	}
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