import React from "react";
const AddRecipe = () => {
  return (
    <div className="flex justify-center">
      <div className="box-content bg-yellow-200 text-red-500 font-bold h-50 w-20 p-4 rounded-l-lg">
        <p className="leading-none text-left py-4">
          Do you have any tasty recipe?
        </p>
      </div>
      <div className="box-content bg-yellow-200 text-red-500 font-bold h-50 w-28  ">
        <img
          src="https://www.goalcast.com/wp-content/uploads/2019/02/alyson-mcphee-499812-unsplash-1068x707.jpg"
          className=" object-cover h-full w-full"
        ></img>
      </div>
      <div className="w-20 box-content bg-red-500 font-bold h-50 w-20 p-4 rounded-r-lg">
        <div className="flex flex-col justify-center">
          <p className=" leading-none text-left text-yellow-200 py-4">
            Share them with us!
          </p>

          <button className="bg-yellow-200 w-14  rounded-lg text-red-500 font-bold text-sm h-7 ">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
