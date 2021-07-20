import React from "react";
import Bu from "../images/burger.svg";

const Navbar = () => {
  return (
    <div className={"w-full h-12 bg-yellow-500 text-left "}>
      <div className={"pt-1 pl-4"}>
        <button>
          <img src={Bu} alt="Burger-menu-icon" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
