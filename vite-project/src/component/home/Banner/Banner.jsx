import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";


import banner_1 from "../../../assets/banner/banner-1.jpg";
import banner_2 from "../../../assets/banner/banner-2.jpg";
import banner_3 from "../../../assets/banner/banner-3.jpg";
import banner_4 from "../../../assets/banner/banner-4.jpg";

const Banner = () => {
  return (
    <div className="w-full mx-auto py-3 px-6 relative"> {/* relative positioning for absolute arrows */}
      <Swiper
        modules={[Autoplay, Navigation]}  
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        speed={1200}
        navigation={{
          nextEl: ".swiper-button-next", // Reference for right button
          prevEl: ".swiper-button-prev", // Reference for left button
        }}
      >
        <SwiperSlide>
          <img src={banner_1} alt="Banner 1" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_2} alt="Banner 2" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_3} alt="Banner 3" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner_4} alt="Banner 4" className="rounded-xl" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute ml-4 top-1/2 left-0 transform -translate-y-1/2 hover:bg-[#ff5252] bg-white rounded-full p-2 z-10">
      <RiArrowLeftSLine size={24} className="text-black hover:text-white"/>
      </div>
      <div className="swiper-button-next absolute top-1/2 mr-4 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 hover:bg-[#ff5252]">
       <RiArrowRightSLine size={24} className="text-black  hover:text-white"/>
      </div>
    </div>
  );
};

export default Banner;
