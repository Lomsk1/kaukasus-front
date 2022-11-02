import styled from "styled-components";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer";

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Photos() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoData, setPhotoData] = useState([]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/photo-blog/all/${id}/`)
      .then(response => response.json())
      .then(data => setPhotoData(data));
  }, [id]);

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <MainSection>
        <MainDiv>
          <div className='slide-container'>
            <Zoom {...zoomOutProperties}>
              {photoData.map((each, index) => (
                <div key={index}>
                  <h3>{each.title}</h3>
                  <img
                    style={{ width: "100%" }}
                    src={process.env.REACT_APP_BASE_URL + each.image}
                    alt={"img not found"}
                  />
                </div>
              ))}
            </Zoom>
          </div>
        </MainDiv>
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default Photos;

const MainSection = styled.section`
  height: max-content;
  min-height: 65vh;
  background-color: black;
  overflow: hidden;
`;
const MainDiv = styled.div`
  margin-top: 5rem;
  @import url("https://fonts.googleapis.com/css2?family=Inconsolata&display=swap");
  .slide-container {
    width: 88%;
    margin: auto;
    border-radius: 15px;
    overflow: hidden;
    img{
      border-radius: 15px;F
    }

    .each-slideshow-indicator::before {
      background-color: grey !important;
    }
    h3 {
      text-align: center;
      margin: 0;
      color: white;
      font-family: 'Inconsolata';  
      font-weight: 400; 
     }
    @media (max-width: 1680px) {
      width: 80%;
    }
    @media (max-width: 1600px) {
      width: 70%;
    }
    @media (max-width: 1536px) {
      width: 100%;
    }
    @media (max-width: 1440px) {
      width: 77%;
    }
    @media (max-width: 1366px) {
      width: 62%;
    }
    @media (max-width: 1242px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      width: 65%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
