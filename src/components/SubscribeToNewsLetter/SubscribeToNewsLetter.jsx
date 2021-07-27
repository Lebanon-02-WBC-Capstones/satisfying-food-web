import React from "react";
import checkmark from "../../images/checkmark.svg";

const handleSubmit = (event) => {
  event.preventDefault();
};

const SubscribeToNewsLetter = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <span className="h-5 font-bold font-body text-center text-red-500 pb-10">
        Subscribe to get our newest recipes
      </span>
      <form
        className="flex flex-row w-8/12 border-2 rounded border-yellow-600"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          className="px-4 py-2 w-full rounded-l border-opacity-0"
          type="email"
          placeholder="Enter Email adress"
          required
        />
        <button
          type="submit"
          className="text-sm px-4 py-2 rounded bg-yellow-600 whitespace-no-wrap"
        >
          <img src={checkmark} alt="checkMark-Icon" />
        </button>
      </form>
    </div>
  );
};

export default SubscribeToNewsLetter;
