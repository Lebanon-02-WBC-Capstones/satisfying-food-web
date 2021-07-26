import React from "react";
import PropTypes from "prop-types";

const FoodItemFeatures = (Fooditem) => {
  return (
    <div className="flex items-center justify-center box-content bg-gray-50 border-2 border-orange-500 drop-shadow-lg text-gray-900 font-bold h-4 w-full p-4 rounded-full">
      <img src={Fooditem.Features.Icon} className="w-6" />
      <span className="h-6 font-bold font-body text-lg text-center pl-2">
        {Fooditem.Features.Title}
      </span>
    </div>
  );
};

FoodItemFeatures.PropTypes = {
  Features: PropTypes.object,
};

export default FoodItemFeatures;
