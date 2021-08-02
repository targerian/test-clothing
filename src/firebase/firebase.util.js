import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyABNuqsUmCR-9W2S6ql0TX3NzVTNwrMSl0",
  authDomain: "ali-s-clothing.firebaseapp.com",
  projectId: "ali-s-clothing",
  storageBucket: "ali-s-clothing.appspot.com",
  messagingSenderId: "624661156895",
  appId: "1:624661156895:web:0d76534214d772d8b9f12a",
  measurementId: "G-Q1FQ0QCT4B",
});

export const CreateUserProfileDocument = async (userAuth, additionalData) =>  {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exist){
    var { displayName, email} = userAuth;
    const createdAt = new Date();
    try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
    }
    catch (err){
        console.log("error creating user", err.message);
    }
  }
  return userRef;
}

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef,obj);
    
  })
  return await batch.commit()
}
export const firestore = firebase.firestore();
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithRedirect(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export default firebase;

