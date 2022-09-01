import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3RDxlnMMs7oTUfYsgVeTgtVxgd8kR3Oc",
  authDomain: "animeversity-6b04a.firebaseapp.com",
  projectId: "animeversity-6b04a",
  storageBucket: "animeversity-6b04a.appspot.com",
  messagingSenderId: "782791324712",
  appId: "1:782791324712:web:3da36b90b426e7fd01711d",
  measurementId: "G-SBR56WK6EC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
