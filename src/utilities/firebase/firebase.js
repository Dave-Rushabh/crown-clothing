import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
console.log(firebaseApp);

// Setting up the auth provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

  return userDocRef;
};