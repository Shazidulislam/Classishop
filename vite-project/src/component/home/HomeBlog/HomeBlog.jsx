import React, { useRef } from "react";
import BlogProduction from "../../gobal/BlogProduction/BlogProduction";
import Title from "../../gobal/Title/Title";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const HomeBlog = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="pb-10">
      <div>
        <Title title={"From The Blog"}></Title>
      </div>
      {/* blog wiht swiper */}
      <div className="relative">
        <button
          ref={prevRef}
          className="swiper-button-prev absolute  top-1/2 left-0 transform -translate-y-1/2 hover:bg-[#ff5252] bg-white rounded-full p-2 z-10"
        >
          <FaChevronLeft size={24} className="text-black hover:text-white" />
        </button>

        {/* Right arrow */}
        <button
          ref={nextRef}
          className="swiper-button-next absolute top-1/2  right-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 hover:bg-[#ff5252]"
        >
          <FaChevronRight
            size={24}
            className="text-black  hover:text-white"
          />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            nextEl: ".swiper-button-next", // Reference for right button
            prevEl: ".swiper-button-prev", // Reference for left button
          }}
        >
          <SwiperSlide>
            <BlogProduction text_2={"Welcome to our blog — your ultimate destination for the latest trends, shopping tips, and product insights. Stay updated with expert guides, exclusive deals, and lifestyle inspiration that make your everyday shopping smarter and more stylish."} text_1={"Explore the page"} time={"2025-10-22"} blogImg={"https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg"} ></BlogProduction>
          </SwiperSlide>
          <SwiperSlide>
            <BlogProduction text_2={"Welcome to our blog — your ultimate destination for the latest trends, shopping tips, and product insights. Stay updated with expert guides, exclusive deals, and lifestyle inspiration that make your everyday shopping smarter and more stylish."} text_1={"Explore the page"} time={"2025-10-22"} blogImg={"https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg"} ></BlogProduction>
          </SwiperSlide>
          <SwiperSlide>
            <BlogProduction text_2={"Welcome to our blog — your ultimate destination for the latest trends, shopping tips, and product insights. Stay updated with expert guides, exclusive deals, and lifestyle inspiration that make your everyday shopping smarter and more stylish."} text_1={"Explore the page"} time={"2025-10-22"} blogImg={"https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg"} ></BlogProduction>
          </SwiperSlide>
          <SwiperSlide>
            <BlogProduction text_2={"Welcome to our blog — your ultimate destination for the latest trends, shopping tips, and product insights. Stay updated with expert guides, exclusive deals, and lifestyle inspiration that make your everyday shopping smarter and more stylish."} text_1={"Explore the page"} time={"2025-10-22"} blogImg={"https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg"} ></BlogProduction>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBlog;
