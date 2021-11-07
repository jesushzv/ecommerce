import React from "react";
import "../styles/productStyle.css";
import { useUpdateCart } from "../context/cartContext";
import { ToastContainer, toast } from "react-toastify";



const Product = (props) => {

const [, , add] = useUpdateCart();

  const handleClick = (productname, price) => {
    add(productname, price);
    notify(productname);
  };

  const notify = (item) =>
    toast(`${item} added to cart`, {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });

  return (
    <>
      <section class="mb-5">
        <div class="row">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src={props.image} alt="some" />
          </div>
          <div class="col-md-6">
            <h5>{props.product_name}</h5>
            <p class="mb-2 text-muted text-uppercase small">{props.category}</p>

            <p>
              <span class="mr-1">
                <strong>${props.price}</strong>
              </span>
            </p>
            <p class="pt-1">{props.description}</p>
            <div class="table-responsive">
              <table class="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>Brand</strong>
                    </th>
                    <td class="text-left">{props.brand}</td>
                  </tr>
                  <tr>
                    <th class="pl-0 w-25" scope="row">
                      <strong>SKU</strong>
                    </th>
                    <td class="sku text-left">{props.sku}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button onClick={() => handleClick(props.product_name, props.price)}
                    type="button"
                    className="  btn btn-primary btn-md mr-1 mb-2"
                  >
                    Add to Cart
                  </button>
            
          </div>
        </div>
      </section>

        <ToastContainer />

    </>
  );
};

export default Product;
