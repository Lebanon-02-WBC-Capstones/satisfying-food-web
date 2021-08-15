/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import {useState} from "react";
function Category({ image, title, cat, getCat }) {
  let count=0;
  let notClicked= "rounded-lg shadow-2xl w-24 h-full text-yellow-500 bg-gray-100 py-1 m-2 hover:shadow-xl transition-all";
  let clicked="rounded-lg shadow-2xl w-24 text-white h-full bg-yellow-500 py-1 m-2 hover:shadow-xl transition-all ";
  const [catStyle,setCatStyle]= useState(notClicked);
  return (
    <div
      className={catStyle} onClick={() => {
        if (count % 2 != 0) setCatStyle(clicked);
        else setCatStyle(notClicked);
        count++;
      }}>
      <img
        src={image}
        alt="category-icon"
        className="w-full h-8 flex justify-self-center object-contain"
        name={cat}
      />
      <p className="text-sm flex justify-center align-center font-semibold text-center">
        {title}
      </p>
    </div>
  );
}
Category.defaultProps = {
  image: "https://image.flaticon.com/icons/png/512/1548/1548784.png",
  title: "Not Found",
  id: "0",
};

Category.prototypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Category;