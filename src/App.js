import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const person = {
    name: "Osama Abdullah",
    role: "Leader",
    imageURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

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
