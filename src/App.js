import "./App.css";
import React from "react";
// import PropTypes from "prop-types";
import TeamCardItem from "./Components/team-card-item/team-card-item.jsx";
// import Test from "./Components/team-card-item/test";

function App() {
  const person = {
    name: "Ahmad",
    role: "Developer",
    imageURL: "https://image.flaticon.com/icons/png/128/2922/2922510.png"
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
