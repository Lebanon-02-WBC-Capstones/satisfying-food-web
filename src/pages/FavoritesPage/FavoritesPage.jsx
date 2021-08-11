import { React } from "react";
import Food from "../../Food-item-card/Food";

function FavoritesPage() {
const storage = window.localStorage;
var fav = JSON.parse(storage.getItem("fav")) ? JSON.parse(storage.getItem("fav")) : [];

   const Foods = fav.map((item) => (

    <Foodd
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
      <div className=" w-full h-42 p-2">
        <h1 className="text-orange-500 font-bold font-body py-8 px-8 text-4xl">
         
          Favorites
        </h1>

        <div id="align-food-div-center" className="flex align-center">
          <div className="w-full flex flex-wrap content-around justify-center ">
            {Foods}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
