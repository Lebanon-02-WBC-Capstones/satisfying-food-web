// import "./App.css";
import React from "react";
import Category from "./components/Category card/Category";
function App() {
  let obj = {
    Image: "https://image.flaticon.com/icons/png/128/3823/3823393.png",
    id: "5",
    Title: "Veggie",
  };
  return (
    <div className="App">
      <header className="App-header">
        <br />

        <Category data={obj} />
      </header>
    </div>
  );
}

export default App;
