import React from "react";
const SubscribeToNewsLetter = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <span className="h-5 font-bold font-body text-center text-red-500 pb-10">
        Subscribe to get our newest recipes
      </span>
      <div className="flex flex-row w-8/12 border border-2 rounded border-yellow-600">
        <input
          name="email"
          className="px-4 py-2 w-full rounded-l border-opacity-0"
          type="email"
          placeholder="Enter Email adress"
        />
        <span className="text-sm px-4 py-2 rounded bg-yellow-600 whitespace-no-wrap">
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.81958 11.7542L13.0821 17.5643L25.1864 5.94415"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SubscribeToNewsLetter;
