import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import "swiper/css";

const BannerProduction = ({
  banner,
  slidesPerView,
  loop,
  spaceBetween,
  speed,
  navigation,
  text_1,
  text_2,
  text_3
}) => {
  return (
    <div className="w-full mx-auto py-3 px-6 relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={loop ? loop : true}
        spaceBetween={spaceBetween ? spaceBetween : 10}
        slidesPerView={slidesPerView ? slidesPerView : 1}
        speed={speed ? speed : 1200}
        navigation={{
          nextEl: ".swiper-button-next", // Reference for right button
          prevEl: ".swiper-button-prev", // Reference for left button
        }}
      >
        <SwiperSlide>
          <div className="">
            <div className="">
              <h1 className="text-2xl font-medium w-[80%]">{text_1}</h1>
              <p className="text-xl text-[#ff5252]">{text_2}</p>
              <p className="text-xl font-medium hover:text-[#ff5252]">{text_3}</p>
            </div>
            <img   src={banner} alt="Banner 1" className="rounded-xl " />
          </div>
        </SwiperSlide>
      </Swiper>

      {navigation === true && (
        <>
          <div className="swiper-button-prev absolute ml-4 top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10">
            <RiArrowLeftSLine size={24} className="" />
          </div>
          <div className="swiper-button-next absolute top-1/2 mr-4 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10">
            <RiArrowRightSLine size={24} />
          </div>
        </>
      )}
      {/* Custom Navigation Buttons */}
    </div>
  );
};

export default BannerProduction;
