import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Addvaites = () => {
    return (
        <div>
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

            </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Addvaites;