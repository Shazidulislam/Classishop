import React from "react";
import Banner from "../../component/home/Banner/Banner";
import Container from "@mui/material/Container";
import Category from "../../component/home/Category/Category";

const Home = () => {
  return (
    <div className=" ">
     
      <div className="bg-gray-50 w-full">
         {/* banner */}
        <Container maxWidth={false} disableGutters>
          <Banner />
        </Container>
        {/* category section with navigate */}
        <Container maxWidth={false} >
          <Category/>
        </Container>
      </div>
    </div>
  );
};

export default Home;
