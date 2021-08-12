import React from "react";
import Navbar from "../components/Menu/Navbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter"; 
import FilterTime from "../components/FilterTime/FilterTime";
import Category from "../components/CategoryCard/Category";
import FilterBtns from "../components/Filter/FilterBtns";




function FilterSearchPage(){
 
    return(
        <div>
        <div className="w-full h-42 bg-yellow-500" >
        <Navbar/>
        <SearchBar/>
        <div className="rounded-t-3xl bg-white">
       <Filter/>
    
      <div className=" px-4 pt-4">
       <h2 className="text-yellow-500 font-bold text-3xl pb-4">Duration</h2>
       <FilterTime/>
      </div>
      <div className=" px-4 pt-4">
      <h2 className="text-yellow-500 font-bold text-3xl">Categories</h2>
      <Category />
      </div>
      <div> 
       <FilterBtns/>
      </div>
     
     
     
    </div>
    </div>
     </div>
       
    );
}
export default FilterSearchPage;
