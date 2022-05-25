import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase";

const Signin = () => {
  const handleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <>
      <h1> This Is Signin Page</h1>
      <button onClick={handleSignIn}> Click Here to signin</button>
    </>
  );
};

export default Signin;
