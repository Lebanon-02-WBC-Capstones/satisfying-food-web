/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Foodd({ img, title, cal, time, id, categories, ingredients }) {
  const storage = window.localStorage;
  var fav = JSON.parse(storage.getItem("fav"))
    ? JSON.parse(storage.getItem("fav"))
    : [];
  const currentItem = {
    title: title,
    img: img,
    cal: cal,
    time: time,
    id: id,
    categories: categories,
    ingredients: ingredients,
  };
  const removeItem = (array, item) => {
    const index = array.findIndex(
      (element) => JSON.stringify(element) == JSON.stringify(item)
    );
    if (index != -1) {
      array.splice(index, 1);
      return array;
    }
  };
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
      className="bg-white w-40 h-56 rounded-lg shadow-2xl mt-6 mr-3 ml-3"
      id="main-card"
      onClick={handleClick}
    >
      <div id="img-container" className="bg-white w-full h-36 rounded-t-lg">
        <img src={img} className="rounded-t-lg w-full h-full" alt="" />
      </div>
      <div id="info-container" className="flex bg-white  ">
        <div id="title" className="flex w-3/4 bg-white">
          <p className="bg-white w-full font-medium pt-2 pl-1.5">{title}</p>
        </div>
        <div id="heart" className="w-1/4 bg-white flex content-center">
          <img
            src={image}
            id="fav"
            alt="Heart-icon"
            className="w-3/5 flex justify-center content-center mx-auto pt-2"
            onClick={() => {
              if (count % 2 == 0) {
                setImage(
                  "https://image.flaticon.com/icons/png/128/833/833300.png"
                );

                fav = JSON.parse(storage.getItem("fav"))
                  ? JSON.parse(storage.getItem("fav"))
                  : [];

                removeItem(fav, currentItem);
                storage.setItem("fav", JSON.stringify(fav));
              } else {
                setImage(
                  "https://image.flaticon.com/icons/png/128/833/833472.png"
                );
                fav.push(currentItem);
                storage.setItem("fav", JSON.stringify(fav));
              }
              count++;
              fav = JSON.parse(storage.getItem("fav"))
                ? JSON.parse(storage.getItem("fav"))
                : [];
              //console.log(fav);
            }}
          />
        </div>
      </div>
      <div
        id="info"
        className="flex bg-white w-full h-12 justify-center items-center rounded-lg"
      >
        <div
          id="fire"
          className="flex h-full w-1/4 bg-white justify-center items-center rounded-lg pr-3 pt-2"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/870/870620.png"
            className="w-3/5 justify-center items-center rounded-lg"
          />
        </div>
        <div
          id="cal"
          className="rounded-lg flex h-full w-1/4 bg-white justify-center items-center pr-3.5 pt-2 text-sm whitespace-nowrap font-medium"
        >
          <p>{cal} Cal</p>
        </div>
        <div
          id="clocl"
          className="rounded-lg flex h-full w-1/4 bg-white justify-center items-center pr-1 pt-2"
        >
          <img
            src="https://image.flaticon.com/icons/png/128/2784/2784459.png"
            className="rounded-lg w-3/5 justify-center items-center pr-1"
          />
        </div>
        <div
          id="time"
          className="rounded-lg flex h-full w-1/4 bg-white justify-center items-center pr-3 pt-2 text-sm whitespace-nowrap font-medium"
        >
          <p>{time} Min</p>
        </div>
      </div>
    </div>
  );
}
Foodd.defaultProps = {
  img: "https://image.flaticon.com/icons/png/512/1548/1548784.png",
  title: "Error",
  cal: "0",
  time: "0",
  id: "0",
};
Foodd.prototypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  cal: PropTypes.string,
  time: PropTypes.string,
};
export default Foodd;
