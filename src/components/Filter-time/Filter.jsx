import React from "react";
import "./style.css";
import { useState } from "react";
import PropTypes from "prop-types";
function Filter(Filter) {
  const [divClass, setClass] = useState("filter");
  let count = 0;
  return (
    <div id="parent">
      <div
        className={divClass + " shadow-lg rounded-lg"}
        onClick={() => {
          if (count % 2 != 0) setClass("clicked");
          else setClass("filter");
          count++;
        }}
      >
        <img src="https://image.flaticon.com/icons/png/128/714/714903.png" />{" "}
        <span> {Filter.Time} Min</span>
      </div>
    </div>
  );
}

Filter.defaultProps = {
  data: {
    Image: "https://image.flaticon.com/icons/png/512/1548/1548784.png",
    Title: "Not Found",
    id: "0",
  },
};
Filter.PropTypes = {
  data: PropTypes.string,
};
export default Filter;
