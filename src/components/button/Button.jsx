import { BaseButton, GoogleSignInButton, InvertedButton } from "./ButtonStyle";

const BUTTON_TYPES_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = (props) => {
  const { buttonType, ...otherProps } = props || {};
  const CustomButton = getButton(buttonType);
  return (
    <>
      <CustomButton {...otherProps}></CustomButton>
    </>
  );
};

export default Button;
export { BUTTON_TYPES_CLASSES };
