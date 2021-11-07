import React, { useState, useEffect } from "react";
import "../styles/searchbarStyle.css";

const SearchBar = (props) => {
  const handleChange = (e) => {
    var search = e.target.value;
    props.setSearchTerm(search.toLowerCase());
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="d-flex form-inline">
        <input
          onChange={(e) => handleChange(e)}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="categories">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Categories
        </button>
      </div>
    </nav>
  );
};

export default SearchBar;
