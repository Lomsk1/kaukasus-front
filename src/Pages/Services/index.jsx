import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HeaderImgStatic from "../../Components/Header/HeaderVol2";
import headerImage from "../../assets/images/Usere Service.jpg";
import Footer from "../../Components/Footer";

function SiteServices() {
  const [service, setService] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      fetch(`${process.env.REACT_APP_BASE_URL}/services_other/all/`)
        .then((response) => response.json())
        .then((data) => setService(data[0]));
    }

    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderImgStatic description={"unsere service"} image={headerImage} />

      <ServiceSection>
        {service ? (
          <>
            <div className="title">
              <h1>{service.title}</h1>
            </div>
            <div className="description">
              <p>{service.description}</p>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </ServiceSection>
      <Footer />
    </>
  );
}

export default SiteServices;

const ServiceSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2em;

  .title{
    width: 90%;
    margin: 0 auto;
    min-height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3em;
    font-size: 2rem;
    h1{
        margin: 0;
        text-align: center;
    }
  }

  .description{
    padding-top: 2em;
    width: 90%;
    margin: 0 auto;
    p{
        margin: 0;
    }
  }
`;
