import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyC2iu6qESN9rdSXbE_XhwVjQLv1WHVGHF0",
    authDomain: "clothingecom-db.firebaseapp.com",
    projectId: "clothingecom-db",
    storageBucket: "clothingecom-db.appspot.com",
    messagingSenderId: "106503647068",
    appId: "1:106503647068:web:afbf23352758afdf1edb99",
    measurementId: "G-2DWF5VM7WX"
  };

  export const createUserProfleDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("Error creating the user ",error.message)
      }

    }

    return userRef;

  }

  firebase.initializeApp(config)


  export const auth  = firebase.auth()
  export const firestore = firebase.firestore()

  //google authentication code below

  const provider  = new firebase.auth.GoogleAuthProvider()
  //give access to the google auth provider class from the authentication libaray

  provider.setCustomParameters({prompt: 'select_account'})
  //always trigger the google popup whenever we use the google auth provider for authentication and sign in

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  //signInWithPopup takes many types like twitter and many other kinds we want only the Google one so we have declared with the name provider

  export default firebase;





