import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';
import {
 getFirestore,
 doc,
 getDoc,
 setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCd2-wiXUWlld1uTCPayMJ2qXuxl9cG_GA",
  authDomain: "ecommerce-playground-db.firebaseapp.com",
  projectId: "ecommerce-playground-db",
  storageBucket: "ecommerce-playground-db.appspot.com",
  messagingSenderId: "563124766836",
  appId: "1:563124766836:web:76194a59e29454f955e921"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;

}