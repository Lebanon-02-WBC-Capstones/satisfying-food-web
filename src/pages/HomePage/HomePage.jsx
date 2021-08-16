import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Addrecipe from "../../components/Addrecipe/Addrecipe";
import SubscribeToNewsLetter from "../../components/SubscribeToNewsLetter/SubscribeToNewsLetter";
import PopularFoodItemCard from "../../components/PopularFoodItemCard/PopularFoodItemCard";
import Header from "../../components/HomePageHeader/HomePageHeader";
import strawberryBowl from "../../images/strawberry-bowl.svg";
import roastedBowl from "../../images/roasted-bowl.svg";
import penne from "../../images/penne.svg";
import veggie from "../../images/categories/veggie.svg";
import fruits from "../../images/categories/fruits.svg";
import meat from "../../images/categories/meat.svg";
import fish from "../../images/categories/fish.svg";
import breakfast from "../../images/categories/breakfast.svg";
import lunch from "../../images/categories/lunch.svg";
import dinner from "../../images/categories/dinner.svg";
import dessert from "../../images/categories/dessert.svg";
import Category from "../../components/CategoryCard/Category";

const HomePage = () => {
  const categories = [
    { title: "Veggie", image: veggie },
    { title: "Fruits", image: fruits },
    { title: "Meat", image: meat },
    { title: "Fish", image: fish },
    { title: "Breakfast", image: breakfast },
    { title: "Lunch", image: lunch },
    { title: "Dinner", image: dinner },
    { title: "Dessert", image: dessert },
  ];

  const categoriesItems = categories.map((category) => (
    <Category
      key={category.title}
      image={category.image}
      title={category.title}
    />
  ));

  const popularFoods = [
    {
      title: "Strawberry Bowl",
      name: "strawberry",
      calories: 250,
      duration: 10,
      image: strawberryBowl,
    },
    {
      title: "Roasted Bowl",
      name: "roasted",
      calories: 350,
      duration: 25,
      image: roastedBowl,
    },
    {
      title: "Penne Arrabita",
      name: "penne",
      calories: 500,
      duration: 60,
      image: penne,
    },
  ];

  const popularFoodItems = popularFoods.map((food) => (
    <PopularFoodItemCard key={food.name} food={food} />
  ));

  const handleSearch = () => {};
  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <p className="font-bold text-lg ml-6 my-4">Popular</p>
      <div className="flex flex-row ml-4 my-4 overflow-x-scroll overflow-y-hidden">
        {popularFoodItems}
      </div>
      <p className="font-bold text-lg ml-6">Categories</p>
      <div className="flex flex-row flex-wrap justify-center items-center my-4">
        {categoriesItems}
      </div>
      <p className="font-bold text-lg ml-6 my-4">Add Recipe</p>
      <Addrecipe />
      <SubscribeToNewsLetter />
    </>
  );
};
export default HomePage;
