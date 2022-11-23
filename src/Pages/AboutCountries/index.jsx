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
  background-image: url('https://scontent.ftbs4-2.fna.fbcdn.net/v/t39.30808-6/316959058_5775981925812764_499316653202030225_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFX_C73z7_2ZrqNZGWoyYDDlf3W3UWLprqV_dbdRYumugUz9GY5RwZH4G971QpwuDjr1pjvSEqQ6WulLD_kA50c&_nc_ohc=EENvbGLNgV4AX_j57zD&_nc_ht=scontent.ftbs4-2.fna&oh=00_AfCYRxVyOfjOlXWBJapdZ9kZO4toawDVYA6NQ7c4R-kjTg&oe=6382AE67');
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
