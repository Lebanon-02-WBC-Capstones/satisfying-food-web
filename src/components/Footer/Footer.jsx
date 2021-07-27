import React from "react";
import Fb from "../../images/facebook.svg";
import In from "../../images/instagram.svg";
import Yt from "../../images/youtube.svg";
import Tw from "../../images/Twitter.svg";
import Ar from "../../images/arrow.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={"bg-black w-50px h-90 mt-auto rounded"}>
      <div className={"pt-3"}>
        <p className={"text-white pl-5 text-2xl"}>Follow Us </p>
      </div>
      <div className={"pt-2 pl-5 pr-40 flex justify-between"}>
        <a href="#" target="_blank">
          <img className={"hover:bg-yellow-500"} src={Fb} alt="Facebook-Icon" />{" "}
        </a>
        <a href="#" target="_blank">
          <img
            className={"hover:bg-yellow-500"}
            src={In}
            alt="Instagram-Icon"
          />{" "}
        </a>
        <a href="#" target="_blank">
          <img className={"hover:bg-yellow-500"} src={Tw} alt="Twitter-Icon" />{" "}
        </a>
        <a href="#" target="_blank">
          <img className={"hover:bg-yellow-500"} src={Yt} alt="Youtube-Icon" />{" "}
        </a>
      </div>
      <div className={"pt-8 text-white pl-5 text-lg"}>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to={"/foodlists"}>
          <p>Food Lists</p>
        </Link>
        <Link to={"/filter"}>
          <p>Filter</p>
        </Link>
        <Link to={"/categories"}>
          <p>Categories </p>
        </Link>
        <Link to={"/favorites"}>
          <p>Favorites</p>
        </Link>
        <Link to={"/aboutus"}>
          <p>About Us</p>
        </Link>
      </div>

      <div className={"pt-7 text-white pl-5 text-xs flex justify-between"}>
        <p className={"pt-7"}>&copy;2021 Satisfying Food , Inc</p>
        <a className={"pb-5 pr-4"} href="#" target="_blank">
          <img
            className={"hover:bg-yellow-500 "}
            src={Ar}
            alt="Facebook-Icon"
          />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
