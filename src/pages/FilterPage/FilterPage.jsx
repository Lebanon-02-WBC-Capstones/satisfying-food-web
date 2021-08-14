import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Category from "../../components/CategoryCard/Category";
import Food from "../../components/Food-item-card/Food";
import Filter from "../../components/FilterTime/FilterTime";
import * as foodData from "../../foodData";
function FoodPage() {
  const [showFilteredTime,setShowFilteredTime] = useState(false);
  const [clickedCategory, setClickedCategory] = useState("");
  const [food, setFood] = useState([]);
  const [showSearchResult, setShowSearch] = useState(false);
  const [filterTime,setFilterTime]=useState("");
  const Categories = foodData.categoryArray.map((cat) => (
    <Category
      key={cat.title}
      image={cat.image}
      title={cat.title}
      getCat={(clickedCategory) => {
        setClickedCategory(clickedCategory);
        setShowSearch(false);
        setShowFilteredTime(false);
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
    (item) => item.category.toLowerCase() == clickedCategory.toLowerCase()
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
    setShowFilteredTime(false);
  };


let time = filterTime.split(" ")[0];


let FilteredFoodTime=[];
if(time=="<1")
{ FilteredFoodTime = foodData.FoodArray.filter(
  (item) => item.time <60
);}
if(time==">1")
{ FilteredFoodTime = foodData.FoodArray.filter(
  (item) => item.time >60
);}

if(time!="<1" && time !=">1")
{ FilteredFoodTime = foodData.FoodArray.filter(
  (item) => item.time ==time
);}






let TimeArray = FilteredFoodTime.map((item) => (
  <Food
    key={item.title}
    id={item.id}
    img={item.img}
    title={item.title}
    time={item.time}
    cal={item.cal}
  />
));





  const isCatClicked = clickedCategory ? FilteredArray : Foods;

  const WhatToShow = showSearchResult ? food : isCatClicked ;
  return (
    <div className=" bg-yellow-500">
      <div className="w-full h-11 bg-yellow-500 "></div>
        <div className="wp-full h-full bg-yellow-500 flex justify-center pb-6 -m-px   " >
          
        <SearchBar onSearch={handleSearch} /></div>
        <div className="w-full bg-white h-full shadow-2xl -mt-11 rounded-t-3xl ">
        <div className="w-full h-full"> 
        
        <div className="ml-8 mt-8 pt-4">
        <h2 className="text-yellow-500 font-bold text-2xl pb-2 ">Filter</h2>
        <span className="text-gray-500">Find food that suits your taste here </span>
        <h2 className="text-yellow-500 font-bold text-2xl pb-2 mt-4">Duration</h2>
        <div className="w-full flex justify-around -ml-4 ">
        <Filter time="15 Min" getTime={setFilterTime} setShow={setShowFilteredTime}/> <Filter time="30 Min"  getTime={setFilterTime} setShow={setShowFilteredTime} /><Filter time="<1 hr"  getTime={setFilterTime} setShow={setShowFilteredTime}/> <Filter time=">1 hr"  getTime={setFilterTime} setShow={setShowFilteredTime}/>
         </div>
        <div>
        <h2 className="text-yellow-500 font-bold text-2xl pb-2 pt-2">Categories</h2></div></div>

          
        </div>
      <div
        className="w-full h-full flex flex-wrap ml-8 "
      >
        {Categories}
      </div></div>
      <div className="h-full w-full bg-white">
      <div className="flex justify-center align-center pt-4">
<button className="border-2 border-yellow-500 rounded-3xl w-56 h-16  shadow-xl hover:bg-yellow-500 w-72">
   <p className="text-2xl hover:text-3xl text-yellow-500 hover:text-white 0 font-semibold p-0 text-center">Apply filters</p>
  </button>
      </div>
      <div className="flex justify-center align-center pt-8 pb-8">
      <button className="bg-yellow-500 hover:bg-white rounded-full w-56 h-16  shadow-xl " >
   <p className="text-2xl text-center hover:text-3xl text-white hover:text-yellow-500 font-semibold p-0">Clear filters</p>
    </button>
      </div>
      <div id="align-food-div-center" className="flex align-center">
        <div className="w-full flex flex-wrap content-around justify-center mb-8">
        {showFilteredTime ? TimeArray : WhatToShow}
        </div></div>
      </div>
    </div>
  );
}
export default FoodPage;