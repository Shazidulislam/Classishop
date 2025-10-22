import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import slider_1 from "../../../assets/images/slider/addvaites_1.webp";
import slider_2 from "../../../assets/images/slider/addvaites_2.webp";
import slider_3 from "../../../assets/images/slider/addvaites_3.webp";
import slider_4 from "../../../assets/images/slider/addvaites_4.webp";
import { Link } from "react-router";

const Addvaites = () => {
  return (
    <div className="pb-10">
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
        <SwiperSlide>
          <Link to={"/"}>
            <img src={slider_1} alt="" className="rounded-md " />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <img src={slider_4} alt="" className="rounded-md" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <img src={slider_2} alt="" className="rounded-md" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <img src={slider_3} alt="" className="rounded-md" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Addvaites;
