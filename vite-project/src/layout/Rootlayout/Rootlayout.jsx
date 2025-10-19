import React from "react";
import { Outlet } from "react-router";
import Container from "../../component/gobal/Container/Container";
import Header from "../../component/Header/Header";
import Navbar from "../../component/gobal/Navbar/Navbar";

const Rootlayout = () => {
  return (
    <div>
      <Container>
        <header>
          <Header/>
          <Navbar/>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Container>
    </div>
  );
};

export default Rootlayout;
