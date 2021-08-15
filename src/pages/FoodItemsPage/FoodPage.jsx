import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Category from "../../components/CategoryCard/Category";
import Food from "../../components/Food-item-card/Food";
import * as foodData from "../../foodData";
function FoodPage() {
  const [clickedCategory, setClickedCategory] = useState("");
  const [food, setFood] = useState([]);
  const [showSearchResult, setShowSearch] = useState(false);
  
  const Categories = foodData.categoryArray.map((cat) => (
    <Category
      key={cat.title}
      image={cat.image}
      title={cat.title}
      getCat={(clickedCategory) => {
        setClickedCategory(clickedCategory);
        setShowSearch(false);
      }}
    />
  ));
  
  const Foods = foodData.FoodArray.map((item) => (
    <Food
      key={item.title}
      id={item.id}
      img={item.img}
      title={item.title}
      time={item.time}
      cal={item.cal}
      category={item.category}
      ingredients={item.ingredients}
    />
  ));

  const Filtered = foodData.FoodArray.filter(
    (item) => item.category == clickedCategory
  );

  let FilteredArray = Filtered.map((item) => (
    <Food
      key={item.title}
      id={item.id}
      img={item.img}
      title={item.title}
      time={item.time}
      cal={item.cal}
    />
  ));

  const handleSearch = (searchText) => {
    const whatever = foodData.FoodArray.filter(
      (item) => item.title.toLowerCase().startsWith(searchText.toLowerCase())
    );
    FilteredArray = whatever.map((item) => (
      <Food
        key={item.title}
        id={item.id}
        img={item.img}
        title={item.title}
        time={item.time}
        cal={item.cal}
      />
    ));
    setFood(FilteredArray);
    setShowSearch(true);
  };

  const isCatClicked = clickedCategory ? FilteredArray : Foods;

  return (
    <div>
      <div className="w-full h-11"></div>
      <div className="w-full h-9  flex align-center justify-center text-yellow-500 text-3xl  font-semibold flex-nowarp">
        <p>Let&apos;s Eat Quality Food</p>
      </div>      
        <SearchBar onSearch={handleSearch} />
      <div
        className="w-full h-20 flex overflow-x-scroll overflow-hidden pb-4 ml-2"
      >
        {Categories}
      </div>
      <div id="align-food-div-center" className="flex align-center">
        <div className="w-full flex flex-wrap content-around justify-around mb-4 mt-4">
          {showSearchResult ? food : isCatClicked}
        </div>
      </div>
    </div>
  );
}
export default FoodPage;
