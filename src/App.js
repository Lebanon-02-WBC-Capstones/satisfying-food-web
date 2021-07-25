import "./App.css";
import React from "react";
import Addrecipe from "./components/Addrecipe/Addrecipe.jsx";
import FoodItemFeatures from "./components/FoodItemFeatures/FoodItemFeatures.jsx";

function App() {
  const data1 = {
    Icon: "https://image.flaticon.com/icons/png/128/870/870620.png",
    Title: "250 cal",
  };

  const data = {
    Icon: "https://image.flaticon.com/icons/png/128/3375/3375049.png",
    Title: "3 portions",
  };
  const data2 = {
    Icon: "https://image.flaticon.com/icons/png/128/2784/2784459.png",
    Title: "45 min",
  };

  return (
    <div className="App">
      <header className="App-header">
        <p></p>

        <FoodItemFeatures data={data} />
        <FoodItemFeatures data={data1} />
        <FoodItemFeatures data={data2} />
        <Addrecipe />
      </header>
    </div>
  );
}

export default App;
