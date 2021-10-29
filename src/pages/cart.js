import React from "react";
import { useCart } from "../context/cartContext";
import "../styles/cartStyle.css"

const Cart = () => {
  return (
    <div className="cart-container d-flex flex-column justify-content-center">
      <h1>Cart</h1>

      {useCart().map((item) => {
        return (
          <>
            <div className="d-flex justify-content-around align-items-center">
              <p>{item.name}</p>
              <p>{item.qty}</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
