import React, { useState, useEffect } from "react";
import ProductsGrid from "../components/ProductsGrid";
import * as Constants from "../constants";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [items, setItems] = useState([]);
  const notify = (item) =>
    toast(`${item} added to cart`, {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });

  useEffect(() => {
    fetch(Constants.itemsAPI)
      .then((response) => response.json())
      .then((e) => setItems(e));
  }, []);

  return (
    <>
      <ProductsGrid
        className="container products-grid"
        alert={notify}
        products={items}
      />

      <ToastContainer />
    </>
  );
};

export default Home;
