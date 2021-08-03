import { React, useState } from "react";
import Multiselect from "./CategoryMultiselect";

const AddRecipeForm = () => {
  const [selectImage, setSelectImage] = useState("Select an image");
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    categories: [],
    details: "",
    ingredients: ["", "", ""],
    directions: ["", "", ""],
  });

  return (
    <div className="w-full h-auto py-8">
      <form className="rounded-2xl px-4 pt-6 pb-8 mb-4 border-2 border-orange-500">
        <div className="mb-4">
          <h1 className="text-orange-500 text-lg font-semibold mb-2">
            Add Recipe!
          </h1>
        </div>

        <div className="mb-4">
          <input
            className="appearance-none border-2 rounded-full w-full p-4 text-gray-700 h-11 text-sm leading-tight focus:outline-none focus:border-orange-400 focus:shadow-outline placeholder-orange-500 "
            id="title"
            type="text"
            value={recipe.title}
            placeholder="Title"
            onChange={(event) => {
              setRecipe((prevRec) => {
                return { ...prevRec, title: event.target.value };
              });
            }}
            required
          />
        </div>

        <label className="w-full flex flex-col items-center py-2.5 bg-white border-2 mb-2 border-gray-200 rounded-full shadow-sm tracking-wide cursor-pointer hover:bg-orange-500 hover:text-white text-orange-500 ease-linear transition-all duration-150">
          <span className="text-sm leading-normal">{selectImage}</span>
          <input
            type="file"
            className="hidden"
            onChange={(event) => {
              setSelectImage("Change image");
              setRecipe((prevRec) => {
                return { ...prevRec, image: event.target.files[0] };
              });
            }}
            required
          />
        </label>

        {/*Categories ////////////////////////////////////// */}

        <Multiselect
          categories={["Fruit", "Breakfast", "Pizza"]}
          recipe={recipe}
          setRecipe={setRecipe}
        />

        {/* <div className="relative inline-block w-full text-orange-500 rounded-2xl shadow-sm mt-4 h-16">
          <select
            className="w-full h-10 pl-4 pr-6 text-sm placeholder-orange-500 border-2 rounded-2xl focus:none h-16"
            placeholder="Categories" multiple
          >
            <option className="font-medium text-orange-500" disabled>Categories</option>
            <option>Fruit</option>
            <option>Lunch</option>
            <option>Veggie</option>
            <option>Pizza</option>
            <option>Breakfast</option>
          </select>
        </div> */}

        {/*/////////////////////////////// */}

        <div className="mt-4">
          <h1 className="text-orange-500 text-md font-normal mb-2">
            Ingredients:
          </h1>
        </div>

        <div className="mb-1 w-full flex justify-between flex-wrap">
          {recipe.ingredients.map((ing, index) => (
            <input
              className="appearance-none border-2 mb-1 rounded-full w-26 p-4 text-gray-700 h-8 text-xs leading-tight focus:outline-none focus:border-orange-400 focus:shadow-outline placeholder-orange-500 "
              key={index}
              id={"ing-" + index}
              type="text"
              value={recipe.ingredients[index]}
              placeholder={index + 1 + "."}
              onChange={(event) => {
                setRecipe((prevRec) => {
                  const ings = prevRec.ingredients;
                  ings[index] = event.target.value;
                  return { ...prevRec, ingredients: ings };
                });
              }}
              required
            />
          ))}
        </div>
        <div className="w-full flex justify-between flex-row-reverse">
          <h1
            className="text-gray-500 text-xs font-basic cursor-pointer"
            onClick={() => {
              setRecipe({
                ...recipe,
                ingredients: recipe.ingredients.concat("", "", ""),
              });
            }}
          >
            add more...
          </h1>
        </div>

        {/*/////////////////////////////// */}

        {/* <div>
          <textarea
            className="h-36 mt-3 appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:border-orange-400  focus:outline-none focus:shadow-outline placeholder-orange-500"
            id="ingredients"
            type="text"
            value={recipe.ingredients}
            onChange={(event) => {
              setRecipe((prevRec) => {
                return { ...prevRec, ingredients: event.target.value };
              });
            }}
            placeholder="Ingredients (e.g. strawberry, banana...)"
            required
          />
        </div> */}

        {/*Directions /////////////////////////////////////////////////////////////////////////////////////*/}

        <div className="mt-3">
          <h1 className="text-orange-500 text-md font-basic mb-2">
            Directions:
          </h1>
        </div>

        <div className="mb-1 w-full flex justify-between flex-wrap">
          {recipe.directions.map((ing, index) => (
            <input
              className="appearance-none border-2 mb-1 rounded-full w-full p-4 text-gray-700 h-8 text-xs leading-tight focus:outline-none focus:border-orange-400 focus:shadow-outline placeholder-orange-500 "
              key={index}
              id={"dir-" + index}
              type="text"
              value={recipe.directions[index]}
              placeholder={index + 1 + "."}
              onChange={(event) => {
                setRecipe((prevRec) => {
                  const dirs = prevRec.directions;
                  dirs[index] = event.target.value;
                  return { ...prevRec, directions: dirs };
                });
              }}
              required
            />
          ))}
        </div>
        <div className="w-full flex justify-between flex-row-reverse">
          <h1
            className="text-gray-500 text-xs font-basic mb-2 cursor-pointer"
            onClick={() => {
              setRecipe({
                ...recipe,
                directions: recipe.directions.concat("", "", ""),
              });
            }}
          >
            add more...
          </h1>
        </div>

        {/* <div>
          <textarea
            className="h-36 mt-3 appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:border-orange-400  focus:outline-none focus:shadow-outline placeholder-orange-500"
            id="directions"
            type="text"
            value={recipe.directions}
            onChange={(event) => {
              setRecipe((prevRec) => {
                return { ...prevRec, directions: event.target.value };
              });
            }}
            placeholder="Directions"
            required
          />
        </div> */}

        <div>
          <textarea
            className="h-28 mt-4 appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:border-orange-400 focus:outline-none focus:shadow-outline placeholder-orange-500"
            id="details"
            type="text"
            value={recipe.details}
            onChange={(event) => {
              setRecipe((prevRec) => {
                return { ...prevRec, details: event.target.value };
              });
            }}
            placeholder="Details"
            required
          />
        </div>

        <div className="w-full flex justify-center">
          <button
            className="mt-3 bg-orange-500 hover:bg-gray-400 w-36 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              // setRecipe(prevRec => {
              //   Object.keys(prevRec).forEach(key => prevRec[key]="");
              // });
              console.log(recipe);
            }}
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
