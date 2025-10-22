import React from "react";
import Nav from "./Nav";
import ProductBox from "../../gobal/ProductBox/ProductBox";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const ProductSlider = () => {
  return (
    <div className="py-10">
      {/* navigation */}
      <Nav />
      {/* Popular Product */}
      <div className="py-6">
                 <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
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

export default ProductSlider;
