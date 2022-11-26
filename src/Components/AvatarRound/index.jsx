import styled from "styled-components";

function AvatarRound({ name, lastName, src, description }) {
  return (
    <MainDiv>
      <ImgDiv>
        <div>
          <img src={process.env.REACT_APP_BASE_URL + src} alt='img not found' />
        </div>
      </ImgDiv>
      <TextBox>
        <p>
          {name} {lastName}
        </p>
        <span>{description}</span>
      </TextBox>
    </MainDiv>
  );
}

export default AvatarRound;

const MainDiv = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;
const ImgDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  div {
    width: 75%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
const TextBox = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
  span {
    font-size: 1.0625rem;
  }
`;
