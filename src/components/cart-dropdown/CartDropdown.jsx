import {
  CartDropdownContainer,
  CartItems,
  cartItems,
  EmptyMessage,
} from "./CartDropdownStyle";
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
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length ? (
            <>
              {cartItems.map((item) => {
                return (
                  <>
                    <CartItem key={item.id} cartItem={item} />
                  </>
                );
              })}
            </>
          ) : (
            <>
              <EmptyMessage>Your Cart Is Empty</EmptyMessage>
            </>
          )}
        </CartItems>
        {cartItems.length ? (
          <>
            <Button buttonType="inverted" onClick={goToCheckOutHandler}>
              GO TO CHECKOUT
            </Button>
          </>
        ) : (
          <></>
        )}
      </CartDropdownContainer>
    </>
  );
};

export default CartDropdown;
