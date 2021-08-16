import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Bu from "../../images/burger.svg";
import { StateContext } from "../../StateProvider";

const Navbar = () => {
  const [state, dispatch] = useContext(StateContext);

  const change = () => {
    state;
    dispatch({ type: "SET_MENU", menuDisp: true });
  };
  return (
    <div className={"w-full h-12 bg-yellow-500 text-left flex items-center"}>
      <div className={"pt-1 pl-3 flex w-full justify-between items-center"}>
        <div
          className="border-t-4 border-b-4 border-white w-8 h-7 pt-2 pb-2"
          onClick={change}
        >
          <h1 className="border-t-4 border-white w-8"></h1>
        </div>
        <Link to="/">
          <div className="flex w-44 cursor-pointer">
            <h1 className="font-semibold text-lg text-white mr-2">
              Satisfying Food
            </h1>
            <img src={Bu} alt="Burger-menu-icon" className="h-8" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
