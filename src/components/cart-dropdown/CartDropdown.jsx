import "./CartDropdown.scss";
import Button from "./../button/Button";

const CartDropdown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          <Button buttonType="google">GO TO CHECKOUT</Button>
        </div>
      </div>
    </>
  );
};

export default CartDropdown;
