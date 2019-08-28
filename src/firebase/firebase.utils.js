import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWKE5ysvfO-HNR5iSoh6vmi7S46ZgbPXc",
    authDomain: "crown-db-251021.firebaseapp.com",
    databaseURL: "https://crown-db-251021.firebaseio.com",
    projectId: "crown-db-251021",
    storageBucket: "",
    messagingSenderId: "909143790373",
    appId: "1:909143790373:web:ff1f40942885d9d2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
