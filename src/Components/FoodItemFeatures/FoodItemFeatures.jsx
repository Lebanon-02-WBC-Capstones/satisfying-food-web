import React from "react";
import PropTypes from "prop-types";

const FoodItemFeatures = (Fooditem) => {
  return (
    <div className="flex items-center  box-content bg-gray-50 border-2 border-orange-500 drop-shadow-lg text-gray-900 font-bold h-4   w-32 p-4 rounded-full ">
      <img src={Fooditem.data.Icon} className="w-6" />
      <span className="w-32 h-6 font-bold  font-body text-lg ">
        {Fooditem.data.Title}
      </span>
    </div>
  );
};

FoodItemFeatures.PropTypes = {
  data: PropTypes.object,
};

export default FoodItemFeatures;
