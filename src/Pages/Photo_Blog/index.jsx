import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PhotoBox from "../../Components/PhotoBox";
import { getPhotosData } from "./photo-action";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "../../Components/Footer";
import HeaderImgStatic from "../../Components/Header/HeaderVol2";
import headerImage from "../../assets/images/Foto-Blog.jpg";

function PhotoBlog() {
  const dispatch = useDispatch();
  const { photoData, isLoading } = useSelector((state) => state.photo);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(getPhotosData());
  }, [dispatch]);

  return (
    <Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeaderImgStatic description={"FOTO BLOG"} image={headerImage} />
      <MainSection>
        <Div>
          <MomentsDiv>
            <p>Meine Reisen in Bildern</p>
            <span>Foto-Erzählungen von Giorgi Liparteliani</span>
          </MomentsDiv>
          <div className="direction">
            {!isLoading &&
              photoData.map((photo) => {
                return (
                  <PhotoBox
                    key={photo.id}
                    url={photo.image}
                    title={photo.title}
                    description={photo.description}
                    id={photo.id}
                  />
                );
              })}
          </div>
        </Div>
      </MainSection>

      <Footer />
    </Fragment>
  );
}

export default PhotoBlog;

const MainSection = styled.section`
  width: 100%;
  height: max-content;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("https://momentslikethis.de/wp-content/uploads/2013/01/shl.png");
  background-position: center top;
  background-size: auto;
  background-repeat: repeat;
  background-attachment: fixed;
  @import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap");
  
  .direction{
    display: flex;
    flex-direction: column-reverse;
  }
`;
const Div = styled.div`
  margin-top: 4em;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfdfd;
  padding: 2.25% 4.5%;
  @media (max-width: 1110px) {
    width: 85%;
  }
`;
const MomentsDiv = styled.div`
  width: 900px;
  height: 7rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1110px) {
    width: 95%;
  }
  @media (max-width: 660px) {
    height: 15rem;
  }
  p {
    font-family: "Dosis", sans-serif;
    font-weight: 200;
    margin: 0;
    font-size: 52px;
    color: #555;
  }
  span {
    margin-top: 1em;
    color: #666;
    font-size: 13px;
  }
`;
