import React from "react";
import heart from "./like-heart.svg";

function WhyWeDoIt() {
  return (
    <div className="flex flex-col items-center w-full h-74 shadow-md p-5 rounded-lg border">
      <img src={heart} alt="Heart" />
      <p className="text-3xl font-bold text-center text-orange-500 mt-2">
        Why we do it?
      </p>
      <div className="w-full ml-3">
        <p className="text-xl mt-3">
          Our goal is to make cooking easier. With Satisfying Food, you can
          learn, share your recipes, and enjoy all kind of food.
        </p>
      </div>
    </div>
  );
}

export default WhyWeDoIt;
