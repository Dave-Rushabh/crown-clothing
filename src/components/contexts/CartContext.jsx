import { FieldValue } from "firebase/firestore";
import { createContext, useState } from "react";

export const Cart = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return (
    <>
      <Cart.Provider value={value}>{children}</Cart.Provider>
    </>
  );
};
