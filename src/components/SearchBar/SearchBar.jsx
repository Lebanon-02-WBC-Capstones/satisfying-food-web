import React from "react";
import search from "./search.svg";
const SearchBar = () => {
  return (
    <form className="relative text-gray-600 flex justify-center ">
      <button
        type="submit"
        className="absolute left-0 top-0 mt-12 ml-12"
      ></button>
      <img src={search} className="absolute left-0 ml-4 mt-2.5 " />
      <input
        className="border-2 border-gray-400 bg-white h-12 w-full  placeholder-gray-600 text-center rounded-full font-body focus:outline-none"
        type="search"
        name="search"
        placeholder="Search Recipes..."
        required
      />
    </form>
  );
};

export default SearchBar;
