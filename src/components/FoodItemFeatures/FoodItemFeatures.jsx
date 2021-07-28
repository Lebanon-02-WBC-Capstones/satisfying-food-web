import React from "react";
import PropTypes from "prop-types";

const FoodItemFeatures = ({ foodItem }) => {
  return (
    <div className="flex items-center justify-center box-content bg-gray-50 border-2 border-orange-500 drop-shadow-lg text-gray-900 font-bold h-4 p-4 rounded-full">
      <img src={foodItem.icon} className="w-6" />
      <span className="h-6 font-bold font-body text-lg text-center pl-2 text-black">
        {foodItem.title}
      </span>
    </div>
  );
};

FoodItemFeatures.PropTypes = {
  foodItem: {
    icon: PropTypes.string,
    title: PropTypes.string,
  },
};

export default FoodItemFeatures;