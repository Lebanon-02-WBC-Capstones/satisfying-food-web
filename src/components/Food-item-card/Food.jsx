/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Food({ img, title, cal, time, id }) {
  let count = 0;
  const [image, setImage] = useState(
    "https://image.flaticon.com/icons/png/128/833/833300.png"
  );
  let history = useHistory();
  function handleClick(e) {
    if (e.target.id != "fav") {
      history.push("/food/" + id);
    }
  }
  return (
    <div
      className="bg-gray-300 w-40 h-56 rounded-lg shadow-2xl "
      id="main-card"
      onClick={handleClick}
    >
      <div id="img-container" className="bg-gray-300 w-full h-36 rounded-t-lg">
        <img src={img} className="rounded-t-lg w-full h-full" alt="" />
      </div>
      <div id="info-container" className="flex bg-gray-300">
        <div id="title" className="flex w-3/4 bg-gray-300">
          <p className="bg-gray-300 w-full font-medium pt-0.5 pl-1.5">
            {title}
          </p>
        </div>
        <div id="heart" className="w-1/4 bg-gray-300 flex content-center">
          <img
            src={image}
            id="fav"
            alt="Heart-icon"
            className="w-3/5 flex justify-center content-center mx-auto pt-px"
            onClick={() => {
              if (count % 2 == 0)
                setImage(
                  "https://image.flaticon.com/icons/png/128/833/833300.png"
                );
              else
                setImage(
                  "https://image.flaticon.com/icons/png/128/833/833472.png"
                );
              count++;
            }}
          />
        </div>
      </div>
      <div
        id="info"
        className="flex bg-gray-300 w-full h-12 justify-center items-center"
      >
        <div
          id="fire"
          className="flex h-full w-1/4 bg-gray-300 justify-center items-center pr-3 pt-2"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/870/870620.png"
            className="w-3/5 justify-center items-center"
          />
        </div>
        <div
          id="cal"
          className="flex h-full w-1/4 bg-gray-300 justify-center items-center pr-3.5 pt-2 text-sm whitespace-nowrap font-medium"
        >
          <p>{cal} Cal</p>
        </div>
        <div
          id="clocl"
          className="flex h-full w-1/4 bg-gray-300 justify-center items-center pr-1 pt-2"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/2784/2784459.png"
            className="w-3/5 justify-center items-center pr-1"
          />
        </div>
        <div
          id="time"
          className="flex h-full w-1/4 bg-gray-300 justify-center items-center pr-3 pt-2 text-sm whitespace-nowrap font-medium"
        >
          <p>{time} Min</p>
        </div>
      </div>
    </div>
  );
}
Food.defaultProps = {
  img: "https://image.flaticon.com/icons/png/512/1548/1548784.png",
  title: "Error",
  cal: "0",
  time: "0",
  id: "0",
};
Food.prototypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  cal: PropTypes.string,
  time: PropTypes.string,
};
export default Food;
