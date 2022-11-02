import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function TourBox({ url, price, duration, title, id }) {
  return (
    <Fragment>
      <MainDiv>
        <Link to={`/tour/${id}`}>
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
        </Link>
      </MainDiv>
    </Fragment>
  );
}

export default TourBox;

const MainDiv = styled.div`
  width: 300px;
  height: 320px;
  margin: 2em;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  a {
    text-decoration: none;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const TitleDiv = styled.div`
  width: 100%;
  height: 15%;
  p {
    color: #438945;
    font-size: 1.4375rem;
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
