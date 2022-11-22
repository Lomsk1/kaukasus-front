import styled from "styled-components";

// import img from "../../assets/images/Ushba-und-Elbrus.jpg";

function HeaderImgStatic({ description, image }) {
  const divStyle = {
    // backgroundImage: `url('${image}}')`,
  };
  return (
    <Header style={divStyle}>
      <img src={image} alt="" />
      <h1>{description}</h1>
    </Header>
  );
}

export default HeaderImgStatic;

const Header = styled.header`
  width: 100%;
  height: 50vh;
  /* background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center; */
  display: flex;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -3;
    position: relative;
  }
  h1 {
    font-size: 3.75rem;
    transform: translate(2em, 2em);
    width: 7em;
    color: white;
    height: 1rem;
    position: absolute;
  }
  @media (max-width: 550px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;
