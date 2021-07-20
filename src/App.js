import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar";
// import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact />
        <Route path="/foodlists" />
        <Route path="/filter" />
        <Route path="/categories" />
        <Route path="/favorites" />
        <Route path="/aboutus" />
        <Route path="/signin" />
        <Navbar />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
