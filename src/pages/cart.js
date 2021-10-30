import React,{useState,useEffect} from "react";
import { useCart,useUpdateCart } from "../context/cartContext";
import "../styles/cartStyle.css"

const Cart = () => {

  const [plus,minus] = useUpdateCart();
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

              <div className="buttons">
                <button onClick={()=>plus(item.name)}>+</button>
                <button onClick={()=>minus(item.name)}>-</button>
              </div>

              <p> Price: ${item.price} </p>

              <p> <strong> Total: </strong> ${item.qty * item.price}</p>

            </div>
        );
      })}

      <h1>Your total is: ${total}</h1>

    </div>
  );
};

export default Cart;
