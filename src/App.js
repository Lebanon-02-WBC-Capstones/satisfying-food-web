import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

import FoodItemFeatures from "./components/FoodItemFeatures/FoodItemFeatures.jsx";

function App() {
  const feat = {
    icon: "https://image.flaticon.com/icons/png/128/870/870620.png",
    title: "250 cal",
  };
  return (
    <div>
      <Router>
        <FoodItemFeatures foodItem={feat} />
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
