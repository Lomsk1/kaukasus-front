import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Header, Main, Bg } from "./HomeElements";
import websites from "../../websites.json";
import Card from "../../Components/Cards/Card";
import styled from "styled-components";
import { webJson } from "../../Hoc/webJsons";


// // import geoImg from '../../assets/images/geo.jpg'
// import geoCover from '../../assets/images/Georgien-Cover.jpg'
// // import armImg from '../../assets/images/geo.jpg'
// import armCover from '../../assets/images/Armenien-Cover.jpg'
// // import azrImg from '../../assets/images/geo.jpg'
// import azrCover from '../../assets/images/Azerbaijan_Cover.jpg'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const webJson = [
  //   {
  //     id: 1,
  //     hexa: "#1D1148",
  //     title: "Georgia",
  //     image: geoCover,
  //     // cover: geoCover
  //   },
  //   {
  //     id: 3,
  //     hexa: "#FFCD00",
  //     title: "Armenia",
  //     image: armCover,
  //   },
  //   {
  //     id: 2,
  //     hexa: "#FF5041",
  //     title: "Azerbaijan",
  //     image: azrCover,
  //   },
  // ];

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
  gap: 100px;
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
