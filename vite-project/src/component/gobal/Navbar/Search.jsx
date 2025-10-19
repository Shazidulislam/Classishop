import React from "react";

const Search = () => {
  return (
    <div className="w-full border-2 border-[#ff5252] h-12 bg-gray-100  rounded-[6px] text-sm flex justify-between items-center">
      <div className="flex items-start ">
        <select name="All Categories" className="focus:outline-none px-3 ">
          <option value="All Categories">All Categories</option>
          <option value="shop">Shop</option>
          <option value="elictronics">Elictronics</option>
          <option value="furniter">Furnitur</option>
          <option value="fashion & style">Fashion & Style</option>
          <option value="cosmetic">Cosmetic </option>
          <option value="book & music">Book & Music</option>
          <option value="groceries">Groceries</option>
        </select>
        <span className="border-l border-gray-400 h-5 mx-2 inline-block"></span>
      </div>

      <div className=" flex-1">
        
        <input
          type="text"
          name=""
          className="text-sm  py-2   focus:outline-none"
          placeholder="Search for product..."
        />
      </div>
      <button className="bg-[#ff5252] text-sm font-bold cursor-pointer text-white px-4 py-3  rounded-tr rounded-br">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
