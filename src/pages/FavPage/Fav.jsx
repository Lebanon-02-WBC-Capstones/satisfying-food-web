/* eslint-disable no-unused-vars */
import { React } from "react";
import Food from "../../components/Food-item-card/Food";
import {useState} from "react";
function FavoritesPage() {

  const storage = window.localStorage;
  const fav = JSON.parse(storage.getItem("fav"))
    ? JSON.parse(storage.getItem("fav"))
    : [];
let favArray =fav.map((item) => (
  <Food
    key={item.title}
    id={item.id}
    img={item.img}
    title={item.title}
    time={item.time}
    cal={item.cal}
  />
));
  return (
    <div>
      <div className="w-full h-full p-2">
        <h1 className="text-orange-500 font-bold font-body py-8 px-8 text-4xl">
          Favorites
        </h1>

        <div id="align-food-div-center" className="flex flex-wrap -m-2">
          
        {favArray}
        
        </div>
      </div>
        
      </div>
  
  );
}

export default FavoritesPage;