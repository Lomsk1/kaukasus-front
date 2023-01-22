import { Fragment, useState } from "react";
import styled from "styled-components";
import Card from "../../Components/Cards/Card";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { webJson } from "../../Hoc/webJsons";
import s from "../../assets/images/About_Contries_cover.jpg";

function AboutCountries() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection>
        {webJson &&
          webJson.map((website, index) => (
            <Card
              about
              id={website.id}
              key={index}
              hexa={website.hexa}
              title={website.title}
              description={website.description}
              image={website.flags}
              country={website.title}
              links={website.links}
            />
          ))}
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default AboutCountries;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* min-height: 100vh; */
  height: max-content;
  /* overflow: hidden; */
  gap: 200px;

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

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
  padding-bottom: 3em;
  @media (max-width: 1500px) {
    gap: 100px;
  }
  @media (max-width: 1135px) {
    gap: 0;
    justify-content: space-evenly;
  }
  @media (max-width: 965px) {
    flex-wrap: wrap;
    margin-top: 5em;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    height: 150vh;
  }
`;
