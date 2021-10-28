import React from "react";
import '../styles/gridStyle.css'

const ProductsGrid = (props) => {

  return <div className="grid-container">

      {
        props.products.map(product=>{
          return <div className="product container">


            <img src={product.image} alt="" />
            <h2 className="title">{product.product_name}</h2>

            <div className="d-flex justify-content-center align-items-center">

            <p className="price align-items-center">${product.price}</p>
            <button className="add">Add to Cart</button>

            </div>


          </div>
        })
      }


  </div>

}
   

export default ProductsGrid;
