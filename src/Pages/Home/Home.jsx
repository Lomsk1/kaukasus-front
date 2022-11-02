import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Header, Main, Bg } from "./HomeElements";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar homePage isOpen={isOpen} toggle={toggle} />
      <Navbar homePage toggle={toggle} />
      <Header>
        <Main>
          <Bg />
          <h1>Kultur-Wandern-und Abendteuerreisen</h1>
        </Main>
      </Header>
    </>
  );
};

export default Home;
