import "./App.css";
import React, { useContext } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateContext } from "./StateProvider";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Menu/Navbar";
import FoodPage from "../src/pages/FoodItemsPage/FoodPage";
import HomePage from "./pages/HomePage/HomePage";
import FoodDetails from "./pages/FoodDetailsPage/FoodDetails";
import AboutUs from "./pages/AboutUs/AboutUs";
import FilterPage from "./pages/FilterPage/FilterPage";
function App() {
  const [state] = useContext(StateContext);
  let menDisp = state.menuDisp;
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/food/:id" component={FoodDetails} />
          {menDisp && <Menu />}
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/filter" />
            <Route path="/categories" />
            <Route path="/favorites" />
            <Route path="/aboutus" />
            <Route path="/signin" />
            {!menDisp && <Navbar />}
            <Route path="/foods" component={FoodPage} />
            <Route path="/filter" component={FilterPage} />
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
