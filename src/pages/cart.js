import React,{useState,useEffect} from "react";
import { useCart,useUpdateCart } from "../context/cartContext";
import "../styles/cartStyle.css"

const Cart = () => {

  const [plus,minus,,reset,remove] = useUpdateCart();
  const [total,setTotal] = useState(0);


 const cart = useCart();

 useEffect(() => {
  setTotal(() => {
    let total = 0;
    cart.map(item => {
      total += item.price * item.qty;
    });
    return total;
  })
 },[cart]);

  return (
    <div className="cart-container d-flex flex-column justify-content-center">
      <h1>Cart</h1>

      {useCart().map((item) => {
        return (
            <div className="d-flex justify-content-center align-items-center product">
              <p>{item.name}</p>
              <p>{item.qty}</p>

              <div className="buttons d-flex">
                <button onClick={()=>plus(item.name)}>+</button>
                <button onClick={()=>minus(item.name)}>-</button>
              </div>

              <p> Price: ${item.price} </p>

              <p> <strong> Total: </strong> ${item.qty * item.price}</p>

              <button className="remove" onClick={()=>remove(item.name)}>Remove</button>

            </div>
        );
      })}

      <h1>Your total is: ${total}</h1>

      <div className="buttons-final">
        <button>Checkout</button>
        <button onClick={()=>reset()}>Clear</button>
      </div>

    </div>
  );
};

export default Cart;
