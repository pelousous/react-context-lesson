import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyCErWE-ZKe44ln5ag0Ibm8cxzcUmFW9pT4",
  authDomain: "crwn-db-02.firebaseapp.com",
  databaseURL: "https://crwn-db-02.firebaseio.com",
  projectId: "crwn-db-02",
  storageBucket: "crwn-db-02.appspot.com",
  messagingSenderId: "206580718199",
  appId: "1:206580718199:web:a32325f75f407b43c44472",
  measurementId: "G-H0QK4F7R3D"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
