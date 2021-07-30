import React from "react";

const AddRecipeForm = () => {
  return (
    <div className="w-full h-auto py-8">
      <form className="bg-white  rounded-2xl px-8 pt-6 pb-8 mb-4 border-2 border-orange-500">
        <div className="mb-4">
          <h1 className="block text-orange-500 text-lg font-medium mb-2">
            Add Recipe!
          </h1>
        </div>

        <div className="mb-4">
          <input
            className="appearance-none border-2 rounded-full w-full p-4 text-gray-700 h-12 text-sm leading-tight focus:outline-none focus:border-orange-400 focus:shadow-outline placeholder-orange-500 "
            id="title"
            type="text"
            placeholder="Title"
            required
          />
        </div>
        {/* <div className="mb-2">
          <input
            className=" appearance-none border-2  rounded-full w-full h-12 p-4 text-gray-700 text-sm mb-3 leading-tight focus:border-orange-400  focus:outline-none focus:shadow-outline placeholder-orange-500"
            id="image"
            type="file"
            placeholder="Image"
            required
          />
        </div> */}
        <label className="w-full flex flex-col items-center py-3 bg-white rounded-full shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-orange-500 hover:text-white text-orange-500 ease-linear transition-all duration-150">
          {/* <i className="fas fa-cloud-upload-alt fa-3x"></i> */}
          <span className="text-base leading-normal">Select an image</span>
          <input type="file" className="hidden" />
        </label>
        <div>
          <textarea
            className="h-36  appearance-none border-2 border-gray-200 rounded-2xl w-full py-2 px-3 text-sm text-gray-700 mb-3 leading-tight focus:border-orange-400  focus:outline-none focus:shadow-outline placeholder-orange-500"
            id="message"
            type="text"
            placeholder="Message"
            required
          />
        </div>

        <div className=" justify-center">
          <button
            className="bg-orange-500 hover:bg-gray-400 w-36 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
