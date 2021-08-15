import React from "react";
import headerRecipe from "../../images/headerRecipe.svg";
export default function Header() {
  return (
    <div className="flex justify-center m-10 overflow-hidden">
      <div className="w-8/12 float-left">
        <div className=" bg-white rounded-2xl">
          <p className="text-red-500 font-bold text-xl line-height: 0.75rem text-justify inset-y-0 left-0 w-1">
            Discover Spicy,Sweet and Savory
            <p className="text-yellow-500 text-justify line-height: 0.75rem font-bold font-sans text-xl">
              Food
            </p>
          </p>
          <div className="mt-4">
            <a
              className="font-medium text-xl text-red-300  upp hover:underline"
              href=" "
              target="_self"
            >
              Let`s eat
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-10 float-right ml-4 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="relative">
            <img
              className="w-25 rounded-full absolute -right-12 bottom-8  overflow-hidden"
              src={headerRecipe}
              alt="food bowl"
            />
          </div>
        </div>
      </div>

      <div className="w-4/12 bg-red-500 rounded-r-2xl border overflow-hidden float-right"></div>
    </div>
  );
}
