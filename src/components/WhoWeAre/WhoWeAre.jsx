import React from "react";
import lap from "./laptop.svg";

function WhoWeAre() {
  return (
    <div className="flex flex-col items-center w-full mt-5">
      <img src={lap} alt="Laptop" />
      <p className="text-3xl font-bold text-center text-orange-500 mt-2">
        Who we are?
      </p>
      <p className="text-xl text-center mt-2">
        We are a team of 7 developers, who are passionate about food!
      </p>
    </div>
  );
}

export default WhoWeAre;
