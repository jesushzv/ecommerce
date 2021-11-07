import React, { useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "../components/SearchBar";

const Home = (props) => {
  const [items, setItems] = useState(props.items);
  const [searchTerm, setSearchTerm] = useState("");
  const notify = (item) =>
    toast(`${item} added to cart`, {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });


  return (
    <>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductsGrid
        className="container products-grid"
        alert={notify}
        products={items}
        searchTerm={searchTerm}
      />

      <ToastContainer />
    </>
  );
};

export default Home;
