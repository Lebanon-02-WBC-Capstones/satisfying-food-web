import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function Category(Category) {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-2xl w-16 h-12 bg-gray-200"
      id="card"
    >
      <div className="img-container" id="container">
        <img
          src={Category.data.Image}
          alt="category-icon"
          className="m-auto w-2/5"
        />
        <div className="text-xs mb-1 text-center text-yellow-500" id="title">
          {Category.data.Title}
        </div>
      </div>
    </div>
  );
}
Category.defaultProps = {
  data: {
    Image: "https://image.flaticon.com/icons/png/512/1548/1548784.png",
    Title: "Not Found",
    id: "0",
  },
};
Category.PropTypes = {
  data: PropTypes.object,
};
export default Category;
