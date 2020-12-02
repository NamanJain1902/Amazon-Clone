import React from "react";
import './App.css';
import Header from './Header';  // imported hook->header

function App() {
  return (
    // BEM convention(naming convention to use for styling)
    <div className="app">
      <Header />
      <Home />
    </div>

  );
}

export default App;