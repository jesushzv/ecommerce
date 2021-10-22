import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './pages/home'
import Home from './pages/home';
import Login from './pages/login'
import SignUp from './pages/signup'
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
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

      </Switch>
    </Router>
    </div>
  );
}

export default App;
