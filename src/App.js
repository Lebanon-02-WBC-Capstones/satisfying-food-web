/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateContext } from "./StateProvider";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Menu/Navbar";
import Page from "./components/FilterTime/Page";
import Food from "./components/Food-item-card/Food";
function App() {
  const [state] = useContext(StateContext);
  let menDisp = state.menuDisp;
  return (
    <div>
      <Router>
        <Page />
      </Router>
    </div>
  );
}

export default App;
