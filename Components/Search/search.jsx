import React, { useState } from "react";

export default function SearchBox(props) {
  const [input, setInput] = useState("");
 

  function handleChange(e) {
    setInput(e.target.value);
   
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.function(input, "search/Recipes");
  }
    return (
<div>
  <button  class="rounded-full bg-white border-gray-400 border h-16 w-96">
   <div class=" flex justify-between text-gray-400" onSubmit={handleSubmit}>
 <svg xmlns="http://www.w3.org/2000/svg"  class="h-11 w-10 ml-7  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
<input type="text " class="text-2xl  font-semibold " placeholder="Search Recipes..." onChange={handleChange} />
 </div>
    </button> 
  </div>
    )};






