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
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
const userRef=firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })  
        }
        catch (error) {
          console.log("error creating user", error.message)
        }
    }
    return userRef
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const firestore = firebase.firestore()


export { auth, db, storage }