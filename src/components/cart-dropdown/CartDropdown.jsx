import "./CartDropdown.scss";
import Button from "./../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { Cart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(Cart);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/check-out");
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return (
              <>
                <CartItem key={item.id} cartItem={item} />
              </>
            );
          })}
        </div>

        <Button buttonType="inverted" onClick={goToCheckOutHandler}>
          GO TO CHECKOUT
        </Button>
      </div>
    </>
  );
};

export default CartDropdown;
