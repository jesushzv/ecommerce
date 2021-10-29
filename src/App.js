import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './pages/home'
import Home from './pages/home';
import Login from './pages/login'
import SignUp from './pages/signup'
import Cart from './pages/cart'
import NavBar from './components/Navbar';

import {CartProvider} from './context/cartContext';


function App() {
  return (
    <div className="App">


    <CartProvider>

    <Router>

      <NavBar />

      <Switch>
        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/sign-up">
          <SignUp/>
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>

      </Switch>
    </Router>
      </CartProvider>

    </div>
  );
}

export default App;
