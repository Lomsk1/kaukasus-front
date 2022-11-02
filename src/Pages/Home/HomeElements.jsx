import styled from "styled-components";

export const Header = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.div`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -100;
  opacity: 0.2;
`;
