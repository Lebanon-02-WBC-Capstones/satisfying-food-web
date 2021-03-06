import React from "react";
import PropTypes from "prop-types";
import fire from "./fire.svg";
import time from "./time.svg";

function PopularFoodItemCard(props) {
  const { food } = props;

  return (
    <div className="flex flex-col items-center shadow-md rounded-lg w-32 h-48 flex-none m-2">
      <img
        src={food.image}
        alt={food.name}
        className="rounded-full shadow-md mb-1 w-28 h-28 object-cover"
      />
      <p className="text-xs font-bold mb-1">{food.title}</p>
      <div className="flex justify-between">
        <div className="mr-2">
          <img src={fire} alt="calories" className="mb-1" />
          <img src={time} alt="duration" />
        </div>
        <div>
          <p className="text-xs font-bold mb-1">{food.calories} cal</p>
          <p className="text-xs font-bold">{food.duration} min</p>
        </div>
      </div>
    </div>
  );
}

PopularFoodItemCard.PropTypes = {
  PopularFoodItemCard: PropTypes.object,
};

export default PopularFoodItemCard;
