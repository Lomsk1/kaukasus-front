import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { rubberBand } from "react-animations";

function PhotoBox({ url, title, description, id }) {
  const navigate = useNavigate();

  const onLinkClick = () => {
    navigate(`/photo_blog/${id}`);
  };

  return (
    <MainDiv onClick={onLinkClick}>
      <UpperDiv>
        <p>{title}</p>
        <p>{description}</p>
      </UpperDiv>
      <LowerDiv>
        <img src={process.env.REACT_APP_BASE_URL + url} alt={"not found"} />
      </LowerDiv>
    </MainDiv>
  );
}

export default PhotoBox;

const fadeAnimation = keyframes`${rubberBand}`;

const MainDiv = styled.div`
  width: 900px;
  min-height: 600px;
  height: max-content;
  margin: 2em;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  animation: 1s ${fadeAnimation};

  @media (max-width: 1110px) {
    width: 95%;
  }
  @media (max-width: 640px) {
    margin: 0;
  }
`;
const UpperDiv = styled.div`
  width: 100%;
  min-height: 20%;
  height: max-content;
  display: flex;
  flex-direction: column;
  &:first-child {
    align-items: center;
  }
  &:nth-child(1) {
    text-align: justify;
  }
  p {
    margin: 0;
    &:nth-child(2) {
      margin-top: 1em;
    }
  }
`;
const LowerDiv = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 1em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    height: 400px;
  }
`;
