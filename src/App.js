import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Cart from "./pages/cart";
import NavBar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Product from "./components/Product";
import { CartProvider } from "./context/cartContext";
import {UserProvider} from './context/userContext'
import React, { useEffect, useState } from "react";
import * as Constants from "./constants";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(Constants.itemsAPI)
      .then((response) => response.json())
      .then((e) => setItems(e));
  }, []);

  return (
    <div className="App">
      <UserProvider>
      <CartProvider>
        <Router>
          <NavBar items={items} />

          <Switch>
            <Route exact path="/">
              <Home items={items} />
            </Route>

            {items.map((item) => {
              return (
                <Route path={`/${item._id}`}>
                  <Product {...item} />
                </Route>
              );
            })}

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
