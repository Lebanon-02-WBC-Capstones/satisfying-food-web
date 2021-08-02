import { React, useState } from "react";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    categories: "",
    details: "",
    ingredients: "",
    directions: "",
  });

  return (
    <div className="w-full h-auto py-8">
      <form className="bg-white rounded-2xl px-8 pt-6 pb-8 mb-4 border-2 border-orange-500">
        <div className="mb-4">
          <h1 className="text-orange-500 text-lg font-medium mb-2">
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

        <label className="w-full flex flex-col items-center py-2.5 bg-white border-2 border-gray-200 rounded-full shadow-sm tracking-wide cursor-pointer hover:bg-orange-500 hover:text-white text-orange-500 ease-linear transition-all duration-150">
          <span className="text-sm leading-normal">Select an image</span>
          <input
            type="file"
            className="hidden"
            onChange={(event) => {
              setRecipe((prevRec) => {
                return { ...prevRec, image: event.target.files };
              });
            }}
            required
          />
        </label>

        <div className="relative inline-block w-full text-orange-500 rounded-full shadow-sm mt-4 h-11">
          <select
            className="w-full h-10 pl-4 pr-6 text-sm placeholder-orange-500 border-2 rounded-full appearance-none focus:none h-11"
            placeholder="Categories"
          >
            <option>Categories</option>
            <option>Another option</option>
            <option>And one more</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </div>
        </div>

        <div>
          <textarea
            className="h-36 mt-4 appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:border-orange-400  focus:outline-none focus:shadow-outline placeholder-orange-500"
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

        <div>
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
        </div>

        <div>
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
        </div>

        <div className="w-full flex justify-center">
          <button
            className="mt-3 bg-orange-500 hover:bg-gray-400 w-36 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Share
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
