/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
function FilterTime({ time }) {
  let count = 0;
  let notClicked =
    "shadow-lg rounded-lg bg-gray-100 flex flex-col text-sm h-8 w-12 justify-center items-center border-solid border border-yellow-600 border-opacity-40 text-yellow-600";
  let clicked =
    "shadow-lg rounded-lg bg-yellow-600 flex flex-col text-sm h-8 w-12 justify-center items-center border-solid border border-yellow-700 text-white";
  const [isClickedStyle, setIsClickedStyle] = useState(notClicked);
  return (
    <div
      className="mt-7 m-px"
      onClick={() => {
        if (count % 2 != 0) setIsClickedStyle(clicked);
        else setIsClickedStyle(notClicked);
        count++;
      }}
    >
      <div className={isClickedStyle}>
        <img
          src="https://image.flaticon.com/icons/png/128/714/714903.png"
          className="w-8 h-8 static -mt-8 "
        />
        <span className="p-px text-xs font-semibold"> {time} Min</span>
      </div>
    </div>
  );
}

FilterTime.defaultProps = {
  time: "0",
};
FilterTime.PropTypes = {
  time: PropTypes.string,
};
export default FilterTime;
