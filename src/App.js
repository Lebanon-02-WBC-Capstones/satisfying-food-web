import "./App.css";
import React from "react";
import Addrecipe from "./Components/Addrecipe/Addrecipe.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the capstone projects, this is your initial react app</p>
        <Addrecipe />
      </header>
    </div>
  );
}

export default App;
