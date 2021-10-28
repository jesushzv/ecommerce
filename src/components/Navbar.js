import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/navBarStyle.css'

const NavBar = () =>{
    return (
       

<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <h1>JHStore</h1>
    </a>

    <div className="links d-flex">



        <Link className="nav-link active color" aria-current="page" to="/">Home</Link>


        <Link className="nav-link color" to="/login">Login</Link>


        <Link className="nav-link color" to="/sign-up">Sign up</Link>

        </div>
   

        
    </div>
  
</nav>


    )
}

export default NavBar;
