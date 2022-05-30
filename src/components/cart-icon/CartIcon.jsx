import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyle";

import { Cart } from "../contexts/CartContext";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(Cart);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <CartIconContainer onClick={handleCartClick}>
        <ShoppingIcon className="shopping-icon" />
        <ItemCount className="item-count ">{cartCount}</ItemCount>
      </CartIconContainer>
    </>
  );
};

export default CartIcon;
