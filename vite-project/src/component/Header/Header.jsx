import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 text-[14px] text-gray-500 border-t border-b border-gray-400">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="">Get up to 50% off new season styles, limited time only</p>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <ul className="flex gap-3">
                <li>
                    <Link className="hover:text-[#ff5252] transition-colors duration-300 ease-in-out" to={"/"}>Track Order</Link>
                </li> |
                <li>
                    <Link className="hover:text-[#ff5252] transition-colors duration-300 ease-in-out" to={"/"}>Help Center</Link>
                </li>
            </ul>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
