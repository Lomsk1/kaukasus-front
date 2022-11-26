import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function TourBox({ url, price, duration, title, id }) {
  const navigate = useNavigate()

  const clickHandler = ()=> {
    navigate(`/tour/${id}`)
  }
  return (
    <Fragment>
      <MainDiv onClick={clickHandler}>
          <ImgDiv>
            <img src={process.env.REACT_APP_BASE_URL + url} alt='img not found' />
          </ImgDiv>
          <TitleDiv>
            <p>{title}</p>
          </TitleDiv>
          <PriceDiv>
            <div>
              <BsFillClockFill />
              <p>{duration} Tage</p>
            </div>
            <div>
              <p>ab € {price}</p>
            </div>
          </PriceDiv>
      </MainDiv>
    </Fragment>
  );
}

export default TourBox;

const MainDiv = styled.div`
  width: 280px;
  height: 350px;
  margin: 2em;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 65%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  p {
    color: #438945;
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0;
    text-align: center;
    transform: translateY(0.5em);
  }
`;
const PriceDiv = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-evenly;
  div {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    p {
      color: hsl(170, 39%, 12%);
      font-size: 1.125rem;
      margin: 0;
    }
  }
`;
