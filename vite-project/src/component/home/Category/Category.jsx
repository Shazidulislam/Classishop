import React from "react";
import {Link} from "react-router"
import category_1 from "../../../assets/category_img/category_1.png"
import category_2 from "../../../assets/category_img/category_2.png"
import category_3 from "../../../assets/category_img/category_3.png"
import category_4 from "../../../assets/category_img/category_4.png"
import category_5 from "../../../assets/category_img/category_5.png"
import category_6 from "../../../assets/category_img/category_6.png"
import category_7 from "../../../assets/category_img/category_7.png"
const Category = () => {
  return (
    <div className="py-6 grid grid-cols-8 items-center gap-4 px-2">
      
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_1} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Fashion</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_2} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Elictronics</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_3} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Bags</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_4} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Footware</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_5} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Groceries</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_6} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Beauty</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={"https://serviceapi.spicezgold.com/download/1741661105893_well.png"} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Wellness</p>
        </Link>
      </div>
      <div className="py-4 px-3 shadow-sm bg-white">
        <Link className="flex flex-col justify-between items-center gap-4" to={"/"}>
          <img src={category_7} className="w-20 hover:scale-110 duration-300 transition-transform cursor-pointer" alt="" />
          <p className="text-gray-600">Jewellery</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
