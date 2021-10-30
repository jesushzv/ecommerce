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
  const [cart, setCart] = useState([{name: "Gloves", qty: 1, price: 10},{name: "Shoes", qty: 1, price: 20}]);

  const updateCartPlus = (name)=>{
    setCart(cart.map(item => {
      if(item.name === name){
        item.qty++;
      }
      return item;
    }));

  }
  const updateCartMinus = (name)=>{
        
      setCart(cart.map(item => {
        if(item.name === name){
          if(item.qty >= 1){
          item.qty--;
        }
      }
        return item;
      }));
      
  }

  return (
    <cartContext.Provider value={cart}>
      <updateCartContext.Provider value={[updateCartPlus,updateCartMinus]}>
        {children}
      </updateCartContext.Provider>
    </cartContext.Provider>
  );
};
