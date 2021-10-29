import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
const updateCartContext = createContext();

export function useCart(){
  return useContext(cartContext);
} 

export function useUpdateCart(){
  return useContext(updateCartContext);
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{name: "Gloves", qty: 2}]);

  return (
    <cartContext.Provider value={cart}>
      <updateCartContext.Provider value={setCart}>
        {children}
      </updateCartContext.Provider>
    </cartContext.Provider>
  );
};
