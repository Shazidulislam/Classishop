import React from "react";
import { IoIosTimer } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router";
const BlogProduction = ({ blogImg, time, text_1, text_2 }) => {
  return (
    <div className='py-6 '>
      <Link to={"/"}>
        {/* blog img */}
        <div className="group overflow-hidden relative">
          <img
            src={blogImg}
            alt=""
            className="rounded-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
          />
          <p className="py-1 px-3 bg-[#ff5252] text-white rounded absolute left-full top-4 z-20 flex items-center justify-center gap-1">
            <IoIosTimer size={18} /> {time}
          </p>
        </div>
        <p className="font-[600] pt-3">{text_1}</p>
        <p className="font-[400] text-gray-600 text-sm">{text_2}</p>
        <p className="flex justify-start py-2 gap-2 items-center cursor-pointer hover:text-[#ff5252] ">
          Read More <FaChevronRight size={14} />
        </p>
      </Link>
    </div>
  );
};

export default BlogProduction;
