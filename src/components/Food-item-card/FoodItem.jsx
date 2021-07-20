import React from "react"; //17.0.2
import  { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import {BrowserRouter as Router,Link} from "react-router-dom";
function FoodItem(FoodItem) {
  let count=0;
  const [image,setImage] = useState("https://image.flaticon.com/icons/png/128/833/833300.png");
  
  return (
  
    <Router>
    <div className="rounded-lg overflow-hidden shadow-2xl" id="card">
        
        <div className="img-container" id="container" >
        <Link to={"/food/"+ FoodItem.data.id}>
        <img src={FoodItem.data.Image} alt="category-icon" />
        </Link>
        <div className="foodItemTitle"><span className="title">{FoodItem.data.Title}</span>
        
        <img src={image} className="heart" onClick={ ()=>{
          if(count%2==0)
          setImage("https://image.flaticon.com/icons/png/128/833/833300.png");
          else
          setImage("https://image.flaticon.com/icons/png/128/833/833472.png");
          count++;
        }}/>
        </div>

        <div className="fireIcon">
          <img src="https://image.flaticon.com/icons/png/128/870/870620.png" className="icons"/>
          <span>{FoodItem.data.calories} Cal</span>
          <img src="https://image.flaticon.com/icons/png/128/2784/2784459.png" className="icons"/>
          <span>
          
          {FoodItem.data.minutes} Min 
          
          
          </span>
        </div>
        </div>
        </div>
        </Router>
  );
}
FoodItem.defaultProps={
  data: {Image:"https://image.flaticon.com/icons/png/512/1548/1548784.png",
  Title:"Not Found",
  calories:"0",minutes:"0",
  id: "0"}
  };
  FoodItem.PropTypes = {
      data:PropTypes.object
    };
export default FoodItem;

