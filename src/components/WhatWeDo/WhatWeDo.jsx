import React from "react";
import idea from "./idea.svg";

function WhatWeDo() {
  return (
    <div className="flex flex-col items-center w-full h-72 shadow-md p-5 rounded-lg border">
      <img src={idea} alt="Heart" />
      <p className="text-3xl font-bold text-center text-orange-500 mt-2">
        What we do?
      </p>
      <div className="w-48 ml-3">
        <p className="text-xl mt-3">
          Our goal is to make cooking easier. With Satisfying Food, you can
          learn, share your recipes, and enjoy all kind of food.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
