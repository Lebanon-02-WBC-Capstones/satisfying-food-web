/* eslint-disable react/prop-types */
/* eslint no-unused-vars : "off" */
/* eslint-disable react/jsx-key */
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Search from "../SearchBar/SearchBar";
import Category from "../CategoryCard/Category";
import Food from "../Food-item-card/Food";
import { BrowserRouter as Router, Route } from "react-router-dom";
function Page() {
  const FoodArray = [
    {
      img: "https://blog.radissonblu.com/wp-content/uploads/2019/05/GettyImages-493613257.jpg",
      title: "Kibbe",
      id: 10,
      cal: "260",
      time: "10",
      category: "meat",
    },
    {
      img: "https://www.abouther.com/sites/default/files/2018/05/11/shutterstock_248472739.jpg",
      title: "Hummus",
      time: "15",
      cal: "178",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/16/f4/0c/57/half-zaatar-half-cheese.jpg",
      title: "Manakish",
      cal: "260",
      time: "70",
    },
    {
      img: "https://www.fadiscuisine.com/wp-content/uploads/2016/12/tabouleh.jpg",
      title: "Tabouleh",
      cal: "136",
      time: "30",
    },
    {
      img: "https://i0.wp.com/www.arabamerica.com/wp-content/uploads/2021/01/knafeh-dubai-food.jpg",
      title: "Knafe",
      cal: "230",
      time: "40",
    },
    {
      img: "https://280337.smushcdn.com/1648336/wp-content/uploads/2019/09/learning-historical-origins-baklava.jpg",
      title: "Baklava",
      cal: "120",
      time: "63",
    },
  ];
  const Foods = FoodArray.map((item) => (
    <Food
      {...{ img: item.img, title: item.title, cal: item.cal, time: item.time }}
    />
  ));

  return (
    <Router>
      <div className="">
        <div className="w-full h-11 "></div>
        <div className="w-full h-9  flex align-center justify-center text-yellow-500 text-3xl  font-semibold flex-nowarp">
          <p>Let&apos;s Eat Quality Food</p>
        </div>
        <div
          id="search"
          className="flex w-full h-full align-center justify-center mt-4 "
        >
          <Search />
        </div>
        <div
          id="categories"
          className="w-full h-20  flex   overflow-x-scroll overflow-y-hidden pb-4"
        >
          <Category
            {...{
              title: "Veggies",
              image:
                "https://image.flaticon.com/icons/png/128/4163/4163765.png",
            }}
          />
          <Category
            {...{
              title: "Meat",
              image: "https://image.flaticon.com/icons/png/128/869/869676.png",
            }}
          />
          <Category
            {...{
              title: "Fish",
              image:
                "https://image.flaticon.com/icons/png/128/3347/3347364.png",
            }}
          />
          <Category
            {...{
              title: "Dessert",
              image: "https://image.flaticon.com/icons/png/128/992/992717.png",
            }}
          />
          <Category
            {...{
              title: "Fruits",
              image:
                "https://image.flaticon.com/icons/png/128/1625/1625048.png",
            }}
          />
          <Category
            {...{
              title: "Drinks",
              image:
                "https://image.flaticon.com/icons/png/128/3165/3165589.png",
            }}
          />
          <Category
            {...{
              title: "Breakfast",
              image:
                "https://image.flaticon.com/icons/png/128/3480/3480823.png",
            }}
          />
          <Category
            {...{
              title: "Lunch",
              image:
                "https://image.flaticon.com/icons/png/128/2276/2276931.png",
            }}
          />
          <Category
            {...{
              title: "Dinner",
              image:
                "https://image.flaticon.com/icons/png/128/3480/3480618.png",
            }}
          />
        </div>
        <div id="align-food-div-center" className="flex align-center">
          <div className="w-full flex flex-wrap content-around justify-center ">
            {Foods}
          </div>
        </div>
      </div>
    </Router>
  );
}
export default Page;
