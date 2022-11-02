import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import websites from "../../websites.json";

function AboutEachCountry() {
  const [aboutCountryData, setAboutCountryData] = useState([]);
  const [time, setTime] = useState(false);
  const [web, setWeb] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/country_info/`)
      .then(response => response.json())
      .then(data =>
        setAboutCountryData(data.filter(country => country.id === parseInt(id)))
      );
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setWeb(websites.filter(web => web.id === parseInt(id)));
  }, [id]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <UpperSection>
        <div className='middle'>{web && time && <h1>{web[0].title}</h1>}</div>
      </UpperSection>

      <TextSection>
        {aboutCountryData && time && (
          <div className='middle'>
            <h2>{aboutCountryData[0].title}</h2>
            <hr />
            <p>{aboutCountryData[0].description}</p>
          </div>
        )}
      </TextSection>
      <Footer />
    </Fragment>
  );
}

export default AboutEachCountry;

const UpperSection = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("https://img.fotocommunity.com/georgie-view-on-the-kaukasus-61e0f573-425f-46cb-9458-938456e48dba.jpg?height=1080");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,700&display=swap");

  .middle {
    width: 100vh;
    height: 100vh;
    background: rgba(34, 193, 195, 0.2);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 0.4) 0%,
      rgba(224, 176, 73, 0.4) 100%
    );
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      transform: rotate(-45deg);
      font-family: "Source Code Pro", monospace;
      font-size: 3rem;
      font-weight: 700;
      font-style: italic;
    }
  }
`;

const TextSection = styled.section`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  background-image: url("https://momentslikethis.de/wp-content/uploads/2013/01/shl.png");
  background-position: center top;
  background-size: auto;
  background-repeat: repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  .middle {
    width: 80%;
    min-height: 80vh;
    height: max-content;
    @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap");

    h2 {
      width: 100%;
      height: 7rem;
      margin: 0;
      text-align: center;
      font-weight: 700;
      font-family: "Cinzel", serif;
    }
    p {
      text-align: justify;
      font-size: 1.4rem;
      font-weight: 400;
      font-family: "Cinzel", serif;
    }
  }
`;
