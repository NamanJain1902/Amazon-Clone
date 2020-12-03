import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';  // imported hook->header
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    // BEM convention(naming convention to use for styling)
    <Router>
      <div className="app">
      <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
