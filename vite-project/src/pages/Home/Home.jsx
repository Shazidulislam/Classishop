import React from "react";
import Banner from "../../component/home/Banner/Banner";
import Container from "@mui/material/Container";
import Category from "../../component/home/Category/Category";
import Slider from "../../component/home/Slider/Slider";
import ProductSlider from "../../component/home/ProductSlider/ProductSlider";
import LatestProducts from "../../component/home/LatestProducts/LatestProducts";
import FeaturedProducts from "../../component/home/FeaturedProducts/FeaturedProducts";
import Addvaites from "../../component/home/Addvaites/Addvaites";
import HomeBlog from "../../component/home/HomeBlog/HomeBlog";
import Requerments from "../../component/home/Requerments/Requerments";
import BannerV2 from "../../component/home/BannerV2/BannerV2";

const Home = () => {
  return (
    <div className="mt-48 ">
      <div className="bg-gray-50 w-full">
        {/* banner */}
        <Container maxWidth={false} disableGutters>
          <Banner />
        </Container>
        {/* category section with navigate */}
        <Container maxWidth={false}>
          <Category />
        </Container>
      </div>
         {/* popular product section */}
      <Container maxWidth={false}>
        <ProductSlider />
        <BannerV2/>
      </Container>

      <div>
        {/* slider under the  */}
        <Container maxWidth={false}>
          {/* slider with shiping section */}
          <Slider></Slider>
          {/* latest product */}
          <LatestProducts/>
          {/* feture product */}
          <FeaturedProducts/>
          {/* add vaites of product */}
          <Addvaites/>
          {/* blog */}
          <HomeBlog></HomeBlog>
          {/*  */}
         
        </Container>
      </div>
    </div>
  );
};

export default Home;
