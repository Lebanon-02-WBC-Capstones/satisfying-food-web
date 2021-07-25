import "./App.css";
import React from "react";
import TeamCardItem from "./components/TeamCardItem/TeamCardItem.jsx";

function App() {
  const person = {
    name: "Osama Abdullah",
    role: "Leader",
    imageURL: "https://image.flaticon.com/icons/png/128/2922/2922510.png",
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
