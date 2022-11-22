import styled from "styled-components";

export const Header = styled.div`
  min-height: 100vh;
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80);
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
