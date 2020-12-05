import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';  // imported hook->header
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./login/login";

function App() {
  return (
    // BEM convention(naming convention to use for styling)
    <Router>
      <div className="app">
        <Switch>
          <Route path='/signin'>
            {/* <h1>sfgfg</h1> */}
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
