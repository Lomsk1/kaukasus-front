import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function SidebarLeft({ minimal }) {

  const navigate = useNavigate();

  const georgiaNav = () => {
    navigate("/Georgia");
  };
  const armeniaNav = () => {
    navigate("/Armenia");
  };
  const azerbaijanNav = () => {
    navigate("/Azerbaijan");
  };
  return (
    <Fragment>
      <SideBars>
        <LeftDivDown>
          <div onClick={georgiaNav}>
            <p>GEORGIEN</p>
          </div>
          <div onClick={armeniaNav}>
            <p>ARMENIEN</p>
          </div>
          <div onClick={azerbaijanNav}>
            <p>AZERBAIDSCHAN</p>
          </div>
        </LeftDivDown>
      </SideBars>
      {minimal && (
        <Mini>
          {/* <div className="close">
            <X />
            <X />
          </div> */}
          <LeftDivDown>
            <div onClick={georgiaNav}>
              <p>GEORGIEN</p>
            </div>
            <div onClick={armeniaNav}>
              <p>ARMENIEN</p>
            </div>
            <div onClick={azerbaijanNav}>
              <p>AZERBAIDSCHAN</p>
            </div>
          </LeftDivDown>
        </Mini>
      )}
    </Fragment>
  );
}

export default SidebarLeft;

const SideBars = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: inset 1px 0px 25px 21px rgba(255, 255, 255, 0.78);
  box-shadow: inset 1px 0px 25px 21px rgba(60, 188, 195, 0.1);

  @media (max-width: 1000px) {
    width: 30%;
    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const LeftDivDown = styled.div`
  width: 80%;
  height: max-content;
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div {
    width: 100%;
    height: 8rem;
    margin-top: 2em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
      width: 300px;
      height: 5rem;
    }
    & {
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
    }

    p {
      text-decoration: none;
      font-weight: 700;
      color: white;
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
      margin-top: 1em;
      &::before {
        background: #0508af;
      }
    }
     &:last-child {
      margin-top: 1em;
      &::before {
        background: #383433;
      }
    } 
  }
`;
const Mini = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  .close{
    width: 100%;
    height: 10%;
    background-color: brown;
    display: flex;
    justify-content: space-between;
    svg{
      width: 40px;
      height: 40px;
    }
  }
`;
