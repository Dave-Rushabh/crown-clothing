import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "./../../utilities/firebase/firebase";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button, { BUTTON_TYPES_CLASSES } from "../button/Button";

import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      clearFormFields();
      alert("Log in Successful ..!");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for the given Email");
          break;

        case "auth/user-not-found":
          alert("Can't find any user associated with this email");
          break;
        default:
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    await signInWithGooglePopup();
    alert("Sign in with Google is successful ..!");
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Already Have an Account ?</h2>
        <span>Sign In with Email & Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            inputOptions={{
              type: "email",
              required: true,
              onChange: handleChange,
              name: "email",
              value: email,
            }}
          />

          <FormInput
            label="Password"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "password",
              value: password,
            }}
          />

          <div className="buttons-container">
            <Button buttonType="inverted" type="submit">
              Sign In
            </Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPES_CLASSES.google}
              onClick={handleSignInWithGoogle}
            >
              Google SIGN IN
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignInForm;
