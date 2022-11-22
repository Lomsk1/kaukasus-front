import Home from "./Home";
import React from "react";
import styled from "styled-components";
import Card from "../../Components/Cards/Card";
import websites from "../../websites.json";
import { Element } from "react-scroll/modules";
import Footer from "../../Components/Footer";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: auto;
  gap: 100px;
  @media (max-width: 1135px) {
    gap: 50px;
  }
  @media (max-width: 965px) {
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 150vh;
  }
`;

function HomeAll() {
  return (
    <>
      <div>
        <Home />
        <Element name={"pages"} />
        {/* <Page>
         
          {websites &&
            websites.map((website, index) => (
              <Card
                main
                key={website.description}
                hexa={website.hexa}
                title={website.title}
                description={website.description}
                image={website.image}
                country={website.title}
              />
            ))}
        </Page> */}
      </div>
    </>
  );
}

export default HomeAll;
