import firebase from "firebase/app";
import "firebase/auth";
import dotenv from 'dotenv'
dotenv.config()

firebase.initializeApp({
  apiKey: "AIzaSyABNuqsUmCR-9W2S6ql0TX3NzVTNwrMSl0",
  authDomain: "ali-s-clothing.firebaseapp.com",
  projectId: "ali-s-clothing",
  storageBucket: "ali-s-clothing.appspot.com",
  messagingSenderId: "624661156895",
  appId: "1:624661156895:web:0d76534214d772d8b9f12a",
  measurementId: "G-Q1FQ0QCT4B"
});



export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithRedirect (googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export default firebase;