 import React from "react";
 import PropTypes from "prop-types";

const Fooditem =(Fooditem) => {

  return (
    <div className="flex items-center  box-content bg-gray-50 border-2 border-orange-500 drop-shadow-lg text-gray-900 font-bold h-4   w-32 p-4 rounded-full nay"  >

      <img src={Fooditem.data.Icon} className="w-6"/>
      <span className="w-32 h-6 font-bold  font-body text-lg ">{Fooditem.data.Title}</span>
    </div>
  );
};
// Fooditem.defaultProps={
//   data: {Icon:"https://image.flaticon.com/icons/png/128/870/870620.png",
//   Title:"250 cal",
//        }
//   };
  // Fooditem.defaultProps={
  //   data: {Icon:"https://image.flaticon.com/icons/png/128/3375/3375049.png",
  //   Title:"3 portions",
  //        }
  //   };
    Fooditem.defaultProps={
      data: {Icon:"https://image.flaticon.com/icons/png/128/2784/2784459.png",
      Title:"30 min",
           }
      };

//https://image.flaticon.com/icons/png/128/3375/3375049.png
//https://image.flaticon.com/icons/png/128/870/870620.png
//https://image.flaticon.com/icons/png/128/2784/2784459.png

Fooditem.PropTypes = {
        data:PropTypes.object
      };

export default Fooditem;
/* Rectangle 47 */


