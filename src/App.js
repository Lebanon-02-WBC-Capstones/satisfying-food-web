import "./App.css";
import React from "react";

import FoodItemFeatures from "./components/FoodItemFeatures/FoodItemFeatures.jsx";

function App() {
  const Features1 = {
    Icon: "https://image.flaticon.com/icons/png/128/870/870620.png",
    Title: "250 cal",
  };

  return (
    <div className="App">
      <header className="App-header">
        <FoodItemFeatures Features={Features1} />
      </header>
    </div>
  );
}

export default App;
