import { createContext, useReducer } from "react";
import { createAction } from "./../../utilities/reducers/reducer-utils";

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
  const INITIAL_STATE = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
  };

  const cartReducer = (state, action) => {
    const { type, payLoad } = action;
    // const { cartItems, cartCount, cartTotal, isCartOpen } = state;

    switch (type) {
      case "SET_CART_ITEMS":
        return {
          ...state,
          ...payLoad,
        };
      case "SET_IS_CART_OPEN":
        return {
          ...state,
          isCartOpen: payLoad,
        };
      default:
        throw new Error(`unhandled type ${type} in cartReducer`);
    }
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const total = newCartItems.reduce(
      (initial, cartItem) => initial + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction("SET_CART_ITEMS", {
        cartItems: newCartItems,
        cartTotal: total,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToBeAdded) => {
    const newCartItems = addCartItem(cartItems, productToBeAdded);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (productToBeRemoved) => {
    const newCartItems = removeCartItem(cartItems, productToBeRemoved);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (productToBeCleared) => {
    const newCartItems = clearCartItem(cartItems, productToBeCleared);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction("SET_IS_CART_OPEN", bool));
  };

  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return (
    <>
      <Cart.Provider value={value}>{children}</Cart.Provider>
    </>
  );
};
