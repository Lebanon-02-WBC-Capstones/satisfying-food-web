import "./App.css";
import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateContext } from "./StateProvider";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Menu/Navbar";
import FoodPage from "../src/pages/FoodItemsPage/FoodPage";
import AboutUs from "./pages/AboutUs/AboutUs";
function App() {
  const [state] = useContext(StateContext);
  let menDisp = state.menuDisp;
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <div>
            <Route path="/" exact />
            <Route path="/foodlists" />
            <Route path="/filter" />
            <Route path="/categories" />
            <Route path="/favorites" />
            <Route path="/signin" />
            {menDisp ? <Menu /> : <Navbar />}
            <Route path="/foods" component={FoodPage} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
