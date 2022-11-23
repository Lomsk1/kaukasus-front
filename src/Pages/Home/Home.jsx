import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Header, Bg } from "./HomeElements";
import Card from "../../Components/Cards/Card";
import styled from "styled-components";
import { webJson } from "../../Hoc/webJsons";


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
        {/* <Main> */}
        <Bg />
        <h1>Kultur-, Wander- und Abenteuerreisen</h1>
        <Page>
          {webJson &&
            webJson.map((website, index) => (
              <Card
                main
                key={index}
                hexa={website.hexa}
                title={website.title}
                image={website.image}
                country={website.title}
                description={website.description}
              />
            ))}
        </Page>
        {/* </Main> */}
      </Header>
    </>
  );
};

export default Home;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* min-height: 100vh; */
  height: max-content;
  /* overflow: hidden; */
  gap: 200px;
  @media (max-width: 1500px){
    gap: 100px;
  }
  @media (max-width: 1160px) {
    gap: 40px;
  }
  @media (max-width: 1070px) {
    flex-wrap: wrap;
    margin-top: 5em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 150vh;
  }
`;
