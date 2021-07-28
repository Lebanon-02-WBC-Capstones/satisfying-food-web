import React from "react";
import PropTypes from "prop-types";
function Category(category) {
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl w-20 h-12 bg-gray-300" id="card">
        <div className="img-container grid justify-items-stretch bg-gray-300" id="container">
        <img src={category.data.Image} alt="category-icon" className="w-2/5 flex justify-self-center" />
        <div className="bg-white text-xs mb-1 font-bold text-center text-yellow-500 bg-gray-300 flex justify-center" id="title">
        {category.data.Title}
        </div>
        </div>
      </div>
    </div>
  );
}
Category.defaultProps={
  
  data:{Image:"https://image.flaticon.com/icons/png/512/1548/1548784.png",
  Title:"Not Found",
  id: "0"
}};
  Category.PropTypes = {
      data:PropTypes.object
    };
export default Category;
