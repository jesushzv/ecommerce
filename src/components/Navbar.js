import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBarStyle.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <Link className="navbar-brand" to="/">
          <h1>JHStore</h1>
        </Link>

        <div className="links d-flex">
          <Link className="nav-link active color" aria-current="page" to="/">
            Home
          </Link>

          <Link className="nav-link color" to="/login">
            Login
          </Link>

          <Link className="nav-link color" to="/sign-up">
            Sign up
          </Link>

          <Link className="nav-link color" to="/cart">
            Cart
            </Link>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
