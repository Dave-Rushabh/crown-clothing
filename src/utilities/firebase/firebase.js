import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGoPJo8MV63RjkNxJQrT9WkS1573eHpuY",
  authDomain: "crown-clothing-db-757e7.firebaseapp.com",
  projectId: "crown-clothing-db-757e7",
  storageBucket: "crown-clothing-db-757e7.appspot.com",
  messagingSenderId: "784049096658",
  appId: "1:784049096658:web:1de36d69ed7d6bd7176a0b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Setting up the auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  } else {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};
