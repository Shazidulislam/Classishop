import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      {/* <Container> */}
        <div className="flex items-center  md:justify-between ">
          <div className="flex-1">
            <p className="text-center md:text-start">Get up to 50% off new season styles, limited time only</p>
          </div>
          <div className="flex-1 hidden md:flex items-center justify-end">
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
        
      {/* </Container> */}
    </header>
  );
};

export default Header;
