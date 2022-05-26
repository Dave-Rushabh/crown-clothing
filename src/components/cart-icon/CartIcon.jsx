import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "./../../assests/shopping-bag.svg";
import { Cart } from "../contexts/CartContext";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(Cart);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <div className="cart-icon-container" onClick={handleCartClick}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count ">{cartCount}</span>
      </div>
    </>
  );
};

export default CartIcon;
