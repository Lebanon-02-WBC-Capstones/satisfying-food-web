import React from "react";

export default function FilterBtns(){
    const apply = () => {
        alert("yes");
       };
    const clear = () => {
        alert("bye");
       };
    return (
<div className="px-20 pt-8 ">
 <button className="border-2 border-yellow-500 rounded-full w-56 h-16  shadow-xl hover:bg-yellow-500">
   <p className="text-2xl hover:text-3xl text-yellow-500 hover:text-white 0 font-semibold p-0 text-center" onClick={apply}>Apply filters</p>
  </button>
  <div className="pt-6 pb-8">
<button className="bg-yellow-500 hover:bg-white rounded-full w-56 h-16  shadow-xl " >
   <p className="text-2xl text-center hover:text-3xl text-white hover:text-yellow-500 font-semibold p-0" onClick={clear}>Clear filters</p>
    </button>
    </div>
</div>
    );
}