import { Fragment, useState } from "react";
import styled from "styled-components";
import Card from "../../Components/Cards/Card";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import websites from "../../websites.json";

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
        {websites &&
          websites.map((website, index) => (
            <Card
              about
              id={website.id}
              key={index}
              hexa={website.hexa}
              title={website.title}
              description={website.description}
              image={website.image}
              country={website.title}
            />
          ))}
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default AboutCountries;

const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;

  @media (max-width: 1135px) {
    gap: 0;
    justify-content: space-evenly;
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
