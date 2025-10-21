import React, { useState } from "react";
import Container from "../Container/Container";
import Button from "@mui/material/Button";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanale from "./CategoryPanale";
import SubMenu from "./SubMenu";
import SubMenuElictrnics from "./SubMenuElictrnics";
import SubMenuFootware from "./SubMenuFootware";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="flex  items-center gap-3 ">
          {/* left side */}
          <div className="col-1 hidden md:flex items-center md:w-[40%]  xl:w-[20%] ">
            <Button
              onClick={() => setOpen((pre) => !pre)}
              className="!text-black !font-bold"
            >
              <CgMenuLeftAlt size={24} />
              <span className="px-3">SHOP BY CATEGORY</span>
              <IoIosArrowDown size={20} />
            </Button>
            <span className="border-l  border-gray-400 h-5 mx-1 inline-block"></span>
          </div>

          {/* middel side */}
          <div className="w-[100%] md:w-[40%] xl:w-[55%]  col-2">
            <ul className="hidden sm:flex justify-start gap-3 sm:gap-7">
              <li>
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Fashion
                </Link>
                {/* sub menu */}
                <div>
                  <SubMenu></SubMenu>
                </div>
              </li>
              <li className="relative group">
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Elictronics
                </Link>
                {/* sub menu for elictronics */}
                <div>
                    <SubMenuElictrnics/>
                </div>
              </li>
              <li className="relative group">
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Footware
                </Link>
                {/* submenu for Footware */}
                <div>
                    <SubMenuFootware/>
                </div>
              </li>
              <li>
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Groceries
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Wellness
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Bags
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#ff5252]" to={"/"}>
                  Jewellery
                </Link>
              </li>
              <li className=" hidden xl:block ">
                <span className="border-l  border-gray-400 h-5 mx-1 inline-block"></span>
              </li>
            </ul>
          </div>
          {/* left side */}
          <div className=" hidden xl:block xl:w-[25%] col-3 ">
            <Button className="!text-gray-600 !text-sm !font-bold">
              <span>
                <IoRocketOutline className="" size={20} />
              </span>
              <span className="pl-3">Free International Delivary</span>
            </Button>
          </div>
        </nav>
      </div>

      {/* sidebar  component */}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CategoryPanale setOpen={setOpen} />
      </div>
      {/* Overlay for background click */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        ></div>
      )}
    </>
  );
};

export default Navigation;

//
