import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./Authentication.scss";

const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <SignUpForm />
        <SignInForm />
      </div>
    </>
  );
};

export default Authentication;
