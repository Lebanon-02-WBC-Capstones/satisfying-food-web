import React, { useContext } from "react";
import Bu from "../../images/burger.svg";
import { StateContext } from "../../StateProvider";

const Navbar = () => {
  const [state, dispatch] = useContext(StateContext);

  const change = () => {
    state;
    dispatch({ type: "SET_MENU", menuDisp: true });
  };
  return (
    <div className={"w-full h-12 bg-yellow-500 text-left "}>
      <div className={"pt-1 pl-4"}>
        <button onClick={change}>
          <img src={Bu} alt="Burger-menu-icon" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
