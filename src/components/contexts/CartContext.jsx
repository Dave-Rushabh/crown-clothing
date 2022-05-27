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

const removeCartItem = (cartItems, productToBeRemoved) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToBeRemoved.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== productToBeRemoved.id
    );
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToBeRemoved.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, productToBeCleared) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToBeCleared.id);
};

export const Cart = createContext({
  isCartOpen: null,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: null,
  clearItemFromCart: () => {},
  total: null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToBeAdded) => {
    setCartItem(addCartItem(cartItems, productToBeAdded));
  };

  const removeItemFromCart = (productToBeRemoved) => {
    setCartItem(removeCartItem(cartItems, productToBeRemoved));
  };

  const clearItemFromCart = (productToBeCleared) => {
    setCartItem(clearCartItem(cartItems, productToBeCleared));
  };

  const getTotal = () => {
    const total = cartItems.reduce(
      (initial, cartItem) => initial + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(total);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    total,
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    getTotal();
  }, [cartItems]);

  return (
    <>
      <Cart.Provider value={value}>{children}</Cart.Provider>
    </>
  );
};
