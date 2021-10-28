import React, { useState, useEffect } from "react";
import ProductsGrid from "../components/ProductsGrid";
import * as Constants from "../constants";

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(Constants.itemsAPI)
      .then((response) => response.json())
      .then((e) => setItems(e));
  }, []);

  return (
    <>

      <ProductsGrid className="container products-grid" products={items} />
    </>
  );
};

export default Home;
