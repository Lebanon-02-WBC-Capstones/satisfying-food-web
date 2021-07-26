import "./App.css";
import React from "react";
import TeamCardItem from "./Components/TeamCardItem/TeamCardItem.jsx";

function App() {
  const person = {
    name: "Osama Abdullah",
    role: "Leader",
    imageURL: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  return (
    <div>
      <header>
        <TeamCardItem person={person} />
      </header>
    </div>
  );
}

export default App;
