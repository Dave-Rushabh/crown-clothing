import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utilities/firebase/firebase";
import { useState } from "react";
import FormInput from "../form-input/FormInput";

import "./SignUpForm.scss";
import Button from "../button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password & Confirm Password not matching");
      return;
    }
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(response.user, {
        displayName,
      });
      console.log(userDocRef);
      clearFormFields();
      alert("Sign Up Successful ..!");
    } catch (error) {
      console.log("error occured", error.message);
      if (error.code === "auth/email-already-in-use") {
        alert("Can not create the user, email already in use");
      }
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>Don't Have an Account ?</h2>
        <span>Sign Up with Email & Password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            inputOptions={{
              type: "text",
              required: true,
              onChange: handleChange,
              name: "displayName",
              value: displayName,
            }}
          />

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

          <FormInput
            label="Confirm Password"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "confirmPassword",
              value: confirmPassword,
            }}
          />

          {/* <button type="submit">Sign Up</button> */}
          <Button buttonType="inverted">Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
