import React from "react";
import { useUpdateCart } from "../context/cartContext";
import '../styles/gridStyle.css'

const ProductsGrid = (props) => {

  const [plus,minus,add] = useUpdateCart();

  return <div className="grid-container">

      {
        props.products.map(product=>{
          return <div className="d-flex flex-column justify-content-center align-items-center product container">

            <img src={product.image} alt="" />
            <h2 className="title">{product.product_name}</h2>

            <div className="d-flex justify-content-center align-items-center">

            <p className="price align-items-center">${product.price}</p>
            <button onClick={()=> add(product.product_name,product.price) } className="add">Add to Cart</button>

            </div>


          </div>
        })
      }


  </div>

}
   

export default ProductsGrid;
