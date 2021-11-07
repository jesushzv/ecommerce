import React from "react";
import { useUpdateCart } from "../context/cartContext";
import "../styles/gridStyle.css";
import { Link } from "react-router-dom";

const ProductsGrid = (props) => {
  const [, , add] = useUpdateCart();

  const handleClick = (productname, price) => {
    add(productname, price);
    props.alert(productname);
  };

  return (
    <div className="grid-container">
      {props.products.map((product) => {
        var name = product.product_name.toLowerCase();

        if (name.startsWith(props.searchTerm)) {
          return (
            <div className="d-flex flex-column justify-content-center align-items-center product container">
              <div className="style d-flex flex-column justify-content-center align-items-center product">
                <Link to={`/${product._id}`}>
                  <img src={product.image} alt="" />
                </Link>

                <h2 className="title">{product.product_name}</h2>

                <div className="d-flex justify-content-center align-items-center line">
                  <p className="price align-items-center">${product.price}</p>
                 

                  <button onClick={() => handleClick(product.product_name, product.price)}
                    type="button"
                    className="  btn btn-primary btn-md mr-1 mb-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default ProductsGrid;
