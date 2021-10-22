import React from "react";
import '../styles/gridStyle.css'

const ProductsGrid = (props) => {

  return <div className="grid-container">

      {
        props.products.map(product=>{
          return <div className="product">


            <h2 className="title">{product.product_name}</h2>
            <img src={product.image} alt="" />


          </div>
        })
      }


  </div>

}
   

export default ProductsGrid;
