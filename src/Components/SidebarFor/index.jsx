import styled from "styled-components";
import { Link } from "react-router-dom";

function SidebarFor({ aboutCountry }) {
  return (
    <SideBars>
      <LeftDivDown>
        <div>
          <Link to={"/Georgia"}>GEORGIEN</Link>
        </div>
        <div>
          <Link to={"/Armenia"}>ARMENIEN</Link>
        </div>
        <div>
          <Link to={"/Azerbaijan"}>AZERBAIJAN</Link>
        </div>
      </LeftDivDown>
    </SideBars>
  );
}

export default SidebarFor;

const SideBars = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  -webkit-box-shadow: inset 1px 0px 25px 21px rgba(255, 255, 255, 0.78);
  box-shadow: inset 1px 0px 25px 21px rgba(60, 188, 195, 0.1);
`;

const LeftDivDown = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  div {
    /* width: 30%;
    height: 30%; */
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem !important;
    all: unset;
    width: 150px;
    height: 40px;
    font-size: 16px;
    background: transparent;
    border: none;
    position: relative;
    color: #f0f0f0;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    @media (max-width: 970px) {
      height: 25%;
      font-size: 0.6rem;
    }
    @media (max-width: 600px) {
      height: 40px;
    }

    &::after,
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -99999;
      transition: all 0.4s;
    }

    &::before {
      transform: translate(0%, 0%);
      width: 100%;
      height: 100%;
      background: #28282d;
      border-radius: 10px;
    }

    &::after {
      transform: translate(10px, 10px);
      width: 35px;
      height: 35px;
      background: #ffffff15;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border-radius: 50px;
    }

    &:hover::before {
      transform: translate(5%, 20%);
      width: 110%;
      height: 110%;
    }

    &:hover::after {
      border-radius: 10px;
      transform: translate(0, 0);
      width: 100%;
      height: 100%;
    }

    &:active::after {
      transition: 0s;
      transform: translate(0, 5%);
    }

    a {
      text-decoration: none;
      font-weight: 700;
      color: white !important;
      font-size: 1rem;
      @media (max-width: 450px) {
        font-size: 0.8rem;
      }
    }

    &:first-child {
      &::before {
        background: #af0505;
      }
    }
    &:nth-child(2) {
      &::before {
        background: #0508af;
      }
    }
    &:last-child {
      &::before {
        background: #383433;
      }
    }
  }
`;
