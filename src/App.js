import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact />
        <Route path="/foodlists" />
        <Route path="/filter" />
        <Route path="/categories" />
        <Route path="/favorites" />
        <Route path="/aboutus" />
        <Footer />
      </Router>
    </div>
  );
}

export default App;