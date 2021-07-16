import React from "react";
const Addrecipe = () => {
  return (
    <div className="grid grid-cols-3 ">
      <div className=" col-start-1 box-content bg-yellow-200 text-red-500 font-bold h-50 w-20 p-4 rounded-l-lg">
        <p className="leading-none text-left py-4">
          Do you have any tasty recipe?
        </p>
      </div>
      <div className=" col-start-2 box-content bg-yellow-200 text-red-500 font-bold h-50 w-28  ">
        <img
          src="https://www.goalcast.com/wp-content/uploads/2019/02/alyson-mcphee-499812-unsplash-1068x707.jpg"
          className=" object-cover h-full w-full"
        ></img>
      </div>
      <div className=" col-start-3 w-20 box-content bg-red-500 text-yellow-200 font-bold h-50 w-20 p-4 rounded-r-lg">
        <p className=" leading-none text-left  py-4">Share them with us!</p>
        <button className="font-bold bg-yellow-200  rounded-lg text-red-500 text-base py-1 px-3">
          Share
        </button>
      </div>
    </div>
  );
};

export default Addrecipe;
