import React from "react";
import ShipingBox from "./ShipingBox";
import sliderOne from "../../../assets/images/slider/slider_1.png";
import sliderTow from "../../../assets/images/slider/slider_2.jpg";
import sliderThree from "../../../assets/images/slider/slider_3.jpg";
import sliderFour from "../../../assets/images/slider/slider_4.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Slider = () => {
  return (
    <div className="pb-10  bg-white">
      <div className="px-10">
        <ShipingBox />
      </div>
      {/* slider */}
      <div className=" pt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".swiper-button-next", // Reference for right button
            prevEl: ".swiper-button-prev", // Reference for left button
          }}
        >
          {/* slider_1 */}
          <SwiperSlide className="relative">
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
          </SwiperSlide>
          {/* slider_2 */}
          <SwiperSlide className="relative">
           
              <img src={sliderTow} alt="Banner 1" className="rounded-xl " />
              <div className="z-10 absolute left-32 w-full top-10  space-y-2">
                <h1 className="text-xl font-medium text-gray-700 w-[70%]">
                  Bey's Womens Bags With Low Price!
                </h1>
                <p className="text-3xl font-medium text-[#ff5252]">$99</p>
                <p className="text-2xl text-gray-700 font-medium hover:text-[#ff5252] hover:underline">
                  Shop Now
                </p>
              </div>
            
          </SwiperSlide>
          {/* slider_3 */}
          <SwiperSlide>
             <div className="absolute left-36 top-10   space-y-2">
              <h1 className="text-md font-medium text-gray-700 w-[90%]">
                Bey's Mens Footwar With Low Price!
              </h1>
              <p className="text-3xl font-medium text-[#ff5252]">$6</p>
              <p className="text-2xl transition-colors text-gray-500 font-medium hover:text-[#ff5252] hover:underline">
                Shop Now
              </p>
            </div>
            <img src={sliderThree} alt="Banner 1" className="rounded-xl" />
          </SwiperSlide>
          {/* slider_4 */}
           <SwiperSlide className="relative">
            <div className="absolute pl-4 pt-10 space-y-2">
              <h1 className="text-xl font-medium text-gray-500 w-[65%]">
                Bey's Apple Phone With Low Price!
              </h1>
              <p className="text-3xl font-medium text-[#ff5252]">$700</p>
              <p className="text-2xl transition-colors text-gray-500 font-medium hover:text-[#ff5252] hover:underline">
                Shop Now
              </p>
            </div>
            <img src={sliderFour} alt="Banner 1" className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* navigation btn */}

    </div>
  );
};

export default Slider;
