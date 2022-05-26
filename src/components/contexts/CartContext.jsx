import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToBeAdded) => {
  const existingCartItem = cartItems.filter((cartItem) => {
    return cartItem.id === productToBeAdded.id;
  });

  if (existingCartItem && existingCartItem.length > 0) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToBeAdded.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...productToBeAdded, quantity: 1 }];
  }
};

export const Cart = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToBeAdded) => {
    setCartItem(addCartItem(cartItems, productToBeAdded));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  return (
    <>
      <Cart.Provider value={value}>{children}</Cart.Provider>
    </>
  );
};
