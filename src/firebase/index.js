import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
	apiKey: 'AIzaSyCOgHLnkznD-PDWIwjB5y5zDnEvc56GSYo',
	authDomain: 'mydivi-4c81d.firebaseapp.com',
	projectId: 'mydivi-4c81d',
	storageBucket: 'mydivi-4c81d.appspot.com',
	messagingSenderId: '784965753205',
	appId: '1:784965753205:web:82a6921ddf3065c15f9b3c',
	measurementId: 'G-KJG61WWLQJ'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();