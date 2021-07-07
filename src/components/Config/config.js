import firebase from 'firebase/app'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTv6y7coEJYmWLGWBzqu3ZuhOxhAWEB5I",
    authDomain: "fleet-space-315319.firebaseapp.com",
    projectId: "fleet-space-315319",
    storageBucket: "fleet-space-315319.appspot.com",
    messagingSenderId: "357354527745",
    appId: "1:357354527745:web:2b11f607b057a38b3cb400",
    measurementId: "G-1VDYE698QJ"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }