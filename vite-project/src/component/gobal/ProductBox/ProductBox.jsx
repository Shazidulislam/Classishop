import React from "react";
import {  Rating } from "@mui/material";
import popular from "../../../assets/images/slider/popular_p.jpg"
import { IoCartOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { GoGitCompare } from "react-icons/go";
import { FiHeart } from "react-icons/fi";

const ProductBox = () => {
  return (
    <div className="flex flex-col  justify-between border-2 border-gray-50 cursor-pointer  rounded-b-md shadow w-52 ">
      {/* Product Image */}
      <div className="flex-1 flex justify-center items-center overflow-hidden group relative">
        <img
          src={popular}
          alt="popular product"
          className="rounded-t-md h-[70%] w-full object-cover"
        />

        <p className="absolute left-3  text-center top-3 p-1 bg-[#ff5252] text-white leading-4  rounded-full text-[12px] aspect-square">10%</p>
        <div className="absolute flex flex-col w-16 -right-6  gap-3  top-0 z-20 -translate-y-full group-hover:translate-y-4 transition-transform duration-300">
            <MdZoomOutMap className="bg-white p-1 text-black leading-4 rounded-full aspect-square hover:bg-[#ff5252] hover:text-white transition-all" size={28}/>
            <GoGitCompare className="bg-white p-1 text-black leading-4 rounded-full aspect-square hover:bg-[#ff5252] hover:text-white transition-all" size={28}/>
            <FiHeart className="bg-white p-1 text-black leading-4 rounded-full aspect-square hover:bg-[#ff5252] hover:text-white transition-all" size={28}/>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="mt-2  px-4 ">
        <h3 className="text-xs  text-gray-500">The best Milk</h3>
        <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae!</p>
      </div>

      {/* Rating */}
      <div className="mt-2 px-4">
        <Rating
          name="read-only"
          value={4}
          precision={0.5}
          readOnly
          size="small"
        />
      </div>

      {/* Price */}
      <div className="py-2 flex items-center  gap-2 justify-between px-4">
        <span className="text-gray-400 line-through text-sm sm:text-md">
          ${200}
        </span>
        <span className="text-[#ff5252] font-semibold text-sm sm:text-xl">${140}</span>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
         <button className="text-[#ff5252]  px-5 py-2 flex items-center justify-center border-2 border-[#ff5252] hover:bg-black hover:text-white w-full transition duration-300 rounded hover:border-black cursor-pointer "> <IoCartOutline size={20 } className="font-bold" /> Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductBox;
