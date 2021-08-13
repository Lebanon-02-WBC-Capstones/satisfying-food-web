import React, { useState } from "react";
import { useParams } from "react-router";
import back from "./backward.svg";
import fire from "../../components/PopularFoodItemCard/fire.svg";
import time from "../../components/PopularFoodItemCard/time.svg";
import portion from "./portion.svg";
import Category from "../../components/CategoryCard/Category";
import Food from "../../components/Food-item-card/Food";
import * as foodData from "../../foodData";
import { useHistory } from "react-router-dom";

function FoodDetails() {
  const history = useHistory();

  const { id } = useParams();
  console.log(id);
  const currentFood = foodData.FoodArray.find(
    (currentFood) => currentFood.id === id
  );
  const similarRecipes = foodData.FoodArray.filter(
    (item) => item.category[0] === currentFood.category[0]
  );

  const favArrayContains = (food) => {
    const favArray = JSON.parse(localStorage.getItem("fav"))
      ? JSON.parse(window.localStorage.getItem("fav"))
      : [];
    return favArray.find((item) => item.id === food.id) ? true : false;
  };

  const [favorite, setFavorite] = useState(favArrayContains(currentFood));
  const [heartImage, setHeartImage] = useState(
    favorite
      ? "https://image.flaticon.com/icons/png/128/833/833472.png"
      : "https://image.flaticon.com/icons/png/128/833/833300.png"
  );

  const removeItem = (array, item) => {
    const index = array.findIndex((element) => element.id === item.id);
    if (index != -1) {
      array.splice(index, 1);
      return array;
    }
  };

  const handleHeartClick = () => {
    const favArray = JSON.parse(window.localStorage.getItem("fav"))
      ? JSON.parse(window.localStorage.getItem("fav"))
      : [];
    if (!favorite) {
      setHeartImage("https://image.flaticon.com/icons/png/128/833/833472.png");
      setFavorite(true);
      favArray.push(currentFood);
      localStorage.setItem("fav", JSON.stringify(favArray));
    } else {
      setHeartImage("https://image.flaticon.com/icons/png/128/833/833300.png");
      setFavorite(false);
      removeItem(favArray, currentFood);
      localStorage.setItem("fav", JSON.stringify(favArray));
    }
  };

  return (
    <div className="">
      <div className="relative w-100">
        <img
          src={currentFood.img}
          alt="Laptop"
          className="w-full h-auto rounded-br-xl rounded-bl-xl"
        />
        <img
          src={back}
          alt=""
          className="absolute top-px left-px w-5 h-5 ml-1 mt-3"
          onClick={() => history.goBack()}
        />
        <img
          src={heartImage}
          alt=""
          className="absolute top-px right-px w-6 h-6 mr-3 mt-3"
          onClick={handleHeartClick}
        />
      </div>
      <h1 className="text-2xl font-semibold ml-4 mt-3">{currentFood.title}</h1>
      <div className="m-4 mb-8">
        <div className="flex justify-between">
          <div className="flex items-center w-26 h-9 rounded-full border-2 border-orange-500 px-2 shadow-sm">
            <img src={fire} alt="calories" className="w-5 h-5 mr-3" />
            <p className="text-sm font-semibold">{currentFood.cal} cal</p>
          </div>
          <div className="flex items-center w-26 h-9 rounded-full border-2 border-orange-500 px-2 shadow-sm">
            <img src={time} alt="calories" className="w-5 h-5 mr-3 mt-1" />
            <p className="text-sm font-semibold">{currentFood.time} min</p>
          </div>
          <div className="flex items-center w-26 h-9 rounded-full border-2 border-orange-500 px-2 shadow-sm">
            <img src={portion} alt="calories" className="w-5 h-5 mr-2" />
            <p className="text-sm font-semibold"> 1 portion</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold ml-4 mt-3">Categories</h1>
        <div className="m-4 ml-2 mb-8 flex flex-wrap">
          {currentFood.category.map((category) => (
            <Category
              key={category}
              image={
                foodData.categoryArray.find((item) => item.title === category)
                  .image
              }
              title={category}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold ml-4 mt-3">Ingredients</h1>
        <div className="m-4 ml-2 mb-8 flex flex-wrap">
          {currentFood.ingredients.map((ing) => (
            <Category key={ing} image={portion} title={ing} />
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold ml-4 mt-3">Recipe</h1>
        <div className="ml-4 mt-3 flex">
          <p className="mr-2">1.</p>
          <p>
            Combine some milk , a cup of frozen strawberries and half of a
            frozen banana in a blender. Cover and blend until smooth.
          </p>
        </div>
        <div className="ml-4 mt-3 flex">
          <p className="mr-2">2.</p>
          <p>
            Transfer mixture to a serving bowl. Top with additional
            strawberries, coconut chips, chia seeds, and fresh blueberries.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold ml-4 mt-3">Similar Recipes</h1>
        <div className="w-full flex overflow-auto pb-4 ml-1">
          {similarRecipes.map((rec) => {
            if (rec.title !== currentFood.title) {
              return (
                <Food
                  key={rec.title}
                  id={rec.id}
                  img={rec.img}
                  title={rec.title}
                  time={rec.time}
                  cal={rec.cal}
                  category={rec.category[0]}
                  ingredients={rec.ingredients}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
