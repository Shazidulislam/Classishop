import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules"; // Import Navigation module
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
const BannerProduction = () => {
  return (
    <div className="homeBannerV2 w-full mx-auto py-3 px-6 relative">
      {" "}
      {/* relative positioning for absolute arrows */}
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
          <div className="relative">
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg"
              }
              alt="Banner 1"
              className="rounded-md"
            />
            {/*  */}
            <div className="info absolute top-15 right-[100%] opacity-0 transition-all duration-700 flex flex-col justify-center items-center w-[50%] z-30 ">
              <h1 className="text-md font-[500] w-full mb-3 relative -right-[100%] opacity-0">
                Big Saving days Sale
              </h1>
              <h2 className="text-4xl font-[600] pb-5 text-[#424242] relative -right-[100%] opacity-0">
                Buy new trand women black cotton bland Top <br /> | top for
                women | <br /> women top ...{" "}
              </h2>
              <h3 className="w-full flex items-center gap-2 relative -right-[100%] opacity-0">
                <p className="text-sm text-[#424242]">Starting At Only</p>
                <p className="text-3xl font-[700] text-[#ff5252]">$15</p>
              </h3>
              <div className="w-full pt-2 btn  relative -right-[100%] opacity-0">
                <button className="bg-[#ff5353]   text-white text-sm cursor-pointer  transition-all px-6 py-2 rounded font-[500] hover:bg-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}

        <SwiperSlide>
          <div className="relative">
            <img
              src={
                "https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg"
              }
              alt="Banner 1"
              className="rounded-md"
            />
            {/*  */}
            <div className="info absolute top-15 right-[100%] opacity-0 transition-all duration-700 flex flex-col justify-center items-center w-[50%] z-30 ">
              <h1 className="text-md font-[500] w-full mb-3 relative -right-[100%] opacity-0">
                Big Saving days Sale
              </h1>
              <h2 className="text-4xl font-[600] pb-5 text-[#424242] relative -right-[100%] opacity-0">
                Buy new trand women black cotton bland Top <br /> | top for
                women | <br /> women top ...{" "}
              </h2>
              <h3 className="w-full flex items-center gap-2 relative -right-[100%] opacity-0">
                <p className="text-sm text-[#424242]">Starting At Only</p>
                <p className="text-3xl font-[700] text-[#ff5252]">$15</p>
              </h3>
              <div className="w-full pt-2 btn  relative -right-[100%] opacity-0">
                <button className="bg-[#ff5353]   text-white text-sm cursor-pointer  transition-all px-6 py-2 rounded font-[500] hover:bg-black">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute ml-4 top-1/2 left-0 transform -translate-y-1/2 hover:bg-[#ff5252] bg-white rounded-full p-2 z-10">
        <RiArrowLeftSLine size={16} className="text-black hover:text-white" />
      </div>
      <div className="swiper-button-next absolute top-1/2 mr-4 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 hover:bg-[#ff5252]">
        <RiArrowRightSLine size={16} className="text-black  hover:text-white" />
      </div>
    </div>
  );
};

export default BannerProduction;
