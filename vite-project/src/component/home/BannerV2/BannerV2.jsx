import React from "react";
import BannerProduction from "../../gobal/BannerProduction/BannerProduction";
import sliderOne from "../../../assets/images/slider/slider_1.png";
import sliderTow from "../../../assets/images/slider/slider_2.jpg";
import { Link } from "react-router";

const BannerV2 = () => {
  return (
    <div className="pb-10 grid grid-cols-12">
      {/* banner */}
      <div className="col-span-9">
        <BannerProduction />
      </div>
      <div className="col-span-3 flex flex-col gap-4 mt-4">
        {/* smallbanner 1 */}
        <Link className="relative w-full ">
          <div className="absolute pl-4 pt-10 space-y-2">
            <h1 className="text-2xl font-medium text-gray-700 w-[65%]">
              Bey's Mens Bags With Low Price!
            </h1>
            <p className="text-3xl font-medium text-[#ff5252]">$9</p>
            <p className="text-2xl transition-colors text-gray-500 font-medium hover:text-[#ff5252] hover:underline">
              Shop Now
            </p>
          </div>
          <img src={sliderOne} alt="Banner 1" className="rounded-xl" />
        </Link>
        {/* smallbanner 2 */}
        <Link className="relative w-full ">
          <img src={sliderTow} alt="Banner 1" className="rounded-xl " />
          <div className="z-10 absolute left-32 w-full top-10  space-y-2">
            <h1 className="text-xl w-[60%] font-medium text-gray-700 ">
              Bey's Womens With Low Price!
            </h1>
            <p className="text-3xl font-medium text-[#ff5252]">$99</p>
            <p className="text-2xl text-gray-700 font-medium hover:text-[#ff5252] hover:underline">
              Shop Now
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BannerV2;
