import React from "react";
import { Link } from "react-router-dom";
import Ur from "../images/user.svg";
import X from "../images/B-x.svg";

const Menu = () => {
  return (
    <div
      className={
        "w-full h-screen bg-ell-back bg-cover flex flex-col justify-between "
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
        <div>
          <button className={"pb-5"}>
            <img src={X} alt="X-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
