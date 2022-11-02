import styled from "styled-components";

import img from "../../assets/images/Ushba-und-Elbrus.jpg";

function HeaderImg({ description }) {
  return (
    <Header>
      <h1>{description}</h1>
    </Header>
  );
}

export default HeaderImg;

const Header = styled.header`
  width: 100%;
  height: 40vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  h1 {
    font-size: 3.75rem;
    transform: translate(2em, 2em);
    width: 7em;
    color: white;
    height: 1rem;
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
