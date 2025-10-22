
import React, { useRef } from "react";
import ProductBox from "../../gobal/ProductBox/ProductBox";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Icons
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const LatestProducts = () => {
      const prevRef = useRef(null);
      const nextRef = useRef(null);
    return (
        <div className='pb-10 '>
            <h1 className="text-2xl font-medium text-gray-800">Latest Products</h1>
            {/* latest product  */}
             {/* Swiper container */}
                  <div className="py-6 relative ">
                    {/* Left arrow */}
                    <button
                      ref={prevRef}
                      className="swiper-button-prev absolute  top-1/2 left-0 transform -translate-y-1/2 hover:bg-[#ff5252] bg-white rounded-full p-2 z-10"
                    >
                     <RiArrowLeftSLine size={24} className="text-black hover:text-white"/>
                    </button>
            
                    {/* Right arrow */}
                    <button
                      ref={nextRef}
                      className="swiper-button-next absolute top-1/2  right-0 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 hover:bg-[#ff5252]"
                    >
                            <RiArrowRightSLine size={24} className="text-black  hover:text-white"/>
                     
                    </button>
            
                    {/* Swiper */}
                    <Swiper 
                      slidesPerView={6}
                      spaceBetween={10}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                      }}
                      className=""
                    >
                     <SwiperSlide className="mb-4" >
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                     <SwiperSlide>
                          <ProductBox/>
                     </SwiperSlide>
                    </Swiper>
                  </div>
        </div>
    );
};

export default LatestProducts;