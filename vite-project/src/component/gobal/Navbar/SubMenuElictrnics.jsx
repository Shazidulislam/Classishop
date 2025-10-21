import React from "react";
import { Link } from "react-router";

const SubMenuElictrnics = () => {
  return (
    <ul className="absolute left-0 w-32 mt-2 top-full bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 space-y-1 z-50">
      <li className="relative group/mobaile">
        <Link
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
          to={"/"}
        >
          Mobaile
        </Link>
        {/* submenu for Mobaile */}
        <div className="absolute top-0 right-2 left-full w-36 mt-2 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/mobaile:opacity-100 group-hover/mobaile:visible transition-all duration-300">
          <ul>
            <li className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]">
              Apple
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]">
              Realme
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]">
              Vivo
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]">
              Sumsung
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
          to={"/"}
        >
          Laptop
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
          to={"/"}
        >
          Smart Watch
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuElictrnics;
