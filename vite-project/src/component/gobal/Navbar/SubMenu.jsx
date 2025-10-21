import React from "react";
import { Link } from "react-router";

const SubMenu = () => {
  return (
    <ul className="absolute left-0 top-full mt-2 w-32 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
      {/* only Women will have submenu */}
      <li className="relative group/women">
        <Link
          to="/women"
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
        >
          Women
        </Link>

        {/*submenu — visible only when hover on Women */}
        <div className="absolute top-0 left-full  w-40 bg-white shadow-lg rounded-md py-2 mt-4 opacity-0 invisible group-hover/women:opacity-100 group-hover/women:visible transition-all duration-300">
          <ul>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] cursor-pointer">
                Tops
              </p>
            </li>
            <li>
              <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] cursor-pointer">
                Jeans
              </p>
            </li>
          </ul>
        </div>
      </li>

      {/* these don't have submenu */}
      <li className="relative group/girls">
        <Link
          to="/girls"
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
        >
          Girls
        </Link>

           {/*sub menu visible only girls   */}
           <div className="absolute top-0 left-full w-36 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover/girls:opacity-100 group-hover/girls:visible transition-all duration-300">
            <ul>
                <li >
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] cursor-pointer">Kurtas & Suits </p>
                </li>
                <li >
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] cursor-pointer">Sarees</p>
                </li>
                <li >
                    <p className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252] cursor-pointer">Tops </p>
                </li>
            </ul>
           </div>

      </li>
      <li>
        <Link
          to="/men"
          className="block px-4 py-2 hover:bg-gray-100 hover:text-[#ff5252]"
        >
          Men
        </Link>
      </li>
    </ul>
  );
};

export default SubMenu;
