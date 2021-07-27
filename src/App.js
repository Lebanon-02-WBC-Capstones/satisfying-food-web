import "./App.css";
import React, { useContext } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateContext } from "./StateProvider";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Menu/Navbar";

function App() {
  const [state] = useContext(StateContext);
  let menDisp = state.menuDisp;
  return (
    <div>
      <Router>
        <Route path="/" exact />
        <Route path="/foodlists" />
        <Route path="/filter" />
        <Route path="/categories" />
        <Route path="/favorites" />
        <Route path="/aboutus" />
        <Route path="/signin" />
        {menDisp ? <Menu /> : <Navbar />}
      </Router>
    </div>
  );
}

export default App;
