import React from "react";
import { Outlet } from "react-router";
import Container from "../../component/gobal/Container/Container";
import Header from "../../component/Header/Header";
import Navbar from "../../component/gobal/Navbar/Navbar";
import Navigation from "../../component/gobal/Navbar/Navigation";
import Footer from "../../component/Footer/Footer";

const Rootlayout = () => {
  return (
    <div>
      {/* <header className="w-full"> */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className=" py-2 px-2 text-[14px] text-gray-500 border-t-2 border-b-2 border-gray-200">
          <Container>
            <Header />
          </Container>
        </div>
        {/* navbar */}
        <div className=" py-4 border-b-2 border-gray-300">
          <Container>
            <Navbar />
          </Container>
        </div>
        {/* navigation */}
        <div className="py-2">
          <Container>
            <Navigation />
          </Container>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Rootlayout;
