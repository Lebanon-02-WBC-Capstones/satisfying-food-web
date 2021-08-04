import React from "react";
import PropTypes from "prop-types";
function Category({ image, title }) {
  return (
    <div className="rounded-lg shadow-2xl w-24 h-full bg-gray-100 py-1 m-2 hover:shadow-xl transition-all flex-none content-around">
      <img
        src={image}
        alt="category-icon"
        className="w-full h-8 flex justify-self-center object-contain"
      />
      <p className="text-sm flex justify-center align-center font-semibold text-center text-yellow-500">
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
