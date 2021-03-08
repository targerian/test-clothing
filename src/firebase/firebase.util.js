import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyABNuqsUmCR-9W2S6ql0TX3NzVTNwrMSl0",
  authDomain: "ali-s-clothing.firebaseapp.com",
  projectId: "ali-s-clothing",
  storageBucket: "ali-s-clothing.appspot.com",
  messagingSenderId: "624661156895",
  appId: "1:624661156895:web:0d76534214d772d8b9f12a",
  measurementId: "G-Q1FQ0QCT4B"
});



export const auth = firebase.auth() ;
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;