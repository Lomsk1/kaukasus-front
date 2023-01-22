import styled from "styled-components";

export const Header = styled.div`
  min-height: 100vh;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url("https://ichef.bbci.co.uk/images/ic/1200x675/p01lymgh.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1070px) {
    justify-content: center;
    padding-bottom: 2em;
    padding-top: 2em;
  }

  h1 {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    width: fit-content;
    /* transform: translate(-5em, 2em);
    @media (max-width: 1500px) {
      transform: translate(-5em, 2em);
    } */
    @media (max-width: 1070px) {
      display: none;
    }
    /* align-self: flex-start; */
    /* transform: translate(-6em, 7em); */
    /* padding-left: 3em; */
    /* transform: translateY(7em); */
  }
`;

// export const Main = styled.div`
//   color: #fff;
//   text-transform: uppercase;
//   text-align: center;
//   min-height: 100vh;
//   height: max-content;

// `;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -100;
  opacity: 0.2;
`;
