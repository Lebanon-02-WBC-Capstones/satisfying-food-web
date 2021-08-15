import React from "react";
import idea from "./idea.svg";

function WhatWeDo() {
  return (
    <div className="flex flex-col items-center w-full h-74 shadow-md p-5 rounded-lg border">
      <img src={idea} alt="Heart" />
      <p className="text-3xl font-bold text-center text-orange-500 mt-2">
        What we do?
      </p>
      <div className="w-full ml-3">
        <p className="text-xl mt-3">
          In order to teach you how to be satisfied with your foods, we have
          chosen the best, the easiest, and most appropriate way to cook the
          best dishes for you.
        </p>
      </div>
    </div>
  );
}

export default WhatWeDo;
