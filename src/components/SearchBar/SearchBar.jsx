import React, { useState } from "react";
import searchIcon from "../../images/search.svg";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="h-24 px-8 pt-4 overflow-hidden">
    <form
      className="flex justify-center   border border-gray-400 text-gray-400 rounded-full bg-white "
      onSubmit={() => onSearch(searchText)}
    >
      <button
        type="submit"
        className="px-4 py-2 text-grey-400 whitespace-no-wrap"
      >
        <img src={searchIcon} alt="search-Icon"  className="bg-white"/>
      </button>
      <input
        name="text"
        className="px-4 py-3 w-full rounded-full focus:outline-none"
        type="text"
        onChange={handleChange}
        placeholder="Search Recipes..."
        required
      />
    </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
