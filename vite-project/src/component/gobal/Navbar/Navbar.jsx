import React from "react";
import logo from "../../../assets/images/logo.svg";
import Search from "./Search";
import { Link } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoGitCompareOutline } from "react-icons/io5";
import BasicTooltip from "../BasicTooltip/BasicTooltip";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 gap-2">
      {/* logo section */}
      <div className="w-[25%]">
        <img className="w-36 sm:w-62" src={logo} alt="logo-img" />
      </div>
      {/* search bar */}
      <div className="w-[45%]">
        <Search />
      </div>
      {/* navigation */}
      <div className="w-[30%] flex justify-end items-center ">
        <ul className="flex justify-around items-center gap-6">
          <ul className="flex justify-around items-center gap-2">
            <li>
              <Link
                className="hover:text-[#ff5252] transition-colors"
                to={"/login"}
              >
                Login
              </Link>
            </li>
            <li>
              {/* <span className="border-l border-gray-400 h-5 mx-2 inline-block"></span> */}
              /
            </li>
            <li>
              <Link
                className="hover:text-[#ff5252] transition-colors"
                to={"/register"}
              >
                Register
              </Link>
            </li>
          </ul>
          <li>
            <span className="border-l border-gray-400 h-5 mx-2 inline-block"></span>
          </li>
          <ul className="flex justify-around items-center gap-5">
            <li>
              <BasicTooltip toolTipText={"Compare"}>
                <Link className="relative" to={"/"}>
                  <IoGitCompareOutline size={24} />
                  <span className="absolute right-[-30px] bottom-[3px] w-4 text-center bg-[#ff5252] text-white leading-4  rounded-full text-[8px] aspect-square">
                    0
                  </span>
                </Link>
              </BasicTooltip>
            </li>
            <li>
              <BasicTooltip toolTipText={"Wishlist"}>
              <Link className="relative" to={"/"}>
                <FaRegHeart size={24} />
                <span className="absolute right-[-30px] bottom-[3px] w-4 text-center bg-[#ff5252] text-white leading-4  rounded-full text-[8px] aspect-square">
                  2
                </span>
              </Link>
              </BasicTooltip>
            </li>
            <li>
              <BasicTooltip toolTipText={"Cart"}>
              <Link className="relative" to={"/"}>
                <IoCartOutline size={24} />
                <span className="absolute right-[-30px] bottom-[3px] w-4 text-center bg-[#ff5252] text-white leading-4  rounded-full text-[8px] aspect-square">
                  0
                </span>
              </Link>
              </BasicTooltip>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

//  <Link className={"relative"} to={"/cart"}>
//       <img className="w-5 cursor-pointer" src={assets?.cart_icon} alt="" />
//       <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white leading-4  rounded-full text-[8px] aspect-square">
//         10
//       </p>
//     </Link>
