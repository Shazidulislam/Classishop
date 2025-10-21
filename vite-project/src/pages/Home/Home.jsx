import React from "react";
import Banner from "../../component/home/Banner/Banner";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <div className=" ">
      {/* banner */}
      <div className="bg-gray-100 w-full">
        <Container maxWidth={false} disableGutters>
          <Banner />
        </Container>
      </div>
    </div>
  );
};

export default Home;
