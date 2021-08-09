import React from "react";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import Category from "../../components/CategoryCard/Category";
import Food from "../../components/Food-item-card/Food";
function Page() {
  const [clickedCategory, setClickedCategory] = useState("");
  const [food, setFood] = useState([]);
  const [showSearchResult, setShowSearch] = useState(false);
  const FoodArray = [
    {
      img: "https://blog.radissonblu.com/wp-content/uploads/2019/05/GettyImages-493613257.jpg",
      title: "Kibbe",
      id: "99",
      cal: "260",
      time: "10",
      category: "meat",
    },
    {
      img: "https://www.abouther.com/sites/default/files/2018/05/11/shutterstock_248472739.jpg",
      title: "Hummus",
      time: "15",
      cal: "178",
      id: "510",
      category: "lunch",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/16/f4/0c/57/half-zaatar-half-cheese.jpg",
      title: "Manakish",
      cal: "260",
      time: "70",
      id: "420",
      category: "breakfast",
    },
    {
      img: "https://www.fadiscuisine.com/wp-content/uploads/2016/12/tabouleh.jpg",
      title: "Tabouleh",
      cal: "136",
      time: "30",
      id: "69",
      category: "veggies",
    },
    {
      img: "https://i0.wp.com/www.arabamerica.com/wp-content/uploads/2021/01/knafeh-dubai-food.jpg",
      title: "Knafe",
      cal: "230",
      time: "40",
      id: "99",
      category: "dessert",
    },
    {
      img: "https://280337.smushcdn.com/1648336/wp-content/uploads/2019/09/learning-historical-origins-baklava.jpg",
      title: "Baklava",
      cal: "120",
      time: "63",
      id: "888",
      category: "dessert",
    },
  ];

  const categoryArray = [
    {
      title: "",
      image: "https://image.flaticon.com/icons/png/128/40/40894.png",
    },
    {
      title: "Veggies",
      image: "https://image.flaticon.com/icons/png/128/4163/4163765.png",
    },
    {
      title: "Meat",
      image: "https://image.flaticon.com/icons/png/128/869/869676.png",
    },
    {
      title: "Fish",
      image: "https://image.flaticon.com/icons/png/128/3347/3347364.png",
    },
    {
      title: "Dessert",
      image: "https://image.flaticon.com/icons/png/128/992/992717.png",
    },
    {
      title: "Fruits",
      image: "https://image.flaticon.com/icons/png/128/1625/1625048.png",
    },
    {
      title: "Drinks",
      image: "https://image.flaticon.com/icons/png/128/3165/3165589.png",
    },
    {
      title: "Breakfast",
      image: "https://image.flaticon.com/icons/png/128/3480/3480823.png",
    },
    {
      title: "Lunch",
      image: "https://image.flaticon.com/icons/png/128/2276/2276931.png",
    },
    {
      title: "Dinner",
      image: "https://image.flaticon.com/icons/png/128/3480/3480618.png",
    },
  ];
  const Categories = categoryArray.map((cat) => (
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
  const Foods = FoodArray.map((item) => (
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
  const Filtered = FoodArray.filter(
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
    const whatever = FoodArray.filter(
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
    <div className="">
      <div className="w-full h-11 "></div>
      <div className="w-full h-9  flex align-center justify-center text-yellow-500 text-3xl  font-semibold flex-nowarp">
        <p>Let&apos;s Eat Quality Food</p>
      </div>
      <div
        id="search"
        className="flex w-full h-full align-center justify-center mt-4 "
      >
        <SearchBar onSearch={handleSearch} />
      </div>
      <div
        id="categories"
        className="w-full h-20  flex   overflow-x-scroll overflow-y-hidden pb-4"
      >
        {Categories}
      </div>
      <div id="align-food-div-center" className="flex align-center">
        <div className="w-full flex flex-wrap content-around justify-center ">
          {showSearchResult ? food : isCatClicked}
        </div>
      </div>
    </div>
  );
}
export default Page;