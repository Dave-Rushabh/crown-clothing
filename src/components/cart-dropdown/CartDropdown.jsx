import "./CartDropdown.scss";
import Button from "./../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { Cart } from "../contexts/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(Cart);
  console.log(cartItems, "cartItems");
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.map((item) => {
            return (
              <>
                <CartItem cartItem={item} key={item.id} />
              </>
            );
          })}
        </div>
        <Button buttonType="inverted">GO TO CHECKOUT</Button>
      </div>
    </>
  );
};

export default CartDropdown;
