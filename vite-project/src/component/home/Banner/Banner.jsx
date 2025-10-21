import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

import banner_1 from "../../../assets/banner/banner-1.jpg";
import banner_2 from "../../../assets/banner/banner-2.jpg";
import banner_3 from "../../../assets/banner/banner-3.jpg";
import banner_4 from "../../../assets/banner/banner-4.jpg";

const Banner = () => {
  return (
    <div className="w-full mx-auto py-3 px-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={banner_1} alt="" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={banner_2} alt="" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={banner_3} alt="" className="rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={banner_4} alt="" className="rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
