import styled from "styled-components";

// import img from "../../assets/images/Ushba-und-Elbrus.jpg";

function HeaderImg({ description, img }) {
  const divStyle = {
    backgroundImage: `url('${process.env.REACT_APP_BASE_URL + img}')`,
  };
  return (
    <Header style={divStyle}>
      <h1>{description}</h1>
    </Header>
  );
}

export default HeaderImg;

const Header = styled.header`
  width: 100%;
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    /* transform: translate(2em, 10rem); */
    width: fit-content;
    color: white;
    /* height: 1rem; */
    margin: 0;
    @media (max-width: 1200px) {
      display: none;
  }
  }

  @media (max-height: 800px) {
    h1 {
      transform: translate(2em, 1.5em);
    }
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 2.5rem;
      transform: translate(2em, 2em);
    }
  }
`;
