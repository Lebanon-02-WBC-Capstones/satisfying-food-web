import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Ur from "../../images/user.svg";
import X from "../../images/button-x.svg";
import { StateContext } from "../../StateProvider";

const Menu = () => {
  const [state, dispatch] = useContext(StateContext);

  const change = () => {
    state;
    dispatch({ type: "SET_MENU", menuDisp: false });
  };
  return (
    <div
      className={
        "w-full h-screen bg-ell-back bg-cover bg-centre absolute flex flex-col justify-between "
      }
    >
      <div className={" pt-8 text-white text-left pl-8 space-y-7 text-lg "}>
        <div className={"flex justify-between"}>
          <Link className={"pt-2"} to={"/"}>
            <p>Home</p>
          </Link>
          <div className={"pr-5"}>
            <Link to={"/signin"}>
              <img src={Ur} alt="User-icon" />
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/foodlists"}>
            <p>Food Lists</p>
          </Link>
        </div>
        <div>
          <Link to={"/filter"}>
            <p>Filter</p>
          </Link>
        </div>
        <div>
          <Link to={"/categories"}>
            <p>Categories </p>
          </Link>
        </div>
        <div>
          <Link to={"/favorites"}>
            <p>Favorites</p>
          </Link>
        </div>
        <div>
          <Link to={"/aboutus"}>
            <p>About Us</p>
          </Link>
        </div>
      </div>

      <div>
        <div className="text-center">
          <button onClick={change} className={"pb-5"}>
            <img src={X} alt="X-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
